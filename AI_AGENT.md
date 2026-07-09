# AI Agent

AI Agent sẽ thực hiện:

```text
Prompt
↓
Planning
↓
Tool Calling
↓
Execution
↓
Review
↓
Result
```

## Vai trò

AI Agent là trung tâm điều phối của Sandbox CodeX, chịu trách nhiệm phân tích yêu cầu, lập kế hoạch, sinh mã, gọi công cụ, chạy kiểm thử và đề xuất bản vá.

## OpenClaw trong Eios

OpenClaw là AI Agent chính chịu trách nhiệm phân tích intent, tạo kiến trúc, sinh mã, chạy workflow trong sandbox, đọc log realtime, tự vá lỗi và chuẩn bị triển khai production. Vòng lặp vận hành mục tiêu là:

```text
Human Intent → LLM Planner → Code Generator → Workflow Runtime → Container + Infra → Deployment → Self-healing Debug Loop
```

Khi tích hợp OpenAI, OpenClaw nên gọi model qua backend Orchestrator và chỉ thao tác với workspace thông qua Tool Gateway có audit log, policy bảo mật, timeout và quyền hạn rõ ràng.
