import { Container } from "@/components/header/container";
import Image from "next/image";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";

async function getDailyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`
    );

    return res.json;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();

  console.log(dailyGame);

  return (
    <main className="flex">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image
              src={dailyGame.image_url}
              alt={dailyGame.title}
              priority={true}
              quality={100}
              width={100}
              height={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  );
}
