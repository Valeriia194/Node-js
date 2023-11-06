import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
//impport img
import img from "@/img/kha.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='taskOne'>
        TASK 1, 2 <br /> <br />
        <h1>Харків</h1>
        <Image src={img} width={100} height={100} alt='k'/>
        {/* <span className='imgOne'></span> */}
        <h3>Ха́рків — місто в Україні. Розташований на північному сході України, Слобожанщині, науковий центр України, адміністративний центр Харківської області. Друге за кількістю мешканців місто України з населенням 1 421 125 осіб. Площа міста — 350 км². Разом із прилеглими містами та районами утворює Харківську агломерацію з людністю понад 2 млн осіб. Місто-герой України (з 2022 року).

Великий науковий, культурний, промисловий і транспортний осередок України, був третім індустріальним центром у колишньому СРСР. 60 науково-дослідних інститутів, 41 вищий навчальний заклад, серед яких ХНУ імені В. Н. Каразіна, який входить до найкращих 500 ВНЗ світу та НТУ «ХПІ», який входить до найкращих 1000, 8 музеїв, міська картинна галерея, 7 державних театрів і кілька десятків недержавних, 80 бібліотек.

Володіє повним комплектом нагород Ради Європи: Європейським Дипломом, Почесним Прапором, Почесною Відзнакою і Призом Європи.

6 березня 2022 року Указом Президента України з метою відзначення подвигу, масового героїзму та стійкості громадян, виявлених у захисті своїх міст під час відсічі збройної агресії Російської Федерації проти України місту присвоєно почесну відзнаку «Місто-герой України»</h3>
        </div>

       <div className='taskTwo'>
        Task 3,4
        <h1>Герман Гессе "Сиддхартха"</h1>
        <h2>Автор: Герман Гессе<br />Назва: Сіддхартха <br />Жанр: алегорічний роман <br />Дата публікації: 1922 рік</h2>
        <h3>Короткий опис: <br />  Аллегорический роман-притча Германа Гессе, впервые был опубликован в берлинском издательстве S. Fischer Verlag в 1922 году. лавные герои - юный брахман Сиддхартха и его близкий товарищ Говинда. Они посвящают свою жизнь поиску Атмана. Атман - одно из ключевых понятий индийской философии и индуизма. Это вечная сущность, высшее "Я", которое есть в каждом человеке и у всех живых существ в принципе.</h3>

       </div>








        {/* <Link href="/about">About</Link>
        <a href="/about">About</a> */}
      </main>
    </>
  )
}
