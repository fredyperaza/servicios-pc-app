import Image from "next/image";

export default function BannerBand() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-12 md:pt-16">
      <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-navy-deep">
        <Image
          src="/banners/banner-principal.jpg"
          alt="ProTekno: seguridad inteligente para tu hogar y negocio"
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover object-right md:object-center"
        />
      </div>
    </section>
  );
}