import { SITE_URL } from "@/lib/constants";
interface Props {
  title: string;
  ogSubtitle: string;
}

const OGCard = ({ title, ogSubtitle }: Props) => {
  return (
    <div
      tw="flex h-[630px] w-[1200px] items-center justify-center"
      style={{
        background:
          "linear-gradient(66deg, #77e24c 0%, #77e24c 35%, #dced48 100%)",
      }}
    >
      <div
        tw="flex absolute h-[630px] w-[1200px]"
        style={{
          background: "url(https://grainy-gradients.vercel.app/noise.svg)",
        }}
      ></div>
      <div tw="relative flex h-[620px] w-[1190px] flex-col items-center justify-center bg-white p-14 py-36">
        <div tw="grow flex  justify-center ">
          <img
            src={`${SITE_URL}/avatar.png`}
            width={200}
            height={200}
            alt="logo"
            tw="h-36 w-36 rounded-full"
          />
        </div>

        <div tw="flex flex-col items-center justify-center">
          <h1 tw={`mx-6 text-5xl uppercase  tracking-wide text-[#292F36]`}>
            {title}
          </h1>
          <h2 tw={`mx-12 text-3xl  text-[#292F36]`}>{ogSubtitle}</h2>
        </div>
        <div tw="absolute bottom-10 text-emerald-600 right-10 text-3xl flex justify-end">
          @paolocalzone.lens
        </div>
      </div>
    </div>
  );
};

export default OGCard;
