---
title: Distributed Real-Time Web Chat
category: web-app
date: 2025-04-20
tags: [Python, Flask, Flask-SocketIO, ZeroMQ, Docker, WebSocket]
link: "https://github.com/SowingG2333/web-chat"
isOpenSource: true
badge: "Distributed chat system"
featured: true
---

Distributed real-time chat system built with Flask, Socket.IO, and ZeroMQ, supporting multi-server deployment, text messaging, and voice messaging.

## Highlights

- Uses a two-layer architecture with Socket.IO for client communication and ZeroMQ PUB-SUB for cross-server synchronization.
- Supports real-time text chat, voice messages, online user state, and message history across multiple server instances.
- Includes Docker and Docker Compose friendly deployment patterns for running the system across multiple containers.
