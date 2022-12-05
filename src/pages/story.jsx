import React from "react"

const story = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-[120px] justify-center items-center px-[80px]">
                <div className="flex flex-col items-center justify-center gap-8 mt-[188px] w-[842px]">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h1 className="text-text font-bold text-5xl tracking-tighter leading-[48px]">
                            Our Story
                        </h1>
                        <p className="text-zinc-600 text-xl leading-[30px] tracking-[-0.1rem]">
                            We built a piece of software that we planned to use
                            for a pharmacist-led Covid19 drive-through
                            vaccination clinic but never got to use it.
                        </p>
                    </div>
                    <p className="text-2xl font-bold leading-9 tracking-tight">
                        “So we repurposed it and made it even more powerful”
                    </p>
                </div>
                <div className="flex flex-col items-end gap-[45px]">
                    <div className="flex flex-col w-full h-[267px]">
                        <div className="flex items-start gap-[141px]">
                            <h2 className="text-4xl font-bold w-[296px] text-start leading-[43px] tracking-[-0.01rem]">
                                Problem we <br></br>faced
                            </h2>
                            <div className="flex flex-col items-start gap-6">
                                <p className="font-normal text-lg leading-7 text-start tracking-[-0.01rem] w-[843px]">
                                    It was a typical day on the 6th of August
                                    2021. We got a call from the local health
                                    authorities that a covid positive patient
                                    had visited our pharmacy 3 days ago. They
                                    asked all staff working in the last three
                                    days to isolate for 14 days. We were
                                    required to pay a few thousand dollars in a
                                    deep cleaning bill before reopening. It
                                    happened a couple of times. It was not like
                                    we could wave a magic wand and get extra
                                    team members. We had to shut one of our
                                    pharmacies down for at least ten days.
                                </p>
                                <p className="font-normal text-lg leading-7 text-start tracking-[-0.01rem] w-[843px]">
                                    Red tape rule one said that pharmacists were
                                    only allowed to vaccinate in a closed room
                                    in the pharmacy. We could not vaccinate
                                    outside this room. Red tape rule two
                                    required us to claim a small amount of money
                                    to vaccinate a person, but the condition was
                                    that you could only claim this payment if
                                    the vaccination was done on pharmacy
                                    premises.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[50px] justify-center w-[843px]">
                        <div className="border border-solid border-zinc-400" />
                        <p className="text-text text-start text-[28px] h-[84px]  tracking-[-0.01rem] leading-[42px] font-bold">
                            “Why don’t we vaccinate the members of the public in
                            the empty car park at the back of our pharmacy?”
                        </p>
                        <div className="border border-solid border-zinc-400" />
                    </div>
                    <div className="flex flex-col w-full h-[318px]">
                        <div className="flex items-start gap-[141px]">
                            <h2 className="text-4xl font-bold leading-[43px]  text-start tracking-[-0.01rem]">
                                Amazing in-store journey
                            </h2>
                            <div className="flex flex-col items-start gap-6">
                                <p className="font-normal text-lg leading-7 text-start tracking-[-0.01rem] w-[843px]">
                                    While isolating in early August, we thought,
                                    why don’t we vaccinate the members of the
                                    public in the empty car park at the back of
                                    our pharmacy? It will be safer for our team
                                    as patients are completing their post
                                    vaccination wait in their car and if they
                                    are sick then the exposure to our team is
                                    limited. Our local Council was very
                                    supportive and permitted us. They even sent
                                    their team that built the tents to start
                                    working.
                                </p>
                                <p className="font-normal text-lg leading-7 text-start tracking-[-0.01rem] w-[843px]">
                                    We lobbied hard to get the rules changed.
                                    They eventually got changed, but by then, it
                                    was too late. It was a chaotic experience
                                    and full of red tape.s
                                </p>
                                <p className="font-normal text-lg leading-7 text-start tracking-[-0.01rem] w-[843px]">
                                    So the tool built to allow an 11-member team
                                    to successfully vaccinate 700 cars (1000
                                    people) was useless. But then we started
                                    using it for our in-store pharmacy workflow.
                                    It proved successful in managing the flow.
                                    It was so easy to use and allowed us to
                                    vaccinate patients using an amazing instore
                                    journey. This was how we built ConcertRx.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default story
