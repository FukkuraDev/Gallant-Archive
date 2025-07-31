import Link from "next/link";
import StatusChecker from "./StatusChecker";

interface SideCardProps {
    data: {
        [key: string]: any;
    }
}

const SideCard = ({ data }: SideCardProps) => {
    return (
        <div className="flex flex-col border p-5 rounded-lg mt-3 mr-0 ml-0 text-center ">
            <h1 className="text-2xl font-bold pb-2 border-b">{data.title}</h1>

            <div className="border-b pt-10 pb-2">
                <img
                    src={data.logo || 'https://placehold.jp/30/dd6699/ffffff/150x150.png?text=nologo'}
                    alt="projectlogo"
                    className="mx-auto block w-[100px] h-[100px]"
                />
                <p className="italic text-sm pt-5">Current known logo *</p>
            </div>

            <div className="pt-1 pb-1 text-xl border-b font-bold">
                Dates
                <div className="font-normal text-base">
                    <div className="p-2 flex justify-between">
                        <h2 className="font-bold">First Mentioned</h2>
                        <h2>{data.announceddate || 'TBF'}</h2>
                    </div>
                    <div className="p-2 flex justify-between">
                        <h2 className="font-bold">Current Release Date *</h2>
                        <h2>{data.releasedate || 'TBA'}</h2>
                    </div>
                </div>
            </div>
            <div className="pt-1 pb-1 text-xl border-b font-bold">
                Stats
                <div className="font-normal text-base">
                    <div className="p-2 flex justify-between">
                        <h2 className="font-bold">Estimated Employees</h2>
                        <h2>{data.employees || 'TBA'}</h2>
                    </div>
                    <div className="p-2 flex justify-between">
                        <h2 className="font-bold">Location</h2>
                        <h2>{data.location || 'TBA'}</h2>
                    </div>
                </div>
            </div>
            <div className="pt-1 pb-1 text-xl border-b font-bold">
                Type
                <div className="font-normal text-base">
                    {data.projecttype}
                </div>
            </div>
            <div className="pt-1 pb-1 text-xl border-b font-bold">
                Links
                <div className="font-normal text-base">

                    {data.links && data.links.length > 0 ? (
                        data.links.map((link: any, index: number) => (
                            <div key={index} className="flex-row flex justify-center" >
                                <Link href={link.url || ' '} target="_blank" className="text-violet-400">{link.label}</Link>
                                <StatusChecker url={link.url} />
                            </div>
                        )) //This is suboptimal, please help fix it
                    ) : (
                        <p>No links available.</p>
                    )}
                </div>
            </div>
            <p className="italic text-sm pt-2">* Subject to change.. Alot</p>
        </div >
    );
};

export default SideCard;
