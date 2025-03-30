import React, { useState } from 'react'
import { BsBasket } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import s1 from '../../assets/gulasyl/скидки.webp'
import s2 from '../../assets/gulasyl/s2.webp'
import s4 from '../../assets/gulasyl/кар.webp'
import s5 from '../../assets/gulasyl/s5.webp'
import s6 from '../../assets/gulasyl/шик.webp'
import s7 from '../../assets/gulasyl/s7.webp'
import s8 from '../../assets/gulasyl/s8.webp'
import s9 from '../../assets/gulasyl/s9.webp'
import s10 from '../../assets/gulasyl/s10.webp'
import s11 from '../../assets/gulasyl/s11.webp'
import s12 from '../../assets/gulasyl/s12.webp'
import s13 from '../../assets/gulasyl/s13.webp'
import s14 from '../../assets/gulasyl/bele.webp'
import s15 from '../../assets/gulasyl/music.webp'
import s16 from '../../assets/gulasyl/balzam.webp'
import s17 from '../../assets/gulasyl/vitam.webp'
import s18 from '../../assets/gulasyl/shamp.webp'
import s19 from '../../assets/gulasyl/massaj.webp'
import s20 from '../../assets/gulasyl/pled.webp'
import s21 from '../../assets/gulasyl/sergi.webp'
import s22 from '../../assets/gulasyl/lip.webp'
import s3Alt from '../../assets/gulasyl/s3.webp'
import s5Alt from '../../assets/gulasyl/s5alt.webp'
import s6Alt from '../../assets/gulasyl/шик2.webp'
import s7Alt from '../../assets/gulasyl/s7alt.webp'
import s8Alt from '../../assets/gulasyl/s8alt.webp'
import s10Alt from '../../assets/gulasyl/s10alt.webp'
import s13Alt from '../../assets/gulasyl/s13alt.webp'
import s14Alt from '../../assets/gulasyl/bele2.webp'
import s15Alt from '../../assets/gulasyl/s15alt.webp'
import s16Alt from '../../assets/gulasyl/balzam2.webp'
import s17Alt from '../../assets/gulasyl/vitam2.webp'
import s18Alt from '../../assets/gulasyl/shamp2.webp'
import s19Alt from '../../assets/gulasyl/massaj2.webp'
import s20Alt from '../../assets/gulasyl/pled2.webp'
import s21Alt from '../../assets/gulasyl/sergi2.webp'
import Disco from './Disco'
export default function Discount() {
  const [imageHovered, setImageHovered] = useState(null);
  const handleMouseEnter = (id) => setImageHovered(id);
  const handleMouseLeave = () => setImageHovered(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const every = [
    { id: '1', title: 'ANY BUDDY Healthy sip', title2:`артикул: 19000341152

Основные компоненты:
Мальтодекстрин — 5,3 г
Витамин С — 100 мг
Концентрат лимона — 200 мг
Экстракт корневищ имбиря — 100 мкг
Полный перечень компонентов смотри во вкладке «состав».

Окей, все мы знаем о том, как важно пить много воды. Но в курсе ли ты, что она может работать в разы эффективнее?
Добавь этот порошок в бутылку и ты получишь настоящий детокс эликсир, который улучшит работу кишечника, ускорит метаболизм и процесс выведения токсинов из организма.
А теперь представь, что это стало твоей рутиной, и через пару месяцев ты уже видишь, как один за другим эти глоточки – оп – и запустили волну реального обновления.

Как помогает организму?
— Улучшает работу кишечника
— Помогает регулировать уровень сахара в крови
— Способствует снижению уровня холестерина
— Помогает организму в выведении токсинов
— Укрепляет иммунитет
— Помогает (способствует) коррекции веса
— Предоставляет антиоксидантную защиту
— Положительно влияет на состояние кожи

Биологически активная добавка. Не является лекарственным препаратом. Перед применением необходимо проконсультироваться с врачом.

ТИП ПРОДУКТА : сухие смеси
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : детокс
ОСНОВНОЙ КОМПОНЕНТ : витамин c
ФОРМА ВЫПУСКА : сухие смеси
ТИП ПРЕПАРАТА : поликомпонентный`, category: 'Детокс-напиток на каждый день', price: '3 000 ₽', img: s2, imgAlt: s3Alt, discount: '40%' }
  ]
  const lips = [
    { id: '2', title: '3INA THE AUTOMATIC LIP PENCIL', title2:`артикул: 19760313785

Мягкий и стойкий карандаш для губ 3INA помогает создать четкий и аккуратный контур, чтобы подчеркнуть красоту ваших губ, а также легко растушевывается. Содержит масло жожоба, которое увлажняет кожу губ и обеспечивает гладкое и комфортное нанесение. Веганский продукт, не тестируется на животных.

ТИП ПРОДУКТА : карандаш для губ
ДЛЯ КОГО : женский
НАЗНАЧЕНИЕ : для губ, стойкость
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : губы
ТЕКСТУРА : твердая
ФИНИШ : плотный
ВЕС : 1.15 г`, category: 'Автоматический водостойкий карандаш для губ', price: '1 450 ₽', img: s22, discount: '20%' }
  ]
  const longsliv = [
    { id: '3', title: 'FIGURA Active Wear Alpine Skiing черный', title2:`артикул: 19000356733

Аккуратный базовый лонгслив из мягкого хлопка для комфортных повседневных образов. Свободный силуэт и спущенное плечо.Материал хорошо держит форму, а длинный рукав придает модели еще больший уют.

Обмеры изделия:
Длина изделия: S - 69 см, M - 71 см, L - 73 см.
Длина рукава: S - 78 см, M - 80 см, L - 82 см.

параметры модели:
на модели размер S
81/62/90
рост 177

таблица размеров:
размер | обхват груди
S | 104
M | 108
L | 112

ТИП ПРОДУКТА : лонгсливы
ДЛЯ КОГО : женский
МАТЕРИАЛ : хлопок`, category: 'Лонгслив', price: '12 500 ₽', img: s5, imgAlt: s5Alt, discount: 'new!' }
  ]
  const shik = [
    { id: '4', title: 'SHIK Hydrating emulsion', title2:`артикул: 19000067185
Легкая текстура эмульсии моментально впитывается, глубоко увлажняет и поддерживает оптимальный уровень РН кожи без эффекта липкости и утяжеления.
Продукт можно использовать 2 способами:
Самостоятельно поверх тонера — отличный вариант для жирной, комбинированной кожи и тех, кто любит максимально легкие текстуры.
В качестве промежуточного этапа между тонером и кремом — для нормальной и склонной к сухости кожи. Эмульсия также прекрасно подготавливает кожу к макияжу, делая кожу более мягкой и гладкой.

Полезные компоненты:
Ферментированные лактобактерии ускоряют процесс регенерации кожи, успокаивают и повышают кожный иммунитет.
Гиалуронат натрия — низкомолекулярная гиалуроновая кислота глубоко увлажняет и предотвращает потерю влаги.

ТИП ПРОДУКТА : эмульсия для лица
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : увлажнение, питание
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : лицо
ОБЪЕМ : 60 мл`, category: 'Увлажняющая эмульсия', price: '671 ₽', img: s6, imgAlt: s6Alt, discount: 'hit' }
  ]
  const pomidor = [
    { id: '5', title: 'BOUGIE Tomato', title2:`артикул: 99000018807

Свеча "Tomato" - это сочный помидор, который так и хочется укусить.
Она станет идеальным дополнением стола на ужине или просто изысканной деталью интерьера.
Осторожно, легко спутать с настоящим!

ТИП ПРОДУКТА : декоративные свечи
ДЛЯ КОГО : унисекс
МАТЕРИАЛ СВЕЧИ : соевый воск
ВЕС : 370 г
МАТЕРИАЛ : соевый воск, пальмовый воск`, category: 'Интерьерная свеча', price: '1600 ₽', img: s7, imgAlt: s7Alt, discount: '20%' }
  ]
  const clean = [
    { id: '6', title: 'Go Tapa Anti-Breakout Treatment pads', title2:`артикул: 19000305692

Для чего:
Чтобы избавиться от воспалений еще до их появления
Отшелушивающие диски обладают мощным антиакне-эффектом благодаря повышенной концентрации янтарной кислоты в их формуле. Разглаживают текстуру кожи, устраняют жирный блеск и очищают поры. Эссенция, насыщенная экстрактом центеллы, помогает быстро успокоить кожу. Надежное средство для точечного воздействия там, где это нужнее всего.

А что ещё?
- предотвращает появление акне
- выравнивают рельеф кожи
- очищают поры
- успокаивают кожу
- формула с уровнем pH 5.5
- тканевый материал из центеллы азиатской

Комплекс Trougenia — отшелушивает, успокаивает, восстанавливает
Гиалуронат натрия — увлажняет и предотвращает потерю влаг

ТИП ПРОДУКТА : пэды для лица
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : очищение, против несовершенств, против акне, выравнивание тона, успокаивающее
ТИП КОЖИ : для проблемной кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : лицо`, category: 'Очищающие пэды против несовершенств', price: '999 ₽', img: s8, imgAlt: s8Alt, discount: '+gift' }
  ]
  const avatar = [
    { id: '7', title: 'Good Smile Company Tokyo Revengers Takemichi Hanagaki', title2:`артикул: 19000289818

Фигурка POP UP PARADE Tokyo Revengers Takemichi Hanagaki по мотивам аниме "Токийские мстители".

Упаковка: картонный бокс.
Высота: 17 см.
Оригинальный и официально лицензированный продукт.

Такемичи Ханагаки, или Такемиччи- главный герой серии манги Токийские Мстители, а также её аниме адаптации. Узнав о смерти семьи Тачибана, в числе которых была его бывшая девушка Хината Тачибана, Такемичи совершает прыжок во времени ровно на двенадцать лет назад. Благодаря своей способности прыгать во времени, он узнает о печально известной банде Токийская Свастика.
Такемичи намерен работать с ним, чтобы спасти Хину от неблагоприятного будущего.

ТИП ПРОДУКТА : фигурки
МАЕРИАЛ : пластик`, category: 'Фигурка', price: '2 276 ₽', img: s9, discount: '60%' }
  ]
  const tush = [
    { id: '8', title: 'Clio Sharp, so simple', title2:`артикул: 19000197588

Тушь CLIO удлиняет и подчеркивает естественность ресниц, придавая им выразительность. Тонкая щеточка особой вихревой формы обволакивает, создавая эффект накладных ресниц.
Растительные протеины и комплекс из черных бобов, риса и кунжута ухаживают за ресницами, помогают укрепить их.
Тушь не размазывается, не осыпается в течение дня, наносится без комочков и легко смывается теплой водой.

ТИП ПРОДУКТА : тушь для ресниц
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : удлинение
ОБЛАСТЬ ПРИМЕНЕНИЯ : ресницы
ВЕС : 4`, category: 'Удлиняющая тушь для ресниц', price: '641 ₽', img: s10, imgAlt: s10Alt, discount: '+gift' }
  ]
  const mist = [
    { id: '9', title: 'Dr. Ceuracle Hyal Reyouth Oil Drop Mist', title2:`артикул: 19000261082

Увлажняющий мист на основе комплекса из 10 видов гиалуроновой кислоты и растительного сквалана наполняет кожу и создает влагоудерживающий барьер, препятствуя потере влаги.
Легкая текстура миста с небольшим содержанием масел создает защитный слой, обеспечивает глубокое и длительное увлажнение, устраняя чувство сухости и стянутости.
Растительные экстракты успокаивают кожу и снимают раздражение.

ТИП ПРОДУКТА : спреи и мисты для лица
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : увлажнение, восстановление, против признаков старения, разглаживание
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : лицо
ОБЪЕМ : 125 мл`, category: 'Мист для лица', price: '2 152 ₽', img: s11, discount: '28%' }
  ]
  const pial = [
    { id: '10', title: 'Odaryadarya Авокадо', title2:`артикул: 19000292033

Какой хорошенький зеленый акцент на вашем столе! Яркий и свежий, стильный и красивый. Ваши закуски заиграют новыми красками.
Рекомендуем!

Каждое изделие Odaryadarya изготовлено и расписано вручную, поэтому некоторые элементы дизайна и оттенки могут отличаться от фото.

ТИП ПРОДУКТА : пиала
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : для кухни
МАТЕРИАЛ : керамика
МОЖНО МЫТЬ В ПОСУДОМОЕЧНОЙ МАШИНЕ : да`, category: 'Пиала', price: '2 176 ₽', img: s12, discount: '15%' }
  ]
  const maska = [
    { id: '11', title: 'KORFF Essential Peel MICROPEELING MASK', title2:`артикул: 19000105634

Маска KORFF с миндальной кислотой и витамином PP деликатно отшелушивает кожу, делая её более гладкой и ровной, стимулирует глубокое восстановление и дарит оптимальное увлажнение.
Продукт удаляет загрязнения и уменьшает расширенные поры, а также увлажняет и успокаивает кожу благодаря содержанию натуральных растительных экстрактов. Средство помогает уменьшить несовершенства, улучшить тон кожи и усилить естественное сияние. Отшелушивающую маску с мягким и постепенным действием можно использовать в любое время года, утром и вечером.
Подходит для всех типов кожи.

ТИП ПРОДУКТА : маски для лица
ТИП МАСОК : гелевые
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : отшелушивание
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : лицо
ВЕС : 50 г`, category: 'Отшелушивающая и увлажняющая маска для лица', price: '2 060 ₽', img: s13, imgAlt: s13Alt,  discount: '40%' }
  ]
  const bele = [
    { id: '12', title: 'Wellery Апельсин', title2:`артикул: 19000325824

Кондиционер для белья «wellery ecoexpert аромамягкость с эфирным маслом сладкого апельсина».
Формула на основе растительного происхождения.
Придаст вашему белью исключительную мягкость и солнечный цитрусовый аромат, который напомнит вам о беззаботном летнем дне.
Эфирное масло апельсина, традиционно используется в ароматерапии, улучшает настроение и концентрацию внимания.

ТИП ПРОДУКТА : кондиционеры и ополаскиватели для белья
НАЗНАЧЕНИЕ : для стирки
ФОРМА ВЫПУСКА : жидкость
ОБЪЕМ : 1 л`, category: 'Кондиционер для белья', price: '212 ₽', img: s14, imgAlt: s14Alt,  discount: '44%' }
  ]
  const music = [
    { id: '13', title: '(G)I-DLE 6th Mini Album I feel Random Ver.', title2:`артикул: 19000332741

Альбом (G)I-DLE 6th Mini Album I feel в 1 случайной версии из 3.

НАПОЛНЕНИЕ : фотобук (100 стр., для 2 версий из 3) или игральные карты (54 шт., для 1 версии из 3), лирика, CD-R, случайная фотокарта (1 шт. из 5), случайный полароид (1 шт. из 5), случайный мини-постер (1 шт. из 5).
ТИП ПРОДУКТА : k-pop box`, category: 'Музыкальный альбом', price: '1 557 ₽', img: s15, imgAlt: s15Alt,  discount: '50%' }
  ]
  const balzam = [
    { id: '14', title: 'Belor Design Yummy Oasis Mint Lip Balm', title2: `артикул: 19000261002

Сочный питательный бальзам для губ Yummy Oasis, позаботится, вопреки любым погодным условиям! Мгновенно создает питательный защитный барьер, который предотвращает потерю влаги, сохраняя мягкость. Можно наслаждаться мягкими губами без трещинок и шелушений в непогоду, при занятии спортом и каждый день.

ТИП ПРОДУКТА : бальзам для губ
ДЛЯ КОГО : женский
НАЗНАЧЕНИЕ : для губ
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : губы
ТЕКСТУРА : кремовая
ФИНИШ : легкий
ОЮЪЕМ : 2.1 мл`, category: 'Бальзам для губ', price: '186 ₽', img: s16, imgAlt: s16Alt,  discount: '+gift' }
  ]
  const vitam = [
    { id: '15', title: 'SKINOLOGY VITAMIN C', title2:`артикул: 19000139713

Укрепляющая сыворотка от бренда SKINOLOGY на основе витамина С улучшает защитный барьер кожи, выравнивает тон, возвращает здоровое сияние, оказывает антиоксидантное действие. Увлажняющий комплекс способствует удержанию влаги в глубоких слоях эпидермиса, устраняет сухость и стянутость. Пантенол успокаивает, уменьшает раздражение, обеспечивает ощущение увлажненности и комфорта.

ТИП ПРОДУКТА : сыворотка для лица
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : восстановление, выравнивание тона, увлажнение, успокаивающее
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : лицо
ОБЪЕМ : 30 мл`, category: 'Укрепляющая сыворотка для лица', price: '1 414 ₽', img: s17, imgAlt: s17Alt,  discount: '60%' }
  ]
  const shamp = [
    { id: '16', title: 'SONO SILVER SHAMPOO', title2:`артикул: 19760321713

Шампунь SONO мягко очищает и увлажняет осветленные волосы любого типа. Он гарантирует не только идеальное очищение, но и заметное улучшение внешнего вида волос. Они становятся более мягкими, крепкими и блестящими, раскрывая всю красоту и сияние светлых оттенков и блонда. Результат – насыщенный благородный цвет и роскошные, ухоженные волосы. Профессиональный продукт.

ТИП ПРОДУКТА : шампунь
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : очищение, защита цвета
ТИП ВОЛОС : для осветленных волос, для окрашенных волос
ТИП КОЖИ : для всех типов кожи
ОБЛАСТЬ ПРИМЕНЕНИЯ : волосы
ОБЪЕМ : 250 мл`, category: 'Шампунь для осветленных волос', price: '1 443 ₽', img: s18, imgAlt: s18Alt,  discount: 'hit' }
  ]
  const massaj = [
    { id: '17', title: 'GESS Mini Revolver',title2:`артикул: 19000109100

Компактный и мощный перкуссионный массажер Mini Revolver для глубокой проработки мышц и мышечно-фасциального расслабления. Быстро избавляет от напряжения и боли благодаря пульсирующей массажной технике.
Массажер для тела снимает усталость в мышцах, облегчает боль, стимулирует кровоток и лимфоток, эффективно снимает спазмы, восстанавливает мышцы после тренировок и травм. Подходит всем: от профессиональных спортсменов до людей с сидячим образом жизни.
У массажного пистолета 10 режимов интенсивности и 4 вида насадок для разных групп мышц, простое управление, встроенный литиевый аккумулятор.
Круглая насадка — для любых групп мышц.
Насадка в виде вилки создана для глубокой проработки мышц вдоль позвоночника, шейно-плечевой зоны, спины и ног.
Плоская предназначена для быстрого разогрева всех частей тела.
Конусная идеальна для проработки триггерных точек.
гарантийный срок — 1 год.

ТИП ПРОДУКТА : массажер пистолет
ДЛЯ КОГО : унисекс
НАЗНАЧЕНИЕ : восстановление
ОБЛАСТЬ ПРИМЕНЕНИЯ : тело
ВИД МАССАЖЕРА : перкуссионый
ЭФФЕКТ : расслабляющий
МАТЕРИАЛ : пластик
ВОДОНЕПРАНИЦАЕМОСТЬ : да`, category: 'Массажный пистолет', price: '5 520 ₽', img: s19, imgAlt: s19Alt,  discount: '20%' }
  ]
  const pled = [
    { id: '18', title: 'SONNO Aesthetic, графитовый, евро', title2:`артикул: 19000329490

SONNO HOME заботится об окружающей среде, поэтому данный товар соответствует международному экологическому сертификату качества IS0 14024 и сертификату качества ISO 9001.
Такая сертификация гарантирует, что продукт является экологичным и безопасным для природы.
Товар произведен с минимальным воздействием на окружающую среду на протяжении всего жизненного цикла — от сырья до утилизации. SONNO HOME соблюдает строгие правила в отношении своих производственных процессов, материалов и воздействия на природу.

В комплект входит:
— пододеяльник, 1 шт
— простынь, 1 шт
— наволочки, 2 шт.

ТИП ПРОДУКТА : комплект постельного белья
РАЗМЕР КОМПЛЕКТА : евро
РАЗМЕР ПРОСТЫНИ : 215х240 см
РАЗМЕР ПОДОДЕЯЛЬНИКА : 200х220 см
РАЗМЕР НАВОЛОЧКИ : 50х70 см
ТИП ПРОСТЫНИ : без резинки
ЗАСТЯЖКА ПОДОДЕЯЛЬНИКА : молния
МАТЕРИАЛ : хлопок`, category: 'Комплект постельного белья', price: '7 943 ₽', img: s20, imgAlt: s20Alt,  discount: '31%' }
  ]
  const sergi = [
    { id: '19', title: 'Sbleskom Крутые тигры', title2:`артикул: 19000283679

Серьги "Крутые тигры" — яркий акцент, который будет привлекать не только внимание, но и удачу! Обещаем, тигр не обойдет тебя стороной!.

как ухаживать за украшением?
— беречь от косметических и парфюмерных средств
— избегать контакта с жидкостями и бытовой химией
— снимать перед принятием душа/ванны и перед занятиями спортом
— беречь от воздействия прямых солнечных лучей
— хранить в мягких мешочках, футлярах или на специальных подставках для украшений
— беречь от механических повреждений и падений

ТИП ПРОДУКТА : серьги
ДЛЯ КОГО : женский
ПОКРЫТИЕ : родирование
ПРОБА : 925
ПРИМЕРНЫЙ ВЕС, Г : 8.5
МАТЕРАЛ : серебро`, category: 'Серебряные серьги', price: '8 743 ₽', img: s21, imgAlt: s21Alt,  discount: 'only GA' }
  ]
  return (
    <div>
      <section>
        <div className='w-[1400px] m-auto'>
          <h1 className='text-6xl font-bold text-[#474646] absolute mt-[490px] ml-[730px]'>скидки до −50%</h1>
          <img src={s1} className='w-[1400px]' />
          <h2 className='justify-center items-center flex my-[40px] text-2xl'><span className='mr-[5px] font-bold'>40 806</span> продукт</h2>
          <div className='mt-[20px]'>
            <div className='flex mt-[20px] '>
              {every.map((eve) => (
                <div key={eve.id} className='' onClick={()=>setSelectedProduct(eve)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#e6287e] text-[white] font-bold w-[40px] absolute h-[40px]'>{eve.discount}</button>
                  <img src={imageHovered === eve.id ? eve.imgAlt : eve.img} onMouseEnter={() => handleMouseEnter(eve.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{eve.category}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{eve.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{eve.price}</h1>
                </div>
              ))}
              {lips.map((lip) => (
                <div key={lip.id} className='ml-[60px]' onClick={()=>setSelectedProduct(lip)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#e6287e] w-[40px] h-[40px] text-[white] font-bold absolute'>{lip.discount}</button>
                  <img src={lip.img} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'rtl', textAlign: 'right' }}>{lip.category}</h3>
                  <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'rtl', textAlign: 'right' }}>{lip.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{lip.price}</h1>
                </div>
              ))}
              {longsliv.map((lon) => (
                <div key={lon.id} className='ml-[90px]' onClick={()=>setSelectedProduct(lon)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <img src={imageHovered === lon.id ? lon.imgAlt : lon.img} className='h-[600px] w-[650px] ' onMouseEnter={() => handleMouseEnter(lon.id)} onMouseLeave={handleMouseLeave} />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'>{lon.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{lon.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{lon.price}</h1>
                </div>
              ))}
            </div>
            <div className='flex'>
              {shik.map((shi) => (
                <div key={shi.id} className='mt-[-130px] w-[1400px]' onClick={()=>setSelectedProduct(shi)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                  <button className='bg-[#dadd0e] text-[#000000] font-bold w-[45px] h-[40px] absolute'>{shi.discount}</button>
                  <img src={imageHovered === shi.id ? shi.imgAlt : shi.img} onMouseEnter={() => handleMouseEnter(shi.id)} onMouseLeave={handleMouseLeave} className='h-[600px] w-[650px]' />
                  <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px]  ml-[150px]'>{shi.category}</p>
                  <h1 className='hover:text-[#9ca887] text-4xl font-medium  ml-[150px]'>{shi.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[150px] mt-[10px]'>{shi.price}</h1>
                </div>
              ))}
              {pomidor.map((pom) => (
                <div key={pom.id} onClick={()=>setSelectedProduct(pom)} className='ml-[90px] mt-[90px]' onMouseEnter={() => handleMouseEnter('blush')} onMouseLeave={handleMouseLeave}>
                  <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute  ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{pom.discount}</button>
                  <img src={imageHovered === pom.id ? pom.imgAlt : pom.img} onMouseEnter={() => handleMouseEnter(pom.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px]' />
                  <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}> {pom.title}</h3>
                  <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}> {pom.title} </h1>
                  <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{pom.price}</h1>
                </div>
              ))}
              {clean.map((cl) => (
                <div key={cl.id} className='ml-[60px] mt-[90px]' onClick={()=>setSelectedProduct(cl)}>
                  <Link to="/favorites"><IoHeartOutline className='absolute  ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                  <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                  <button className='absolute  bg-[#dbe649] w-[40px] h-[40px] text-[#000000] font-bold'>{cl.discount}</button>
                  <img src={imageHovered === cl.id ? cl.imgAlt : cl.img} onMouseEnter={() => handleMouseEnter(cl.id)} onMouseLeave={handleMouseLeave} className='w-[300px] h-[300px] ' />
                  <h3 className=' hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}> {cl.category}</h3>
                  <h1 className=' hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'ltr', textAlign: 'left' }}> {cl.title}</h1>
                  <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl'>{cl.price}</h1>
                </div>
              ))}
              </div>
              <div className='flex mt-[100px]'>
                {avatar.map((ava) => (
                  <div key={ava.id} className='' onClick={()=>setSelectedProduct(ava)}>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#e927af] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{ava.discount}</button>
                    <img src={ava.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{ava.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{ava.title}</h1>
                      <h1 className='font-bold hover:text-[#9ca887] mt-[10px]'>{ava.price}</h1>
                  </div>
                ))}
                {tush.map((tu) => (
                  <div key={tu.id} onClick={()=>setSelectedProduct(tu)} className='ml-[60px] w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#cee313] text-[black] w-[40px] h-[40px]  font-bold absolute'>{tu.discount}</button>
                    <img src={imageHovered === 'парфюм' ? tu.imgAlt : tu.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('парфюм')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{tu.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] text-2xl font-medium' style={{ direction: 'rtl', textAlign: 'right' }}>{tu.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[200px]'>{tu.price}</h1>
                  </div>
                ))}
                {mist.map((mi) => (
                  <div className='ml-[90px]' onClick={()=>setSelectedProduct(mi)}>
                    <button className='bg-[#fc17c6] text-[#faf9f9] font-bold w-[40px] absolute h-[40px]'>{mi.discount}</button>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[560px]' /></Link>
                    <img src= {mi.img} className=' h-[600px] w-[650px]'/>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[-20px] ml-[150px]'> {mi.category}</p>
                    <h1 className='hover:text-[#9ca887] text-4xl font-medium ml-[150px]' >{mi.title}</h1>
                    <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[150px] mt-[10px]'>{mi.button}</button>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] ml-[150px]'>{mi.price}</h1>
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] w-[1400px]'>
                {pial.map((p) => (
                  <div key={p.id} className='' onClick={()=>setSelectedProduct(p)}>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#dd28ce] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{p.discount}</button>
                    <img src={p.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {p.category}</h3>
                    <h1 className='hover:text-[#9ca887] w-[300px] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{p.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] mt-[10px] ml-[240px]'>{p.price}</h1>
                  </div>
                ))}
                {maska.map((mas) => (
                  <div key={mas.id} className='ml-[60px] w-[300px]' onClick={()=>setSelectedProduct(mas)}>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#eb23da] text-[#ffffff] font-bold w-[40px] absolute h-[40px]'>{mas.discount}</button>
                    <img src={imageHovered === 'night' ? mas.imgAlt : mas.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('night')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}> {mas.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{mas.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] mt-[10px] text-2xl ml-[230px]'>{mas.price}</h1>
                  </div>
                ))}
                {bele.map((be) => (
                  <div key={be.id} onClick={()=>setSelectedProduct(be)} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('sumka')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{be.discount}</button>
                    <img src={imageHovered === 'sumka' ? be.imgAlt : be.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{be.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{be.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{be.price}</h1>
                  </div>
                ))}
                {music.map((mu) => (
                  <div key={mu.id} onClick={()=>setSelectedProduct(mu)} className='ml-[60px] w-[300px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute ml-[265px] mt-[10px] w-[20px] h-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute ml-[265px] mt-[265px] w-[20px] h-[20px]' /></Link>
                    <button className='bg-[#ee2bb3] w-[40px] h-[40px] text-[white] font-bold absolute'>{mu.discount}</button>
                    <img src={imageHovered === 'шампунь' ? mu.imgAlt : mu.img} className='w-[300px] h-[300px] ' onMouseEnter={() => handleMouseEnter('шампунь')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[16px]' style={{ direction: 'ltr', textAlign: 'left' }}>{mu.category}</h3>
                    <h1 className='hover:text-[#9ca887] text-2xl font-medium ' style={{ direction: 'ltr', textAlign: 'left' }}>{mu.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl  mt-[10px]'>{mu.price}</h1>
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] '>
                {balzam.map((bal) => (
                  <div key={bal.id} className='w-[300px]' onClick={()=>setSelectedProduct(bal)}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#49f20b] text-[black] font-bold w-[40px] absolute h-[40px]'>{bal.discount}</button>
                    <img src={imageHovered === 'bee' ? bal.imgAlt : bal.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('bee')} onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{bal.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{bal.title}</h1>
                    <button className=' bg-lime-300 w-[120px] hover:text-[#9ca887]  ml-[180px] mt-[10px]'>{bal.button}</button>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{bal.price}</h1>
                  </div>
                ))}
                {vitam.map((sam) => (
                  <div key={sam.id} onClick={()=>setSelectedProduct(sam)} className='w-[300px] ml-[60px]'>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[265px] mt-[10px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#e5d94f] text-[#000000] font-bold w-[40px] absolute h-[40px]'>{sam.discount}</button>
                    <img src={imageHovered === 'termo' ? sam.imgAlt : sam.img} className='w-[300px] h-[300px]' onMouseEnter={() => handleMouseEnter('termo')}
                      onMouseLeave={handleMouseLeave} />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'rtl', textAlign: 'right' }}>{sam.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'rtl', textAlign: 'right' }}>{sam.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl ml-[210px] mt-[10px]'>{sam.price}</h1>
                  </div>
                ))}
                {shamp.map((sam) => (
                  <div key={sam.id} className='ml-[90px] ' onClick={()=>setSelectedProduct(sam)}>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[40px] ml-[400px]'>{sam.category}</p>
                    <h1 className='hover:text-[#9ca887] absolute text-4xl mt-[70px]  w-[250px] font-medium ml-[400px]' >{sam.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl absolute mt-[330px] ml-[400px]'>{sam.price}</h1>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[460px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[460px] mt-[380px]' /></Link>
                    <img src={imageHovered === 'kor' ? sam.imgAlt : sam.img} className='h-[420px] w-[500px]' onMouseEnter={() => handleMouseEnter('kor')} onMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))}
              </div>
              <div className='flex mt-[100px] '>
                {massaj.map((mes) => (
                  <div key={mes.id} onClick={()=>setSelectedProduct(mes)} className=''  onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                    <p className='hover:text-[#9ca887] absolute font-mono mt-[80px] ml-[100px]'>{mes.category}</p>
                    <h1 className='hover:text-[#9ca887] absolute text-4xl w-[250px] mt-[130px]  font-medium ' >{mes.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] absolute text-2xl mt-[310px] '>{mes.price}</h1>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] ml-[605px] mt-[20px]' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] ml-[605px] mt-[380px]' /></Link>
                    <img src={imageHovered === 'fen' ? mes.imgAlt : mes.img} className='h-[420px] w-[500px] ml-[150px]' />
                  </div>
                ))}
                {pled.map((pd) => (
                  <div key={pd.id} onClick={()=>setSelectedProduct(pd)} className='w-[300px] ml-[90px]' onMouseEnter={() => handleMouseEnter('fen')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#e727ce] text-[white] font-bold w-[40px] absolute h-[40px]'>{pd.discount}</button>
                    <img src={imageHovered === 'fen' ? pd.imgAlt : pd.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{pd.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{pd.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{pd.price}</h1>
                  </div>
                ))}
                {sergi.map((ser) => (
                  <div key={ser.id} onClick={()=>setSelectedProduct(ser)} className='w-[300px] ml-[60px]' onMouseEnter={() => handleMouseEnter('piala')} onMouseLeave={handleMouseLeave}>
                    <Link to="/favorites"><IoHeartOutline className='absolute w-[20px] h-[20px] mt-[10px]  ml-[265px] ' /></Link>
                    <Link to="/cart"><BsBasket className='absolute w-[20px] h-[20px] mt-[265px] ml-[265px]' /></Link>
                    <button className='bg-[#10ee48] text-[white] font-bold w-[40px] absolute h-[40px]'>{ser.discount}</button>
                    <img src={imageHovered === 'piala' ? ser.imgAlt : ser.img} className='w-[300px] h-[300px]' />
                    <h3 className='hover:text-[#9ca887] font-mono mt-[20px]' style={{ direction: 'ltr', textAlign: 'left' }}>{ser.category}</h3>
                    <h1 className='hover:text-[#9ca887] font-medium text-2xl' style={{ direction: 'ltr', textAlign: 'left' }}>{ser.title}</h1>
                    <h1 className='font-bold hover:text-[#9ca887] text-2xl mt-[10px] '>{ser.price}</h1>
                  </div>
                ))}
              </div>
          </div>
        </div>
             {selectedProduct && <Disco eve={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco lip={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco p={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco mi={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco tu={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco ava={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco pd={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco cl={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco pom={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco shi={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco lon={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco mas={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco be={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco mu={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco bal={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco sam={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco mes={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco ser={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {selectedProduct && <Disco sam={selectedProduct} onClose={() => setSelectedProduct(null)} />}
             {/* {selectedProduct && <Disco bal={selectedProduct} onClose={() => setSelectedProduct(null)} />} */}
      </section>
    </div>
  )
}
