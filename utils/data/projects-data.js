export const projectsData = [
    {
        id: 1,
        name: 'Placement Portal',
        tools: ['React', 'FastAPI', 'Azure VMs', 'Vercel CDN', 'MongoDB', 'Redis', 'GitHub Actions'],
        role: 'Full Stack Engineer',
        demo: 'https://placement-portal-liard.vercel.app/',
        code: 'https://github.com/SiddharthKarmokar/placement-portal',
        description: 'Engineered a full-stack platform using FastAPI and React (Vite), delivering modular, role-based admin and student workflows. Architected secure cloud infrastructure on Azure VMs running hardened Fedora Linux, utilizing Nginx TLS proxies and MinIO, with frontend edge delivery optimized via Vercel CDN. Optimized data architecture by integrating Redis caching, bidirectional Google Sheets synchronization, and self-hosted MongoDB.'
    },
    {
        id: 2,
        name: 'Hooked',
        tools: ['FastAPI', 'MongoDB', 'LangChain', 'AWS ECS', 'AWS S3', 'Gemini 2.0'],
        role: 'DevOps & Backend',
        demo: '',
        code: 'https://github.com/SiddharthKarmokar/hooked-app',
        description: 'Developed a microlearning platform using Perplexity Sonar Pro API, serving 100+ hooks. Implemented a FastAPI backend with 4 MongoDB collections and S3 for media. Integrated LangChain + Gemini 2.0 to generate 3+ visuals per hook, and deployed 2 services on AWS ECS/Fargate with ECR, ALB, and CI/CD.'
    },
    // {
    //     id: 3,
    //     name: 'Golang E-Commerce Microservices',
    //     tools: ['Golang', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'CQRS', 'Testcontainers'],
    //     role: 'Backend Developer',
    //     demo: '',
    //     code: 'https://github.com/SiddharthKarmokar/go-shop-microservices',
    //     description: 'Architected a distributed system using Vertical Slice Architecture and CQRS, decoupling business logic across domains using Golang and go-mediatr. Designed an Event-Driven Architecture utilizing RabbitMQ for asynchronous messaging and gRPC for internal service communication. Secured RESTful APIs with OAuth2, managing consistent state in PostgreSQL.'
    // },
    {
        id: 3,
        name: 'Golang Food Delivery Microservices',
        tools: ['Golang', 'Terraform', 'AWS', 'GCP', 'Prometheus', 'OpenTelemetry', 'RabbitMQ'],
        role: 'Backend Developer',
        demo: '',
        code: 'https://github.com/SiddharthKarmokar/go-food-delivery-microservices/',
        description: 'Automated multi-cloud infrastructure provisioning across AWS (EC2, VPC) and GCP (Compute Engine) using Terraform, managing robust container deployments via Docker Compose. Implemented end-to-end observability and distributed tracing pipelines using OpenTelemetry, Prometheus, Grafana, Jaeger, and Zipkin. Designed resilient event-driven systems utilizing RabbitMQ.'
    },
    {
        id: 4,
        name: 'Multi-AI-Agent Systems with CrewAI',
        tools: ['CrewAI', 'RAG', 'Agentic AI', 'Python', 'FastAPI'],
        role: 'AI Engineer',
        demo: '',
        code: 'https://github.com/SiddharthKarmokar/MultiAgentSystems',
        description: 'Built a multi-agent AI framework using CrewAI to automate complex business workflows through autonomous, role-based agents. Designed collaborative agents with specialized roles, goals, memory, and tools to perform multi-step tasks. Integrated tool-enabled agents with web search, RAG, and custom tools, enabling intelligent decision-making and contextual reasoning.'
    },
    {
        id: 5,
        name: 'NodeJS E-Commerce Microservices',
        tools: ['Node.js', 'React', 'RabbitMQ', 'Nginx', 'Docker', 'MongoDB', 'Jest'],
        role: 'Full Stack Engineer',
        demo: '',
        code: 'https://github.com/SiddharthKarmokar/eCommerce-micro-service',
        description: 'Engineered a distributed e-commerce platform with a React/Redux frontend and a modular Node.js/Express backend, containerized via Docker for consistent multi-environment deployment. Designed an API Gateway using Nginx for unified request routing, decoupling backend services via RabbitMQ for fault-tolerant asynchronous communication.'
    },
    // {
    //     id: 7,
    //     name: 'NodeJS Ticketing Microservices',
    //     tools: ['Kubernetes', 'AWS EC2', 'ELB', 'NATS', 'Docker', 'Skaffold', 'CI/CD'],
    //     role: 'DevOps & Backend Engineer',
    //     demo: '',
    //     code: 'https://github.com/SiddharthKarmokar/ticketing-microservice',
    //     description: 'Containerized microservices using Docker and orchestrated highly available deployments via Kubernetes on AWS EC2 instances configured with Elastic Load Balancing (ELB). Designed a scalable event-driven architecture using NATS Streaming for asynchronous publish/subscribe inter-service communication. Integrated Skaffold to streamline local development and establish automated CI/CD pipelines.'
    // }
];