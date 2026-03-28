---
id: arxiv2025-rlaa-anonymization
title: "Look Twice before You Leap: A Rational Agent Framework for Localized Adversarial Anonymization"
authors: [Donghang Duan, Xu Zheng, Yuefeng He, Chong Mu, Leyi Cai, Lizong Zhang]
venue: arXiv
venueType: preprint
year: 2025
status: preprint
isFirstAuthor: true
links:
  paper: "https://arxiv.org/abs/2512.06713"
  code: "https://github.com/SowingG2333/RLAA"
keywords: [LLM Safety, Privacy, Text Anonymization, Adversarial Framework]
featuredImage: "/images/publications/rlaa.png"
---
Current LLM-based frameworks for text anonymization usually rely on remote API services from powerful LLMs, which creates an inherent privacy paradox: users must disclose the raw data to untrusted third parties for guaranteed privacy preservation. Moreover, directly migrating current solutions to local small-scale models (LSMs) offers a suboptimal solution with severe utility collapse. Our work argues that this failure stems not merely from the capability deficits of LSMs, but significantly from the inherent irrationality of the greedy adversarial strategies employed by current state-of-the-art (SOTA) methods. To address this, we propose Rational Localized Adversarial Anonymization (RLAA), a fully localized and training-free framework featuring an Attacker-Arbitrator-Anonymizer architecture. We model the anonymization process as a tradeoff between Marginal Privacy Gain (MPG) and Marginal Utility Cost (MUC), demonstrating that greedy strategies tend to drift into an irrational state. Instead, RLAA introduces an arbitrator that acts as a rationality gatekeeper, validating the attacker’s inference to filter out ghost leaks. This mechanism promotes a rational early-stopping criterion, and structurally prevents utility collapse. Extensive experiments on different benchmarks demonstrate that RLAA achieves a superior privacy-utility trade-off compared to strong baselines.