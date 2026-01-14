"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

const Faq = () => {
    // İlk öğeyi açık yapmak için başlangıç değeri 0 olarak ayarlandı
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
          question: '❓ Figürler hangi yöntemle üretiliyor?',
          answer: 'Tüm figürlerimiz yüksek kaliteli 3D baskı teknolojisi kullanılarak üretilmektedir. Her ürün, dijital modelden başlayarak katman katman özenle basılır ve ardından detay kontrolünden geçirilir. Bu sayede figürler hem sağlam, hem de detay seviyesi yüksek koleksiyon parçaları haline gelir. Üretim sürecimiz, hem görsel kaliteyi hem de uzun ömürlü kullanımını ön planda tutacak şekilde planlanmaktadır.'
        },
        {
          question: '❓ Satışlar hangi platform üzerinden yapılıyor?',
          answer: 'Şu an için tüm ürünlerimizi Dolap uygulaması üzerinden satışa sunuyoruz. Bu sayede güvenli ödeme, kargo entegrasyonu ve alıcı-satıcı koruması gibi avantajlardan faydalanabiliyorsunuz. Web sitemiz vitrin ve bilgilendirme amacıyla kullanılmakta olup, satın alma işlemleri Dolap üzerinden yönlendirilmektedir.'
        },
        {
          question: '❓ Ürünler hazır mı, siparişe göre mi üretiliyor?',
          answer: 'Ürünlerimizin bir kısmı hazır stoktan gönderilirken, bazı modeller siparişe göre üretilmektedir. Siparişe özel üretilen ürünlerde baskı süresi, kalite kontrol ve paketleme aşamaları bulunmaktadır. Bu süreç, ürünün kusursuz şekilde size ulaşmasını sağlamak için özellikle uygulanmaktadır.'
        },
        {
          question: '❓ Ürünler sadece figür mü olacak?',
          answer: 'Başlangıçta ana odağımız 3D baskı figürlerdir. Ancak Muvitoys yalnızca figürlerle sınırlı kalmayacaktır. İlerleyen süreçte cosplay aksesuarları ve mini oyuncak kategorileri de eklenecektir. Yeni ürünler ve farklı kategoriler belirli aralıklarla yayına alınacaktır. Yeni çıkacak ürünleri ve sürprizleri kaçırmamak için bizi takipte kalmanızı öneririz.'
        }
    ];

    return (
        <div className="2xl:px-28 2xl:mx-2 md:px-4 mb-12 px-4 mt-0">
            <h2 className="font-bold lg:text-4xl text-2xl text-gray-800">Sıkça Sorulan Sorular</h2>
            <div className="flex md:flex-row flex-col md:space-x-8 mt-5 lg:mt-8">
                <div className="md:w-5/12 lg:w-4/12 w-full">
                    <Image 
                        src="/sss.jpeg" 
                        alt="SSS" 
                        width={400}   // kendi boyutuna göre ayarla
                        height={300}  // kendi boyutuna göre ayarla
                        className="md:block hidden rounded-lg object-cover w-full"
                        />

                        <Image 
                        src="/sss.jpeg" 
                        alt="SSS" 
                        width={400} 
                        height={300} 
                        className="md:hidden block object-cover h-36 rounded-lg"
                    />

                </div>
                <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-6">
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center cursor-pointer text-white" onClick={() => toggleFAQ(index)}>
                                <h3 className="font-semibold text-[17px] lg:text-xl leading-5 text-gray-800 pt-2">{faq.question}</h3>
                                <div>
                                    {activeIndex === index ? <HiMiniChevronUp className='bg-red-600 rounded-lg w-8 h-8' /> : <HiMiniChevronDown className='bg-red-600 rounded-lg w-8 h-8' />}
                                </div>
                            </div>
                            {activeIndex === index && (
                                <p className="font-medium text-base leading-6 text-gray-600 mt-4 w-11/12">
                                    {faq.answer}
                                </p>
                            )}
                            <hr className="my-6 bg-gray-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;
