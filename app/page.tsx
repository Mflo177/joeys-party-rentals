// import QuoteWidget from './components/QuoteWidget';
// import StickyBar from './components/StickyBar';

// export default function Home() {
//   return (
//     <>
//       <QuoteWidget />
//       <StickyBar />
//     </>
//   );
// }

import QuoteWidget from './components/QuoteWidget';
import StickyBar from './components/StickyBar';
import { client, urlFor } from '@/lib/sanity';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getHomePageData() {
  try {
    const homePage = await client.fetch(
      `*[_type == "homePage"][0] {
        quoteWidgetTitle,
        quoteWidgetSubtitle,
        rentalItems[] {
          name,
          price,
          image,
          enableQuickAdd,
          sortOrder
        } | order(sortOrder asc),
        serviceAreasText
      }`,
      {},
      { cache: 'no-store' }
    );

    if (!homePage) {
      return {
        title: 'Get Your Instant Quote',
        subtitle: 'Select your items and see the price in real-time',
        items: [],
        serviceAreasText: 'San Bernardino • Riverside • Fontana',
      };
    }

    // Format items for quote widget
    const items = homePage.rentalItems?.map((item: any, index: number) => ({
      id: `item-${index}`,
      name: item.name,
      price: item.price,
      quantity: 0,
      image: item.image ? urlFor(item.image).width(80).url() : null,
      enableQuickAdd: item.enableQuickAdd || false,
    })) || [];

    return {
      title: homePage.quoteWidgetTitle,
      subtitle: homePage.quoteWidgetSubtitle,
      items,
      serviceAreasText: homePage.serviceAreasText,
    };
  } catch (error) {
    console.error('Error fetching home page data:', error);
    return {
      title: 'Get Your Instant Quote',
      subtitle: 'Select your items and see the price in real-time',
      items: [],
      serviceAreasText: 'San Bernardino • Riverside • Fontana',
    };
  }
}

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <>
      <QuoteWidget 
        title={homePageData.title}
        subtitle={homePageData.subtitle}
        initialItems={homePageData.items}
        serviceAreasText={homePageData.serviceAreasText}
      />
      <StickyBar />
    </>
  );
}