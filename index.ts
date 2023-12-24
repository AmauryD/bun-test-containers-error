import { GenericContainer } from "testcontainers";

await new GenericContainer("redis")
      .withExposedPorts(6379)
      .start();