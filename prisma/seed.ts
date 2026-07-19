import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.demoNotice.upsert({
    where: { internalKey: "foundations-placeholder" },
    update: {},
    create: {
      internalKey: "foundations-placeholder",
      title: "Demo content",
      description:
        "Placeholder data for local development. Not official GuildRun data.",
      classification: "PLACEHOLDER",
    },
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error("Database seed failed", error);
    await prisma.$disconnect();
    process.exit(1);
  });
