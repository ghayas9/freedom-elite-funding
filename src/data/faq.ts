import React from "react";

export default function Faq({ key }: { key: string }) { 

  if (key === "freedom")
    return [
      {
        question: "Is there a consistency rule with Freedom challenge?",
        answer: "No, there is no consistency rules with the Freedom challenge.",
      },
      {
        question: "What is the profit target?",
        answer: "The profit targets for the evaluation phases are 6%.",
      },
      {
        question: "How do I get a 100% profit split?",
        answer:
          "At checkout, you will have the option to upgrade to a 100% profit split!",
      },
      {
        question: "How is the drawdown calculated?",
        answer: `Daily Drawdown:
        The daily drawdown is calculated as 5% of your start of day balance. This calculation must include any floating losses, swaps and commission rates. Max Drawdown:
        The max drawdown on the Freedom Challenge is 12% of your initial account balance. This means your account equity cannot fall below 92% of the initial balance at any point.`,
      },
      {
        question: "Is there a time limit?",
        answer: "There are no time limits on any of our challenges.",
      },
      {
        question: "How does the Reset work?",
        answer:
          "With the Reset Add-on, you have the option to reset your account during the funded phase if you happen to breach. This means you'll receive a fresh challenge to restart your journey without needing to risk additional capital at that point!",
      },
    ];

  if (key === "hft")
    return [
      {
        question: "What are the profit splits for the HFT Challenge?",
        answer:
          "The profit split for HFT Challenge goes as follows: 1st profit split: 60-40. 2nd profit split: 70-30. 3rd profit split: 80-20. 4th profit split: 90-10.",
      },
      {
        question: "What is the profit cap on the HFT Challenge?",
        answer: "The profit cap is set at 6% of your account balance.",
      },
      {
        question: "Is there a consistency rule with HFT Challenge?",
        answer:
          "Profit Consistency: The purpose of the profit consistency rule is to help traders establish a pattern of consistent profits and steer clear of the risks associated with trading based on emotions. For example in one step power challenge: If by the end of a 30 day period, your account has a total profit of $10,000, then no single trade can account for more than 25% of $10,000, which is $2,500. Once a payout withdrawal request is submitted any trades breaching this rule will be considered a soft breach and we will remove the invalid trades while keeping account access. You can refer to the schedule of assessment to check the profit consistency as it can vary depending on the challenge. Lot Size Consistency: The lot size consistency rule is applied once a payout withdrawal request has been submitted, to ensure consistency within your trading. To satisfy the Lot Size Consistency Rule your average trade size is used to calculate your trading range. The range is determined by adding 100% to your average trade size to determine the maximum value and subtracting 75% to determine the minimum value. Once a payout withdrawal request is submitted any trades breaching this rule will be considered a soft breach and we will remove the invalid trades while keeping account access. Note: trades are aggregated when placed within a 30 second window into one position for both profit and lot consistency. Lot Size Consistency Range Calculation: Total Lot Volume Traded/Trades Executed: Lot Size Average. Lot Size Average x 0.25: Bottom Of Consistency Range. Lot Size Average x 2.00: Top Of Consistency Range.",
      },
      {
        question: "How is the drawdown calculated?",
        answer:
          "Daily Drawdown: The daily drawdown is calculated as 4% of your start of day balance. This calculation must include any floating losses, swaps and commission rates. This limit will be reset at midnight as per the server time. Example 1: Starting balance of $100,000, You trade and secure a profit of +$2000, your account balance currently sits $102,000. The following day your maximum daily loss must now not exceed 4% of that previous days balance ($102,000 - 4% = $97,920) $4,080 max daily loss. Day 2 you trade and incur a loss of -$1000 bringing your account balance down to $101,000. The following day your maximum daily loss must not exceed 4% of that previous days balance ($101,000 - 4% = $96,960) $4,040 max daily loss. Max Drawdown: The max drawdown on the HFT Challenge is 8% of your initial account balance. This means your account equity cannot fall below 92% of the initial balance at any point. It is important to note that the max drawdown limit does not reset like the daily drawdown limit.",
      },
      {
        question: "Do you offer challenge passing services?",
        answer:
          "No we do not, however we are partnered with challenge passing services for HFT. we will update on our telegram community ",
      },
      {
        question: "Can I get a reset with the HFT Challenge?",
        answer:
          "No, we do not offer Reset with HFT Challenge. Only Freedom Challenge.",
      },
      {
        question: "When I get refunded challenge fees?",
        answer: "challenge fees will be refunded during 2nd payout ",
      },
    ];

  if (key === "promotion")
    return [
      {
        question: "Can I get the reset promotion with the HFT challenge?",
        answer: "Yes, it is not eligible for the HFT Challenge.",
      },
      {
        question:
          "Is the free reset available during challenge and verification?",
        answer:
          "No, only available in the funded phase. The free reset is available only within the first 15  business days of receiving your credentials.",
      },
      {
        question: "Can I combine two promotions?",
        answer: "You are not allowed to combine 2 promotions.",
      },
      {
        question: "Are there any monthly fees?",
        answer: "There are no monthly fees at Sure Leverage Funding.",
      },
    ];

  if (key === "challenge")
    return [
      {
        question: "What is the Spread and Commissions?",
        answer: `
            Freedom Elite funding is partnered with Eightcap as our broker, to offer industry leading spreads and commissions for traders. To understand the account offerings that we use, see here:
            https://www.eightcap.com/en/trading/trading-conditions/spreads/`,
      },
      {
        question: "What are the challenge profit targets?",
        answer:
          "Freedom challenge - both phase 6% profit target, HFT challenge also 6% profit targets ",
      },
      {
        question: "What are the profit splits for the HFT challenge?",
        answer: `The profit split for HFT Challenge goes as follows:
            1st profit split: 60-40
            2nd profit split: 70-30
            3rd profit split: 80-20
            4th profit split: 90-10`,
      },
      {
        question:
          "What is the standard profit split on Freedom challenge  if I don’t choose the 100% option?",
        answer:
          "The standard profit split on the Freedom Challenge is 80/20 if you do not select the 100% option.",
      },
      {
        question: "What are the leverage options?",
        answer: `HFT Challenge - 1:100 (Challenge phase) and 1:50 (Funded)
            Freedom challenge - 1:50`,
      },
      {
        question: "How often can I withdraw?",
        answer: `The first profit split is 14 days.
            The following profit splits are 21 days`,
      },
      {
        question: "Can I withdraw my evaluation profits?",
        answer:
          "The funded stage is the only stage where you could request a profit withdrawal.",
      },
    ];

    return [
      {
        question: "How is drawdown calculated?",
        answer:
          "The daily drawdown is calculated as of your start of day balance. This calculation must include any floating losses, swaps and commission rates. This limit will be reset at midnight as per the server time",
      },
      {
        question: "How does the Reset work?",
        answer:
          "With the Reset Add-on, you have the option to reset your account during the funded phase if you happen to breach. This means you'll receive a fresh challenge to restart your journey without needing to risk additional capital at that point!",
      },
      {
        question: "What are the minimum trading days?",
        answer:
          "The minimum trading days are 3 for evaluations (except HFT at 0 trading days) and 5 for funded accounts.",
      },
      {
        question: "Is the assessment time limited?",
        answer: "There are no time limits on any of our challenges.",
      },
      {
        question: "Are there any profit targets on a live account?",
        answer:
          "There are no profit targets on any of our live funded accounts.",
      },
      {
        question: "Can I trade using EAs or ALGOS?",
        answer:
          "Yes, you are allowed to use EA’s (Only in the evaluation phases). You are only allowed to use HFT EA’s specifically for the HFT challenge; however, this option does not apply to any other challenge type. We don't allow the use of EA’s and Indicators, including tools for managing risk and automated trading systems in funded accounts.",
      },
      {
        question: "Do you allow news trading?",
        answer:
          "Yes, we allow news trading only during the evaluation phase. We do not allow News trading at Freedom elite funding on any Funded account.",
      },
      {
        question: "Is copy trading allowed?",
        answer:
          "Copy trading is allowed to copy your own personal trades onto your simulated live account with Freedom Elite. However, copy trading identical orders from other traders in an identical time frame on our platform is not permitted.",
      },
      {
        question: "Do you have a consistency rule?",
        answer:
          "We do not have a consistency rule on the Freedom Challenge. For HFT Challenges, we have Profit Consistency and Lot Size Consistency rules. These rules are applied to ensure consistent trading and manage risks associated with emotional trading.",
      },
    ];
}
