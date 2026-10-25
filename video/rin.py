#!/usr/bin/env python3
"""
Rinomina i file video secondo la numerazione definitiva.

Serve THIS_files.csv nella stessa cartella (colonne nome_attuale e nome_file).

Uso:
    python3 rinomina.py           mostra cosa farebbe, senza toccare nulla
    python3 rinomina.py --vai     esegue

Funziona sia nella cartella dei sorgenti sia dentro loops/.
Riconosce i nomi con qualunque numerazione precedente.
"""
import os, re, sys, csv, unicodedata

ALIAS = {
    "THIS26-012_prada_celebrity_preshow_fw26_A.mp4": "THIS26-012_prada_celebrity_preshow_A.mp4",
    "THIS26-012_prada_celebrity_preshow_fw26_B.mp4": "THIS26-012_prada_celebrity_preshow_B.mp4",
    "THIS26-012_prada_celebrity_preshow_fw26_C.mp4": "THIS26-012_prada_celebrity_preshow_C.mp4",
    "THIS26-012_prada_prada-celebrities-arrival_ss27_m_D.mp4": "THIS26-012_prada_celebrity_preshow_ss27_m_D.mp4",
}


def norm(name):
    name = unicodedata.normalize("NFKD", name)
    name = "".join(c for c in name if not unicodedata.combining(c))
    base = re.sub(r"(\.(mp4|mov))+$", "", name, flags=re.I)
    m = re.match(r"^THIS\d{2}-\d{3}[_-]([A-Z])[_-](.*)$", base)
    if m:
        letter, rest = m.group(1), m.group(2)
    else:
        m2 = re.match(r"^THIS\d{2}-\d{3}[_-](.*)$", base)
        letter, rest = "", (m2.group(1) if m2 else base)
    m3 = re.match(r"^(.*)[_-]([A-Z])$", rest)
    if m3 and not letter:
        rest, letter = m3.group(1), m3.group(2)
    return re.sub(r"[^a-z0-9]+", "", rest.lower()) + "|" + letter


here = os.path.dirname(os.path.abspath(__file__))
csv_path = None
for cand in (os.path.join(here, "THIS_files.csv"),
             os.path.join(here, "..", "THIS_files.csv")):
    if os.path.exists(cand):
        csv_path = cand
        break
if not csv_path:
    sys.exit("Manca THIS_files.csv (mettilo accanto a questo script).")

rows = list(csv.DictReader(open(csv_path, encoding="utf-8")))
by_sheet = {r["nome_attuale"]: r["nome_file"] for r in rows}

table, seen = {}, {}
for r in rows:
    for src in {r["nome_attuale"], r["nome_file"]}:
        k = norm(src)
        if k in seen and seen[k] != r["nome_file"]:
            table.pop(k, None)          # chiave ambigua: non si tocca
        else:
            seen[k] = r["nome_file"]
            table[k] = r["nome_file"]
for disk, sheet in ALIAS.items():
    if sheet in by_sheet:
        table[norm(disk)] = by_sheet[sheet]

vai = "--vai" in sys.argv
fatti, uguali, ignoti = 0, 0, []

for f in sorted(os.listdir(".")):
    if f.startswith(".") or not f.lower().endswith((".mp4", ".mov")):
        continue
    nuovo = table.get(norm(f))
    if not nuovo:
        ignoti.append(f)
        continue
    est = ".mov" if f.lower().endswith(".mov") else ".mp4"
    nuovo = os.path.splitext(nuovo)[0] + est
    if nuovo == f:
        uguali += 1
        continue
    if os.path.exists(nuovo):
        print("ESISTE GIA, salto:", nuovo)
        continue
    print(f, "->", nuovo)
    if vai:
        os.rename(f, nuovo)
    fatti += 1

print()
print(("rinominati:" if vai else "da rinominare:"), fatti, "| gia a posto:", uguali)
if ignoti:
    print("non riconosciuti (%d):" % len(ignoti))
    for f in ignoti:
        print("   ", f)
if not vai and fatti:
    print()
    print("Niente e stato toccato. Per eseguire:  python3 rinomina.py --vai")
