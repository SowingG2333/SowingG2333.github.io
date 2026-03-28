---
id: ipccc2025-free-rider-elimination
title: "Exploiting Parasitic Dependency for Free-Rider Elimination in Blockchain-based Federated Learning"
authors: [Donghang Duan, Xu Zheng, Yifu Zheng, Chong Mu, Ruozhou Wang, Ke Yan]
venue: IEEE IPCCC
venueType: conference
year: 2025
status: published
isFirstAuthor: true
links:
  paper: "https://ieeexplore.ieee.org/abstract/document/11304677"
keywords: [Blockchain, Federated Learning, Free-Rider Attack, Distributed Systems]
featuredImage: "/images/publications/bflgr.png"
---
Blockchain-based Federated Learning (BFL) facilitates collaborative model training with guaranteed transparency and accountability across distributed participants. However, BFL encounters a critical security vulnerability: advanced free-riders can exploit the public on-chain model histories to synthesize fabricated gradients without performing actual local training, which is indistinguishable from legitimate contributions. Previous efforts to defense free-rider attack mostly focus on anomaly detection, but they struggle to detect some advanced free-riders. To address this fundamental challenge, we propose BFLGR (Blockchain-based Federated Learning with Gresham’s Reversal), which is a novel framework integrating reverse auction mechanisms and a dynamic reputation system. BFLGR employs a dynamic selection algorithm that can eliminate advanced free-riders by exploiting their profit-seeking motives and parasitic dependency on honest participants’ contributions. This framework ensures genuine contributions prevail over deceptive submissions, and achieves a paradigmatic shift in BFL security, transforming the transparency-exploitation vulnerability into a strategic advantage for detecting and eliminating malicious participants. Theoretical proofs and extensive experiments show that BFLGR performs well in advanced free-rider attack situation and outperforms our baselines.