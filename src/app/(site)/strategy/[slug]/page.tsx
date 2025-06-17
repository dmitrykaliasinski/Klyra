import Link from "next/link";
import StrategyHeader from "@/components/StrategyPage/StrategyHeader/StrategyHeader";
import {BackButton} from "@/components/Shared/BackButton";
import StrategyOverview from "@/components/StrategyPage/StrategyOverview/StrategyOverview";

const data = {
    "bullish": {
        header: {
            title: "Bullish Call Vault",
            description: "Profit when the underlying asset price increases.",
            tvl: "$12,951.54",
            sharePrice: "$0.0001295154",
            expiry: "0d 0h 0m",
            depositAmount: "0.0000 kCALL shares",
            depositValue: "$0.00",
            theme: "bullish",
        }
    },
    "bearish": {
        header: {
            title: "Bearish Put Vault",
            description: "Profit when the underlying asset price decreases.",
            tvl: "$0.00",
            sharePrice: "$0.0000000000",
            expiry: "0d 0h 0m",
            depositAmount: "0.0000 kPUT shares",
            depositValue: "$0.00",
            theme: "bearish",
        }
    },
    "condor": {
        header: {
            title: "Range-Bound Condor Vault",
            description: "Enhance yield when the price stays within a range.",
            tvl: "$0.00",
            sharePrice: "$0.0000000000",
            expiry: "0d 0h 0m",
            depositAmount: "0.0000 kCONDOR shares",
            depositValue: "$0.00",
            theme: "condor",
        }
    }
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params;

    const strategy = data[slug];

    return (
        <>
            <BackButton url={'/'} />
            <div style={{paddingTop: '2rem'}}>
                <StrategyHeader {...strategy.header}/>
                <StrategyOverview strikePrice={'0000'} currentPrice={'000'} theme={strategy.header.theme} />
            </div>
        </>
    )
}