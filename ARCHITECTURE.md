# Architecture

```text
Browser
↓
Frontend
↓
API Gateway
↓
AI Agent
↓
Sandbox Runtime
↓
Docker
↓
Linux Container
```

## Tổng quan

Sandbox CodeX được thiết kế theo kiến trúc nhiều lớp để tách biệt trải nghiệm người dùng, điều phối AI, runtime sandbox và hạ tầng triển khai.

## Tích hợp OpenAI Sandbox AI

Sandbox CodeX mở rộng kiến trúc lõi bằng OpenClaw Orchestrator, lớp OpenAI agent và Tool Gateway để biến yêu cầu người dùng thành workflow tự động trong sandbox. Thiết kế chi tiết nằm trong [`docs/OPENAI_SANDBOX_INTEGRATION.md`](docs/OPENAI_SANDBOX_INTEGRATION.md).

```text
Browser IDE / Chat UI
↓
OpenClaw Orchestrator API
↓
OpenAI Responses API / Agents SDK
↓
Tool Gateway
↓
Sandbox Runtime + Workflow Engine
↓
Build + Deploy + Self-healing Debug Loop
```
