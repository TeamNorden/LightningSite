import Link from "next/link";
import { REVOLT_INVITE } from "../../constants";

export const RevoltJoinButton: React.FC = () => {
    return (
        <Link href={REVOLT_INVITE}>
            <a
                className={`bg-revolt text-black hover:opacity-70 py-2 w-[10rem] text-[1rem] lg:p-3 lg:w-[14rem] lg:text-[1.3rem] rounded-full font-bold grid place-items-center`}
            >
                Join Us on Revolt
            </a>
        </Link>
    );
};
