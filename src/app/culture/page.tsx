export default function CulturePage() {
  // Sample tea culture sections
  const cultureSections = [
    {
      id: "history",
      title: "History of Tea",
      content: `Chinese tea culture has a history spanning over five thousand years. According to legend, Shennong discovered tea's medicinal properties by chance while tasting various herbs. In the Han Dynasty, tea was used as medicine.
        By the Tang Dynasty, Lu Yu wrote the world's first tea monograph, "The Classic of Tea," systematically summarizing the cultivation, production, and consumption of Chinese tea before the Tang Dynasty.
        He is known as the "Sage of Tea." In the Song Dynasty, tea drinking became even more popular, featuring a distinctive tea preparation method called "whisked tea." In the Yuan Dynasty, loose tea replaced compressed tea cakes. In the Ming Dynasty, 
        tea production techniques had breakthrough developments, producing various famous teas. In the Qing Dynasty, tea culture became even more prosperous, with tea drinking customs deeply rooted among the common people.`
    },
    {
      id: "ceremony",
      title: "Tea Ceremony and Tea Art",
      content: `Chinese tea ceremony is a living art that integrates Confucian, Taoist, and Zen philosophies, pursuing a spiritual realm of "harmony, respect, purity, and tranquility." 
        The tea ceremony is not just a way of drinking tea but also a lifestyle and aesthetic expression. Chinese tea art emphasizes the harmony of environment, teaware, water quality, and brewing techniques
        to achieve perfect color, aroma, taste, and form. Different types of tea have different brewing methods, such as the "high pour, low serve" for green tea, the "Gongfu tea" brewing technique for 
        oolong tea, and the "tea washing" procedure for Pu-erh tea. Tea ceremony performances are an important part of Chinese tea culture, showcasing the cultural connotations and aesthetic value of tea
        through elegant movements, exquisite teaware, and soft music.`
    },
    {
      id: "utensils",
      title: "Teaware Culture",
      content: `Teaware is the physical carrier of tea culture as well as works of art. Traditional Chinese teaware mainly includes pots, cups, plates, spoons, clips, needles, and measures. Different teas are suited to different materials of teaware,
        such as glass or white porcelain for green tea, purple clay pots for oolong tea, and purple clay or rough pottery for Pu-erh tea. The purple clay pot is a representative of traditional Chinese teaware, produced in Yixing, Jiangsu,
        and beloved by tea enthusiasts for its good permeability and ability to preserve tea aroma. Porcelain teaware is represented by Jingdezhen porcelain, known for its characteristics of being "white as jade, bright as a mirror, thin as paper, and sound like a chime."
        Auxiliary teaware such as tea trays, fairness cups, and tea ceremony sets also have their own characteristics, together forming a rich and diverse teaware culture.`
    },
    {
      id: "types",
      title: "Six Major Tea Categories",
      content: `Chinese tea can be divided into six major categories according to processing techniques: green tea, black tea, oolong tea, white tea, yellow tea, and dark tea. Green tea, represented by Longjing, Biluochun, and Huangshan Maofeng,
        is characterized by preserving the natural substances in tea leaves, with a green color and fresh taste. Black tea, represented by Keemun black tea and Yunnan black tea, is characterized by its red color and mellow taste.
        Oolong tea, represented by Tieguanyin and Da Hong Pao, has a unique "rock rhyme." White tea, represented by Silver Needle and White Peony, is characterized by intact buds and white color.
        Yellow tea, represented by Junshan Silver Needle and Mengding Yellow Bud, has the characteristic of "yellow soup and yellow leaves." Dark tea, represented by Pu-erh tea and Liu Bao tea, undergoes post-fermentation and has a unique aged aroma.`
    },
    {
      id: "health",
      title: "Tea and Health",
      content: `Tea contains various components such as tea polyphenols, caffeine, theanine, and vitamins, offering multiple health benefits. Modern scientific research has proven that drinking tea in moderation has various effects like
        antioxidation, delaying aging, lowering blood lipids, lowering blood pressure, preventing cancer, protecting against radiation, and aiding in weight loss and fitness. However, attention should be paid to tea drinking methods,
        such as avoiding strong tea on an empty stomach, avoiding strong tea before bedtime, and avoiding excessively hot tea. People with different constitutions are suited to different teas, such as those with cold constitutions being
        suited to warm teas like black tea and Pu-erh tea, while those with hot constitutions are suited to cool teas like green tea and white tea. Traditional Chinese medicine theory holds that tea is sweet, bitter, and cold in nature,
        with effects such as clearing the mind and brightening the eyes, generating fluids and quenching thirst, aiding digestion, and resolving phlegm.`
    },
    {
      id: "quotes",
      title: "Tea in Literature and Art",
      content: `Tea culture is inseparably linked with literature and art. The Tang Dynasty's "The Classic of Tea" by Lu Yu is considered a classic work of tea studies. Song Dynasty literati like Su Shi and Huang Tingjian wrote poems about tea,
        such as Su Shi's "Looking closely at tea buds, as tender as a newborn calf." Yuan Dynasty dramas also include descriptions of tea, such as Guan Hanqing's "Rescuing a Fallen Soul" with "a cup of fragrant tea, two or three pastries."
        Ming and Qing novels have richer descriptions of tea culture, such as "Dream of the Red Chamber" with "Three springs compete with early spring scenery, rich green new shoots good for tasting tea." In modern literature, tea culture
        is also an important theme, such as Lao She's "Teahouse." In addition, tea culture is closely related to other art forms such as painting, music, and dance, together forming a rich and colorful tea culture art.`
    }
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 text-center">Chinese Tea Culture</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Tea is not just a beverage, but an important part of traditional Chinese culture, carrying rich historical, philosophical, and aesthetic connotations.
        </p>

        {/* Hero image section */}
        <div className="relative h-80 mb-16 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gray-200"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-2xl text-green-800 font-medium mb-4">
                "Tea is the finest tree of the south." — Lu Yu, "The Classic of Tea"
              </p>
              <p className="text-green-700">
                Tea is the finest tree of the south.
              </p>
            </div>
          </div>
        </div>

        {/* Culture sections */}
        <div className="space-y-16">
          {cultureSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold text-green-700">{section.title}</h2>
                </div>
                <div className="md:col-span-3">
                  <div className="prose prose-green max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Tea quotes */}
        <div className="mt-20 bg-green-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">Selected Tea Poems Throughout History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <p className="text-gray-700 mb-4">
                "At high noon when sleep is deepest, the general knocks at the gate, startling the Duke of Zhou in my dream.
                <br />
                Returning to my dream after drinking tea, with a bowl as pillow on the square bed, the wooden pillow is cold."
              </p>
              <p className="text-right text-green-700">— Lu Yu, "Waking from Sleep"</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <p className="text-gray-700 mb-4">
                "Blue clouds draw the wind to scatter flowers, fine rain brings mist to encircle the green hawthorn.
                <br />
                Tea speaks softly as fragrance passes subtly, a spring branch enters the house of tea."
              </p>
              <p className="text-right text-green-700">— Bai Juyi, "Gifting Tea to Liu Fang"</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 