# Module Dependencies

- 02 Dashboard ← 01 (org/property), 03 (beds), 05 (finance)
- 03 Property & Beds ← 01
- 04 Residents ← 01, 03
- 05 Finance ← 01, 03, 04
- 06 Operations ← 01, 04
- 07 Communication ← 04, 05
- 08 Reports ← 05 (+03, 04 history)
- 09 AI ← 05, 06, 08
- 10 SysAdmin ← 01

Sequencing rationale: finance must never precede resident/bed sources of truth; AI sits last because it reads authorized data only.
