FROM oven/bun

WORKDIR /app

ADD src src
ADD package.json .
ADD tsconfig.json .
ADD bun.lockb .
RUN bun i
RUN bun test

CMD bun run dev
