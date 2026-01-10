import ArrowRight from "../icons/ArrowRight"
import QuestionMark from "../icons/QuestionMark"

type AmountCardProps = {
    title: string;
    amount:string;
    orders?: number;
    blueCard?: true;
}

const AmountCard: React.FC<AmountCardProps> = ({title,amount,orders,blueCard=false}) => {
  return (
    <li className={` ${blueCard?"relative text-white bg-secondary":"bg-white"} group grow rounded-md p-4 pb-5 space-y-3 shadow hover:-translate-y-0.5 hover:shadow-lg transition-all ease-linear  `}>
        <header className={` ${blueCard?"text-white":"text-text"} flex items-center gap-x-2`}>
            <h1 >{title}</h1>
            <QuestionMark />
        </header>

        <aside className="flex justify-between">
            <h1 className=" text-3xl font-medium self-start">₹{amount}</h1>
            {orders && <button className="flex items-center underline gap-x-2.5">
                <p className="mb-1">{orders} orders</p>
                <ArrowRight />
            </button>}
        </aside>
        {blueCard &&
        <aside className="absolute -bottom-6 right-0 left-0 bg-seconary-dark text-white 
        flex justify-between px-4 py-2 rounded-xl group/hover:shadow-lg shadow-primary">
            <h1>Next payout Date</h1>
            <h2>Today, 04:00PM</h2>
        </aside>}
    </li>
  )
}

export default AmountCard