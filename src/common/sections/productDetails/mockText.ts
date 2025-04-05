import type { BlocksContent } from '@strapi/blocks-react-renderer';

const mockContent: BlocksContent = [
  {
    type: 'heading',
    level: 2,
    children: [
      {
        type: 'text',
        text: 'Avantajele motorului cu trei cilindri, cea mai mare putere și cele mai bune dotări din această clasă, confort și versatilitate – toate la un preț competitiv.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Triumph Tiger Sport 660 e conceput să asigure plimbările perfecte de zi cu zi, în cazul mersului la muncă, pilotajului în oraș sau în cazul turelor de weekend. Caracteristicile motorului sunt cele care diferențiază acest model în categoria sport adventure de cilindree medie: sportivitate în echilibru perfect cu cuplul în zona turațiilor joase și cu puterea entuziasmantă din zona turațiilor ridicate.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'E un model capabil, cu o manevrabilitate ce inspiră încredere imediată, stilul dinamic și distinct se remarcă de la distanță, iar de aproape poate fi apreciată atenția la detalii. Tiger Sport 660 e echipat cu accelerație ride-by-wire pentru răspuns delicat la rotirea manșonului, cutia de viteze cu 6 strepte e optimizată pentru distracție și pilotaj sportiv. Ambreiajul e asistat cu alunecare controlată, acționarea levierului fiind foarte ușoară, un bonus în traficul urban. Pe această motocicletă se poate monta și quickshiter (accesoriu opțional), schimbările treptelor făcându-se în acest caz fără acționarea ambreiajului, la orice turație. ',
      },
    ],
  },
  {
    type: 'quote',
    children: [
      {
        type: 'text',
        text: 'Triumph Tiger Sport 660 e conceput să asigure plimbările perfecte de zi cu zi.',
      },
    ],
  },
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [
          {
            type: 'text',
            text: 'Cutie de viteze cu 6 trepte optimizată pentru distracție',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'text',
            text: 'Ambreiaj asistat cu alunecare controlată',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'text',
            text: 'Quickshifter opțional pentru schimbări fără ambreiaj',
          },
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Distinct este și sunetul motorului de 660 cmc cu trei cilindri care îndeplinește normele Euro 5, evacuarea minimalistă, scurtă, e amplasată sub motor pentru un centru de greutate coborât și agilitate sporită. Tiger Sport 660 poate fi limitat foarte ușor pentru a fi condus de posesorii permisului categoria A2.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'La suplețea sa contribuie și ghidonul din aluminiu cu secțiune variabilă, șaua e practică și confortabilă, mânerele pentru pasager fiind dotare standard. Suspensia frontală e asigurată de o furcă inversată Showa cu o cursă de 150 mm, pe spate este un monoamortizor Showa ce permite setări pe preîncărcare atât pentru pilotaj sportiv singur, cât și pentru călătorii relaxante cu pasager.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Jantele din aliaj pe 17 inch cu 5 brațe sunt echipate cu pneurile Michelin Pilot Road 5, iar de frânare se ocupă etrierele Nissin și discurile duble cu diametrul de 310 mm. Sistemele ABS și TC (decuplabil) sunt dotări standard și contribuie la siguranța și plăcerea pilotajului. Pe bord este un ecran multifuncțional nou, cele două moduri de pilotaj disponibile (Road și Rain) au fiecare proriile setări pentru modul de răspuns al accelarației și de intervenție al sistemului de control al tracțiunii. Parbrizul se poate regla cu o singură mână, carenajul are forme sculpturale ce combină funcția practică cu aspectul modern. Rezervorul cu capacitatea de 17 litri asigură o autonomie sporită, gențile ce figurează în catalogul accesoriilor se integrează estetic în linia codiției, fără a fi nevoie de suporturi suplimentare.',
      },
    ],
  },
  {
    type: 'code',
    children: [
      {
        type: 'text',
        text: 'Suspensie: Showa\nFrâne: Nissin, discuri 310mm\nModuri: Road, Rain',
        code: true,
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        type: 'text',
        text: 'Mai multe detalii pe ',
      },
      {
        type: 'link',
        url: 'https://www.triumphmotorcycles.ro/',
        children: [
          {
            type: 'text',
            text: 'triumphmotorcycles.ro',
          },
        ],
      },
      {
        type: 'text',
        text: '.',
      },
    ],
  },
  {
    type: 'image',
    image: {
      name: 'tiger.jpg',
      alternativeText: 'Tiger Sport 660',
      url: 'https://motocicletetriumph.ro/wp-content/uploads/2024/11/2025-triumph-tiger-sport-660-sapphire-black_lhs-rear-angle.webp',
      caption: 'Tiger Sport 660',
      width: 800,
      height: 600,
      formats: {},
      hash: 'tiger-sport-660',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: 120,
      provider: 'local',
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
    children: [
      {
        type: 'text',
        text: '',
      },
    ],
  },
];

export default mockContent;
