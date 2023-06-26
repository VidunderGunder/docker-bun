FROM oven/bun

ADD src src
ADD package.json .
ADD tsconfig.json .
ADD bun.lockb .
RUN bun i
RUN bun test

CMD bun src/index.ts