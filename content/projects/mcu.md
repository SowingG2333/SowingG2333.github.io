---
title: ARM32 Single-Cycle MCU on BASYS3
category: tooling
date: 2025-08-11
tags: [Verilog, ARM32, FPGA, BASYS3, Computer Architecture]
link: "https://github.com/SowingG2333/MCU"
isOpenSource: true
badge: "ARM32 single-cycle core"
featured: true
---

Single-cycle 32-bit MCU inspired by ARM32/ARMv4-v5 instruction encoding and validated on a Digilent BASYS3 FPGA board.

## Highlights

- Implements a compact ARM-style instruction subset including arithmetic, memory access, branching, conditional execution, and NZCV flag control.
- Verified on real BASYS3 hardware by running a 64-element sorting task and observing execution through ILA probes.
- Separates decoder, conditional logic, datapath, memories, and board-level harnesses for easier architecture study and extension.
