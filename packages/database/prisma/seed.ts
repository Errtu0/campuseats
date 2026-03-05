import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seeding...')

  // 1. Clean the database (Optional: removes old data before seeding)
  await prisma.user.deleteMany()

  // 2. Create Sample Users
  const user1 = await prisma.user.upsert({
    where: { email: 'student@campus.edu' },
    update: {},
    create: {
      email: 'student@campus.edu',
      name: 'Test Student',
    },
  })

  // 3. Add more models here (Restaurants, Meals, etc.) 
  // Example: 
  // await prisma.restaurant.create({ data: { name: 'Campus Bistro', location: 'Section A' } })

  console.log(`✅ Seeding finished. Created user: ${user1.email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })