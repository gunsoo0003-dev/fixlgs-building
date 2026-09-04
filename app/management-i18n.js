import {MANAGEMENT_SECTIONS as KO_SECTIONS, MANAGEMENT_TUTORIAL_GROUPS as KO_GROUPS, MANAGEMENT_TUTORIAL_AXES as KO_AXES, MANAGEMENT_PERIODS as KO_PERIODS, MANAGEMENT_CASES as KO_CASES, MANAGEMENT_TOOLS as KO_TOOLS} from './management-data';

const EN_SECTIONS=[
  {
    "id": "rent",
    "num": "01",
    "code": "RENT",
    "name": "Rent Income",
    "prompt": "How much rent are you actually collecting?",
    "introParagraphs": [
      "The first number to watch is not the total rent written in the lease. Contracted rent is a promise; actual receipts are the operating result.",
      "Even with the same lease, late payments or unrecovered service charges change how much cash actually comes in. Rent-free periods, temporary reductions and vacancy affect real income in the same way.",
      "Rent-income management therefore focuses on cash coming in and the collection process. Final net cash flow after expenses is handled separately under 04 Costs."
    ],
    "items": [
      [
        "Contracted rent",
        "The monthly rent agreed in the lease. Use it as the baseline against actual receipts, and keep pre-change and post-change terms separate when a lease is renewed or amended."
      ],
      [
        "Actual receipts",
        "The amount that actually reached the account during the month. Partial payments, concessions and unpaid amounts can make it different from contracted rent, so track it separately."
      ],
      [
        "Payment date",
        "Shows the gap between the scheduled due date and the actual payment date. Even when the full amount is eventually received, repeated monthly delays can signal a recurring payment pattern."
      ],
      [
        "Service charges",
        "Amounts collected separately from rent. Distinguish pass-through charges from fixed charges and track whether unpaid balances are accumulating even when rent itself is current."
      ],
      [
        "Arrears and late payment",
        "Separate a one-off delay from repeated delays. Keeping the date, amount, days late and resolution status creates an operating history that can also inform renewal decisions."
      ],
      [
        "Deposit",
        "The lease's basic security condition. If the amount increased, decreased or changed with other lease terms, keep the current amount together with its change history."
      ],
      [
        "Concessions and reductions",
        "Rent-free periods, temporary reductions and tenant-acquisition incentives that lower actual income below stated rent. Reflect both the duration and amount in real income."
      ],
      [
        "Renewal",
        "The point when rent is reset and the continued tenancy is assessed. Do not look only at the possible increase; consider move-out risk and the vacancy loss that could follow."
      ],
      [
        "Monthly and annual receipts",
        "Add monthly receipts across the year to see how much cash actually came in. Compare with the prior year including vacancy, concessions and uncollected amounts to see the income trend."
      ]
    ],
    "methodGuide": [
      {
        "title": "Set the lease terms as the baseline",
        "paragraphs": [
          "You cannot judge whether actual collection is normal until the agreed terms are organized as a clear baseline.",
          "For each unit, keep monthly rent, service charges, deposit, due date, lease term and renewal date together. If terms changed, separate the original terms from the current ones."
        ],
        "checks": [
          "Monthly rent",
          "Service charges",
          "Deposit",
          "Scheduled payment date"
        ],
        "caution": "After several renewals, current terms can easily be confused with older terms."
      },
      {
        "title": "Record actual receipts every month",
        "paragraphs": [
          "Contracted rent is a promise; actual receipts are the operating result. Put the two side by side to reveal arrears and concessions.",
          "Record the scheduled date, actual date, amount received and any difference each month. A partial payment should not be treated as a normal full payment; keep the shortfall visible."
        ],
        "checks": [
          "Scheduled payment date",
          "Actual payment date",
          "Amount received",
          "Difference"
        ],
        "caution": "If you only reconcile the month-end total, late and partial-payment patterns disappear."
      },
      {
        "title": "Separate one-off delays from repeated late payment",
        "paragraphs": [
          "A single late payment and a payment that arrives late every month have different management implications. Repeated delay becomes operating history for lease and renewal decisions.",
          "Track the number of delays and days late, and check whether unpaid balances are appearing at the same time."
        ],
        "checks": [
          "Number of delays",
          "Average days late",
          "Accumulated arrears",
          "Resolution status"
        ],
        "caution": "Ignoring small or short delays repeatedly removes the evidence you need later."
      },
      {
        "title": "Track service-charge collection separately",
        "paragraphs": [
          "Rent can arrive normally while service charges keep going unpaid, making actual collection weaker than the lease suggests.",
          "Record rent and service charges separately and accumulate any uncollected service charges. Also distinguish pass-through reconciliation from a fixed service charge."
        ],
        "checks": [
          "Agreed service charge",
          "Amount collected",
          "Uncollected balance",
          "Settlement method"
        ],
        "caution": "Combining rent and service charges into one total hides the source of missing collection."
      },
      {
        "title": "Include concessions, reductions and vacancy",
        "paragraphs": [
          "Rent-free periods and temporary reductions lower actual income below the lease headline. If there was vacancy, the income not received during that period belongs in the same view.",
          "Including tenant-acquisition costs as well gives a more accurate picture of first-year collection."
        ],
        "checks": [
          "Rent-free period",
          "Reduction amount",
          "Vacancy period",
          "Tenant-acquisition costs"
        ],
        "caution": "Focus on actual collection, not simply that a new lease was signed. Vacancy, concessions and brokerage costs are easy to overlook."
      },
      {
        "title": "Reassess rent before renewal",
        "paragraphs": [
          "Higher rent does not always mean higher income. If an increase causes the tenant to leave, vacancy loss can outweigh the increase.",
          "Compare local market levels, tenant stability, the realistic increase and the likelihood of move-out together."
        ],
        "checks": [
          "Local market level",
          "Current rent",
          "Possible increase",
          "Expected vacancy if tenant leaves"
        ],
        "caution": "Ignoring vacancy risk and looking only at the percentage increase can reduce annual real income."
      },
      {
        "title": "Turn monthly records into an annual view",
        "paragraphs": [
          "One month of normal collection is not enough to judge a building's rent income. Add up what actually arrived over the full year.",
          "Review monthly receipts together with concessions, vacancy and uncollected service charges, then compare the result with the previous year."
        ],
        "checks": [
          "Annual actual receipts",
          "Annual vacancy period",
          "Total concessions",
          "Year-over-year change"
        ],
        "caution": "Keeping monthly records without an annual comparison can hide the direction of the income trend."
      }
    ],
    "signalsDetailed": [
      {
        "title": "Payment dates keep slipping",
        "desc": "Even if the full amount arrives, repeated delays can signal a change in the operating pattern.",
        "checks": [
          "Delays in the last six months",
          "Average days late",
          "Whether delays are getting longer",
          "Whether arrears are appearing"
        ],
        "interpret": "Look for repetition and a worsening trend, not one or two isolated delays."
      },
      {
        "title": "Unpaid service charges are accumulating",
        "desc": "Rent may be current while missed service charges lower the real collection rate.",
        "checks": [
          "Agreed service charge",
          "Amount collected",
          "Accumulated shortfall",
          "Whether it repeats by tenant"
        ],
        "interpret": "Separate rent from service charges and recalculate the collection rate."
      },
      {
        "title": "Rent went up but actual income barely changed",
        "desc": "Vacancy, concessions, rent-free periods or acquisition costs may have offset the increase.",
        "checks": [
          "Annual receipts before and after the increase",
          "Vacancy period",
          "Concessions",
          "New-tenant acquisition costs"
        ],
        "interpret": "Compare actual collection across the whole period, not the headline rent."
      },
      {
        "title": "Annual income is lower than last year",
        "desc": "Monthly results can look normal while accumulated vacancy or uncollected amounts weaken the annual result.",
        "checks": [
          "Annual actual receipts",
          "Vacancy period",
          "Uncollected amounts",
          "Concessions",
          "Year-over-year change"
        ],
        "interpret": "Trace monthly records backward to identify when the gap began."
      }
    ],
    "examplesDetailed": [
      {
        "title": "The monthly rent arrives 7–10 days late every month.",
        "desc": [
          "The rent is still being paid, but the delay is repeating.",
          "What matters is whether the same pattern has continued for several months, rather than one or two isolated delays."
        ],
        "checks": [
          "Delays in the last six months",
          "Average days late",
          "Accumulated arrears",
          "Whether service charges are also late"
        ],
        "judge": "If the delay keeps lengthening or partial arrears begin to appear, reassess whether the tenant's cash-flow position may be changing rather than treating it as a simple timing issue.",
        "record": "Scheduled date · actual date · days late · unpaid amount"
      },
      {
        "title": "Rent was increased, but the unit sat vacant for two months after move-out.",
        "desc": [
          "The rent increase alone looks positive, but two months of vacancy can reduce actual annual income."
        ],
        "checks": [
          "Rent before increase",
          "Rent after increase",
          "Two months of vacancy loss",
          "Brokerage and rent-free incentives"
        ],
        "judge": "Do not calculate only the rent increase. Compare actual receipts over the same 12-month period, including the vacant months after move-out.",
        "record": "Receipts before/after increase · vacancy period · new-lease costs · recovery point"
      },
      {
        "title": "Service charges have been missed for several months.",
        "desc": [
          "If you focus only on rent being paid, repeated service-charge shortfalls reduce the true collection rate."
        ],
        "checks": [
          "Contracted service charge",
          "Amount collected",
          "Accumulated shortfall",
          "Whether it repeats by tenant"
        ],
        "judge": "Treat rent and service charges as separate flows and check whether the uncollected balance is growing.",
        "record": "Monthly agreed charge · collection · shortfall · running balance"
      },
      {
        "title": "A new lease included one month rent-free.",
        "desc": [
          "The lease may look normal on paper, but first-year actual receipts are lower by the rent-free period.",
          "If there was vacancy before the lease or brokerage cost, include those as well."
        ],
        "checks": [
          "Contracted rent",
          "Rent-free period",
          "Previous vacancy period",
          "Brokerage and fit-out incentives"
        ],
        "judge": "Evaluate income using the amount actually received in the first year, not the stated annual rent total.",
        "record": "Lease date · rent-free period · first payment date · first-year receipts"
      }
    ],
    "periodsDetailed": [
      {
        "title": "Monthly",
        "desc": "Check payment and collection status.",
        "checks": [
          "Scheduled payment date",
          "Actual payment date",
          "Arrears and late payment",
          "Service-charge collection",
          "Current-month concessions"
        ],
        "judge": "Do not look only at the month-end total; check timing and omissions as well."
      },
      {
        "title": "Quarterly",
        "desc": "Look for repeating patterns and changes.",
        "checks": [
          "Repeated late payment",
          "Accumulated service-charge shortfall",
          "Income change around vacancy",
          "Repeated concessions"
        ],
        "judge": "Separate a one-month anomaly from a recurring trend."
      },
      {
        "title": "Before renewal",
        "desc": "Review rent adjustment together with move-out risk.",
        "checks": [
          "Local market level",
          "Current rent",
          "Potential increase",
          "Renewal intention",
          "Expected vacancy loss"
        ],
        "judge": "Compare how annual real income changes, not just the rent-increase percentage."
      },
      {
        "title": "Annually",
        "desc": "Recalculate the building's actual rent income for the year.",
        "checks": [
          "Annual actual receipts",
          "Vacancy period",
          "Total concessions",
          "Uncollected service charges",
          "Year-over-year change"
        ],
        "judge": "Return to the monthly records to identify where the annual difference began."
      }
    ],
    "summaryDetailed": [
      {
        "title": "Separate contracted rent from actual income.",
        "desc": "Lease rent is the baseline; actual receipts are the operating result. Viewing both together reveals the impact of arrears, concessions and vacancy."
      },
      {
        "title": "Track timing as well as the collection rate.",
        "desc": "Do not stop at whether the total arrived. Record when it arrived, whether service charges were fully collected and whether delays are repeating."
      },
      {
        "title": "Turn monthly records into an annual view.",
        "desc": "What matters more than one normal month is how much actually arrived over the year. Add monthly receipts and compare them with the prior year."
      }
    ],
    "takeaway": "Watch actual cash collection, not just contracted rent."
  },
  {
    "id": "vacancy",
    "num": "02",
    "code": "VACANCY",
    "name": "Vacancy Management",
    "prompt": "Manage vacancy before it starts",
    "introParagraphs": [
      "Vacancy is not a problem that begins only after a tenant leaves. It starts with checking lease expiry early and assessing the likelihood of renewal.",
      "Once a unit is vacant, do not jump straight to lowering the rent. First identify why it is empty. Pricing, condition, permitted use, parking, access, competing space and lease terms require different responses.",
      "Vacancy management is not simply filling an empty unit. It is about reducing both the vacancy period and the causes behind it."
    ],
    "items": [
      [
        "Lease expiry",
        "The first schedule point that can reveal move-out risk. Set a review date several months before expiry to check renewal intent in advance."
      ],
      [
        "Renewal",
        "Confirms whether the tenant intends to stay and whether terms need to be renegotiated. Classifying the status as confirmed, undecided or expected move-out makes it easier to time leasing preparation."
      ],
      [
        "Expected move-out",
        "If a move-out is likely, prepare property photos, proposed terms, broker materials and any necessary minor works before the space becomes vacant."
      ],
      [
        "Vacancy period",
        "The period in which rent is not being generated. Record the start date consistently so the real vacancy loss can be measured."
      ],
      [
        "Asking terms",
        "Compare the current asking rent with competing local space. Review rent together with deposit, service charges, incentives and other lease conditions."
      ],
      [
        "Inquiry volume",
        "The first signal of market response. Separating no inquiries from many inquiries that fail to convert helps narrow down the cause."
      ],
      [
        "Lease conversion",
        "How often inquiries become signed leases. If there are many inquiries but no agreements, revisit condition, terms, permitted use or other factors."
      ],
      [
        "Vacancy loss",
        "The total loss from unreceived rent plus fixed costs that continue during vacancy and any costs created by changing leasing terms."
      ]
    ],
    "methodGuide": [
      {
        "title": "Review lease expiry early",
        "paragraphs": [
          "Preparation time comes from managing the lease-expiry date, not from waiting for the move-out date.",
          "List expiry dates by unit. Check renewal likelihood in advance, and when move-out risk appears, set dates for photos, proposed terms and any pre-letting repairs."
        ],
        "checks": [
          "Lease expiry",
          "Advance review date",
          "Current rent",
          "Expected renewal status"
        ],
        "caution": "If you wait until just before expiry, renewal negotiation and re-leasing preparation happen at the same time."
      },
      {
        "title": "Confirm the likelihood of renewal",
        "paragraphs": [
          "The earlier you understand whether the tenant wants to stay, the more time you have to prepare for the next tenant.",
          "Check intention to remain, current concerns, rental terms and relocation possibility, then classify the status as confirmed, undecided or expected move-out."
        ],
        "checks": [
          "Intention to stay",
          "Concerns with current terms",
          "Relocation possibility",
          "Confirmation status"
        ],
        "caution": "Do not treat a verbal intention as a confirmed renewal."
      },
      {
        "title": "Start marketing preparation when move-out risk appears",
        "paragraphs": [
          "If photos and terms are prepared only after move-out is confirmed, market exposure starts late.",
          "Prepare the unit condition, photos, asking terms, broker information and any minor pre-letting repairs as early as practical."
        ],
        "checks": [
          "Unit photos",
          "Asking terms",
          "Broker materials",
          "Pre-letting repairs"
        ],
        "caution": "Confirm whether photography and access are permitted before the tenant leaves."
      },
      {
        "title": "Record the vacancy start date consistently",
        "paragraphs": [
          "The vacancy period is the baseline for calculating actual loss.",
          "Separate the date rent stopped accruing from the physical handover date, and record fixed costs that continue while the unit is empty."
        ],
        "checks": [
          "Vacancy start date",
          "Handover date",
          "Monthly fixed costs",
          "Marketing start date"
        ],
        "caution": "Do not change the date definition from case to case."
      },
      {
        "title": "Separate the causes of vacancy",
        "paragraphs": [
          "Without a clear cause, the response often collapses into simply cutting the rent.",
          "Use inquiry volume and conversion to examine pricing, condition, location, permitted use, parking, access, competing properties, lease terms and exposure separately."
        ],
        "checks": [
          "Inquiry volume",
          "Conversion rate",
          "Competing local terms",
          "Repeated feedback"
        ],
        "caution": "Do not conclude the cause from one or two opinions."
      },
      {
        "title": "Change the response to match the cause",
        "paragraphs": [
          "A pricing problem and a building-condition problem need different solutions.",
          "If price is the issue, adjust terms. If condition is the issue, improve the space. If exposure is weak, improve photography and channels. If demand is narrow, reconsider the range of suitable uses."
        ],
        "checks": [
          "Pricing adjustment",
          "Condition improvement",
          "Exposure improvement",
          "Range of suitable uses"
        ],
        "caution": "Changing several variables at once makes it difficult to tell what worked."
      },
      {
        "title": "Compare vacancy loss with changing the terms",
        "paragraphs": [
          "Holding the current rent does not always produce the higher return.",
          "Compare the expected vacant period at current terms with the expected leasing date after an adjustment, then evaluate the total future loss in each case."
        ],
        "checks": [
          "Current rent",
          "Adjusted rent",
          "Expected vacant months",
          "Fixed costs during vacancy"
        ],
        "caution": "Do not compare rent alone and forget fixed costs or brokerage costs."
      }
    ],
    "signalsDetailed": [
      {
        "title": "There are almost no inquiries",
        "desc": "If the space is being marketed but receives little interest, first examine pricing, exposure, location and demand for the permitted use.",
        "checks": [
          "Marketing channels",
          "Views and inquiries",
          "Competing properties",
          "Asking terms"
        ],
        "interpret": "When there is no inquiry flow, diagnose the lack of incoming demand before focusing on final lease terms."
      },
      {
        "title": "There are inquiries but no leases",
        "desc": "Traffic exists, but prospects may be dropping out because of the final terms or the condition of the space.",
        "checks": [
          "Inquiry count",
          "Site visits",
          "Reasons for rejection",
          "Lease terms"
        ],
        "interpret": "Identify whether prospects are lost between inquiry, viewing and agreement."
      },
      {
        "title": "The same unit keeps becoming vacant",
        "desc": "The issue may be specific to that unit's layout, access, condition or visibility rather than the whole building.",
        "checks": [
          "Vacancy history by unit",
          "Floor and access route",
          "Condition",
          "Previous tenant uses"
        ],
        "interpret": "Separate unit-specific problems from building-wide problems."
      },
      {
        "title": "Lowering the price does not improve response",
        "desc": "This can signal that price is not the main cause.",
        "checks": [
          "Inquiries before and after price change",
          "Condition and parking",
          "Demand by use",
          "Competing properties"
        ],
        "interpret": "Recheck factors other than price."
      }
    ],
    "examplesDetailed": [
      {
        "title": "The unit has remained vacant for six months at the same asking rent.",
        "desc": [
          "The asking terms have been preserved, but there has been no rental income for six months while service, financing and other fixed costs continue."
        ],
        "checks": [
          "Current rent",
          "Adjusted rent",
          "Six months of lost income",
          "Fixed costs during vacancy"
        ],
        "judge": "Compare the total loss with a scenario where a modest rent adjustment leads to earlier occupancy.",
        "record": "Vacancy start date / monthly loss / terms-change date / lease date"
      },
      {
        "title": "There are many inquiries, but none become leases.",
        "desc": [
          "Marketing response exists, but if prospects drop out after a viewing, the issue may be the space, parking or lease terms rather than headline price."
        ],
        "checks": [
          "Inquiry count",
          "Site visits",
          "Reasons for rejection",
          "Competing properties"
        ],
        "judge": "Review the funnel step by step to see whether traffic is healthy but conversion falls after the site visit.",
        "record": "Inquiry / visit / rejection reason / terms changes"
      },
      {
        "title": "The same unit becomes vacant repeatedly.",
        "desc": [
          "Even when the building's overall vacancy is low, one unit that turns over repeatedly can have its own structural or operational issue."
        ],
        "checks": [
          "Unit vacancy history",
          "Floor and access",
          "HVAC and amenities",
          "Previous tenant uses"
        ],
        "judge": "Compare prior records to see whether the reasons for move-out are repeating.",
        "record": "Move-in/out dates / use / reason for move-out / repair history"
      },
      {
        "title": "The asking rent was reduced, but inquiry volume did not improve.",
        "desc": [
          "If response remains weak after a price adjustment, revisit exposure, condition, parking, access or demand for the intended use."
        ],
        "checks": [
          "Inquiry volume before/after change",
          "Photos and exposure",
          "Nearby vacancy",
          "Demand by use"
        ],
        "judge": "Change one major condition at a time and compare the response.",
        "record": "Price-change date / exposure change / inquiries / result"
      }
    ],
    "periodsDetailed": [
      {
        "title": "Several months before expiry",
        "desc": "Check renewal and move-out risk.",
        "checks": [
          "Lease expiry",
          "Renewal intention",
          "Rental terms",
          "Tenant concerns"
        ],
        "judge": "This stage is about securing preparation time."
      },
      {
        "title": "As soon as move-out is confirmed",
        "desc": "Start marketing preparation and necessary works.",
        "checks": [
          "Move-out date",
          "Photos",
          "Asking terms",
          "Pre-letting repairs"
        ],
        "judge": "Bring forward anything that can be prepared before the vacancy begins."
      },
      {
        "title": "Around 30 days vacant",
        "desc": "Review the initial market response.",
        "checks": [
          "Inquiry volume",
          "Site visits",
          "Reasons for rejection",
          "Competing terms"
        ],
        "judge": "Make a first judgment on whether the issue is exposure or the offer itself."
      },
      {
        "title": "Around 60–90 days vacant",
        "desc": "Reassess why the vacancy is becoming prolonged.",
        "checks": [
          "Price",
          "Condition",
          "Use",
          "Parking",
          "Exposure",
          "Total loss"
        ],
        "judge": "If the original response has not worked, rebuild the hypothesis about the cause."
      }
    ],
    "summaryDetailed": [
      {
        "title": "Manage vacancy before the lease ends.",
        "desc": "Starting only after move-out leaves too little preparation time. Manage expiry and renewal dates first."
      },
      {
        "title": "Diagnose the cause before cutting the price.",
        "desc": "The response changes depending on whether there are no inquiries, many inquiries but no conversion, or repeated vacancy in one unit."
      },
      {
        "title": "Compare total loss, not rent alone.",
        "desc": "Include the vacancy period and continuing fixed costs when deciding whether keeping or adjusting the terms creates the smaller real loss."
      }
    ],
    "takeaway": "Diagnose why a space is vacant, not only how long it has been empty."
  },
  {
    "id": "tenant",
    "num": "03",
    "code": "TENANT",
    "name": "Tenant Management",
    "prompt": "Manage tenants through clear records",
    "introParagraphs": [
      "Tenant management is not about creating a close personal relationship. It is about clearly recording matters that affect the operation of the property.",
      "Repair requests, responsibility for costs, lease changes, arrears, renewals and move-outs are all areas where memories can differ later, so keep the date and outcome.",
      "You do not need to record every conversation. Keep a consistent record of matters that affect money, the lease, the building or the schedule."
    ],
    "items": [
      [
        "Lease information",
        "Keep the lease term, rent, service charges, deposit, special terms and contact details together based on the current agreement."
      ],
      [
        "Requests",
        "Record operationally important requests with the date. Classifying them as urgent, routine, or cost/lease related makes priorities clearer."
      ],
      [
        "Complaints and issues",
        "Record whether the issue repeats, where it occurs and how it affects the tenant's operation. This helps separate isolated complaints from structural problems."
      ],
      [
        "Repair requests",
        "Connect the reported date, photos, cause, responsible party, contractor, cost and completion date."
      ],
      [
        "Late payment",
        "Record not only the amount but also the date, days late and date resolved so repeated patterns are visible."
      ],
      [
        "Lease changes",
        "For changes to rent, service charges, permitted use or special terms, keep the before-and-after conditions together with the effective date."
      ],
      [
        "Renewal",
        "Before expiry, review the tenant's operating history together with current market conditions before deciding whether and how to renew."
      ],
      [
        "Move-out and reinstatement",
        "Confirm the move-out date, condition of the space, reinstatement scope, outstanding balances and deposit settlement in advance."
      ]
    ],
    "methodGuide": [
      {
        "title": "Keep lease information in one place",
        "paragraphs": [
          "When each tenant's basic terms are scattered, requests and later changes are harder to assess.",
          "Keep the lease term, rent, service charges, deposit, special terms and contact details together based on the current agreement."
        ],
        "checks": [
          "Lease term",
          "Rent",
          "Deposit",
          "Special terms"
        ],
        "caution": "After renewal, it is easy to confuse the previous lease with the current one."
      },
      {
        "title": "Turn important contacts and requests into operating records",
        "paragraphs": [
          "Important requests are easy to remember differently over time.",
          "Do not record every conversation. Record only requests that affect cost, the lease, facilities or timing, together with the date."
        ],
        "checks": [
          "Request date",
          "Request details",
          "Related facility",
          "Required action date"
        ],
        "caution": "Do not over-record private or everyday conversation."
      },
      {
        "title": "Classify repair requests by urgency and responsibility",
        "paragraphs": [
          "The nature of the request changes both the priority and what needs to be checked.",
          "Separate urgent safety or leakage issues from routine inconvenience and from requests that require agreement on who pays."
        ],
        "checks": [
          "Urgency",
          "Cause",
          "Photos",
          "Impact on operations"
        ],
        "caution": "Do not delay an urgent safety issue while debating cost responsibility."
      },
      {
        "title": "Confirm who is responsible for the cost",
        "paragraphs": [
          "Disputes often arise not over whether a repair is needed, but over who should pay for it.",
          "Review the lease, likely cause and any tenant-caused damage, then record the agreed responsibility and allocation of cost."
        ],
        "checks": [
          "Lease basis",
          "Cause of fault",
          "Responsible party",
          "Agreed outcome"
        ],
        "caution": "Do not leave a cost-sharing agreement only as a verbal understanding."
      },
      {
        "title": "Connect late-payment history to lease management",
        "paragraphs": [
          "Repeated late payment is not only an income issue; it can also become relevant to renewal decisions.",
          "Record the date, amount, days late and date normalized, then look for repetition."
        ],
        "checks": [
          "Late-payment date",
          "Amount",
          "Days late",
          "Resolved date"
        ],
        "caution": "Keep income records and tenant history connected rather than managing them as unrelated records."
      },
      {
        "title": "Keep lease changes as before-and-after records",
        "paragraphs": [
          "If only the current terms remain, you cannot see what changed or when.",
          "For rent, service charges, permitted use or special terms, keep the previous condition, new condition, effective date and evidence of agreement."
        ],
        "checks": [
          "Before",
          "After",
          "Effective date",
          "Evidence of agreement"
        ],
        "caution": "Do not overwrite the old value and erase the history."
      },
      {
        "title": "Decide on renewal before expiry",
        "paragraphs": [
          "Renewal is the process of confirming intent and agreeing the next set of terms.",
          "Review late payment, complaints, general management history and proposed terms together. If move-out is agreed, move directly into reinstatement, outstanding-balance and deposit-settlement preparation."
        ],
        "checks": [
          "Expiry date",
          "Operating history",
          "Market rent",
          "Move-out risk"
        ],
        "caution": "Vacancy duration and asking-price decisions are handled separately under 02 Vacancy Management."
      },
      {
        "title": "Close the tenant history with move-out and reinstatement",
        "paragraphs": [
          "This becomes the baseline for deposit settlement and preparing the unit for the next letting.",
          "Confirm the move-out date, condition, reinstatement scope, unpaid amounts, deposit settlement, keys and access methods."
        ],
        "checks": [
          "Move-out date",
          "Reinstatement",
          "Outstanding balance",
          "Deposit settlement"
        ],
        "caution": "Do not wait until the move-out day to inspect the condition for the first time."
      }
    ],
    "signalsDetailed": [
      {
        "title": "The same repair request keeps returning",
        "desc": "The symptom may have been treated without resolving the cause, or tenant frustration may be accumulating.",
        "checks": [
          "Number of requests",
          "Same location",
          "Previous repair",
          "Time to recurrence"
        ],
        "interpret": "Connect the facility issue with the tenant's repeated inconvenience."
      },
      {
        "title": "Verbal agreements are increasing",
        "desc": "When cost, permitted use or lease terms change only through conversation, the risk of conflicting memories grows.",
        "checks": [
          "Agreed point",
          "Date",
          "Amount",
          "Whether written follow-up exists"
        ],
        "interpret": "Reassess whether any verbal agreement that affects operations should be documented."
      },
      {
        "title": "Late payments and complaints are rising together",
        "desc": "This can indicate a change in the tenant's operating condition or a deterioration in the relationship.",
        "checks": [
          "Late-payment frequency",
          "Nature of complaints",
          "Signs of business change",
          "Renewal timing"
        ],
        "interpret": "Look at the pattern of events occurring together, not only each event separately."
      },
      {
        "title": "Move-out intent appears suddenly",
        "desc": "Renewal discussions or management of recurring concerns may have started too late.",
        "checks": [
          "Time remaining to expiry",
          "Previous requests",
          "Outstanding concerns",
          "Leasing-preparation status"
        ],
        "interpret": "For future leases, move the renewal-review point earlier."
      }
    ],
    "examplesDetailed": [
      {
        "title": "Heating and cooling repair requests keep repeating.",
        "desc": [
          "When the same symptom appears several times, it is no longer only a tenant complaint; facility history and cost are accumulating as well."
        ],
        "checks": [
          "Request date",
          "Location",
          "Previous repair",
          "Cost",
          "Time to recurrence"
        ],
        "judge": "Treat request → repair → recurrence as one connected operating history.",
        "record": "Request / photos / contractor / outcome / follow-up date"
      },
      {
        "title": "A rent reduction was agreed verbally.",
        "desc": [
          "If a verbal arrangement starts operating like a lease term, later disputes can arise over the amount and duration."
        ],
        "checks": [
          "Reduction amount",
          "Effective period",
          "Agreement date",
          "Written evidence"
        ],
        "judge": "For a change that affects the lease, record the previous condition, new condition and duration of application.",
        "record": "Agreement date / effective period / before-and-after terms / evidence"
      },
      {
        "title": "We are considering renewal after repeated complaints.",
        "desc": [
          "Do not judge only by the relationship. Review the nature of the complaints, the response, payment history and current market terms together."
        ],
        "checks": [
          "Number of complaints",
          "Resolution outcome",
          "Late payment",
          "Proposed renewal terms"
        ],
        "judge": "Place operating history and market conditions side by side before deciding whether to renew.",
        "record": "Complaint history / outcomes / discussion / final decision"
      },
      {
        "title": "The parties disagree about reinstatement at move-out.",
        "desc": [
          "Without photos from before occupancy or records of approved changes, both sides may have to rely on different memories."
        ],
        "checks": [
          "Pre-occupancy photos",
          "Lease terms",
          "Approved changes",
          "Current condition"
        ],
        "judge": "Use photos and approval records as the basis for confirming the reinstatement scope.",
        "record": "Before/after photos / approvals / settlement result"
      }
    ],
    "periodsDetailed": [
      {
        "title": "When it happens",
        "desc": "Record important repairs, complaints and lease changes immediately.",
        "checks": [
          "Request date",
          "Details",
          "Photos",
          "Action",
          "Outcome"
        ],
        "judge": "Do not try to reconstruct the event from memory later."
      },
      {
        "title": "Monthly",
        "desc": "Review late payment and repeated requests.",
        "checks": [
          "Late payment",
          "Open requests",
          "Repeated complaints",
          "Unresolved cost responsibility"
        ],
        "judge": "Look for patterns that are beginning to repeat."
      },
      {
        "title": "Several months before renewal",
        "desc": "Prepare the renewal decision and terms.",
        "checks": [
          "Operating history",
          "Market rent",
          "Tenant concerns",
          "Move-out risk"
        ],
        "judge": "Secure enough time to prepare for possible vacancy."
      },
      {
        "title": "Before and at move-out",
        "desc": "Confirm condition, arrears, reinstatement and deposit settlement.",
        "checks": [
          "Move-out date",
          "Condition",
          "Outstanding balance",
          "Reinstatement",
          "Keys"
        ],
        "judge": "Separate advance inspection from final-day confirmation."
      }
    ],
    "summaryDetailed": [
      {
        "title": "Record important agreements.",
        "desc": "For anything that affects money, the lease, facilities or timing, keep the date and the outcome."
      },
      {
        "title": "Connect the request to the final resolution.",
        "desc": "Do not stop at logging a repair request or complaint; follow the action through to the result."
      },
      {
        "title": "Prepare renewal and move-out early.",
        "desc": "Review operating history together with market conditions and decide the next action before expiry."
      }
    ],
    "takeaway": "Keep important agreements and changes as a clear record."
  },
  {
    "id": "cost",
    "num": "04",
    "code": "COST",
    "name": "Cost Management",
    "prompt": "See what is actually left after costs",
    "introParagraphs": [
      "Higher rental income does not automatically mean more cash is left over. If insurance, financing, common-area costs and repairs rise faster, the operating result can actually worsen.",
      "Cost management is not simply about cutting spending. Separate recurring costs from preventive investment and from repeated spending on the same unresolved problem.",
      "This page focuses on money going out and the net cash flow that remains after those costs are deducted."
    ],
    "items": [
      [
        "Fixed costs",
        "Recurring monthly or annual costs such as taxes, insurance, financing and regular management expenses. Compare budgeted and actual amounts by period."
      ],
      [
        "Variable costs",
        "Costs such as common-area electricity, water, cleaning and consumables that change with usage and conditions. Review seasonality and consumption together."
      ],
      [
        "Unexpected costs",
        "Spending that is difficult to predict precisely, such as leaks, emergency work or sudden equipment failure. Track it separately to see whether it repeats."
      ],
      [
        "Repair costs",
        "Money spent to maintain or improve the building. Distinguish repeated repairs to the same asset from preventive work."
      ],
      [
        "Financing costs",
        "Interest and other financing-related costs. Check how changes in rates or loan terms affect actual cash flow."
      ],
      [
        "Taxes and insurance",
        "Recurring costs with different payment dates and amounts. Manage them separately so they are not omitted from annual operating cost."
      ],
      [
        "Net cash flow",
        "The amount left after actual rental income is reduced by operating, financing and repair costs. This is the final number used to assess operating performance."
      ],
      [
        "Budget",
        "A baseline for the next period that includes expected recurring costs and planned repairs. Compare actual spending against it and manage the difference."
      ]
    ],
    "methodGuide": [
      {
        "title": "Classify costs first",
        "paragraphs": [
          "You need consistent categories before you can identify why costs are changing.",
          "Separate fixed, variable and unexpected costs, then break out repairs, financing, taxes and insurance in more detail."
        ],
        "checks": [
          "Fixed costs",
          "Variable costs",
          "Unexpected costs",
          "Subcategories"
        ],
        "caution": "Do not change the classification rules from month to month."
      },
      {
        "title": "Record every monthly expense",
        "paragraphs": [
          "Small recurring costs can become material when added up over a year.",
          "Record the date, category, amount, payee and related unit or building system."
        ],
        "checks": [
          "Date incurred",
          "Category",
          "Amount",
          "Related location"
        ],
        "caution": "Collecting receipts without including them in the actual totals does not create a usable cost record."
      },
      {
        "title": "Separate recurring and one-off costs",
        "paragraphs": [
          "A single large expense and a structurally higher recurring cost mean different things.",
          "Separate repeat spending such as insurance, management and financing from one-off items such as major repairs."
        ],
        "checks": [
          "Recurring or not",
          "Frequency",
          "One-off item",
          "Likelihood of recurrence"
        ],
        "caution": "Do not conclude that normal operating cost is high because of one exceptional expense."
      },
      {
        "title": "Compare with previous periods",
        "paragraphs": [
          "The rate of change can reveal a problem more clearly than the absolute cost.",
          "Compare the same category with the previous month, previous quarter and same period last year to find sharp increases."
        ],
        "checks": [
          "Previous month",
          "Previous quarter",
          "Same period last year",
          "Rate of change"
        ],
        "caution": "Do not compare seasonal items such as summer electricity directly with winter without context."
      },
      {
        "title": "Find repeated repair spending",
        "paragraphs": [
          "Repeated spending on the same problem can signal that a root-cause repair is needed.",
          "Group repair count and cumulative cost by facility, then review repeated locations, contractors and symptoms."
        ],
        "checks": [
          "Repair count",
          "Cumulative cost",
          "Same location",
          "Time to recurrence"
        ],
        "caution": "Do not ignore repeat costs just because each individual repair is small."
      },
      {
        "title": "Separate the reasons costs are rising",
        "paragraphs": [
          "Preventive investment and inefficiency are not the same kind of cost increase.",
          "Classify the cause as preventive repair, value improvement, tenant retention, inefficiency, higher financing cost or another clear driver."
        ],
        "checks": [
          "Preventive purpose",
          "Value improvement",
          "Inefficiency",
          "Financing change"
        ],
        "caution": "Do not cut spending automatically just because the total increased."
      },
      {
        "title": "Calculate what is left after all costs",
        "paragraphs": [
          "Operating decisions should be based on the result after costs, not on gross income alone.",
          "Subtract operating, financing and repair costs from actual rental income for the period, then compare net cash flow with the previous year."
        ],
        "checks": [
          "Actual rental income",
          "Operating costs",
          "Financing costs",
          "Repair costs"
        ],
        "caution": "Do not repeat rent collection and arrears management here; those belong under 01 Rent Income."
      }
    ],
    "signalsDetailed": [
      {
        "title": "Costs are rising faster than income",
        "desc": "Even when rental income grows, profitability can weaken if costs rise more quickly.",
        "checks": [
          "Income growth",
          "Operating-cost growth",
          "Financing costs",
          "Repair costs"
        ],
        "interpret": "Identify which cost category created the gap in growth rates."
      },
      {
        "title": "The same facility keeps generating repair costs",
        "desc": "Repeated patch repairs can mean the underlying cause is still unresolved.",
        "checks": [
          "Repair count",
          "Cumulative cost",
          "Same location",
          "Time to recurrence"
        ],
        "interpret": "Compare accumulated repair cost with the cost of a deeper repair or replacement."
      },
      {
        "title": "Common-area utilities or service costs jump suddenly",
        "desc": "A change in consumption, equipment condition or tariff may have altered the cost structure.",
        "checks": [
          "Consumption versus prior periods",
          "Unit tariff",
          "Equipment changes",
          "Vacancy level"
        ],
        "interpret": "Separate usage from price rather than looking only at the total amount."
      },
      {
        "title": "Financing costs are higher than expected",
        "desc": "Changes in rates or loan terms can directly reduce the operating result.",
        "checks": [
          "Interest rate",
          "Monthly interest",
          "Loan balance",
          "Year-over-year financing cost"
        ],
        "interpret": "Track financing-cost changes separately from property operating income."
      }
    ],
    "examplesDetailed": [
      {
        "title": "Rent income increased, but less cash is left over.",
        "desc": [
          "Income improved, but insurance, financing or repair costs may have risen by even more."
        ],
        "checks": [
          "Rental income",
          "Operating costs",
          "Financing costs",
          "Repair costs",
          "Year-over-year change"
        ],
        "judge": "Review each category to see which cost increase offset the income gain.",
        "record": "Income and cost by period / cause of increase / net cash flow"
      },
      {
        "title": "The same equipment was repaired four times in one year.",
        "desc": [
          "Each repair may look small, but the accumulated cost and operational disruption can make replacement more economical."
        ],
        "checks": [
          "Repair count",
          "Cumulative cost",
          "Replacement cost",
          "Time to recurrence"
        ],
        "judge": "If cumulative repair cost keeps rising, compare expected future repair spending with replacement cost over the same period.",
        "record": "Repair date / contractor / cost / recurrence / replacement review"
      },
      {
        "title": "A large preventive repair increased this year's cost.",
        "desc": [
          "The cost is higher now, but the work may reduce future failures, vacancy or major repair risk."
        ],
        "checks": [
          "Purpose of work",
          "Expected life",
          "Past failures",
          "Future risk"
        ],
        "judge": "Compare the cost increase with the preventive benefit rather than treating it as simple inefficiency.",
        "record": "Purpose / cost / expected benefit / next review"
      },
      {
        "title": "Fixed costs continue while a unit is vacant.",
        "desc": [
          "Taxes, insurance, financing and some common-area costs continue even when rental income stops."
        ],
        "checks": [
          "Monthly fixed costs",
          "Vacancy period",
          "Financing cost",
          "Common-area costs"
        ],
        "judge": "Include continuing costs as well as lost rent when calculating vacancy loss.",
        "record": "Vacancy period / fixed costs / total loss"
      }
    ],
    "periodsDetailed": [
      {
        "title": "Monthly",
        "desc": "Classify and record costs incurred during the month.",
        "checks": [
          "Operating costs",
          "Financing costs",
          "Repair costs",
          "Unexpected costs"
        ],
        "judge": "Create a complete monthly baseline without omissions."
      },
      {
        "title": "Quarterly",
        "desc": "Review cost trends and repeated repairs.",
        "checks": [
          "Change from previous quarter",
          "Repeated repairs",
          "Common-area cost changes",
          "Vacancy fixed costs"
        ],
        "judge": "Separate one-off events from an emerging trend."
      },
      {
        "title": "Semiannually",
        "desc": "Review major spending and cumulative cost by facility.",
        "checks": [
          "Cumulative repairs by facility",
          "Insurance",
          "Financing terms",
          "Planned repairs"
        ],
        "judge": "Consider whether deeper repair or replacement is becoming necessary."
      },
      {
        "title": "Annually",
        "desc": "Summarize total costs and net cash flow.",
        "checks": [
          "Annual operating cost",
          "Financing costs",
          "Repair costs",
          "Actual rental income",
          "Net cash flow"
        ],
        "judge": "Compare with the prior year and set the next year's budget."
      }
    ],
    "summaryDetailed": [
      {
        "title": "Separate costs by type and repetition.",
        "desc": "Distinguish fixed, variable and unexpected costs, and separate one-off items from recurring ones."
      },
      {
        "title": "Look at changes and causes, not just amounts.",
        "desc": "Use period comparisons, repeated repairs and financing changes to understand why spending increased."
      },
      {
        "title": "Use net cash flow for the final judgment.",
        "desc": "Compare the amount left after operating, financing and repair costs are deducted from actual rental income."
      }
    ],
    "takeaway": "You only see the real return when income and costs are viewed together."
  },
  {
    "id": "facility",
    "num": "05",
    "code": "FACILITY",
    "name": "Facility Management",
    "prompt": "Spot warning signs before breakdowns",
    "introParagraphs": [
      "Facility management does not mean the owner has to become a technician. The key is knowing the normal condition, noticing small changes and handing the issue to a qualified professional at the right time.",
      "If the same leak or failure keeps returning, simply recording that it was repaired is not enough. Location, cause, work performed, cost and recurrence should be viewed as one history.",
      "Different building systems have different inspection points and warning signs. Set facility-specific criteria and checkpoints, then escalate based on repetition, expansion and safety impact."
    ],
    "items": [
      [
        "Roof and waterproofing",
        "Watch drainage, ponding and membrane condition in normal use, then check for leak traces or recurring cracks after rain."
      ],
      [
        "Facade",
        "Check cracks, loose or damaged finishes, discoloration and moisture traces. Escalate to professional inspection when there is safety risk or repeated change."
      ],
      [
        "Water supply and drainage",
        "Watch for pressure changes, slow drainage, odors, leakage and repeated blockage. If the same location keeps recurring, investigate the cause rather than treating it as an isolated event."
      ],
      [
        "Electrical systems",
        "Check repeated breaker trips, overheating, recurring outages, lighting faults and changes in common-area electricity use. Do not attempt ad-hoc repair of safety-related symptoms."
      ],
      [
        "Fire safety",
        "Manage statutory inspection requirements separately from day-to-day checks of alarms, fire equipment and escape routes. Keep mandatory inspection records distinct from general facility checks."
      ],
      [
        "Elevators",
        "Connect unusual noise, door operation, stopping accuracy, repeat failures and scheduled maintenance history. Review failure count together with accumulated cost."
      ],
      [
        "Heating and cooling",
        "Watch performance decline, noise, leakage, filters and consumables, repeated failure and replacement timing. Review condition before peak seasonal use."
      ],
      [
        "Parking and common areas",
        "Check damage, lighting, slip hazards, drainage, access and safety. Record locations where inconvenience or accident risk repeatedly occurs."
      ]
    ],
    "methodGuide": [
      {
        "title": "Know the normal condition first",
        "paragraphs": [
          "You can only recognize change when normal condition is defined as the baseline.",
          "Keep reference photos and notes on the normal appearance and operation of major building systems."
        ],
        "checks": [
          "Reference photos",
          "Normal sound and operation",
          "Inspection date",
          "Installation or replacement date"
        ],
        "caution": "Do not take photos only after something fails."
      },
      {
        "title": "Record small warning signs",
        "paragraphs": [
          "Small changes such as cracks, leaks, unusual noise or reduced performance can be the beginning of a repeated failure.",
          "Record the location, symptom, first observed date and photos, then check whether it returns."
        ],
        "checks": [
          "Location",
          "Symptom",
          "First observed date",
          "Photos"
        ],
        "caution": "Avoid vague notes such as 'seems strange.'"
      },
      {
        "title": "Separate urgency from inconvenience",
        "paragraphs": [
          "A safety risk and a routine inconvenience require different response speeds.",
          "Prioritize based on safety, spread of water or damage, operational impact and whether the issue involves a regulated system."
        ],
        "checks": [
          "Safety risk",
          "Operational impact",
          "Potential to spread",
          "Regulatory obligation"
        ],
        "caution": "Do not lower the urgency simply because the repair may be expensive."
      },
      {
        "title": "Define when professional inspection is required",
        "paragraphs": [
          "The owner's role is usually not to repair the system personally, but to bring in the right specialist at the right time.",
          "Repeated failure, safety risk, regulated equipment and unexplained symptoms should be escalated to qualified contractors or inspectors."
        ],
        "checks": [
          "Repetition",
          "Safety",
          "Regulated system",
          "Unclear cause"
        ],
        "caution": "Do not use informal repairs as a substitute for required inspection or safety work."
      },
      {
        "title": "Keep the repair and its cost in one history",
        "paragraphs": [
          "When repair details and cost records are separated, cumulative spending on the same problem is hard to see.",
          "Keep the contractor, work performed, parts replaced, cost, completion date and photos together as one event."
        ],
        "checks": [
          "Contractor",
          "Work performed",
          "Cost",
          "Completion date"
        ],
        "caution": "Do not store the receipt separately with no link to the repair event."
      },
      {
        "title": "Check whether the problem returns",
        "paragraphs": [
          "Whether a problem comes back matters more than simply marking a repair as complete.",
          "Set a follow-up date. If the same location or symptom returns, compare it with the previous repair."
        ],
        "checks": [
          "Next review date",
          "Recurrence",
          "Time to recurrence",
          "Cumulative cost"
        ],
        "caution": "Do not close the case and never look at it again."
      }
    ],
    "signalsDetailed": [
      {
        "title": "A leak keeps returning in the same location",
        "desc": "A patch may be suppressing the symptom while the underlying cause remains.",
        "checks": [
          "Location",
          "Rain conditions",
          "Previous repair",
          "Time to recurrence"
        ],
        "interpret": "Decide whether the point has been reached where root-cause investigation matters more than another patch."
      },
      {
        "title": "Elevator or electrical failures are becoming more frequent",
        "desc": "Repeated failures can lead to safety risk, business interruption and rising cost.",
        "checks": [
          "Failure count",
          "Symptoms",
          "Inspection findings",
          "Cumulative cost"
        ],
        "interpret": "Use repetition and safety impact to decide when specialist inspection or replacement review is needed."
      },
      {
        "title": "Heating or cooling performance falls every season",
        "desc": "This can signal ageing equipment or an unresolved recurring problem.",
        "checks": [
          "Seasonal performance",
          "Repair count",
          "Energy cost",
          "Tenant complaints"
        ],
        "interpret": "Look at performance, cost and complaints together."
      },
      {
        "title": "The same statutory inspection issue keeps returning",
        "desc": "Repeated findings may mean the underlying corrective work was never fully completed.",
        "checks": [
          "Finding",
          "Correction date",
          "Repeat finding",
          "Contractor"
        ],
        "interpret": "Connect completion evidence with the next required inspection."
      }
    ],
    "examplesDetailed": [
      {
        "title": "The roof leak has been repaired three times.",
        "desc": [
          "If the same location keeps leaking, review whether each job only patched the symptom instead of addressing the cause."
        ],
        "checks": [
          "Location",
          "Rain event",
          "Previous repair",
          "Repair cost",
          "Time to recurrence"
        ],
        "judge": "Compare cumulative repair spending with the need for a more fundamental repair.",
        "record": "Photos / work performed / contractor / cost / recurrence"
      },
      {
        "title": "Elevator failures have become more frequent recently.",
        "desc": [
          "Each individual repair may be closed, but repeated shutdowns and complaints can become a larger problem than repair cost alone."
        ],
        "checks": [
          "Failure count",
          "Symptoms",
          "Inspection findings",
          "Downtime"
        ],
        "judge": "Review safety, business impact and accumulated repair cost together.",
        "record": "Failure date / downtime / contractor / action / recurrence"
      },
      {
        "title": "An electrical breaker keeps tripping.",
        "desc": [
          "Repeated tripping can be a sign that the cause needs inspection, such as overload or equipment fault, rather than repeated reset."
        ],
        "checks": [
          "Time of event",
          "Equipment in use",
          "Breaker",
          "Heat or burning smell"
        ],
        "judge": "Escalate safety-related electrical symptoms to a qualified professional immediately.",
        "record": "Event date / equipment / professional inspection / outcome"
      },
      {
        "title": "Heating and cooling performance is falling and complaints are increasing.",
        "desc": [
          "A facility problem can move beyond comfort and affect tenant satisfaction and renewal."
        ],
        "checks": [
          "Performance",
          "Energy cost",
          "Repair history",
          "Complaints",
          "Replacement cost"
        ],
        "judge": "If the same failure repeats, look first at safety, downtime and the scale of performance loss, then decide when specialist inspection or replacement review is appropriate.",
        "record": "Complaint / repair / cost / performance / decision"
      }
    ],
    "periodsDetailed": [
      {
        "title": "Monthly or quarterly visual review",
        "desc": "Check visible changes and repeated requests.",
        "checks": [
          "Leak traces",
          "Lighting",
          "Drainage",
          "Common-area damage",
          "Repeated requests"
        ],
        "judge": "Compare with the reference condition."
      },
      {
        "title": "Before and after seasonal change",
        "desc": "Review systems affected by seasonal conditions, such as HVAC, waterproofing and drainage.",
        "checks": [
          "Heating and cooling",
          "Roof and waterproofing",
          "Drainage",
          "Freezing and condensation"
        ],
        "judge": "This is the point to prepare before seasonal problems begin."
      },
      {
        "title": "Required inspection schedule",
        "desc": "Manage mandatory checks for systems such as fire safety and elevators separately.",
        "checks": [
          "Inspection date",
          "Provider",
          "Findings",
          "Corrective action complete"
        ],
        "judge": "Separate routine owner checks from legally required or specialist inspections."
      },
      {
        "title": "Immediately when an abnormal condition appears",
        "desc": "Safety, leakage, electrical and business-interruption issues should be recorded and acted on regardless of the normal schedule.",
        "checks": [
          "Date",
          "Photos",
          "Urgency",
          "Contractor",
          "Outcome"
        ],
        "judge": "Do not wait for the next routine inspection."
      }
    ],
    "summaryDetailed": [
      {
        "title": "You need a normal baseline to recognize change.",
        "desc": "Keep reference photos and normal-condition notes so warning signs and recurrence can be compared."
      },
      {
        "title": "The owner's role is to connect problems to the right inspection.",
        "desc": "Use clear thresholds for repeated failures, safety issues and regulated systems that should move to professional inspection."
      },
      {
        "title": "A repair is not complete until recurrence is checked.",
        "desc": "Connect work performed, cost, contractor and recurrence in one history to see accumulated problems."
      }
    ],
    "takeaway": "Find small warning signs before they become major failures.",
    "facilityDetails": [
      {
        "name": "Roof and waterproofing",
        "criteria": [
          "Water does not remain ponded for an extended period after rain",
          "The waterproofing layer is not lifting or cracking",
          "Leaks are not recurring at the same location",
          "Water ingress is not extending into interior spaces"
        ],
        "checks": [
          "Around roof drains",
          "Membrane seams",
          "Parapet junctions",
          "Previous repair areas",
          "Ponding traces",
          "Interior ceiling stains"
        ],
        "postTitle": "For roofs and waterproofing, recurring change matters more than simply asking whether it leaks.",
        "paragraphs": [
          "Water ingress can begin as small changes on the roof well before it becomes visible indoors. Ponding, lifted waterproofing and cracks at junctions may look minor at first, but repetition at the same location matters.",
          "A single stain is less informative than whether the same trace returns after rain, whether the ponding area grows, or whether new change appears around an old repair.",
          "The owner's job is not to diagnose the exact cause. The key is to judge repetition, expansion and interior impact, then decide whether the issue is still in observation or should move to professional inspection."
        ],
        "cases": [
          [
            "After heavy rain, water collects in one part of the roof but drains within a day and there is no interior leakage.",
            "Do not immediately assume major remedial work is required. Keep checking whether the same location repeats and whether the waterproofing changes."
          ],
          [
            "Ponding keeps returning at the same location and staining appears on the ceiling below.",
            "Move beyond simple observation and arrange professional investigation of the cause."
          ]
        ],
        "expert": "Repeated leakage in the same location · expanding membrane damage · water ingress reaching interiors · cause cannot be identified visually"
      },
      {
        "name": "Facade",
        "criteria": [
          "Cracks are not widening or lengthening",
          "There are no signs of loose or falling finish materials",
          "There are no moisture traces around windows or joints",
          "There is no falling-object risk above pedestrian areas"
        ],
        "checks": [
          "Wall cracks",
          "Loose tile or stone finishes",
          "Sealant and joints",
          "Around windows",
          "Projections and signage",
          "Debris or fall traces below"
        ],
        "postTitle": "For facades, change and location matter more than the mere presence of a crack.",
        "paragraphs": [
          "Not every crack carries the same risk. Compare whether an old hairline crack stays stable, whether its width or length changes, and whether it spreads in a new direction.",
          "Loose tile or stone and opening joints can lead not only to water ingress but also to falling-object risk. Changes above entrances and pedestrian routes should be assessed first as a safety issue, not a cosmetic one.",
          "Many facade areas cannot be checked closely from the ground. If the change is increasing or a falling risk is suspected, stop at visual observation and move to professional inspection."
        ],
        "cases": [
          [
            "A fine existing crack has shown no change compared with reference photos over several months.",
            "Do not assume it is actively worsening; continue comparing location and size over time."
          ],
          [
            "A facade finish is opening up and small fragments are visible below.",
            "Prioritize falling-object risk, reduce exposure to the area and arrange professional inspection."
          ]
        ],
        "expert": "Cracks are expanding · finish materials are lifting or falling · falling-object risk · high-level access is required"
      },
      {
        "name": "Water supply and drainage",
        "criteria": [
          "Water pressure has not changed suddenly",
          "Drainage is not becoming slow or backing up",
          "There are no leak traces around pipes or valves",
          "Odor or dampness is not recurring at the same location"
        ],
        "checks": [
          "Around meters and valves",
          "Ceiling and wall pipe routes",
          "Toilet and sink drains",
          "Common drains",
          "Pumps and tanks",
          "Locations where odor occurs"
        ],
        "postTitle": "Water and drainage problems should be caught before a small symptom spreads across multiple areas.",
        "paragraphs": [
          "Slow drainage or lower pressure can look minor but may be an early sign of blockage, leakage or pump trouble. It matters whether the symptom appears in one area or in several places at the same time.",
          "Distinguishing a single-unit issue from a multi-unit or multi-floor issue helps separate local plumbing problems from a shared building-system problem.",
          "When leakage increases or there is a risk of backup or contamination, it is no longer only an observation issue. Prioritize reducing the affected area and arranging professional inspection."
        ],
        "cases": [
          [
            "Only one basin drains slowly while the rest of the building is normal.",
            "Start by checking the local drain and trap area."
          ],
          [
            "Drainage slows on several floors at the same time and some spaces begin to back up.",
            "Treat it as a possible shared drainage-system problem and escalate to professional inspection."
          ]
        ],
        "expert": "Repeated backup · simultaneous issues in several spaces · spreading leakage · contamination or flooding risk"
      },
      {
        "name": "Electrical systems",
        "criteria": [
          "Breakers are not repeatedly tripping",
          "There is no heat or discoloration around outlets or distribution boards",
          "There is no burning smell, sparking or unusual sound",
          "The same issue is not repeating under a particular time or load condition"
        ],
        "checks": [
          "Distribution boards",
          "Breakers",
          "Outlets and switches",
          "Common-area lighting",
          "Electrical rooms",
          "Connections to electrical equipment"
        ],
        "postTitle": "With electrical systems, repeated risk signals matter more than whether equipment simply turns on.",
        "paragraphs": [
          "A breaker operating once matters less than repeated trips on the same circuit. Recording when it happens and what was running can help identify a repeating condition.",
          "Heat, discoloration, burning odor and sparks are not simple inconvenience; they can indicate fire risk. Do not keep resetting a breaker or reusing equipment without understanding the cause.",
          "Electrical systems are not an area for an owner to dismantle and investigate. When a risk signal appears, stop use where appropriate, secure the area and hand the issue to a qualified professional."
        ],
        "cases": [
          [
            "A breaker trips once immediately after several high-load appliances are used together, then operates normally.",
            "Review the load and equipment in use and watch whether it repeats under the same conditions."
          ],
          [
            "The same circuit trips repeatedly and there is heat or discoloration around an outlet.",
            "Stop repeated use and prioritize professional electrical inspection."
          ]
        ],
        "expert": "Repeated trips · heat or burning smell · sparking · electrical-room abnormality · cause cannot be identified safely"
      },
      {
        "name": "Fire safety",
        "criteria": [
          "Fire equipment is not blocked or damaged",
          "Escape routes remain clear",
          "There are no persistent alarm or panel indications",
          "Inspection findings have not been left unresolved"
        ],
        "checks": [
          "Extinguisher locations",
          "Around detectors and sprinklers",
          "Exit signs",
          "Fire doors",
          "Escape routes",
          "Alarm/control panel indications"
        ],
        "postTitle": "For fire safety, the question is not only whether equipment is broken, but whether it will be usable when needed.",
        "paragraphs": [
          "Having equipment installed is not enough. If extinguishers are blocked or escape routes are obstructed, the system may not work as intended during an emergency.",
          "Persistent panel indications, repeated alarms or fire doors that do not close properly may cause little everyday inconvenience but can matter significantly in an emergency.",
          "Required inspections and specialist maintenance may be regulated and require qualified providers. The owner should focus on observable conditions such as access, damage, abnormal indications and clear routes, and escalate issues appropriately."
        ],
        "cases": [
          [
            "Extinguishers are accessible, exit signs are visible and escape routes are clear.",
            "Maintain that ready-to-use condition as part of routine management."
          ],
          [
            "The alarm/control panel continues to show a fault and a fire door does not close correctly.",
            "Treat the condition as requiring specialist inspection and corrective action."
          ]
        ],
        "expert": "Persistent alarm fault · impaired fire-door function · blocked escape route · required inspection findings remain unresolved"
      },
      {
        "name": "Elevators",
        "criteria": [
          "Floor-level stopping remains accurate",
          "Doors do not open or close slowly or with impact",
          "Vibration or unusual noise is not repeating",
          "Stops or faults do not occur during operation"
        ],
        "checks": [
          "Floor stopping position",
          "Doors",
          "Buttons and indicators",
          "Operating noise",
          "Vibration",
          "Maintenance-provider notices"
        ],
        "postTitle": "With elevators, a small inconvenience can become a meaningful operating signal when it repeats.",
        "paragraphs": [
          "A door closing slowly once matters less than whether the same symptom repeats or appears only at a particular floor. Distinguishing the condition helps the maintenance provider investigate accurately.",
          "Stopping error, heavy impact and repeated unusual noise can affect user safety. Professional maintenance should take priority over informal adjustment.",
          "The owner's role is not to repair the elevator, but to identify repetition and the circumstances in which it occurs, communicate them clearly to the maintenance provider, and prioritize safe operation."
        ],
        "cases": [
          [
            "Door closing is intermittently slow only at one floor.",
            "Check whether the difference is floor-specific and repeatable, then give the maintenance provider a precise description."
          ],
          [
            "The car repeatedly stops out of level and there is heavy impact or unusual noise during travel.",
            "Treat this as requiring prompt inspection by the elevator maintenance provider."
          ]
        ],
        "expert": "Stops during operation · repeated leveling error · heavy impact or unusual noise · abnormal door-safety behavior"
      },
      {
        "name": "Heating and cooling",
        "criteria": [
          "The gap between set temperature and actual comfort is not widening",
          "Temperature differences between zones are not increasing",
          "There is no leakage, condensation or unusual noise",
          "Performance does not fall despite longer operating time"
        ],
        "checks": [
          "Indoor and outdoor units",
          "Drain lines",
          "Filters and air paths",
          "Mechanical room",
          "Zones with temperature differences",
          "Noise and vibration locations"
        ],
        "postTitle": "Heating and cooling systems often decline gradually before they fail outright.",
        "paragraphs": [
          "A system turning on and off does not by itself prove normal performance. Watch whether it needs to run longer than before to reach the same condition or whether temperature differences between zones are growing.",
          "Leakage, condensation and drainage problems can extend beyond comfort and damage ceilings or finishes. Check surrounding conditions together with performance change.",
          "Once the issue goes beyond routine items such as filters or accessible housekeeping and suggests refrigerant, electrical or mechanical faults, move from owner observation to professional inspection."
        ],
        "cases": [
          [
            "Only one zone struggles to reach temperature while the other zones are normal.",
            "Start by separating local factors such as the indoor unit and airflow in that zone."
          ],
          [
            "Performance falls across several zones and unusual noise from the outdoor equipment is increasing.",
            "Move to a professional review of the overall system condition."
          ]
        ],
        "expert": "Sharp performance decline · spreading leakage or condensation · mechanical abnormal noise · repeated faults"
      },
      {
        "name": "Parking and common areas",
        "criteria": [
          "There is no floor damage or slip hazard",
          "Lighting does not create unsafe dark zones",
          "Drainage is working and ponding is not recurring",
          "Pedestrian and vehicle routes are not obstructed"
        ],
        "checks": [
          "Parking floor",
          "Ramps and slopes",
          "Drains",
          "Common stairs and corridors",
          "Lighting",
          "Guardrails and doors"
        ],
        "postTitle": "Manage common areas before small inconveniences turn into accidents and recurring complaints.",
        "paragraphs": [
          "A floor crack or failed light may seem minor, but risk accumulates in spaces people use repeatedly. Give higher priority to locations with heavy traffic.",
          "Ponding, slippery surfaces, loose rails and blocked routes should be judged first by safety, not appearance. Where accident risk exists, temporary risk-reduction measures may come before permanent repair.",
          "Because common areas are shared by multiple tenants and visitors, distinguish a problem affecting one user from one that affects the overall route or safety of the building."
        ],
        "cases": [
          [
            "One parking-area light is out, but surrounding illumination remains adequate for safe movement.",
            "Confirm the risk level and manage it as a prompt maintenance item."
          ],
          [
            "Water repeatedly ponds on a ramp and creates a slip hazard, or a guardrail is loose.",
            "Reduce the immediate risk first, then carry out the required repair."
          ]
        ],
        "expert": "Fall or slip risk · blocked movement · repeated flooding · loose structural or safety elements"
      }
    ]
  },
  {
    "id": "record",
    "num": "06",
    "code": "RECORD",
    "name": "Records & Management Log",
    "prompt": "Build a usable operating history",
    "introParagraphs": [
      "A building record is not complete simply because there are many documents. Lease, income, cost, facility, tenant, and incident records need to connect on the same timeline before they become useful for management.",
      "Good records do more than preserve the past. They help identify recurring problems, set the next review date, and support decisions about renewal, repairs, and other follow-up actions.",
      "Record management is the final step that brings together everything created in areas 01–05 as one operating history and prepares that history for later EXIT decisions."
    ],
    "items": [
      [
        "Lease",
        "Keep current lease terms connected to their change history. Store the term, rent, service charges, deposit, special conditions, and change dates together so prior terms are easy to verify at renewal or move-out."
      ],
      [
        "Income",
        "Connect expected amounts with what actually arrived. Scheduled payment, actual receipt, delays, arrears, and concessions should carry forward the collection history from Rent Income management."
      ],
      [
        "Costs",
        "Connect spending to the event that caused it. Record the date, category, amount, payee, and related facility while leaving the economic evaluation of the expense to Cost management."
      ],
      [
        "Facilities",
        "Keep failures, repairs, and recurrence in one equipment history. Link location, symptoms, photos, contractor, work performed, cost, and recurrence while leaving inspection standards to Facility management."
      ],
      [
        "Tenants",
        "Record important requests, agreements, lease changes, and settlement outcomes. Connect the request date, agreement, cost responsibility, lease change, and result as one event."
      ],
      [
        "Incidents",
        "Keep the condition at the time of an incident and the response in chronological order. The event date, photos, emergency action, contractor, insurance, and final outcome should remain connected."
      ],
      [
        "Tax & Insurance",
        "Manage recurring payments, renewals, and supporting evidence as a separate record stream. Link payment dates, amounts, documents, renewal dates, and related policies or agreements."
      ],
      [
        "Photos, Quotes & Receipts",
        "Use supporting files as evidence attached to an event, not as a separate pile. File name, related event, date, contractor, and amount should make each document traceable."
      ]
    ],
    "methodGuide": [
      {
        "title": "Use one record system for each building",
        "paragraphs": [
          "When information is scattered across different storage locations, photos, costs, and outcomes from the same event become difficult to reconnect.",
          "Group lease, income, cost, facility, tenant, and incident records by building and standardize category names and date formats. If you own multiple buildings, separate the top-level folder or data unit for each property first."
        ],
        "checks": [
          "Building",
          "Record category",
          "Date format",
          "Storage location"
        ],
        "caution": "Do not use a different naming and date convention for every category."
      },
      {
        "title": "Use common fields across every record",
        "paragraphs": [
          "Records become difficult to search and compare when each type follows a different format.",
          "Use date, cost, photos or evidence, outcome, and next action as shared fields. Add supporting fields such as location, tenant, or contractor only when needed."
        ],
        "checks": [
          "Date",
          "Cost",
          "Photos / evidence",
          "Outcome",
          "Next action"
        ],
        "caution": "Do not write a long note and omit the result or next action."
      },
      {
        "title": "Connect each event from start to finish",
        "paragraphs": [
          "If the initial issue and the response are stored separately, it becomes difficult to tell whether the problem was actually resolved.",
          "Keep the event date, original condition, evidence, action, cost, result, and follow-up date together. If the same problem returns, create a new event but link it to the prior one."
        ],
        "checks": [
          "Event date",
          "Evidence",
          "Action",
          "Cost",
          "Outcome",
          "Follow-up"
        ],
        "caution": "Do not store photos, quotes, and receipts separately from the event they belong to."
      },
      {
        "title": "Summarize recurring operations monthly",
        "paragraphs": [
          "Items such as rent collection, arrears, costs, and vacancy repeat every month and are easier to review on a monthly basis.",
          "A monthly log is not a duplicate of every event. It is a quick summary of normal operating flow and the exceptions that mattered that month."
        ],
        "checks": [
          "Rental income",
          "Arrears",
          "Costs",
          "Vacancy",
          "Facility issues",
          "Exceptions"
        ],
        "caution": "Do not use the monthly log as a substitute for event records."
      },
      {
        "title": "Use quarterly records to spot change and recurrence",
        "paragraphs": [
          "One month alone is often not enough to tell whether something is random or becoming a trend.",
          "A quarterly review looks for patterns that persist across three months, such as vacancy movement, rising costs, repeated repairs, and tenant changes."
        ],
        "checks": [
          "Vacancy trend",
          "Cost trend",
          "Repeat repairs",
          "Tenant changes"
        ],
        "caution": "Do not treat one unusual month as a long-term trend."
      },
      {
        "title": "Connect annual results to the events behind them",
        "paragraphs": [
          "An annual record should be more than a totals sheet. It should connect the events that materially affected operating results during the year.",
          "Summarize total rental income, total operating costs, vacancy duration, major repairs, incidents, and planned work for the coming year."
        ],
        "checks": [
          "Total income",
          "Total costs",
          "Vacancy duration",
          "Major repairs",
          "Incidents",
          "Next-year plan"
        ],
        "caution": "Do not keep only annual totals while separating the events that explain them."
      },
      {
        "title": "Record unscheduled events when they happen",
        "paragraphs": [
          "Failures, accidents, complaints, and lease changes can lose important context if you wait until the next scheduled log.",
          "Capture the key facts and photos immediately, then continue adding the action, cost, outcome, and follow-up to the same event."
        ],
        "checks": [
          "Event date",
          "Photos",
          "Urgency",
          "Action",
          "Cost",
          "Outcome"
        ],
        "caution": "Do not try to reconstruct the event from memory at month-end."
      },
      {
        "title": "Reuse records for the next decision and EXIT",
        "paragraphs": [
          "The purpose of records is not storage itself; it is to make the next decision better.",
          "Repeated late payments can inform renewal decisions, repeat repairs can support replacement review, vacancy history can inform leasing strategy, and major repair history can support a future sale explanation."
        ],
        "checks": [
          "Recurring issues",
          "Cumulative cost",
          "Major repairs",
          "Lease history",
          "Sale materials"
        ],
        "caution": "This page connects records to other management areas rather than repeating each decision method."
      }
    ],
    "signalsDetailed": [
      {
        "title": "The event trail is not connected",
        "desc": "You may have photos and receipts, but it is difficult to tell immediately which event they belong to.",
        "checks": [
          "File name",
          "Date",
          "Related event",
          "Outcome"
        ],
        "interpret": "Reorganize the evidence around individual events."
      },
      {
        "title": "Previous repair history is hard to find",
        "desc": "When the same problem returns, location, symptoms, contractor, and time to recurrence are not connected well enough to compare.",
        "checks": [
          "Location",
          "Previous repair",
          "Contractor",
          "Time to recurrence"
        ],
        "interpret": "Use searchable event names and link each recurrence to the previous record."
      },
      {
        "title": "There are monthly logs but no incident records",
        "desc": "Periodic summaries cannot preserve enough detail about the condition and response at the moment an unexpected event occurred.",
        "checks": [
          "Incident date",
          "Photos",
          "Action",
          "Cost",
          "Outcome"
        ],
        "interpret": "Use separate event records for unscheduled incidents."
      },
      {
        "title": "History has to be rebuilt when preparing to sell",
        "desc": "This is a sign that records created during ownership are not reusable as EXIT material.",
        "checks": [
          "Major repairs",
          "Costs",
          "Contractor",
          "Photos",
          "Completion date"
        ],
        "interpret": "Build records during ownership in a form that can later support a sale explanation."
      }
    ],
    "examplesDetailed": [
      {
        "title": "A leak repaired two years ago has returned.",
        "desc": [
          "If the old record connects the location, photos, contractor, work performed, cost, and recurrence status, you can immediately see what was done last time."
        ],
        "checks": [
          "Previous event",
          "Location",
          "Photos",
          "Contractor",
          "Cost",
          "Recurrence"
        ],
        "judge": "Pull the earlier event, connect the previous action to the current condition, and determine whether this is the same recurring issue.",
        "record": "Event ID / location / photos / contractor / cost / recurrence"
      },
      {
        "title": "You want to use repeated late payments in a renewal decision.",
        "desc": [
          "When payment history and tenant events are connected, you can distinguish an isolated delay from a recurring pattern."
        ],
        "checks": [
          "Month",
          "Due date",
          "Actual payment date",
          "Days late",
          "Discussion outcome"
        ],
        "judge": "Connect monthly payment records with the tenant event history and pass that pattern into the renewal review.",
        "record": "Month / due date / actual payment / days late / discussion outcome"
      },
      {
        "title": "You need to provide documents for an insurance claim.",
        "desc": [
          "If photos, actions, contractor details, costs, and outcomes are grouped as one incident, far less time is spent collecting the evidence again."
        ],
        "checks": [
          "Incident date",
          "Photos",
          "Quote",
          "Receipt",
          "Outcome"
        ],
        "judge": "Review the event as one chain from occurrence through evidence, response, cost, and outcome.",
        "record": "Incident date / photos / quote / receipt / outcome"
      },
      {
        "title": "You are organizing major repairs and operating history before a sale.",
        "desc": [
          "When annual logs and event records have accumulated consistently, you do not need to reconstruct years of history at the last minute."
        ],
        "checks": [
          "Major repairs",
          "Vacancy",
          "Rental income",
          "Incidents",
          "Evidence"
        ],
        "judge": "Use the annual summary to select material events and connect them to EXIT documentation.",
        "record": "Annual summary / major events / evidence / sale material"
      }
    ],
    "periodsDetailed": [
      {
        "title": "As it happens",
        "desc": "Record failures, incidents, complaints, and lease changes as event records.",
        "checks": [
          "Event date",
          "Photos",
          "Action",
          "Cost",
          "Outcome",
          "Next action"
        ],
        "judge": "Preserve what was known at the time."
      },
      {
        "title": "Monthly",
        "desc": "Summarize recurring operating information in one view.",
        "checks": [
          "Rental income",
          "Arrears",
          "Costs",
          "Vacancy",
          "Exceptions"
        ],
        "judge": "Separate normal monthly flow from exceptions."
      },
      {
        "title": "Quarterly",
        "desc": "Look for changes that repeat across three months.",
        "checks": [
          "Vacancy",
          "Costs",
          "Facilities",
          "Tenant changes",
          "Recurring events"
        ],
        "judge": "Separate one-off events from trends."
      },
      {
        "title": "Annually",
        "desc": "Summarize the year’s operating result and major events.",
        "checks": [
          "Total income",
          "Total costs",
          "Vacancy",
          "Major repairs",
          "Next-year plan"
        ],
        "judge": "Reuse the summary for next-year planning and EXIT."
      }
    ],
    "summaryDetailed": [
      {
        "title": "Connect records at the building level.",
        "desc": "Lease, income, cost, facility, tenant, and incident information must share one timeline so it can be found and compared again."
      },
      {
        "title": "Carry every event through to outcome and next action.",
        "desc": "Do not stop at occurrence and response. Record cost, result, and follow-up so the history can be reused in management."
      },
      {
        "title": "Reuse the history for later decisions and EXIT.",
        "desc": "Use recurring issues, major repairs, and lease changes as evidence for renewal, repair, and sale preparation."
      }
    ],
    "takeaway": "Keep one connected operating history for the building.",
    "recordQuality": {
      "title": "When files exist but the record is still incomplete",
      "paragraphs": [
        "Even if photos, receipts, and quotes all exist, they are hard to reuse later when dates and events are not connected.",
        "A note such as “leak repaired” does not preserve the location, cause, cost, or whether the problem returned. A complete event trail makes the previous history immediately available when the same issue appears again."
      ]
    },
    "commonFields": [
      {
        "title": "Date",
        "desc": "The anchor that connects events in sequence.",
        "detail": "Separating the occurrence, action, and completion dates reveals handling time and recurrence intervals."
      },
      {
        "title": "Cost",
        "desc": "Connects spending to the event.",
        "detail": "Do not store only the amount. Keep the problem, facility, and contractor connected to the expense."
      },
      {
        "title": "Photos & Evidence",
        "desc": "Preserves what the condition looked like at the time.",
        "detail": "Photos, quotes, receipts, and inspection documents should clearly identify the event they support."
      },
      {
        "title": "Outcome",
        "desc": "Shows whether the issue is actually closed.",
        "detail": "Do not stop at “contractor visited.” Record whether it was resolved, unresolved, or needs another check."
      },
      {
        "title": "Next Action",
        "desc": "Turns a stored record into ongoing management.",
        "detail": "A reinspection date, renewal date, or follow-up contact gives the record a clear next step."
      }
    ],
    "eventFlow": {
      "title": "Connect one event from beginning to end.",
      "desc": "An event record starts with occurrence but should not end with the first action. Cost, final outcome, and follow-up need to remain connected so a future recurrence can be compared.",
      "steps": [
        "Date",
        "Issue",
        "Photos / evidence",
        "Action",
        "Cost",
        "Outcome",
        "Next action"
      ],
      "example": "Aug 12 leak found → 3 photos → contractor inspection → local seal repair → repair cost → leak stopped → recheck after next heavy rain"
    },
    "qualityExamples": [
      {
        "title": "Leak",
        "bad": "Leak repaired",
        "good": "Aug 12, 2026 / south window, level 3 / leak after rain / 3 photos / Contractor A / local seal repair / cost recorded / recheck after September rain"
      },
      {
        "title": "Late payment",
        "bad": "Rent was late",
        "good": "May–Jul 2026 / 7–10 days late each month / no unpaid balance / repeated for 3 months / review during August renewal discussion"
      },
      {
        "title": "Lease change",
        "bad": "Agreed to adjust rent",
        "good": "Jun 20, 2026 agreement / lower rent from July / applies for 6 months / written confirmation saved / review again in December"
      },
      {
        "title": "Equipment replacement",
        "bad": "HVAC replaced",
        "good": "Jul 3, 2026 / level 2 HVAC / replaced after 3 repeat failures / Contractor B / cost recorded / 2-year warranty / next review Jun 2027"
      }
    ],
    "logSectionsDetailed": [
      {
        "title": "Monthly Management Log",
        "desc": "Quickly summarize the recurring operating condition for the month.",
        "checks": [
          "Rental income",
          "Arrears",
          "Costs",
          "Vacancy",
          "Facility issues",
          "Exceptions",
          "Next-month actions"
        ],
        "judge": "It is a monthly overview, not a copy of every detailed event record."
      },
      {
        "title": "Quarterly Management Log",
        "desc": "Review three months of change and recurring patterns.",
        "checks": [
          "Vacancy trend",
          "Cost trend",
          "Repeat repairs",
          "Tenant changes",
          "Major events",
          "Next-quarter actions"
        ],
        "judge": "Use it to find trends that persist beyond one-off events."
      },
      {
        "title": "Annual Management Log",
        "desc": "Connect the year’s operating result with the plan for the next year.",
        "checks": [
          "Total income",
          "Total costs",
          "Vacancy duration",
          "Major repairs",
          "Incidents",
          "Lease changes",
          "Next-year plan"
        ],
        "judge": "Keep the major events that explain the totals, not just the totals themselves."
      },
      {
        "title": "Event Log",
        "desc": "Record failures, incidents, complaints, and lease changes when they happen.",
        "checks": [
          "Event date",
          "Issue",
          "Photos / evidence",
          "Action",
          "Cost",
          "Outcome",
          "Next action"
        ],
        "judge": "Create it immediately, separate from periodic logs, and keep updating it until the outcome is known."
      }
    ],
    "exitBridge": {
      "title": "Records created during ownership become sale-support material.",
      "paragraphs": [
        "At the sale stage, the useful asset is not “a large number of documents” but a history that explains how the building was operated and how material issues were handled.",
        "When lease changes, vacancy periods, major repairs, incidents, insurance matters, and cost increases are tied to dates and evidence, far less history needs to be reconstructed during sale preparation.",
        "The record system created here becomes the foundation for explaining operating and repair history in the next EXIT stage."
      ],
      "facts": [
        "Lease changes",
        "Vacancy history",
        "Major repairs",
        "Incidents & insurance",
        "Photos & receipts"
      ]
    }
  }
];

const EN_MANAGEMENT_TUTORIAL_GROUPS=[
  [
    "01",
    "Cash Flow",
    "Rent income, vacancy, and costs are reviewed separately, but they ultimately meet in the same cash-flow picture."
  ],
  [
    "02",
    "People & Agreements",
    "Manage tenant requests and lease changes through the records that matter."
  ],
  [
    "03",
    "Building Condition",
    "Compare normal facility condition with change so early warning signs appear before major failure."
  ],
  [
    "04",
    "Records",
    "Connect every change over time so the history can support the next decision."
  ]
];

const EN_MANAGEMENT_TUTORIAL_AXES=[
  [
    "01",
    "You need to track incoming money to understand actual operations.",
    "The rent written in a lease and the money actually collected can differ. Repeated delays, concessions, or uncollected charges can make the real collection pattern very different from the contracted terms."
  ],
  [
    "02",
    "Vacancy should be managed before the space becomes empty.",
    "The later you learn about an upcoming lease end or move-out, the later leasing preparation begins. Every additional vacant day directly reduces rental income."
  ],
  [
    "03",
    "Important requests and agreements should be recorded.",
    "Repair requests, cost responsibility, lease changes, and renewals can be remembered differently over time. A clear record keeps later decisions consistent."
  ],
  [
    "04",
    "Income alone does not show what the building actually earns.",
    "Insurance, financing, common-area costs, and repairs can rise even when rent rises. You need incoming and outgoing cash together to see the actual operating result."
  ],
  [
    "05",
    "Early signs reduce the chance of major failure and disruption.",
    "Small changes such as leaks, unusual noise, or declining performance can grow into repair costs, tenant disruption, and even vacancy. Catching changes early matters."
  ],
  [
    "06",
    "Records are what connect the other five management areas.",
    "When income, vacancy, tenant, cost, and facility histories are scattered, recurring issues are hard to see. A connected operating history supports both the next management decision and future EXIT preparation."
  ]
];

const EN_MANAGEMENT_PERIODS=[
  [
    "01",
    "Monthly",
    "Review rent receipts, arrears, service charges, major operating costs, and repair expenses that occurred during the month."
  ],
  [
    "02",
    "Quarterly",
    "Review vacancy, rising operating costs, key facility conditions, and recurring complaints or repairs."
  ],
  [
    "03",
    "Every Six Months",
    "Review upcoming lease expirations, major facility condition, insurance, planned repairs, and renewal prospects."
  ],
  [
    "04",
    "Annually",
    "Summarize annual rental income, operating costs, repair costs, vacancy duration, and the next year’s management plan."
  ],
  [
    "05",
    "As It Happens",
    "Record facility failures, incidents, complaints, arrears, move-out notices, lease changes, and urgent repairs immediately."
  ]
];

const EN_MANAGEMENT_CASES=[
  [
    "01",
    "Leak → Cost → Tenant → Vacancy",
    "A recurring leak does not end as a facility issue. Repair costs affect expenses, and growing tenant disruption can affect renewal and vacancy.",
    "Follow one issue across multiple management areas."
  ],
  [
    "02",
    "Late Payment → Cash Flow → Lease",
    "Repeated late payment disrupts collection flow, and the accumulated history becomes useful when reviewing renewal.",
    "Connect income records with tenant history."
  ],
  [
    "03",
    "Long Vacancy → Terms → Income",
    "A long vacancy may lead to changing lease terms, but the annual income after that change still needs to be checked again.",
    "Vacancy recovery and profitability should be reviewed together."
  ]
];

const EN_MANAGEMENT_TOOLS=[
  {
    "num": "01",
    "name": "Vacancy Loss Calculator",
    "desc": "Estimate actual vacancy loss by combining missed rent with fixed costs that continue while the space is empty.",
    "href": "#"
  },
  {
    "num": "02",
    "name": "Operating Return Calculator",
    "desc": "Review operating performance for a period using actual rental income and actual operating costs.",
    "href": "#"
  },
  {
    "num": "03",
    "name": "Lease Expiry Planner",
    "desc": "Organize lease end dates and review points for renewal or move-out preparation, not contract drafting.",
    "href": "#"
  }
];

const JA_SECTIONS=[
  {
    "id": "rent",
    "num": "01",
    "code": "RENT",
    "name": "賃料収入管理",
    "prompt": "実際にいくら回収できているか",
    "introParagraphs": [
      "賃料収入を管理するとき、最初に見るべきなのは契約書に書かれた賃料総額ではありません。契約額は約束であり、実際の入金が運営の結果です。",
      "同じ賃貸条件でも、入金が遅れたり共益費を回収できなかったりすれば、実際に入ってくる金額は変わります。フリーレント、一時的な減額、空室も同じように実収入へ影響します。",
      "そのため賃料収入管理では『入ってくるお金と回収の過程』に集中します。費用を差し引いた最終的なネットキャッシュフローは04 費用管理で別に確認します。"
    ],
    "items": [
      [
        "契約賃料",
        "賃貸借契約で合意した月額賃料です。実際の入金額と比較する基準にし、更新や条件変更があった場合は変更前後を分けて残します。"
      ],
      [
        "実入金額",
        "その月に実際に口座へ入った金額です。一部入金、減額、未払いがあれば契約額と異なるため、契約賃料とは別に記録します。"
      ],
      [
        "入金日",
        "予定日と実際の入金日の差を示します。最終的に全額入っていても毎月遅れるなら、繰り返す支払遅延のパターンかもしれません。"
      ],
      [
        "共益費・管理費",
        "賃料とは別に回収する金額です。実費精算か固定額かを分け、賃料が正常でも未回収が積み上がっていないか別に確認します。"
      ],
      [
        "未払い・延滞",
        "一度だけの遅れと繰り返す遅れを分けます。発生日、金額、遅延日数、解消状況を積み上げると、更新判断にも使える運営履歴になります。"
      ],
      [
        "保証金・敷金",
        "契約上の基本的な担保条件です。増減や契約条件の変更があった場合は、現在額と変更履歴を一緒に確認します。"
      ],
      [
        "割引・減額",
        "フリーレント、一時的な減額、新規入居時の優遇など、契約賃料より実収入を下げる条件です。期間と金額を実収入に反映します。"
      ],
      [
        "更新",
        "賃料を見直し、入居を継続してもらうかを判断する時点です。値上げ幅だけでなく、退去可能性と想定空室損失も一緒に見ます。"
      ],
      [
        "月次・年間累計収入",
        "月ごとの入金記録を年間で合計し、実際にいくら入ったかを確認します。空室、減額、未回収を含めて前年と比較すると収入の傾向が見えます。"
      ]
    ],
    "methodGuide": [
      {
        "title": "契約条件を基準値にする",
        "paragraphs": [
          "実際の入金が正常か判断するには、まず合意した条件を基準値として整理しておく必要があります。",
          "区画ごとの月額賃料、共益費、保証金、入金予定日、契約期間、更新日を一度に確認できる形にします。条件が変わった場合は当初条件と現在条件も分けて残します。"
        ],
        "checks": [
          "月額賃料",
          "共益費・管理費",
          "保証金・敷金",
          "入金予定日"
        ],
        "caution": "更新を重ねると、現在条件と過去条件を混同しやすくなります。"
      },
      {
        "title": "実入金額を毎月記録する",
        "paragraphs": [
          "契約額は約束で、実際の入金が運営結果です。二つを並べることで未払いと減額が見えます。",
          "毎月、入金予定日、実入金日、実入金額、差額を残します。一部入金も正常入金として処理せず、差額を残します。"
        ],
        "checks": [
          "入金予定日",
          "実入金日",
          "実入金額",
          "差額"
        ],
        "caution": "月末の合計だけを合わせると、遅延や一部入金のパターンが消えてしまいます。"
      },
      {
        "title": "延滞を単発と反復に分ける",
        "paragraphs": [
          "一度遅れた場合と毎月遅れる場合では管理上の意味が違います。繰り返す遅延は契約・更新判断に必要な運営履歴です。",
          "遅延回数と遅延日数を累計し、未払いが同時に発生していないかも確認します。"
        ],
        "checks": [
          "遅延回数",
          "平均遅延日数",
          "累積未払い",
          "解消状況"
        ],
        "caution": "少額・短期間だからと繰り返し無視すると、後で判断する根拠がなくなります。"
      },
      {
        "title": "共益費の回収を別に見る",
        "paragraphs": [
          "賃料が正常に入っていても共益費だけ抜け続ければ、実際の回収額は契約条件と異なります。",
          "賃料と共益費を分けて記録し、未回収分は別に累積します。実費精算か固定額かも区分します。"
        ],
        "checks": [
          "合意した共益費",
          "実回収額",
          "未回収累計",
          "精算方法"
        ],
        "caution": "賃料と共益費を合計だけで見ると、未回収の原因が隠れます。"
      },
      {
        "title": "割引・減額・空室の影響を反映する",
        "paragraphs": [
          "フリーレントや一時減額は契約上の賃料より実収入を下げます。空室期間があれば、その期間に入らなかった収入も同じ流れで見ます。",
          "新しい入居者を獲得するために発生した費用まで一緒に残すと、初年度の実回収額をより正確に確認できます。"
        ],
        "checks": [
          "フリーレント期間",
          "減額金額",
          "空室期間",
          "入居者獲得関連費"
        ],
        "caution": "新規契約が成立したこと自体より実回収額を見ます。空室、減額、仲介費用は抜けやすい項目です。"
      },
      {
        "title": "更新前に賃料を見直す",
        "paragraphs": [
          "賃料を上げれば必ず収入が増えるわけではありません。値上げ後に退去が起きれば空室損失の方が大きくなることがあります。",
          "周辺相場、既存入居者の安定性、現実的な値上げ幅、退去可能性を一緒に比較します。"
        ],
        "checks": [
          "周辺相場",
          "現在賃料",
          "値上げ可能幅",
          "退去時の想定空室"
        ],
        "caution": "値上げ率だけを見て空室可能性を無視すると、年間の実収入がむしろ減ることがあります。"
      },
      {
        "title": "月次記録を年間の流れで見直す",
        "paragraphs": [
          "1か月の正常入金だけで建物の賃料収入を判断するのは難しいため、1年間に実際いくら入ったかを合計します。",
          "月ごとの実入金、減額、空室、未回収共益費をまとめ、前年と比較します。"
        ],
        "checks": [
          "年間実入金",
          "年間空室期間",
          "減額合計",
          "前年比"
        ],
        "caution": "月次記録だけ残して年間比較をしないと、収入の方向性を見落とします。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "入金日が少しずつ遅くなる",
        "desc": "総額が入っていても遅延が繰り返されるなら、運営パターンが変化しているサインかもしれません。",
        "checks": [
          "直近6か月の遅延回数",
          "平均遅延日数",
          "遅延日数が伸びているか",
          "未払いを伴うか"
        ],
        "interpret": "一、二回の遅れより、反復性と悪化傾向を見ます。"
      },
      {
        "title": "共益費の未払いが積み上がる",
        "desc": "賃料は正常でも共益費だけ欠けると、実際の回収率は下がります。",
        "checks": [
          "合意共益費",
          "実回収額",
          "累積未回収",
          "入居者ごとの反復"
        ],
        "interpret": "賃料と共益費を分けて回収率を再確認します。"
      },
      {
        "title": "賃料を上げても実収入がほぼ変わらない",
        "desc": "空室、減額、フリーレント、入居者獲得費が値上げ効果を相殺している可能性があります。",
        "checks": [
          "値上げ前後の年間実入金",
          "空室期間",
          "減額",
          "新規入居者獲得費"
        ],
        "interpret": "契約賃料ではなく、期間全体の実回収額で比較します。"
      },
      {
        "title": "年間収入が前年より減っている",
        "desc": "月単位では正常に見えても、累積空室や未回収によって年間結果が悪化することがあります。",
        "checks": [
          "年間実入金",
          "空室期間",
          "未回収",
          "減額",
          "前年比"
        ],
        "interpret": "どの月から差が始まったか、月次記録をさかのぼります。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "毎月の賃料が7〜10日遅れて入ります。",
        "desc": [
          "賃料自体は毎月入っていますが、遅延が繰り返されています。",
          "一、二回の遅れより、ここ数か月同じパターンが続いているかが重要です。"
        ],
        "checks": [
          "直近6か月の遅延回数",
          "平均遅延日数",
          "累積未払い",
          "共益費も遅れているか"
        ],
        "judge": "遅延日数が伸びたり一部未払いが出始めたりしたら、単なるタイミングの問題ではなく入居者の資金繰り変化も見直します。",
        "record": "入金予定日 · 実入金日 · 遅延日数 · 未払い額"
      },
      {
        "title": "賃料を上げた後、退去して2か月空室になりました。",
        "desc": [
          "値上げだけを見ると収入増に見えますが、退去後に空室が出ると年間の実収入は減ることがあります。"
        ],
        "checks": [
          "値上げ前賃料",
          "値上げ後賃料",
          "2か月分の空室損失",
          "仲介費・フリーレント"
        ],
        "judge": "値上げ分だけでなく、退去後に空いていた期間を含めて同じ12か月の実入金額を比較します。",
        "record": "値上げ前後の実入金 · 空室期間 · 新規契約費用 · 回収時点"
      },
      {
        "title": "共益費だけが数か月未回収です。",
        "desc": [
          "賃料が入っていることだけを見て共益費の漏れを放置すると、実回収率が下がります。"
        ],
        "checks": [
          "契約上の共益費",
          "実回収額",
          "累積未回収",
          "入居者ごとの反復"
        ],
        "judge": "賃料と共益費を別の流れで見て、未回収残高が増えているか確認します。",
        "record": "月別合意共益費 · 入金 · 未回収 · 累計"
      },
      {
        "title": "新規契約に1か月のフリーレントを付けました。",
        "desc": [
          "契約書上は通常の賃料でも、初年度の実回収額はフリーレント分だけ減ります。",
          "その前に空室期間や仲介費があれば一緒に見ます。"
        ],
        "checks": [
          "契約賃料",
          "フリーレント期間",
          "以前の空室期間",
          "仲介費・内装等の誘致費"
        ],
        "judge": "初年度の契約賃料総額ではなく、実際に入った金額を基準に収入を見ます。",
        "record": "契約日 · フリーレント · 初回入金日 · 初年度実入金"
      }
    ],
    "periodsDetailed": [
      {
        "title": "毎月",
        "desc": "入金と回収状況を確認します。",
        "checks": [
          "入金予定日",
          "実入金日",
          "未払い・延滞",
          "共益費回収",
          "当月減額"
        ],
        "judge": "月末合計だけでなく、入金時期と抜けも一緒に見ます。"
      },
      {
        "title": "四半期",
        "desc": "繰り返す流れと変化を確認します。",
        "checks": [
          "反復延滞",
          "未回収共益費の累積",
          "空室前後の収入変化",
          "減額の反復"
        ],
        "judge": "1か月だけの特異値と繰り返す傾向を分けます。"
      },
      {
        "title": "更新前",
        "desc": "賃料調整と退去可能性を一緒に見ます。",
        "checks": [
          "周辺相場",
          "現在賃料",
          "値上げ幅",
          "更新意向",
          "想定空室損失"
        ],
        "judge": "値上げ率より年間実収入がどう変わるかを比較します。"
      },
      {
        "title": "年間",
        "desc": "1年間の実際の賃料収入を再計算します。",
        "checks": [
          "年間実入金",
          "空室期間",
          "減額合計",
          "未回収共益費",
          "前年比"
        ],
        "judge": "どの月から差が生じたか、月次記録まで戻って確認します。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "契約額と実収入を分けます。",
        "desc": "契約賃料は基準値、実入金は運営結果です。二つを並べることで未払い、減額、空室の影響を確認できます。"
      },
      {
        "title": "入金日と回収率を一緒に見ます。",
        "desc": "総額が入ったかだけでなく、いつ入ったか、共益費まで正常に回収できたか、遅延が繰り返していないかを記録します。"
      },
      {
        "title": "月次記録を年間の流れで見直します。",
        "desc": "1か月の正常入金より、1年間で実際にいくら入ったかが重要です。月次記録を年間で合計し、前年と比較します。"
      }
    ],
    "takeaway": "契約額ではなく、実際の入金の流れを見ます。"
  },
  {
    "id": "vacancy",
    "num": "02",
    "code": "VACANCY",
    "name": "空室管理",
    "prompt": "空室になる前から管理する",
    "introParagraphs": [
      "空室は入居者が退去した後に始まる問題ではありません。契約満了を早めに確認し、更新可能性を見始めた時点から空室管理は始まります。",
      "空室が発生したら、すぐ賃料を下げるのではなく、なぜ空いているのかを先に見ます。価格、設備、用途、駐車場、アクセス、競合物件、契約条件では必要な対応が異なります。",
      "空室管理は空いた区画を埋めるだけではなく、空室期間とその原因を減らすことです。"
    ],
    "items": [
      [
        "契約満了",
        "退去可能性を最初に確認できる予定です。満了の数か月前に更新意向を確認する基準日を設けます。"
      ],
      [
        "契約更新",
        "継続利用の意思と条件協議の必要性を確認します。確定・未定・退去予定に分けると募集準備の時期を決めやすくなります。"
      ],
      [
        "退去予定",
        "退去が見込まれるなら、写真、募集条件、仲介会社へ渡す資料、必要な軽微修繕を事前に準備します。"
      ],
      [
        "空室期間",
        "賃料が発生しない期間です。開始日を一貫して記録しないと実際の空室損失を計算できません。"
      ],
      [
        "募集条件",
        "現在の募集賃料と周辺競合条件を比較します。賃料だけでなく保証金、共益費、フリーレントなども一緒に見ます。"
      ],
      [
        "問い合わせ数",
        "市場反応の最初のシグナルです。問い合わせ自体がないのか、問い合わせはあるのに契約にならないのかを分けると原因を絞れます。"
      ],
      [
        "契約転換",
        "問い合わせが実際の契約につながる度合いです。問い合わせが多いのに契約がない場合は、設備、条件、用途適合性など別の原因を見直します。"
      ],
      [
        "空室損失",
        "受け取れなかった賃料に加え、空室中も続く固定費や条件変更に伴う費用まで含めた損失です。"
      ]
    ],
    "methodGuide": [
      {
        "title": "契約満了日を早めに見る",
        "paragraphs": [
          "空室準備の時間は退去日ではなく、契約満了日の管理から確保します。",
          "区画ごとの満了日を整理し、事前に更新可能性を確認します。退去の可能性が見えたら、写真、募集条件、先行修繕の準備日程を先に決めます。"
        ],
        "checks": [
          "契約満了日",
          "事前確認日",
          "現在賃料",
          "更新予定"
        ],
        "caution": "満了直前に確認すると、条件協議と募集準備が同時に集中します。"
      },
      {
        "title": "更新可能性を確認する",
        "paragraphs": [
          "入居者の継続意向を早く把握するほど、次の入居者を準備する時間が増えます。",
          "継続利用の意思、現在の不満、賃料条件、移転可能性を確認し、確定・未定・退去予定に分けます。"
        ],
        "checks": [
          "継続利用意向",
          "条件への不満",
          "移転可能性",
          "確定状況"
        ],
        "caution": "口頭の意向を確定した更新として扱いません。"
      },
      {
        "title": "退去の可能性が見えたら募集準備を始める",
        "paragraphs": [
          "退去確定後に写真や条件を準備すると市場への露出が遅れます。",
          "区画の状態、写真、賃貸条件、仲介会社向け資料、必要な小規模修繕を事前に用意します。"
        ],
        "checks": [
          "区画写真",
          "募集条件",
          "仲介会社向け資料",
          "先行修繕の必要性"
        ],
        "caution": "退去前の撮影や入室が可能か確認します。"
      },
      {
        "title": "空室開始日を一貫して記録する",
        "paragraphs": [
          "空室期間は実際の損失を計算する基準点です。",
          "賃料発生が止まった日と実際の引渡日を分け、空室中も続く固定費を一緒に記録します。"
        ],
        "checks": [
          "空室開始日",
          "引渡日",
          "月固定費",
          "募集開始日"
        ],
        "caution": "案件ごとに日付の定義を変えません。"
      },
      {
        "title": "空室原因を分ける",
        "paragraphs": [
          "原因が分からないと、対応が賃料値下げ一つに偏りやすくなります。",
          "問い合わせ数と契約転換を軸に、価格、設備、立地、用途、駐車場、アクセス、競合物件、契約条件、露出の問題を分けて見ます。"
        ],
        "checks": [
          "問い合わせ数",
          "契約転換",
          "周辺競合条件",
          "繰り返すフィードバック"
        ],
        "caution": "一、二人の意見だけで原因を決めつけません。"
      },
      {
        "title": "原因に合わせて対応を変える",
        "paragraphs": [
          "価格の問題と設備の問題では解決方法が違います。",
          "価格なら条件調整、設備なら改善、露出なら写真や仲介チャネル、用途需要なら対象となる用途範囲を見直します。"
        ],
        "checks": [
          "価格調整案",
          "設備改善案",
          "露出改善案",
          "対象用途"
        ],
        "caution": "複数条件を同時に変えると、どの変更が効いたか判断しにくくなります。"
      },
      {
        "title": "空室損失と条件変更を比較する",
        "paragraphs": [
          "現在賃料を維持することが必ずしも高い収益につながるわけではありません。",
          "現在条件を維持した場合の想定空室期間と、条件を調整した場合の想定契約時期を比べ、今後発生する総損失で判断します。"
        ],
        "checks": [
          "現在賃料",
          "調整後賃料",
          "想定空室月数",
          "空室中固定費"
        ],
        "caution": "賃料差だけを計算して固定費や仲介費を抜かないようにします。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "問い合わせ自体がほとんどない",
        "desc": "募集しているのに反応がないなら、価格、露出、立地、用途需要をまず疑います。",
        "checks": [
          "露出チャネル",
          "閲覧・問い合わせ数",
          "周辺競合物件",
          "募集条件"
        ],
        "interpret": "問い合わせがない段階では、契約条件より流入そのものを先に見ます。"
      },
      {
        "title": "問い合わせは多いが契約にならない",
        "desc": "流入はあるものの、最終条件や区画状態で離脱している可能性があります。",
        "checks": [
          "問い合わせ数",
          "内見数",
          "断り理由",
          "契約条件"
        ],
        "interpret": "問い合わせ→内見→契約のどこで落ちているか確認します。"
      },
      {
        "title": "特定区画だけ繰り返し空く",
        "desc": "建物全体より、その区画のレイアウト、動線、設備、視認性に問題がある可能性があります。",
        "checks": [
          "区画別空室期間",
          "階・動線",
          "設備状態",
          "過去の入居用途"
        ],
        "interpret": "建物全体の問題と区画固有の問題を分けます。"
      },
      {
        "title": "価格を下げても反応がない",
        "desc": "価格が主因ではない可能性を示すサインです。",
        "checks": [
          "価格変更前後の問い合わせ数",
          "設備・駐車場",
          "用途需要",
          "競合物件"
        ],
        "interpret": "価格以外の条件を再点検します。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "同じ募集賃料のまま6か月空室が続いています。",
        "desc": [
          "条件は維持できていますが、6か月間賃料収入がなく、共益費や金融費用などの固定費は続いています。"
        ],
        "checks": [
          "現在賃料",
          "調整後賃料",
          "6か月の未収入",
          "空室中固定費"
        ],
        "judge": "賃料を少し下げて早期に入居が決まる場合と総損失を比較します。",
        "record": "空室開始日 / 月別損失 / 条件変更日 / 契約日"
      },
      {
        "title": "問い合わせは多いのに契約になりません。",
        "desc": [
          "広告反応はあるのに内見後に契約へ進まないなら、価格より区画、駐車場、契約条件が原因かもしれません。"
        ],
        "checks": [
          "問い合わせ数",
          "内見",
          "断り理由",
          "競合物件"
        ],
        "judge": "流入は正常か、内見後の離脱が多いかを段階ごとに見ます。",
        "record": "問い合わせ / 内見 / 断り理由 / 条件変更"
      },
      {
        "title": "同じ区画が繰り返し空室になります。",
        "desc": [
          "建物全体の空室率が低くても、特定区画だけ頻繁に空くなら固有の問題がある可能性があります。"
        ],
        "checks": [
          "区画の空室履歴",
          "階・動線",
          "空調・水回り",
          "過去用途"
        ],
        "judge": "過去記録と比べ、退去理由が繰り返しているか確認します。",
        "record": "入退去日 / 用途 / 退去理由 / 修繕履歴"
      },
      {
        "title": "価格を下げても問い合わせが増えませんでした。",
        "desc": [
          "価格調整後も反応が変わらないなら、露出、設備、用途需要など別の原因を見直します。"
        ],
        "checks": [
          "調整前後の問い合わせ",
          "写真・広告露出",
          "周辺空室",
          "用途需要"
        ],
        "judge": "一度に一つの主要条件を変え、反応差を確認します。",
        "record": "価格変更日 / 露出変更 / 問い合わせ数 / 結果"
      }
    ],
    "periodsDetailed": [
      {
        "title": "満了の数か月前",
        "desc": "更新と退去可能性を確認します。",
        "checks": [
          "契約満了日",
          "更新意向",
          "賃料条件",
          "不満要因"
        ],
        "judge": "準備時間を確保する段階です。"
      },
      {
        "title": "退去確定時",
        "desc": "募集準備と必要な修繕を始めます。",
        "checks": [
          "退去日",
          "写真",
          "募集条件",
          "先行修繕項目"
        ],
        "judge": "空室開始前にできる準備を前倒しします。"
      },
      {
        "title": "空室約30日",
        "desc": "初期反応を点検します。",
        "checks": [
          "問い合わせ数",
          "内見数",
          "断り理由",
          "競合条件"
        ],
        "judge": "露出の問題か条件の問題かを一次判断します。"
      },
      {
        "title": "空室約60〜90日",
        "desc": "長期化の原因を再分析します。",
        "checks": [
          "価格",
          "設備",
          "用途",
          "駐車場",
          "露出",
          "総損失"
        ],
        "judge": "既存対応に効果がなければ原因仮説を組み直します。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "空室は契約満了前から管理します。",
        "desc": "退去後に始めると準備時間が不足します。まず満了と更新の予定を管理します。"
      },
      {
        "title": "価格より先に原因を分けます。",
        "desc": "問い合わせがない、問い合わせ後に契約にならない、特定区画だけ繰り返すなど、状況によって対応は変わります。"
      },
      {
        "title": "賃料ではなく総損失で比較します。",
        "desc": "空室期間と固定費を含め、条件維持と条件調整のどちらが実際の損失を小さくするかを見ます。"
      }
    ],
    "takeaway": "空室期間より、なぜ空いているかを先に見ます。"
  },
  {
    "id": "tenant",
    "num": "03",
    "code": "TENANT",
    "name": "テナント管理",
    "prompt": "重要なやり取りを記録で管理する",
    "introParagraphs": [
      "テナント管理は親しい関係をつくることではなく、建物運営に影響する内容を明確に残すことです。",
      "修理依頼、費用負担、契約条件変更、延滞、更新、退去など、後から記憶が食い違いやすい内容は日付と処理結果を記録します。",
      "すべての会話を記録する必要はありません。お金、契約、設備、日程に影響する内容だけを一貫した基準で残します。"
    ],
    "items": [
      [
        "契約情報",
        "契約期間、賃料、共益費、保証金、特約、連絡先を現在条件に基づいて整理します。"
      ],
      [
        "依頼事項",
        "運営に影響する依頼を日付と一緒に残します。緊急・一般・費用/契約関連に分けると優先順位が明確になります。"
      ],
      [
        "苦情・相談",
        "繰り返しているか、どこで起きたか、営業にどう影響したかを記録します。単発の不満と構造的な問題を分ける材料になります。"
      ],
      [
        "修理依頼",
        "発生日、写真、原因、責任主体、業者、費用、完了日をつなげます。"
      ],
      [
        "延滞",
        "金額だけでなく発生日、遅延日数、解消日を残し、反復性を見ます。"
      ],
      [
        "契約変更",
        "賃料、共益費、使用範囲、特約など変わった条件は、変更前後と変更日を一緒に残します。"
      ],
      [
        "更新",
        "満了前にテナントの運営履歴と市場条件を一緒に見て、更新するか判断します。"
      ],
      [
        "退去・原状回復",
        "退去日、設備状態、原状回復範囲、未払い、保証金精算を事前に確認します。"
      ]
    ],
    "methodGuide": [
      {
        "title": "契約情報を一か所にまとめる",
        "paragraphs": [
          "テナントごとの基本条件が散らばっていると、依頼や変更内容を判断しにくくなります。",
          "契約期間、賃料、共益費、保証金、特約、連絡先を現在条件に基づいて整理します。"
        ],
        "checks": [
          "契約期間",
          "賃料",
          "保証金",
          "特約"
        ],
        "caution": "更新後に旧契約と現契約を混同しやすくなります。"
      },
      {
        "title": "重要な連絡・依頼を運営記録にする",
        "paragraphs": [
          "重要な依頼は時間がたつと双方の記憶がずれやすくなります。",
          "すべての会話ではなく、費用、契約、設備、日程に影響する依頼だけを日付と一緒に残します。"
        ],
        "checks": [
          "依頼日",
          "依頼内容",
          "関連設備",
          "必要対応日"
        ],
        "caution": "私的・日常的な会話まで過剰に記録しません。"
      },
      {
        "title": "修理依頼を緊急・一般・費用関連に分ける",
        "paragraphs": [
          "依頼の性質によって処理優先度と確認事項が変わります。",
          "安全や漏水などの緊急事項、一般的な不便、費用負担の協議が必要な依頼に分けます。"
        ],
        "checks": [
          "緊急性",
          "原因",
          "写真",
          "営業への影響"
        ],
        "caution": "費用の協議を理由に緊急の安全問題を遅らせません。"
      },
      {
        "title": "費用負担の基準を確認する",
        "paragraphs": [
          "修理の必要性より、誰が費用を負担するかが争点になりやすい部分です。",
          "契約内容、故障原因、使用上の過失の有無を確認し、合意内容と負担主体を記録します。"
        ],
        "checks": [
          "契約上の基準",
          "故障原因",
          "負担主体",
          "合意内容"
        ],
        "caution": "口頭合意だけで終わらせません。"
      },
      {
        "title": "延滞履歴を契約管理につなげる",
        "paragraphs": [
          "繰り返す延滞は収入だけの問題ではなく、更新判断の資料にもなります。",
          "発生日、金額、遅延日数、解消日を記録し、反復しているか確認します。"
        ],
        "checks": [
          "延滞日",
          "金額",
          "遅延日数",
          "解消日"
        ],
        "caution": "収入管理とテナント履歴を別々にしてつながりを切らないようにします。"
      },
      {
        "title": "契約変更は変更前後を残す",
        "paragraphs": [
          "現在条件だけを残すと、いつ何が変わったか分からなくなります。",
          "賃料、共益費、使用範囲、特約などの変更前・変更後、変更日、合意根拠を記録します。"
        ],
        "checks": [
          "変更前",
          "変更後",
          "変更日",
          "合意根拠"
        ],
        "caution": "既存値を上書きして過去の履歴を消さないようにします。"
      },
      {
        "title": "更新は満了前に判断する",
        "paragraphs": [
          "更新はテナントの意思確認と条件協議をまとめる手続きです。",
          "延滞、苦情、管理状況、協議条件を一緒に見て更新可否を決めます。退去が決まったら原状回復、未払い、保証金精算の準備につなげます。"
        ],
        "checks": [
          "満了日",
          "運営履歴",
          "市場賃料",
          "退去可能性"
        ],
        "caution": "空室月数や募集価格の判断は02 空室管理で別に扱います。"
      },
      {
        "title": "退去と原状回復を最後の記録にする",
        "paragraphs": [
          "保証金精算と次の賃貸準備の基準になります。",
          "退去日、設備状態、原状回復範囲、未払い、保証金精算、鍵・入館手段を確認します。"
        ],
        "checks": [
          "退去日",
          "原状回復",
          "未払い",
          "保証金精算"
        ],
        "caution": "退去当日に初めて設備状態を確認しないようにします。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "同じ修理依頼が繰り返される",
        "desc": "処置だけして原因が解消していない、またはテナントの不満が積み上がっている可能性があります。",
        "checks": [
          "依頼回数",
          "同じ場所か",
          "以前の修理",
          "再発までの期間"
        ],
        "interpret": "設備問題とテナントの不便を一緒につなげて見ます。"
      },
      {
        "title": "口頭合意が増えている",
        "desc": "費用、使用範囲、契約条件が言葉だけで変わると、後から記憶が食い違うリスクが高まります。",
        "checks": [
          "合意内容",
          "日付",
          "金額",
          "後続文書の有無"
        ],
        "interpret": "運営に影響する口頭合意は、記録・文書化が必要か見直します。"
      },
      {
        "title": "延滞と苦情が同時に増える",
        "desc": "テナントの運営状況の変化や関係悪化のサインかもしれません。",
        "checks": [
          "延滞頻度",
          "苦情内容",
          "事業変化の兆候",
          "更新時期"
        ],
        "interpret": "個別の出来事より、同時に起きているパターンを見ます。"
      },
      {
        "title": "退去意向が突然出る",
        "desc": "更新意向の確認や不満対応が遅かった可能性があります。",
        "checks": [
          "満了までの残期間",
          "過去の依頼",
          "不満",
          "募集準備状況"
        ],
        "interpret": "今後は満了前の確認時期を早めます。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "空調の修理依頼が繰り返されています。",
        "desc": [
          "同じ症状が何度も起きると、単なる苦情ではなく設備履歴と費用も一緒に積み上がります。"
        ],
        "checks": [
          "依頼日",
          "場所",
          "過去修理",
          "費用",
          "再発期間"
        ],
        "judge": "依頼→修理→再発を一つの事件の流れとして見ます。",
        "record": "依頼内容 / 写真 / 業者 / 結果 / 再確認日"
      },
      {
        "title": "賃料減額を口頭で合意しました。",
        "desc": [
          "口頭の合意が実際の契約条件のように運用されると、後で金額や期間をめぐる争いが起きることがあります。"
        ],
        "checks": [
          "減額金額",
          "適用期間",
          "合意日",
          "書面の有無"
        ],
        "judge": "契約に影響する変更は、変更前後と適用期間を記録します。",
        "record": "合意日 / 適用期間 / 変更前後 / 根拠"
      },
      {
        "title": "苦情が繰り返された後、更新を迷っています。",
        "desc": [
          "関係性だけで判断せず、苦情内容、対応結果、延滞、市場賃料を一緒に見る必要があります。"
        ],
        "checks": [
          "苦情回数",
          "対応結果",
          "延滞",
          "更新条件"
        ],
        "judge": "運営履歴と市場条件を並べて更新可否を判断します。",
        "record": "苦情履歴 / 対応結果 / 協議内容 / 最終決定"
      },
      {
        "title": "退去時の原状回復範囲について認識が違います。",
        "desc": [
          "入居前の状態や途中の変更記録がなければ、双方が異なる記憶に頼ることになります。"
        ],
        "checks": [
          "入居前写真",
          "契約特約",
          "変更承認",
          "現在状態"
        ],
        "judge": "写真と承認記録を基準に原状回復範囲を確認します。",
        "record": "入居前後写真 / 承認履歴 / 精算結果"
      }
    ],
    "periodsDetailed": [
      {
        "title": "発生時",
        "desc": "修理、苦情、契約変更など重要な出来事をすぐ記録します。",
        "checks": [
          "依頼日",
          "内容",
          "写真",
          "対応",
          "結果"
        ],
        "judge": "後から記憶で復元しません。"
      },
      {
        "title": "毎月",
        "desc": "延滞と繰り返す依頼を確認します。",
        "checks": [
          "延滞",
          "未処理依頼",
          "反復苦情",
          "費用負担未確定"
        ],
        "judge": "繰り返すパターンが出ていないか見ます。"
      },
      {
        "title": "更新の数か月前",
        "desc": "更新可否と条件を準備します。",
        "checks": [
          "運営履歴",
          "市場賃料",
          "不満",
          "退去可能性"
        ],
        "judge": "空室準備の時間を確保します。"
      },
      {
        "title": "退去前・退去当日",
        "desc": "設備、未払い、原状回復、保証金精算を確認します。",
        "checks": [
          "退去日",
          "設備状態",
          "未払い",
          "原状回復",
          "鍵"
        ],
        "judge": "事前点検と当日の最終確認を分けます。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "重要な合意は記録に残します。",
        "desc": "お金、契約、設備、日程に影響する内容は日付と処理結果を一緒に残します。"
      },
      {
        "title": "依頼から処理結果まで一つにつなげます。",
        "desc": "修理依頼や苦情を受付だけで終わらせず、対応と結果まで続けて見ます。"
      },
      {
        "title": "更新と退去は早めに準備します。",
        "desc": "運営履歴と市場条件を一緒に見て、満了前に次の行動を決めます。"
      }
    ],
    "takeaway": "重要な合意と変化を記録として残します。"
  },
  {
    "id": "cost",
    "num": "04",
    "code": "COST",
    "name": "費用管理",
    "prompt": "実際に残るお金を見る",
    "introParagraphs": [
      "賃料収入が増えても、実際に残るお金まで増えるとは限りません。保険、金融費用、共用部費用、修繕費の方が速く増えれば運営結果はむしろ悪化します。",
      "費用管理は単純に支出を減らすことではありません。どの費用が繰り返しているのか、予防のための投資なのか、同じ問題が再発しているのかを分けます。",
      "このページでは『出ていくお金』と、費用を差し引いた後に実際に残るネットキャッシュフローを見ます。"
    ],
    "items": [
      [
        "固定費",
        "税金、保険、金融費用、定期管理費など毎月・毎年繰り返す費用です。期間ごとの予算と実績を比較します。"
      ],
      [
        "変動費",
        "共用部の電気・水道、清掃、消耗品など、使用量や状況で変わる費用です。季節性と使用量を一緒に見ます。"
      ],
      [
        "突発費",
        "漏水、緊急工事、突然の設備故障など、事前に正確に予測しにくい支出です。別に記録し、繰り返していないか確認します。"
      ],
      [
        "修繕費",
        "建物の状態を維持・改善するための費用です。同じ設備の反復修理か、予防修繕かを分けます。"
      ],
      [
        "金融費用",
        "借入利息など金融関連の費用です。金利や借入条件の変化が実際のキャッシュフローに与える影響を確認します。"
      ],
      [
        "税金・保険",
        "定期的に発生しますが支払時期と金額が異なる費用です。年間運営費から漏れないよう別の日程と金額で管理します。"
      ],
      [
        "ネットキャッシュフロー",
        "実際の賃料収入から運営費、金融費用、修繕費を差し引いて残る金額です。運営成果を判断する最終的な数値です。"
      ],
      [
        "予算",
        "次の期間に想定される定期費用と計画修繕を先に反映した基準です。実支出と比較して差を管理します。"
      ]
    ],
    "methodGuide": [
      {
        "title": "まず費用を分類する",
        "paragraphs": [
          "費用の性質を分けないと変化の原因を見つけにくくなります。",
          "固定費、変動費、突発費に分け、修繕、金融、税金、保険をさらに細分化します。"
        ],
        "checks": [
          "固定費",
          "変動費",
          "突発費",
          "細分類"
        ],
        "caution": "月ごとに分類基準を変えません。"
      },
      {
        "title": "月ごとの支出を漏れなく記録する",
        "paragraphs": [
          "小さな反復費用も年間で合計すると大きくなります。",
          "発生日、項目、金額、支払先、関連する区画や設備を記録します。"
        ],
        "checks": [
          "発生日",
          "項目",
          "金額",
          "関連場所"
        ],
        "caution": "領収書を集めるだけで集計に反映しない状態にしません。"
      },
      {
        "title": "定期費用と一時費用を分ける",
        "paragraphs": [
          "一度だけ大きく出た費用と、構造的に増えた費用では意味が違います。",
          "保険、管理、金融費用などの反復支出と、大規模修繕などの一時支出を分けます。"
        ],
        "checks": [
          "定期性",
          "反復周期",
          "一時費用か",
          "再発可能性"
        ],
        "caution": "一度の大きな費用だけで通常の運営費が高いと判断しません。"
      },
      {
        "title": "前月・前年と比較する",
        "paragraphs": [
          "費用額そのものより変化率が異常を示すことがあります。",
          "同じ項目を前月、前四半期、前年同期と比較し、急増した項目を探します。"
        ],
        "checks": [
          "前月",
          "前四半期",
          "前年同期",
          "変化率"
        ],
        "caution": "夏の電気代と冬の電気代を背景なしに単純比較しません。"
      },
      {
        "title": "繰り返す修繕費を探す",
        "paragraphs": [
          "同じ問題に支出が続くなら、根本修理が必要なサインかもしれません。",
          "設備ごとの修理回数と累積費用をまとめ、同じ場所、業者、症状が繰り返していないか確認します。"
        ],
        "checks": [
          "修理回数",
          "累積費用",
          "同じ場所",
          "再発期間"
        ],
        "caution": "一回の金額が小さいからと反復費用を無視しません。"
      },
      {
        "title": "費用増加の理由を分ける",
        "paragraphs": [
          "予防投資と非効率は同じ費用増加ではありません。",
          "予防修繕、価値改善、テナント維持、単純な非効率、金融費用増加など原因別に分けます。"
        ],
        "checks": [
          "予防目的",
          "価値改善",
          "非効率",
          "金融条件変化"
        ],
        "caution": "費用が増えたという理由だけで一律に削減しません。"
      },
      {
        "title": "最終的に残るお金を計算する",
        "paragraphs": [
          "建物運営の判断は収入総額ではなく、費用を差し引いた結果で行います。",
          "実際の賃料収入から運営費、金融費用、修繕費を差し引き、対象期間のネットキャッシュフローを計算して前年と比較します。"
        ],
        "checks": [
          "実賃料収入",
          "運営費",
          "金融費用",
          "修繕費"
        ],
        "caution": "賃料入金・延滞管理はこのページで繰り返さず、01 賃料収入管理で扱います。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "収入より費用の伸びが大きい",
        "desc": "賃料収入が増えても、費用がより速く増えれば実際の収益性は低下します。",
        "checks": [
          "収入増加率",
          "運営費増加率",
          "金融費用",
          "修繕費"
        ],
        "interpret": "どの項目から伸び率の差が始まったかを見ます。"
      },
      {
        "title": "同じ設備の修繕費が繰り返す",
        "desc": "根本原因が解消されず、応急修理費が積み上がっている可能性があります。",
        "checks": [
          "修理回数",
          "累積費用",
          "同じ場所",
          "再発期間"
        ],
        "interpret": "交換や根本修理の費用と累積修繕費を比較します。"
      },
      {
        "title": "共用電気・管理費が急に増える",
        "desc": "使用量変化、設備異常、料金改定など構造的な変化を確認する必要があります。",
        "checks": [
          "前月・前年の使用量",
          "単価",
          "設備変更",
          "空室率"
        ],
        "interpret": "金額だけでなく使用量と単価を分けて見ます。"
      },
      {
        "title": "金融費用が想定より大きい",
        "desc": "金利や借入条件の変化が運営収益を直接減らすことがあります。",
        "checks": [
          "金利",
          "月利息",
          "借入残高",
          "前年対比の金融費用"
        ],
        "interpret": "物件の営業収益とは別に金融費用の変化を見ます。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "賃料は上がったのに、実際に残るお金は減りました。",
        "desc": [
          "収入だけ見ると改善していますが、保険料、金融費用、修繕費がそれ以上に増えている可能性があります。"
        ],
        "checks": [
          "賃料収入",
          "運営費",
          "金融費用",
          "修繕費",
          "前年比"
        ],
        "judge": "どの費用が収入増加分を相殺したかを項目別に見ます。",
        "record": "期間別の収入・費用 / 増加原因 / ネットキャッシュフロー"
      },
      {
        "title": "同じ設備を1年に4回修理しました。",
        "desc": [
          "一回ずつは小さくても、累積費用と営業上の不便を合わせると交換の方が合理的な場合があります。"
        ],
        "checks": [
          "修理回数",
          "累積費用",
          "交換費",
          "再発期間"
        ],
        "judge": "同じ設備の累積修理費が増え続けるなら、同じ期間で今後の想定修理費と交換費を比較します。",
        "record": "修理日 / 業者 / 費用 / 再発 / 交換検討"
      },
      {
        "title": "予防修繕で大きな費用が発生しました。",
        "desc": [
          "費用は増えましたが、将来の事故、空室、大規模修理を減らす投資かもしれません。"
        ],
        "checks": [
          "修繕目的",
          "想定寿命",
          "過去故障",
          "将来リスク"
        ],
        "judge": "単なる費用増加ではなく、予防効果と比較します。",
        "record": "修繕目的 / 費用 / 期待効果 / 次回確認"
      },
      {
        "title": "空室中でも固定費が出続けます。",
        "desc": [
          "賃料収入がなくても、税金、保険、金融費用、一部の共用費は続きます。"
        ],
        "checks": [
          "月固定費",
          "空室期間",
          "金融費用",
          "共用費"
        ],
        "judge": "空室損失には未収入だけでなく、継続する費用も含めます。",
        "record": "空室期間 / 固定費 / 総損失"
      }
    ],
    "periodsDetailed": [
      {
        "title": "毎月",
        "desc": "発生した費用を分類して記録します。",
        "checks": [
          "運営費",
          "金融費用",
          "修繕費",
          "突発費"
        ],
        "judge": "漏れのない月次基準をつくります。"
      },
      {
        "title": "四半期",
        "desc": "費用増加傾向と反復修繕を確認します。",
        "checks": [
          "前四半期比",
          "反復修理",
          "共用費変化",
          "空室固定費"
        ],
        "judge": "単発か傾向かを分けます。"
      },
      {
        "title": "半年",
        "desc": "大きな費用と設備別累積費用を見直します。",
        "checks": [
          "設備別累積修繕",
          "保険",
          "金融条件",
          "予定修繕"
        ],
        "judge": "根本修理や交換の必要性を検討します。"
      },
      {
        "title": "年間",
        "desc": "総費用とネットキャッシュフローを整理します。",
        "checks": [
          "年間運営費",
          "金融費用",
          "修繕費",
          "実賃料収入",
          "ネットキャッシュフロー"
        ],
        "judge": "前年と比較し、次年度予算を組みます。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "費用を性質と反復性で分けます。",
        "desc": "固定・変動・突発費を区分し、一時費用と繰り返す費用を別に見ます。"
      },
      {
        "title": "費用は金額より変化と原因を見ます。",
        "desc": "前月・前年比較、反復修繕、金融費用増加など、なぜ増えたのかを確認します。"
      },
      {
        "title": "最終判断はネットキャッシュフローで行います。",
        "desc": "実賃料収入から運営費、金融費用、修繕費を差し引いた結果を期間ごとに比較します。"
      }
    ],
    "takeaway": "収入と費用を一緒に見て初めて実際の収益が分かります。"
  },
  {
    "id": "facility",
    "num": "05",
    "code": "FACILITY",
    "name": "設備管理",
    "prompt": "故障前の小さな異常を見る",
    "introParagraphs": [
      "設備管理はオーナー自身が技術者になることではありません。正常な状態を知り、小さな変化を見つけ、適切なタイミングで専門点検につなげることが重要です。",
      "同じ漏水や故障が繰り返すなら、『修理した』という事実だけでは不十分です。場所、原因、作業内容、費用、再発の有無を一つの履歴として見ます。",
      "設備ごとに確認すべき場所と危険サインは異なります。設備別の点検基準と実際のチェックポイントを決め、反復・拡大・安全への影響に応じて対応レベルを分けます。"
    ],
    "items": [
      [
        "屋上・防水",
        "普段の水たまり、排水、防水層の状態を見て、雨の後に漏水跡や繰り返すひび割れが出ていないか確認します。"
      ],
      [
        "外壁",
        "ひび割れ、剥離、変色、仕上げの損傷、漏水跡を見ます。安全リスクや反復する変化があれば専門点検につなげます。"
      ],
      [
        "給排水",
        "水圧変化、排水遅延、臭い、漏水、反復する詰まりを見ます。同じ場所で繰り返すなら単発処理より原因確認が必要です。"
      ],
      [
        "電気",
        "ブレーカーの反復作動、過熱、繰り返す停電、照明異常、共用部電力使用量の変化を確認します。安全に関わる症状を自己判断で修理しません。"
      ],
      [
        "消防",
        "法定点検予定と警報・消火設備・避難通路の状態を分けて管理します。義務点検記録は一般設備点検と別に確認します。"
      ],
      [
        "エレベーター",
        "異音、扉作動、停止位置、反復故障、定期点検履歴をつなげます。故障回数と累積費用を一緒に見ます。"
      ],
      [
        "空調",
        "性能低下、騒音、漏水、フィルター・消耗品、反復故障、更新時期を確認します。季節の本格稼働前に状態を見ると効果的です。"
      ],
      [
        "駐車場・共用部",
        "破損、照明、滑り、排水、出入り、安全状態を見ます。利用上の不便や事故リスクが繰り返す場所を把握します。"
      ]
    ],
    "methodGuide": [
      {
        "title": "まず正常状態を知る",
        "paragraphs": [
          "変化に気づくには、普段の状態が基準になっている必要があります。",
          "主要設備の正常な作動や外観を、基準写真と一緒に残します。"
        ],
        "checks": [
          "基準写真",
          "正常な音・作動",
          "点検日",
          "設置・交換日"
        ],
        "caution": "故障した後だけ写真を残す状態にしません。"
      },
      {
        "title": "小さな異常サインを残す",
        "paragraphs": [
          "ひび割れ、漏水、異音、性能低下などの小さな変化が反復故障の始まりになることがあります。",
          "場所、症状、初回発見日、写真を残し、再発するか確認します。"
        ],
        "checks": [
          "場所",
          "症状",
          "初回発見日",
          "写真"
        ],
        "caution": "『何となく変』のような曖昧な記録にしません。"
      },
      {
        "title": "緊急度と使用影響を分ける",
        "paragraphs": [
          "安全リスクと単なる不便では対応速度が違います。",
          "安全、漏水拡大、営業への影響、法定点検との関連を基準に優先順位を決めます。"
        ],
        "checks": [
          "安全リスク",
          "営業への影響",
          "拡大可能性",
          "法定義務"
        ],
        "caution": "費用が大きいという理由で緊急度を下げません。"
      },
      {
        "title": "専門点検に切り替える時点を決める",
        "paragraphs": [
          "オーナーの役割は自分で修理することより、適切な時点で専門家につなぐことです。",
          "反復故障、安全リスク、法定設備、原因不明の症状は専門業者の点検へ移します。"
        ],
        "checks": [
          "反復性",
          "安全性",
          "法定設備",
          "原因不明"
        ],
        "caution": "自己流の修理で法定点検や安全対応を代替しません。"
      },
      {
        "title": "修理内容と費用を一つの履歴にする",
        "paragraphs": [
          "修理内容と費用が分離すると、同じ問題にいくら使ったか分かりにくくなります。",
          "業者、作業内容、交換部品、費用、完了日、写真を一つの出来事としてまとめます。"
        ],
        "checks": [
          "業者",
          "作業内容",
          "費用",
          "完了日"
        ],
        "caution": "領収書だけを別に保存しません。"
      },
      {
        "title": "再発まで確認する",
        "paragraphs": [
          "修理が終わった事実より、同じ問題が戻るかどうかの方が重要です。",
          "次の確認日を決め、同じ場所や症状が再発したら以前の修理と比較します。"
        ],
        "checks": [
          "次回確認日",
          "再発の有無",
          "再発期間",
          "累積費用"
        ],
        "caution": "完了処理した後に二度と見ない状態にしません。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "同じ場所で漏水が繰り返す",
        "desc": "部分補修で症状だけ止まり、原因が残っている可能性があります。",
        "checks": [
          "発生場所",
          "降雨条件",
          "以前の修理",
          "再発期間"
        ],
        "interpret": "反復補修を続けるより、原因点検へ移る時点かを見ます。"
      },
      {
        "title": "エレベーター・電気の故障が増える",
        "desc": "反復故障は安全、営業停止、費用増加につながることがあります。",
        "checks": [
          "故障回数",
          "症状",
          "点検結果",
          "累積費用"
        ],
        "interpret": "反復性と安全性を基準に専門点検や交換検討へつなげます。"
      },
      {
        "title": "空調性能が季節ごとに落ちる",
        "desc": "設備老朽化や未解決の反復問題が積み上がっているサインかもしれません。",
        "checks": [
          "季節別性能",
          "修理回数",
          "電気代",
          "テナント苦情"
        ],
        "interpret": "性能、費用、苦情を一緒に見ます。"
      },
      {
        "title": "法定点検の指摘が繰り返す",
        "desc": "同じ指摘が続くなら、是正が根本的に完了していない可能性があります。",
        "checks": [
          "指摘内容",
          "是正日",
          "再指摘",
          "業者"
        ],
        "interpret": "完了確認と次回点検をつなげます。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "屋上漏水を3回修理しました。",
        "desc": [
          "同じ場所で繰り返すなら、毎回部分補修だけで症状を抑えていないか原因を見直します。"
        ],
        "checks": [
          "発生場所",
          "雨の時期",
          "以前の修理",
          "修理費",
          "再発期間"
        ],
        "judge": "累積修理費と根本補修の必要性を比較します。",
        "record": "写真 / 作業内容 / 業者 / 費用 / 再発"
      },
      {
        "title": "エレベーター故障が最近増えました。",
        "desc": [
          "一件ずつ修理は完了していても、停止と苦情が繰り返すと修理費以上の問題になります。"
        ],
        "checks": [
          "故障回数",
          "症状",
          "点検結果",
          "停止時間"
        ],
        "judge": "安全、営業影響、累積修理費を一緒に見ます。",
        "record": "故障日 / 停止時間 / 業者 / 対応 / 再発"
      },
      {
        "title": "電気ブレーカーが繰り返し落ちます。",
        "desc": [
          "単に復旧するより、過負荷や設備異常など原因点検が必要なサインかもしれません。"
        ],
        "checks": [
          "発生時間",
          "使用設備",
          "ブレーカー",
          "過熱・臭い"
        ],
        "judge": "安全に関わる電気異常はすぐ専門点検につなげます。",
        "record": "発生日 / 設備 / 専門点検 / 結果"
      },
      {
        "title": "空調性能が落ち、苦情が増えました。",
        "desc": [
          "設備問題が快適性だけでなく、テナント満足や更新問題に広がることがあります。"
        ],
        "checks": [
          "性能",
          "電気代",
          "修理履歴",
          "苦情",
          "交換費"
        ],
        "judge": "同じ故障が繰り返すなら、費用より先に安全性、使用停止時間、性能低下の広がりを見て、専門点検または交換検討の時点を決めます。",
        "record": "苦情 / 修理 / 費用 / 性能 / 判断"
      }
    ],
    "periodsDetailed": [
      {
        "title": "月・四半期の自主確認",
        "desc": "目に見える変化と繰り返す依頼を確認します。",
        "checks": [
          "漏水跡",
          "照明",
          "排水",
          "共用部破損",
          "反復依頼"
        ],
        "judge": "基準状態と比較します。"
      },
      {
        "title": "季節の前後",
        "desc": "空調、防水、排水など季節の影響を受ける設備を事前に見ます。",
        "checks": [
          "空調",
          "屋上・防水",
          "排水",
          "凍結・結露"
        ],
        "judge": "問題が出る前に準備する時点です。"
      },
      {
        "title": "法定点検日程",
        "desc": "消防・エレベーターなど義務点検を別に管理します。",
        "checks": [
          "点検日",
          "業者",
          "指摘事項",
          "是正完了"
        ],
        "judge": "一般的な自主点検と法定点検を分けます。"
      },
      {
        "title": "異常発生時",
        "desc": "安全、漏水、電気、営業停止につながる問題は日程に関係なくすぐ記録・対応します。",
        "checks": [
          "発生日",
          "写真",
          "緊急度",
          "業者",
          "結果"
        ],
        "judge": "定期点検日まで待ちません。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "正常状態を知って初めて変化が見えます。",
        "desc": "普段の状態と基準写真を残し、異常サインと再発を比較できるようにします。"
      },
      {
        "title": "オーナーは自分で直すより適切な点検へつなげます。",
        "desc": "反復故障、安全問題、法定設備を専門点検へ移す基準を持ちます。"
      },
      {
        "title": "修理は完了ではなく再発まで確認します。",
        "desc": "作業内容、費用、業者、再発の有無を一つの履歴につなげ、累積問題を見ます。"
      }
    ],
    "takeaway": "小さな異常を大きな故障になる前に見つけます。",
    "facilityDetails": [
      {
        "name": "屋上・防水",
        "criteria": [
          "降雨後の水たまりが長時間残らないか",
          "防水層の浮き・ひび割れがないか",
          "同じ位置で漏水が繰り返していないか",
          "室内まで漏水影響が続いていないか"
        ],
        "checks": [
          "排水口周辺",
          "防水層の継ぎ目",
          "パラペット接合部",
          "既存補修部",
          "水たまり跡",
          "室内天井の染み"
        ],
        "postTitle": "屋上・防水は『漏れているか』より、同じ変化が繰り返すかを見ます。",
        "paragraphs": [
          "漏水は室内で見つかる前から、屋上の小さな変化として始まることがあります。水たまり、防水層の浮き、接合部のひび割れなど、今すぐ大きな問題に見えなくても同じ場所で繰り返すかを見ます。",
          "一度の染みより、雨のたびに同じ位置へ跡が出るか、水たまりの範囲が広がるか、過去の補修部の周辺に新しい変化が出るかが重要です。",
          "オーナーが原因を断定するのではなく、反復性、拡大性、室内への影響を確認し、観察段階か専門点検段階かを分けることが重要です。"
        ],
        "cases": [
          [
            "大雨の後、屋上一部に水がたまりますが1日以内に消え、室内漏水はありません。",
            "すぐ大規模補修と決めず、同じ場所での反復と防水層の変化を継続確認します。"
          ],
          [
            "同じ場所の水たまりが繰り返し、下階の天井にも染みが出ます。",
            "単純観察から原因点検へ切り替え、専門家に確認します。"
          ]
        ],
        "expert": "同一位置の漏水反復 · 防水層損傷の拡大 · 室内漏水への連鎖 · 目視で原因を特定しにくい場合"
      },
      {
        "name": "外壁",
        "criteria": [
          "ひび割れの幅・長さが広がっていないか",
          "仕上げ材の浮き・剥落跡がないか",
          "窓・接合部周辺に漏水跡がないか",
          "歩行者動線上に落下リスクがないか"
        ],
        "checks": [
          "壁面ひび割れ",
          "タイル・石材の浮き",
          "シーリング・目地",
          "窓周辺",
          "突出部・看板周辺",
          "下部の落下跡"
        ],
        "postTitle": "外壁は、ひび割れの有無より変化と場所が重要です。",
        "paragraphs": [
          "すべてのひび割れが同じ危険を意味するわけではありません。古い細いひびがそのままか、幅や長さが広がっているか、新しい方向へ伸びているかを比較します。",
          "タイルや石材の浮き、接合部の開きは漏水だけでなく落下リスクにつながります。特に出入口や歩行動線上の変化は、見た目より安全を優先します。",
          "外壁には地上から近くで確認できない場所が多くあります。変化が拡大している、落下が疑われる場合は目視確認にとどめ、専門点検へ移します。"
        ],
        "cases": [
          [
            "既存の細いひびがありますが、基準写真と比べ数か月変化していません。",
            "進行中の問題と断定せず、位置と大きさの変化を継続比較します。"
          ],
          [
            "外壁仕上げが開き、下部に小さな破片の落下跡があります。",
            "落下リスクを優先し、近づく危険を減らして専門点検につなげます。"
          ]
        ],
        "expert": "ひび割れ拡大 · 仕上げ材の浮き・剥落 · 落下リスク · 高所確認が必要な場合"
      },
      {
        "name": "給排水",
        "criteria": [
          "水圧が急に変わっていないか",
          "排水が遅くなったり逆流していないか",
          "配管・バルブ周辺に漏水跡がないか",
          "同じ場所の臭い・湿気が繰り返していないか"
        ],
        "checks": [
          "メーター・バルブ周辺",
          "天井・壁内配管部",
          "トイレ・シンク排水",
          "共用排水口",
          "ポンプ・受水槽周辺",
          "臭いの発生場所"
        ],
        "postTitle": "給排水は小さな変化が複数の空間へ広がる前に捉えます。",
        "paragraphs": [
          "排水遅延や水圧低下は小さく見えても、詰まり、漏水、ポンプ異常など別の問題の初期サインかもしれません。どの空間で同時に出ているかが重要です。",
          "一つの区画だけか、複数区画・複数階で同時に出るかを分けると、専用部問題と共用設備問題を分ける手がかりになります。",
          "漏水量が増えたり、逆流・汚染の可能性が出たら単なる観察段階ではありません。被害範囲を抑える対応と専門点検を優先します。"
        ],
        "cases": [
          [
            "一つの洗面だけ排水が遅く、他は正常です。",
            "その排水口やトラップなど局所範囲から確認します。"
          ],
          [
            "複数階で同時に排水が遅くなり、一部で逆流も発生しています。",
            "共用配管系統の問題を疑い、専門点検へ切り替えます。"
          ]
        ],
        "expert": "反復逆流 · 複数空間で同時発生 · 漏水拡大 · 汚染・浸水リスクがある場合"
      },
      {
        "name": "電気",
        "criteria": [
          "ブレーカーが繰り返し落ちていないか",
          "コンセント・分電盤周辺に発熱・変色がないか",
          "焦げ臭い・火花・異音がないか",
          "特定時間や負荷で繰り返していないか"
        ],
        "checks": [
          "分電盤",
          "ブレーカー",
          "コンセント・スイッチ",
          "共用照明",
          "電気室",
          "電気機器の接続部"
        ],
        "postTitle": "電気は『動くか』より、繰り返す危険サインを見ます。",
        "paragraphs": [
          "ブレーカーが一度作動したことより、同じ回路で反復して落ちるかが重要です。発生時刻と使用中の機器を一緒に見ると、反復条件を探しやすくなります。",
          "発熱、変色、焦げ臭い、火花は単なる不便ではなく火災リスクにつながることがあります。原因不明のままブレーカーを何度も戻したり、設備を使い続けたりしません。",
          "電気設備はオーナーが内部を分解して原因を探す領域ではありません。危険サインを確認したら必要に応じて使用を止め、安全を確保して専門家へ移します。"
        ],
        "cases": [
          [
            "複数の高負荷機器を同時使用した直後に一度だけブレーカーが落ち、その後は正常です。",
            "当時の負荷と使用機器を確認し、同じ条件で繰り返すかを見ます。"
          ],
          [
            "同じ回路の遮断が反復し、コンセント周辺に発熱や変色もあります。",
            "反復使用を止め、専門家による電気点検を優先します。"
          ]
        ],
        "expert": "反復トリップ · 発熱・焦げ臭い · 火花 · 電気室異常 · 安全に原因を特定しにくい場合"
      },
      {
        "name": "消防",
        "criteria": [
          "設備が物で隠れたり損傷していないか",
          "避難通路が確保されているか",
          "警報・表示異常が続いていないか",
          "点検指摘が未解決のまま残っていないか"
        ],
        "checks": [
          "消火器位置",
          "感知器・スプリンクラー周辺",
          "誘導灯",
          "防火扉",
          "避難通路",
          "受信盤・制御盤表示"
        ],
        "postTitle": "消防は故障の有無だけでなく『必要な時に使える状態か』が基準です。",
        "paragraphs": [
          "設備が設置されているだけでは十分ではありません。消火器が物で隠れたり避難通路がふさがれたりすれば、緊急時に本来の機能を果たせないことがあります。",
          "受信盤の異常表示、繰り返す警報、防火扉の閉鎖不良など、日常では不便が小さい問題も非常時には大きな差になります。",
          "法定点検や専門保守は資格・制度が関わる領域です。オーナーはアクセス性、損傷、異常表示、通路確保など日常的に確認できる状態を見て、異常があれば専門管理へつなげます。"
        ],
        "cases": [
          [
            "消火器が所定位置にあり、誘導灯と避難通路も遮られていません。",
            "日常管理として使用可能な状態を維持します。"
          ],
          [
            "受信盤の異常表示が続き、防火扉も正常に閉まりません。",
            "専門点検と是正が必要な状態として扱います。"
          ]
        ],
        "expert": "警報異常の継続 · 防火扉機能低下 · 避難通路閉鎖 · 法定点検の指摘が未解決の場合"
      },
      {
        "name": "エレベーター",
        "criteria": [
          "階停止位置がずれていないか",
          "扉開閉が遅い・衝撃がないか",
          "振動・異音が繰り返していないか",
          "運行中の停止・エラーがないか"
        ],
        "checks": [
          "階停止位置",
          "出入口扉",
          "ボタン・表示",
          "運行音",
          "振動",
          "保守会社からの連絡事項"
        ],
        "postTitle": "エレベーターは小さな不便でも繰り返せば運行異常のサインになります。",
        "paragraphs": [
          "扉が一度遅く閉まったことより、同じ現象が繰り返すか、特定階だけで起きるかが重要です。発生条件を分けると保守会社にも正確に伝えられます。",
          "停止位置ずれ、大きな衝撃、反復する異音は利用者安全につながることがあります。自己調整より保守会社の確認を優先します。",
          "オーナーの役割は自分で修理することではなく、症状の反復と発生条件を把握して専門業者へつなぎ、必要なら運行安全を優先して判断することです。"
        ],
        "cases": [
          [
            "特定階だけ扉の閉まりが時々遅くなります。",
            "階ごとの差と反復性を確認し、保守会社へ具体的に伝えます。"
          ],
          [
            "停止位置が繰り返しずれ、運行中に大きな衝撃や異音も出ます。",
            "速やかな保守会社点検が必要な状態として扱います。"
          ]
        ],
        "expert": "運行中停止 · 停止位置ずれの反復 · 大きな衝撃・異音 · 扉安全機能の異常"
      },
      {
        "name": "空調",
        "criteria": [
          "設定温度と実際の体感差が広がっていないか",
          "区画ごとの温度差が大きくなっていないか",
          "漏水・結露・異音がないか",
          "運転時間が長くなっても性能が落ちていないか"
        ],
        "checks": [
          "室内機・室外機",
          "ドレン配管",
          "フィルター・吸排気",
          "機械室",
          "温度差がある区画",
          "騒音・振動位置"
        ],
        "postTitle": "空調は故障より、性能が少しずつ落ちる過程の方が多く見られます。",
        "paragraphs": [
          "設備がON/OFFするだけでは正常と判断できません。以前より長く運転しないと同じ温度にならない、区画ごとの温度差が大きくなるなどの変化も見ます。",
          "漏水、結露、排水問題は空調の不快感を超えて天井や仕上げ材の損傷につながることがあります。性能変化と周辺状態を一緒に確認します。",
          "フィルターや周辺清掃など管理者が確認できる範囲を超え、冷媒、電気、機械部の異常が疑われるなら自己対応より専門点検へ切り替えます。"
        ],
        "cases": [
          [
            "一つの区画だけ温度が合わず、他の区画は正常です。",
            "その室内機や空気の流れなど局所条件から分けて見ます。"
          ],
          [
            "複数区画で同時に性能が落ち、室外機の異音も大きくなっています。",
            "設備全体の状態を確認する専門点検が必要な段階です。"
          ]
        ],
        "expert": "急激な性能低下 · 漏水・結露拡大 · 機械異音 · 反復エラー"
      },
      {
        "name": "駐車場・共用部",
        "criteria": [
          "床破損・滑りリスクがないか",
          "照明不足による危険な暗所がないか",
          "排水不良・水たまりが繰り返していないか",
          "歩行・車両動線が妨げられていないか"
        ],
        "checks": [
          "駐車場床",
          "ランプ・傾斜路",
          "排水口",
          "共用階段・廊下",
          "照明",
          "手すり・出入口"
        ],
        "postTitle": "共用部は小さな不便が事故や反復苦情になる前に管理します。",
        "paragraphs": [
          "床のひびや照明故障のような小さな問題でも、人が繰り返し使う空間ではリスクが積み上がります。利用頻度が高い場所ほど優先度を上げます。",
          "水たまり、滑り、手すりのぐらつき、通行妨害は見た目より安全基準で先に判断します。事故可能性があれば、本修理の前に一時的な危険低減措置が必要なこともあります。",
          "共用部は複数テナントと来訪者が使うため、特定利用者だけの問題か、建物全体の動線・安全へ影響する問題かを分けて対応レベルを決めます。"
        ],
        "cases": [
          [
            "駐車場の照明1灯が切れていますが、周囲の照度は十分で安全な通行に大きな支障はありません。",
            "危険度を確認し、早期交換する保守項目として管理します。"
          ],
          [
            "スロープに水たまりと滑りが繰り返す、または手すりがぐらついています。",
            "まず即時の危険を減らし、その後必要な補修を進めます。"
          ]
        ],
        "expert": "転倒・滑りリスク · 通行妨害 · 反復浸水 · 構造・安全部材のぐらつき"
      }
    ]
  },
  {
    "id": "record",
    "num": "06",
    "code": "RECORD",
    "name": "記録管理・管理日誌",
    "prompt": "運営履歴を使える形で残す",
    "introParagraphs": [
      "建物の運営記録は、書類が多いだけでは完成しません。契約・収入・費用・設備・テナント・事故など異なる記録が、同じ時間軸でつながって初めて管理に使える情報になります。",
      "良い記録は過去を保存するだけではありません。繰り返す問題を見つけ、次の確認日を決め、更新や修繕など次の判断に根拠を残すために再利用します。",
      "06 記録管理は、01〜05で生まれた情報を一つの運営履歴にまとめ、将来のEXIT判断へつなぐ最後の管理領域です。"
    ],
    "items": [
      [
        "契約",
        "現在の契約条件と変更履歴をつなげます。契約期間・賃料・共益費・保証金・特約・変更日をまとめ、更新や退去時に以前の条件まで確認できるようにします。"
      ],
      [
        "収入",
        "約束された金額と実際の入金をつなげます。入金予定・実入金・遅延・未納・減額の履歴は、01 賃料収入管理の流れをそのまま引き継ぎます。"
      ],
      [
        "費用",
        "何に、なぜ支出したのかを出来事とつなげます。発生日・項目・金額・支払先・関連設備を残し、費用の経済性判断は04 費用管理に置きます。"
      ],
      [
        "設備",
        "故障・修理・再発を同じ設備履歴としてまとめます。場所・症状・写真・業者・作業内容・費用・再発有無をつなげ、点検基準そのものは05 設備管理で確認します。"
      ],
      [
        "テナント",
        "重要な要望・合意・契約変更・精算結果を残します。依頼日・合意内容・費用負担・契約変更・処理結果を一つの出来事としてつなげます。"
      ],
      [
        "事故",
        "発生時の状態と対応過程を時系列で残します。発生日・写真・緊急対応・業者・保険・処理結果が一つの出来事の中で続くようにします。"
      ],
      [
        "税・保険",
        "定期支払・更新・証憑を独立した記録軸として管理します。支払日・金額・証憑・更新日・関連契約をつなぎ、必要なときすぐ確認できるようにします。"
      ],
      [
        "写真・見積・領収書",
        "資料そのものを出来事につなぐ証拠レイヤーとして使います。ファイル名・関連出来事・日付・業者・金額が分かる状態にし、資料だけが別々に積み上がらないようにします。"
      ]
    ],
    "methodGuide": [
      {
        "title": "建物ごとに記録体系を一つにする",
        "paragraphs": [
          "資料が複数の保存先に散らばると、同じ出来事の写真・費用・結果を後からつなぎ直すのが難しくなります。",
          "契約・収入・費用・設備・テナント・事故の資料を建物単位でまとめ、カテゴリ名と日付形式を統一します。複数棟を所有する場合は、まず建物ごとの最上位フォルダやデータ単位を分けます。"
        ],
        "checks": [
          "建物名",
          "記録カテゴリ",
          "日付形式",
          "保存場所"
        ],
        "caution": "カテゴリごとにファイル名や日付形式を変えないようにします。"
      },
      {
        "title": "すべての記録に共通項目を置く",
        "paragraphs": [
          "記録ごとに形式が違うと、検索や比較がしにくくなります。",
          "日付・費用・写真／資料・結果・次の予定を共通項目にし、必要に応じて場所・テナント・業者などを追加します。"
        ],
        "checks": [
          "日付",
          "費用",
          "写真・資料",
          "結果",
          "次の予定"
        ],
        "caution": "説明だけを長く残して、結果や次の予定を抜かさないようにします。"
      },
      {
        "title": "一つの出来事を発生から完了までつなぐ",
        "paragraphs": [
          "発生と対応が別々に保存されると、実際に解決したのか確認しにくくなります。",
          "一つの出来事に発生日・当時の状態・関連資料・対応・費用・結果・再確認日をまとめます。同じ問題が再発した場合は新しい記録を作りつつ、前回の出来事とつなげます。"
        ],
        "checks": [
          "発生日",
          "資料",
          "対応",
          "費用",
          "結果",
          "再確認"
        ],
        "caution": "写真・見積・領収書を出来事から切り離して保存しないようにします。"
      },
      {
        "title": "月次記録で繰り返す運営をまとめる",
        "paragraphs": [
          "賃料・未納・費用・空室など毎月繰り返す項目は、月単位でまとめると流れを確認しやすくなります。",
          "月次日誌はすべての出来事を書き直す文書ではなく、その月の通常運営と特記事項を短時間で確認する要約です。"
        ],
        "checks": [
          "賃料収入",
          "未納",
          "費用",
          "空室",
          "設備問題",
          "特記事項"
        ],
        "caution": "随時の出来事記録を月次日誌で代用しないようにします。"
      },
      {
        "title": "四半期記録で変化と繰り返しを見る",
        "paragraphs": [
          "1か月だけでは、偶然なのか傾向なのか判断しにくいことがあります。",
          "四半期では、空室の変化・費用増加・繰り返す修理・テナント変化など、3か月続いたパターンを探します。"
        ],
        "checks": [
          "空室推移",
          "費用推移",
          "繰り返す修理",
          "テナント変化"
        ],
        "caution": "一時的な異常値を長期傾向と決めつけないようにします。"
      },
      {
        "title": "年次記録で運営結果を整理する",
        "paragraphs": [
          "年次記録は単なる合計表ではなく、その年の運営結果に影響した出来事を結び付ける要約です。",
          "年間賃料収入・運営費・空室期間・主要修繕・事故・翌年予定の修繕をまとめて確認します。"
        ],
        "checks": [
          "年間収入",
          "年間費用",
          "空室期間",
          "主要修繕",
          "事故",
          "翌年計画"
        ],
        "caution": "数字の合計だけを残し、原因となった出来事を切り離さないようにします。"
      },
      {
        "title": "随時の出来事は発生時に記録する",
        "paragraphs": [
          "故障・事故・苦情・契約変更は、定期日誌まで待つと発生時の状況が失われることがあります。",
          "発生時に写真と主要事実を先に残し、その後の対応・費用・結果を同じ出来事に追加していきます。"
        ],
        "checks": [
          "発生日",
          "写真",
          "緊急度",
          "対応",
          "費用",
          "結果"
        ],
        "caution": "月末に記憶だけで復元しようとしないようにします。"
      },
      {
        "title": "記録を次の行動とEXITに再利用する",
        "paragraphs": [
          "記録の目的は保管ではなく、次の判断にもう一度使うことです。",
          "繰り返す入金遅延は更新判断に、繰り返す修理は交換検討に、空室履歴は募集戦略に、主要修繕履歴は売却時の説明資料につなげられます。"
        ],
        "checks": [
          "繰り返す問題",
          "累積費用",
          "主要修繕",
          "契約履歴",
          "売却資料"
        ],
        "caution": "このページでは各判断方法を繰り返さず、関連する管理領域につなげます。"
      }
    ],
    "signalsDetailed": [
      {
        "title": "出来事の流れがつながっていない",
        "desc": "写真や領収書はあっても、どの出来事の資料なのかすぐ分かりません。",
        "checks": [
          "ファイル名",
          "日付",
          "関連出来事",
          "処理結果"
        ],
        "interpret": "資料を出来事単位でまとめ直す必要があります。"
      },
      {
        "title": "以前の修理履歴を探しにくい",
        "desc": "同じ問題が繰り返しても、場所・症状・業者・再発までの期間がつながらず比較できません。",
        "checks": [
          "発生場所",
          "以前の修理",
          "業者",
          "再発までの期間"
        ],
        "interpret": "検索できる出来事名と過去記録のリンクが必要です。"
      },
      {
        "title": "月次記録はあるが事故記録がない",
        "desc": "定期要約だけでは、突然の出来事が起きた当時の状態と対応過程を十分に残せません。",
        "checks": [
          "事故日",
          "写真",
          "対応",
          "費用",
          "結果"
        ],
        "interpret": "随時の出来事記録を別に使います。"
      },
      {
        "title": "売却準備で履歴を一から探している",
        "desc": "保有中の記録がEXIT資料として再利用できていないサインです。",
        "checks": [
          "主要修繕",
          "費用",
          "業者",
          "写真",
          "完了日"
        ],
        "interpret": "保有中から売却説明に使える形で積み上げます。"
      }
    ],
    "examplesDetailed": [
      {
        "title": "2年前に修理した漏水が再発しました。",
        "desc": [
          "過去記録に場所・当時の写真・業者・作業内容・費用・再発有無がつながっていれば、前回何をしたのかすぐ確認できます。"
        ],
        "checks": [
          "以前の出来事",
          "場所",
          "写真",
          "業者",
          "費用",
          "再発"
        ],
        "judge": "以前の出来事を呼び出し、当時の対応と現在の状態をつなげて同じ問題か確認します。",
        "record": "出来事ID / 場所 / 写真 / 業者 / 費用 / 再発"
      },
      {
        "title": "繰り返す入金遅延を更新判断に使いたい。",
        "desc": [
          "入金記録とテナント履歴がつながっていれば、一度だけの遅れと繰り返すパターンを区別できます。"
        ],
        "checks": [
          "月",
          "支払期日",
          "実入金日",
          "遅延日数",
          "協議結果"
        ],
        "judge": "月別入金記録をテナントの出来事履歴とつなぎ、更新判断の資料にします。",
        "record": "月 / 支払期日 / 実入金日 / 遅延日数 / 協議結果"
      },
      {
        "title": "保険事故の資料提出が必要です。",
        "desc": [
          "事故時の写真・対応・業者・費用・結果が一つの出来事にまとまっていれば、必要資料を集め直す時間を大きく減らせます。"
        ],
        "checks": [
          "事故日",
          "写真",
          "見積",
          "領収書",
          "結果"
        ],
        "judge": "事故発生から証憑・対応・費用・結果まで一つの出来事として確認します。",
        "record": "事故日 / 写真 / 見積 / 領収書 / 結果"
      },
      {
        "title": "売却前に主要修繕と運営履歴を整理します。",
        "desc": [
          "年次日誌と随時の出来事記録が蓄積されていれば、売却直前に過去資料を一から探す作業を減らせます。"
        ],
        "checks": [
          "主要修繕",
          "空室",
          "賃料収入",
          "事故",
          "証憑"
        ],
        "judge": "年次要約から重要な出来事だけを抽出し、EXITの説明資料につなげます。",
        "record": "年次要約 / 主要出来事 / 証憑 / 売却資料"
      }
    ],
    "periodsDetailed": [
      {
        "title": "発生時",
        "desc": "故障・事故・苦情・契約変更を随時の出来事として記録します。",
        "checks": [
          "発生日",
          "写真",
          "対応",
          "費用",
          "結果",
          "次の予定"
        ],
        "judge": "その時点の情報を保存する段階です。"
      },
      {
        "title": "毎月",
        "desc": "繰り返す運営情報をまとめて整理します。",
        "checks": [
          "賃料収入",
          "未納",
          "費用",
          "空室",
          "特記事項"
        ],
        "judge": "その月の通常運営と特記事項を分けます。"
      },
      {
        "title": "四半期",
        "desc": "3か月続く変化を確認します。",
        "checks": [
          "空室",
          "費用",
          "設備",
          "テナント変化",
          "繰り返す出来事"
        ],
        "judge": "単発と傾向を区別します。"
      },
      {
        "title": "年次",
        "desc": "1年の運営結果と主要な出来事を整理します。",
        "checks": [
          "年間収入",
          "年間費用",
          "空室",
          "主要修繕",
          "翌年計画"
        ],
        "judge": "翌年計画とEXIT資料に再利用します。"
      }
    ],
    "summaryDetailed": [
      {
        "title": "記録を建物単位でつなげます。",
        "desc": "契約・収入・費用・設備・テナント・事故の資料が同じ時間軸で続いてこそ、後から探して比較できます。"
      },
      {
        "title": "出来事は結果と次の予定まで残します。",
        "desc": "発生と対応だけで終わらず、費用・結果・再確認予定まで残すことで管理に再利用できます。"
      },
      {
        "title": "記録を次の判断とEXITに再利用します。",
        "desc": "繰り返す問題・主要修繕・契約変更の履歴を、更新・修繕・売却準備の根拠として使います。"
      }
    ],
    "takeaway": "一つの建物の運営履歴を、一つの流れとして残します。",
    "recordQuality": {
      "title": "資料があっても「記録」になっていない場合",
      "paragraphs": [
        "写真・領収書・見積書がすべてあっても、日付と出来事がつながっていなければ後から使いにくくなります。",
        "「漏水修理済み」のように結果だけを残すと、発生場所・原因・費用・再発有無を比較できません。出来事の始まりから終わりまでつながっていれば、同じ問題が起きたとき過去履歴をすぐ確認できます。"
      ]
    },
    "commonFields": [
      {
        "title": "日付",
        "desc": "出来事の順序をつなぐ基準です。",
        "detail": "発生日・対応日・完了日を分けると、処理期間と再発間隔を確認できます。"
      },
      {
        "title": "費用",
        "desc": "出来事と支出をつなぎます。",
        "detail": "金額だけでなく、どの問題・設備・業者に関係する費用かも一緒に残します。"
      },
      {
        "title": "写真・資料",
        "desc": "当時の状態を後から確認する根拠です。",
        "detail": "写真・見積・領収書・点検書がどの出来事に対応するか分かる状態にします。"
      },
      {
        "title": "結果",
        "desc": "対応が完了したか判断する項目です。",
        "detail": "「業者訪問」で終わらず、解決・未解決・再確認必要まで残します。"
      },
      {
        "title": "次の予定",
        "desc": "記録を次の行動につなぎます。",
        "detail": "再点検日・更新日・次回連絡日があれば、記録が保管から管理へ変わります。"
      }
    ],
    "eventFlow": {
      "title": "一つの出来事を最初から最後までつなぎます。",
      "desc": "出来事記録は発生から始まりますが、最初の対応で終わりません。費用・処理結果・再確認予定まで続けることで、同じ問題が再発したとき比較できます。",
      "steps": [
        "発生日",
        "内容",
        "写真・資料",
        "対応",
        "費用",
        "結果",
        "次の予定"
      ],
      "example": "8/12 漏水発見 → 写真3枚 → 業者点検 → 局部補修 → 費用記録 → 漏水停止 → 次の大雨後に再確認"
    },
    "qualityExamples": [
      {
        "title": "漏水",
        "bad": "漏水を修理",
        "good": "2026.08.12 / 3階南側窓付近 / 雨後に漏水 / 写真3枚 / A社 / 局部シール補修 / 費用記録 / 9月の降雨後に再確認"
      },
      {
        "title": "入金遅延",
        "bad": "賃料が遅れた",
        "good": "2026.05〜07 / 毎月7〜10日遅延 / 未納残高なし / 3か月反復 / 8月の更新協議で確認"
      },
      {
        "title": "契約変更",
        "bad": "賃料調整で合意",
        "good": "2026.06.20 合意 / 7月から賃料変更 / 6か月適用 / 書面確認を保存 / 12月に再検討"
      },
      {
        "title": "設備交換",
        "bad": "空調機を交換",
        "good": "2026.07.03 / 2階空調機 / 3回の反復故障後に交換 / B社 / 費用記録 / 保証2年 / 2027.06確認"
      }
    ],
    "logSectionsDetailed": [
      {
        "title": "月次管理日誌",
        "desc": "その月の繰り返す運営状態を短時間でまとめます。",
        "checks": [
          "賃料収入",
          "未納",
          "費用",
          "空室",
          "設備問題",
          "特記事項",
          "翌月予定"
        ],
        "judge": "随時の出来事記録をコピーする文書ではなく、月全体を見る要約です。"
      },
      {
        "title": "四半期管理日誌",
        "desc": "3か月の変化と繰り返すパターンを確認します。",
        "checks": [
          "空室推移",
          "費用推移",
          "繰り返す修理",
          "テナント変化",
          "主要出来事",
          "次四半期予定"
        ],
        "judge": "単発の出来事より、継続する傾向を探すために使います。"
      },
      {
        "title": "年次管理日誌",
        "desc": "1年の運営結果と翌年計画をつなげます。",
        "checks": [
          "年間収入",
          "年間費用",
          "空室期間",
          "主要修繕",
          "事故",
          "契約変更",
          "翌年計画"
        ],
        "judge": "合計だけでなく、結果に影響した主要な出来事も残します。"
      },
      {
        "title": "随時出来事日誌",
        "desc": "故障・事故・苦情・契約変更は発生時に記録します。",
        "checks": [
          "発生日",
          "内容",
          "写真・資料",
          "対応",
          "費用",
          "結果",
          "次の予定"
        ],
        "judge": "定期日誌とは別にすぐ作成し、結果が分かるまで更新を続けます。"
      }
    ],
    "exitBridge": {
      "title": "保有中の記録が売却時の説明資料になります。",
      "paragraphs": [
        "売却時に必要なのは「書類が多いこと」ではなく、建物がどのように運営され、重要な問題がどう処理されたか説明できる履歴です。",
        "契約変更・空室期間・主要修繕・事故・保険対応・費用増加などの出来事が日付と証憑につながっていれば、売却準備で資料を一から組み直す作業を減らせます。",
        "06で作った記録体系は、次のEXIT段階で運営履歴と修繕履歴を説明する基礎資料になります。"
      ],
      "facts": [
        "契約変更",
        "空室履歴",
        "主要修繕",
        "事故・保険",
        "写真・領収書"
      ]
    }
  }
];

const JA_MANAGEMENT_TUTORIAL_GROUPS=[
  [
    "01",
    "お金の流れ",
    "賃料収入・空室・費用は別々に見ますが、最後は同じキャッシュフローにつながります。"
  ],
  [
    "02",
    "人と契約",
    "テナントの要望や契約変更を、重要な記録を中心に管理します。"
  ],
  [
    "03",
    "建物の状態",
    "設備の通常状態と変化を比べ、大きな故障になる前のサインを見つけます。"
  ],
  [
    "04",
    "記録",
    "前のすべての変化を時系列でつなぎ、次の判断に再利用します。"
  ]
];

const JA_MANAGEMENT_TUTORIAL_AXES=[
  [
    "01",
    "入ってくるお金を確認してこそ、実際の運営状態が分かります。",
    "契約書の賃料と実際の入金は同じとは限りません。遅延・減額・未回収が繰り返すと、契約条件と実際の回収状況に差が生まれます。"
  ],
  [
    "02",
    "空室は、空いてからではなく空く前に管理します。",
    "契約満了や退去の可能性を把握するのが遅いほど、次の募集準備も遅れます。空室期間が長くなるほど、その期間の賃料収入は失われます。"
  ],
  [
    "03",
    "重要な要望と合意は記録に残します。",
    "修理依頼・費用負担・契約条件の変更・更新などは、時間がたつと双方の記憶がずれることがあります。重要な合意が残っていれば、その後の判断も一貫させやすくなります。"
  ],
  [
    "04",
    "収入だけでは、建物に実際いくら残るか分かりません。",
    "保険・金融費用・共用部費用・修繕費が増えれば、賃料が上がっても手元に残る金額は減ることがあります。入るお金と出るお金を合わせて運営結果を見ます。"
  ],
  [
    "05",
    "小さな異常を早く見つけるほど、大きな故障や運営停止を減らせます。",
    "漏水・異音・性能低下など小さな変化が繰り返すと、修理費だけでなくテナントの不便や営業への影響、空室にもつながります。"
  ],
  [
    "06",
    "記録があるから、前の5つの管理がつながります。",
    "収入・空室・テナント・費用・設備の履歴が別々に散らばると、繰り返す問題や変化の流れを見つけにくくなります。運営履歴をつなげて、次の管理判断とEXIT準備に使います。"
  ]
];

const JA_MANAGEMENT_PERIODS=[
  [
    "01",
    "毎月",
    "賃料入金・未納や遅延・共益費・主な運営費・発生した修繕費を確認します。"
  ],
  [
    "02",
    "四半期",
    "空室状況・運営費の増加・主要設備の状態・繰り返す苦情や修理を確認します。"
  ],
  [
    "03",
    "半年ごと",
    "契約満了予定・主要設備の状態・保険・予定修繕・更新可能性を確認します。"
  ],
  [
    "04",
    "年次",
    "年間賃料収入・運営費・修繕費・空室期間と翌年の管理計画を整理します。"
  ],
  [
    "05",
    "発生時",
    "設備故障・事故・苦情・入金遅延・退去通知・契約条件変更・緊急修繕はすぐ記録します。"
  ]
];

const JA_MANAGEMENT_CASES=[
  [
    "01",
    "漏水 → 費用 → テナント → 空室",
    "繰り返す漏水は設備問題だけで終わりません。修理費が費用に反映され、テナントの不便が大きくなると更新や空室にも影響します。",
    "一つの問題を複数の管理領域につなげて見ます。"
  ],
  [
    "02",
    "入金遅延 → キャッシュフロー → 契約",
    "繰り返す入金遅延は賃料収入の流れを乱し、蓄積した履歴は更新判断の資料になります。",
    "収入記録とテナント記録をつなげます。"
  ],
  [
    "03",
    "長期空室 → 条件変更 → 収入",
    "空室が長引けば賃貸条件を調整することがありますが、変更後の年間収入がどう変わったかは改めて確認する必要があります。",
    "空室対策と収益性を一緒に見ます。"
  ]
];

const JA_MANAGEMENT_TOOLS=[
  {
    "num": "01",
    "name": "空室損失計算",
    "desc": "空室期間の未収賃料と、空室中も続く固定費を合わせて実際の損失を確認します。",
    "href": "#"
  },
  {
    "num": "02",
    "name": "建物運営収益計算",
    "desc": "一定期間の実際の賃料収入と実際の運営費から運営結果を確認します。",
    "href": "#"
  },
  {
    "num": "03",
    "name": "契約満了管理",
    "desc": "契約作成ではなく、更新・退去準備のために満了日と確認時点を整理します。",
    "href": "#"
  }
];

const UI={
  "ko": {
    "homeTitle": "건물관리",
    "homeLead": "건물을 샀다면, 이제 수익을 지켜야 합니다. 매입 후 달라지는 돈·사람·건물의 상태를 확인하고, 중요한 변화를 기록으로 이어갑니다.",
    "quickAria": "건물관리 빠른 선택",
    "viewSuffix": " 보기",
    "toolsView": "관리도구 보기 →",
    "statementLead": "건물관리는 고장 수리만을 뜻하지 않습니다.",
    "statementBody": "시설을 고치는 일은 관리의 일부입니다. 실제 운영에서는 돈이 들어오는 흐름, 비어 있는 공간, 임차인과의 계약, 계속 늘어나는 비용, 시설의 변화, 그리고 그 모든 기록을 함께 봐야 합니다.",
    "expectedTitle": "매입할 때 계산한 수익률은 그대로 유지되지 않습니다.",
    "expectedBody": "공실이 길어지거나 금융비용과 수선비가 늘면 수익은 줄어듭니다. 반대로 안정적인 임차인과 관리된 시설, 줄어든 반복비용은 같은 건물의 운영결과를 바꿉니다.",
    "axesTitle": "여섯 가지 관리를 한 번에 이해합니다.",
    "axesBody": "매입 이후 건물 운영에서 반복해서 보게 되는 여섯 가지 영역입니다. 각각 무엇을 하는지보다, 왜 계속 관리해야 하는지를 먼저 이해합니다.",
    "calendarTitle": "모든 것을 매일 확인할 필요는 없습니다.",
    "calendarBody": "현금흐름은 매월, 공실과 비용 흐름은 분기, 계약과 시설은 만료·점검 일정에 맞춰 확인합니다. 사고나 고장은 발생 즉시 기록합니다.",
    "connectedTitle": "하나의 문제는 다른 관리항목으로 이어집니다.",
    "connectedBody": "상세페이지에서는 한 축을 깊게 보고, 여기서는 실제 운영에서 여러 축이 어떻게 연결되는지 확인합니다.",
    "toolsTitle": "반복해서 계산하는 일은 도구로 줄입니다.",
    "toolsBody": "관리도구는 관리법을 대신하지 않습니다. 이미 이해한 기준을 반복해서 계산하거나 일정을 정리할 때 사용하는 보조수단입니다.",
    "toolsNote": "도구 기능은 전체 MVP 완성 후 연결합니다. 현재는 관리 콘텐츠 흐름을 확인하기 위한 링크 자리입니다.",
    "finalTitle": "관리의 마지막은 기록입니다.",
    "finalBody": "문제가 생기지 않는 건물은 없습니다. 중요한 것은 이전 기록을 확인하고 원인을 찾고 다음 조치를 판단할 수 있는 구조를 만드는 것입니다.",
    "finalChecks": [
      [
        "수익을 기록합니다.",
        "계약금액이 아니라 실제 들어온 돈과 실제 나간 비용을 확인합니다."
      ],
      [
        "변화를 기록합니다.",
        "공실, 임차인, 시설과 비용에서 반복되는 변화를 연결합니다."
      ],
      [
        "다음 행동을 남깁니다.",
        "확인한 문제를 다음 점검과 처리 일정으로 이어갑니다."
      ]
    ],
    "finalStrong1": "좋은 관리는 문제가 전혀 없는 상태가 아니라,",
    "finalStrong2": "다음 행동을 판단할 수 있는 상태입니다.",
    "finalExit": "이렇게 쌓인 운영이력은 기록관리·관리일지에서 하나로 모입니다. 다음 단계인 05 EXIT에서는 계속 보유할지, 매각할지, 언제 움직일지를 판단하는 자료가 됩니다.",
    "check": "확인할 것",
    "caution": "주의할 점",
    "practice": "실제 상황",
    "practiceTitle": "운영 중에는 이렇게 봅니다.",
    "practiceLead": "사례마다 무엇을 확인하고, 어떻게 판단하고, 무엇을 기록할지 연결해서 봅니다.",
    "howToJudge": "어떻게 볼까",
    "recordThis": "기록할 것",
    "signals": "이상징후",
    "signalsTitle": "이런 변화는 다시 봅니다.",
    "signalsLead": "한 번의 변화보다 반복되는 흐름과 함께 나타나는 신호를 봅니다.",
    "interpret": "해석",
    "period": "관리주기",
    "periodTitle": "언제 확인할까요?",
    "periodLead": "모든 항목을 매일 볼 필요는 없습니다. 확인 주기마다 보는 내용이 다릅니다.",
    "judgePoint": "판단 포인트",
    "finalSummary": "FINAL · 핵심정리",
    "summaryTitles": {
      "rent": "임대수익 요약",
      "vacancy": "공실 요약",
      "tenant": "임차인 관리 요약",
      "cost": "비용 관리 요약",
      "facility": "시설 관리 요약",
      "record": "기록 관리 요약"
    },
    "facilityLabel": "04 · 시설별 관리기준",
    "facilityTitle": "시설마다 무엇을 보고, 어디서 판단할지 기준을 정합니다.",
    "facilityLead": "용어를 다시 설명하지 않습니다. 실제 시설에서 확인할 기준과 위치를 먼저 보고, 그 기준이 왜 중요한지 판단 사례까지 이어서 봅니다.",
    "criteria": "점검기준",
    "whatToCheck": "체크해야 할 것",
    "caseLabel": "판단사례",
    "expert": "전문가 점검으로 전환할 기준",
    "recordQualityLabel": "03 · 기록의 기준",
    "commonFieldsLabel": "04 · 공통 필드",
    "commonFieldsTitle": "모든 기록에 같은 다섯 가지 기준을 둡니다.",
    "commonFieldsLead": "칩처럼 이름만 외우는 것이 아니라, 각 필드가 왜 필요한지 이해하고 같은 형식으로 남깁니다.",
    "eventFlowLabel": "05 · 사건기록 흐름",
    "eventFlowAria": "사건기록 흐름",
    "example": "예시",
    "qualityExamplesLabel": "08 · 좋은 기록 vs 나쁜 기록",
    "qualityExamplesTitle": "짧게 적는 것과 다시 쓸 수 있게 적는 것은 다릅니다.",
    "qualityExamplesLead": "같은 사건이라도 날짜·대상·자료·조치·결과가 연결돼야 다음 판단에 사용할 수 있습니다.",
    "badRecord": "나쁜 기록",
    "goodRecord": "좋은 기록",
    "exitLabel": "12 · EXIT 연결",
    "logTitle": "관리일지는 기록관리 안에서 계속 누적합니다.",
    "logBody1": "한 번 작성하고 끝내는 체크리스트가 아니라 월간·분기·연간 기록과 수시 사건기록을 같은 건물의 운영이력으로 이어갑니다.",
    "logBody2": "정기 기록은 흐름을 보여주고, 수시 사건기록은 고장·사고·민원·계약변경처럼 발생 즉시 남겨야 하는 일을 보완합니다.",
    "usePoint": "활용 포인트",
    "glossary": "관리용어",
    "glossaryRecordTitle": "어떤 기록을 연결할까요?",
    "glossaryTitle": "무엇을 관리할까요?",
    "concept": "핵심개념",
    "method": "관리방법",
    "methodTitle": "이 순서로 확인합니다.",
    "methodLead": "먼저 전체 흐름을 보고, 아래 단계에서 필요한 이유와 확인 기준을 자연스럽게 이어서 봅니다.",
    "managementFlow": "관리 흐름",
    "guideNote": "교육용 건물관리 가이드입니다. 실제 계약·세무·법률·시설 안전 판단이 필요한 경우 관련 전문가와 공적 자료를 함께 확인하세요.",
    "currentCore": "현재 관리영역 핵심",
    "nextStep": "다음 단계",
    "toolsName": "관리도구",
    "toolsPrompt": "공실 손실, 실제 운영수익, 계약 만료처럼 반복해서 확인하는 관리업무를 도구로 정리합니다.",
    "otherAria": "다른 관리 영역",
    "backHome": "건물관리로 돌아가기",
    "exploreTitle": "다른 관리영역도 함께 보기",
    "backLabel": "← MANAGEMENT HOME",
    "seoCorpus": "임대수익, 공실, 임차인, 비용, 시설, 기록을 나누어 보유기간 동안 관리하고 건물 관리일지로 운영이력을 누적합니다."
  },
  "en": {
    "homeTitle": "Building Management",
    "homeLead": "Buying the building is only the start. Protect the income by tracking changes in cash flow, tenants, physical condition, and the records that connect them.",
    "quickAria": "Quick building management navigation",
    "viewSuffix": "",
    "actionLabels": {
      "rent": "View Rent Income",
      "vacancy": "View Vacancy",
      "tenant": "View Tenant Management",
      "cost": "View Costs",
      "facility": "View Facilities",
      "record": "View Records"
    },
    "toolsView": "View Management Tools →",
    "statementLead": "Building management is more than fixing what breaks.",
    "statementBody": "Repairs are only one part of management. Real operations also require watching incoming cash, vacant space, tenant agreements, rising costs, physical changes, and the records that connect all of them.",
    "expectedTitle": "The return you calculated at purchase does not stay fixed.",
    "expectedBody": "Longer vacancy, higher financing costs, and repair expenses can reduce returns. Stable tenants, maintained facilities, and fewer recurring costs can change the operating result of the same building.",
    "axesTitle": "Understand the six management areas at a glance.",
    "axesBody": "These are the six areas you will revisit throughout ownership. Start by understanding why each one needs ongoing management before going deeper into the method.",
    "calendarTitle": "Not everything needs to be checked every day.",
    "calendarBody": "Review cash flow monthly, vacancy and cost trends quarterly, and leases and facilities around expiry or inspection dates. Record incidents and failures when they happen.",
    "connectedTitle": "One issue often moves into another management area.",
    "connectedBody": "The detail pages go deep on one area. Here, focus on how several areas connect during real operations.",
    "toolsTitle": "Use tools for work you calculate repeatedly.",
    "toolsBody": "Tools do not replace management judgment. Use them to repeat calculations or organize dates after you understand the underlying standard.",
    "toolsNote": "Tool functions will be connected after the full MVP is complete. These links currently show where the tools fit in the management flow.",
    "finalTitle": "Good management ends with usable records.",
    "finalBody": "No building operates without problems. What matters is having enough history to find the cause, understand what changed, and decide what to do next.",
    "finalChecks": [
      [
        "Record the money.",
        "Compare what was actually collected with what actually went out, not just the contracted amount."
      ],
      [
        "Record the change.",
        "Connect recurring changes across vacancy, tenants, facilities, and costs."
      ],
      [
        "Record the next action.",
        "Turn each confirmed issue into a follow-up check or action date."
      ]
    ],
    "finalStrong1": "Good management is not a building with zero problems.",
    "finalStrong2": "It is a building where the next action can be decided.",
    "finalExit": "The operating history built here comes together in Records & Management Log. In the next EXIT stage, it becomes evidence for deciding whether to keep, sell, or change course.",
    "check": "Check",
    "caution": "Watch for",
    "practice": "REAL SITUATION",
    "practiceTitle": "This is how to review it in operation.",
    "practiceLead": "For each case, connect what to check, how to judge it, and what should be recorded.",
    "howToJudge": "How to judge",
    "recordThis": "Record",
    "signals": "WARNING SIGNS",
    "signalsTitle": "Recheck when these patterns appear.",
    "signalsLead": "Look beyond a single change and pay attention to patterns that repeat or appear together.",
    "interpret": "What it means",
    "period": "REVIEW CYCLE",
    "periodTitle": "When should you review it?",
    "periodLead": "Not every item needs daily attention. What you review changes with the cycle.",
    "judgePoint": "Decision point",
    "finalSummary": "FINAL · SUMMARY",
    "summaryTitles": {
      "rent": "Rent Income Summary",
      "vacancy": "Vacancy Summary",
      "tenant": "Tenant Management Summary",
      "cost": "Cost Management Summary",
      "facility": "Facility Management Summary",
      "record": "Record Management Summary"
    },
    "facilityLabel": "04 · FACILITY-SPECIFIC CRITERIA",
    "facilityTitle": "Set a clear inspection standard for each facility area.",
    "facilityLead": "Do not repeat definitions. Start with what to inspect and where, then use the explanation and cases to understand why those standards matter.",
    "criteria": "Inspection criteria",
    "whatToCheck": "What to check",
    "caseLabel": "Decision case",
    "expert": "Escalate to a professional when",
    "recordQualityLabel": "03 · RECORD QUALITY",
    "commonFieldsLabel": "04 · COMMON FIELDS",
    "commonFieldsTitle": "Use the same five core fields across every record.",
    "commonFieldsLead": "Do not memorize field names as labels. Understand why each field matters and keep the format consistent.",
    "eventFlowLabel": "05 · EVENT RECORD FLOW",
    "eventFlowAria": "Event record flow",
    "example": "Example",
    "qualityExamplesLabel": "08 · GOOD VS WEAK RECORDS",
    "qualityExamplesTitle": "A short note is not the same as a reusable record.",
    "qualityExamplesLead": "Even for the same event, date, subject, evidence, action, and outcome need to connect before the record can support the next decision.",
    "badRecord": "Weak record",
    "goodRecord": "Usable record",
    "exitLabel": "12 · CONNECTION TO EXIT",
    "logTitle": "Keep the management log growing inside the record system.",
    "logBody1": "This is not a checklist you complete once. Monthly, quarterly, annual, and event records should continue as one operating history for the same building.",
    "logBody2": "Periodic logs show the overall flow, while event records preserve failures, incidents, complaints, and lease changes at the moment they happen.",
    "usePoint": "How to use it",
    "glossary": "MANAGEMENT TERMS",
    "glossaryRecordTitle": "Which records should be connected?",
    "glossaryTitle": "What are we managing?",
    "concept": "CORE CONCEPT",
    "method": "MANAGEMENT METHOD",
    "methodTitle": "Review it in this order.",
    "methodLead": "Start with the full flow, then move through the reasons and checks in each step.",
    "managementFlow": "management flow",
    "guideNote": "This is an educational building-management guide. For actual lease, tax, legal, regulatory, or facility-safety decisions, confirm the applicable local requirements and consult qualified professionals when needed.",
    "currentCore": "Current management focus",
    "nextStep": "Next step",
    "toolsName": "Management Tools",
    "toolsPrompt": "Use tools to organize recurring tasks such as vacancy loss, actual operating return, and lease-expiry planning.",
    "otherAria": "Other management areas",
    "backHome": "Back to Building Management",
    "exploreTitle": "Explore other management areas",
    "backLabel": "← MANAGEMENT HOME",
    "seoCorpus": "Manage rental income, vacancy, tenants, costs, facilities, and records throughout ownership, and build a reusable operating history through a consistent management log."
  },
  "ja": {
    "homeTitle": "建物管理",
    "homeLead": "建物を取得したら、次は収益を守る段階です。入るお金、人との契約、建物の状態の変化を確認し、重要な出来事を記録につなげます。",
    "quickAria": "建物管理のクイックナビゲーション",
    "viewSuffix": "",
    "actionLabels": {
      "rent": "賃料収入を見る",
      "vacancy": "空室管理を見る",
      "tenant": "テナント管理を見る",
      "cost": "費用管理を見る",
      "facility": "設備管理を見る",
      "record": "記録管理を見る"
    },
    "toolsView": "管理ツールを見る →",
    "statementLead": "建物管理は、故障を直すことだけではありません。",
    "statementBody": "設備修理は管理の一部です。実際の運営では、入金の流れ、空いている空間、テナントとの契約、増えていく費用、設備の変化、そしてそれらをつなぐ記録を一緒に見ます。",
    "expectedTitle": "購入時に計算した利回りは、そのまま続くとは限りません。",
    "expectedBody": "空室が長引いたり、金融費用や修繕費が増えたりすると収益は下がります。一方、安定したテナント、管理された設備、減った反復費用は同じ建物の運営結果を変えます。",
    "axesTitle": "6つの管理領域を一度に理解します。",
    "axesBody": "購入後の建物運営で繰り返し確認する6つの領域です。まずは「何をするか」より、なぜ継続して管理する必要があるのかを理解します。",
    "calendarTitle": "すべてを毎日確認する必要はありません。",
    "calendarBody": "キャッシュフローは毎月、空室と費用の流れは四半期、契約と設備は満了・点検時期に合わせて確認します。事故や故障は発生時に記録します。",
    "connectedTitle": "一つの問題は、別の管理領域へつながります。",
    "connectedBody": "詳細ページでは一つの領域を深く見ます。ここでは実際の運営で複数の領域がどうつながるかを確認します。",
    "toolsTitle": "繰り返し計算する作業はツールで減らします。",
    "toolsBody": "管理ツールは判断基準の代わりではありません。基準を理解したうえで、計算や日程整理を繰り返すときの補助手段として使います。",
    "toolsNote": "ツール機能はMVP全体の完成後に接続します。現在は管理コンテンツの中でどこに入るかを確認するリンクです。",
    "finalTitle": "管理の最後は、使える記録です。",
    "finalBody": "問題がまったく起きない建物はありません。大切なのは、過去の記録から原因と変化を確認し、次の対応を判断できる状態を作ることです。",
    "finalChecks": [
      [
        "お金を記録します。",
        "契約金額ではなく、実際に入ったお金と実際に出た費用を確認します。"
      ],
      [
        "変化を記録します。",
        "空室・テナント・設備・費用で繰り返す変化をつなげます。"
      ],
      [
        "次の行動を残します。",
        "確認した問題を次の点検や対応予定につなげます。"
      ]
    ],
    "finalStrong1": "良い管理とは、問題がまったくない状態ではなく、",
    "finalStrong2": "次の行動を判断できる状態です。",
    "finalExit": "ここで積み上げた運営履歴は、記録管理・管理日誌で一つにつながります。次の05 EXITでは、保有を続けるか、売却するか、いつ動くかを判断する資料になります。",
    "check": "確認すること",
    "caution": "注意点",
    "practice": "実際の状況",
    "practiceTitle": "運営中はこう判断します。",
    "practiceLead": "それぞれの事例で、何を確認し、どう判断し、何を記録するかをつなげて見ます。",
    "howToJudge": "判断のしかた",
    "recordThis": "記録すること",
    "signals": "異常サイン",
    "signalsTitle": "このような変化はもう一度確認します。",
    "signalsLead": "一度だけの変化ではなく、繰り返す流れや同時に現れるサインを見ます。",
    "interpret": "見方",
    "period": "管理周期",
    "periodTitle": "いつ確認しますか？",
    "periodLead": "すべてを毎日見る必要はありません。確認する内容は周期によって変わります。",
    "judgePoint": "判断ポイント",
    "finalSummary": "FINAL · 要点整理",
    "summaryTitles": {
      "rent": "賃料収入の要点",
      "vacancy": "空室管理の要点",
      "tenant": "テナント管理の要点",
      "cost": "費用管理の要点",
      "facility": "設備管理の要点",
      "record": "記録管理の要点"
    },
    "facilityLabel": "04 · 設備別管理基準",
    "facilityTitle": "設備ごとに、見る場所と判断基準を決めます。",
    "facilityLead": "用語説明は繰り返しません。実際の設備で確認する基準と場所を先に見て、その基準が重要な理由を判断事例までつなげます。",
    "criteria": "点検基準",
    "whatToCheck": "確認する場所・項目",
    "caseLabel": "判断事例",
    "expert": "専門家の点検へ切り替える基準",
    "recordQualityLabel": "03 · 記録の基準",
    "commonFieldsLabel": "04 · 共通項目",
    "commonFieldsTitle": "すべての記録に同じ5つの基準を置きます。",
    "commonFieldsLead": "項目名だけを覚えるのではなく、なぜ必要かを理解し、同じ形式で残します。",
    "eventFlowLabel": "05 · 出来事記録の流れ",
    "eventFlowAria": "出来事記録の流れ",
    "example": "例",
    "qualityExamplesLabel": "08 · 良い記録 vs 弱い記録",
    "qualityExamplesTitle": "短く書くことと、後で使えるように書くことは違います。",
    "qualityExamplesLead": "同じ出来事でも、日付・対象・資料・対応・結果がつながって初めて次の判断に使えます。",
    "badRecord": "弱い記録",
    "goodRecord": "使える記録",
    "exitLabel": "12 · EXITへの接続",
    "logTitle": "管理日誌は記録管理の中で継続して積み上げます。",
    "logBody1": "一度作って終わるチェックリストではありません。月次・四半期・年次・随時の出来事記録を、同じ建物の運営履歴としてつなげます。",
    "logBody2": "定期記録は全体の流れを示し、随時記録は故障・事故・苦情・契約変更など発生時に残すべき情報を補います。",
    "usePoint": "活用ポイント",
    "glossary": "管理用語",
    "glossaryRecordTitle": "どの記録をつなげますか？",
    "glossaryTitle": "何を管理しますか？",
    "concept": "基本概念",
    "method": "管理方法",
    "methodTitle": "この順序で確認します。",
    "methodLead": "まず全体の流れを見て、各段階で必要な理由と確認基準を順に見ていきます。",
    "managementFlow": "管理の流れ",
    "guideNote": "建物管理を学ぶためのガイドです。実際の契約・税務・法務・法令・設備安全に関する判断は、地域の制度や公的資料を確認し、必要に応じて専門家へ相談してください。",
    "currentCore": "現在の管理領域の要点",
    "nextStep": "次のステップ",
    "toolsName": "管理ツール",
    "toolsPrompt": "空室損失・実際の運営収益・契約満了など、繰り返し確認する管理業務をツールで整理します。",
    "otherAria": "他の管理領域",
    "backHome": "建物管理に戻る",
    "exploreTitle": "他の管理領域も見る",
    "backLabel": "← MANAGEMENT HOME",
    "seoCorpus": "賃料収入・空室・テナント・費用・設備・記録を分けて保有期間中の建物を管理し、管理日誌で再利用できる運営履歴を蓄積します。"
  }
};

const IMAGE_ALTS={
  "ko": {
    "home": "상업용 건물 앞에서 운영과 인수인계를 상징하는 장면",
    "rent": "여러 상업용 건물의 실제 임대수익 흐름을 비교하는 장면",
    "vacancy": "공실이 발생하기 전 다음 임차를 준비하는 상업공간 전환 장면",
    "tenant": "임차인과 건물 운영 관련 요청과 합의를 함께 확인하는 장면",
    "cost": "수선비와 설비비 등 건물 운영비용의 발생원을 분석하는 장면",
    "facility": "상업용 건물 옥상과 설비 상태를 현장에서 점검하는 장면",
    "facilityCriteria": "옥상·외벽·급배수·전기·소방·승강기·냉난방·주차시설을 한눈에 보는 건물 시설 구성",
    "record": "건물의 문제 발생부터 조치와 결과까지 운영기록을 시간순으로 연결하는 장면"
  },
  "en": {
    "home": "Two professionals outside a commercial building, representing building operations and handover",
    "rent": "Overhead comparison of actual rental-income flows across several commercial properties",
    "vacancy": "Commercial space in transition, prepared for the next tenant before vacancy",
    "tenant": "Two professionals reviewing tenant requests, property issues, and agreements",
    "cost": "Building operating-cost analysis with repair and facility expense sources",
    "facility": "On-site inspection of rooftop equipment and physical building condition",
    "facilityCriteria": "Multi-view overview of roof, facade, plumbing, electrical, fire, elevator, HVAC, parking, and common areas",
    "record": "Property-management evidence connected in chronological order from issue to action and outcome"
  },
  "ja": {
    "home": "商業建物の前で運営と引継ぎを象徴する二人のプロフェッショナル",
    "rent": "複数の商業物件で実際の賃料収入の流れを比較する俯瞰シーン",
    "vacancy": "空室になる前に次のテナントを準備する商業空間の移行シーン",
    "tenant": "テナントからの要望や物件課題、合意内容を確認する二人の担当者",
    "cost": "修繕費や設備費など建物運営費用の発生源を分析するシーン",
    "facility": "商業建物の屋上設備と建物状態を現場で点検するシーン",
    "facilityCriteria": "屋上・外壁・給排水・電気・消防・昇降機・空調・駐車場と共用部をまとめて見る設備構成",
    "record": "問題発生から対応・結果までの建物運営記録を時系列でつなぐシーン"
  }
};

const META={
  "ko": {
    "title": "건물관리 | FIX BUILDING",
    "description": "임대수익, 공실, 임차인, 비용, 시설, 기록을 기준으로 건물 보유기간의 관리방법과 관리일지를 안내합니다.",
    "og": "건물 보유기간의 수익과 위험을 관리하는 방법을 정리합니다."
  },
  "en": {
    "title": "Building Management | FIX BUILDING",
    "description": "Learn how to manage rental income, vacancy, tenants, operating costs, facilities, and records throughout building ownership.",
    "og": "A practical framework for managing income, risk, facilities, tenants, and operating history during ownership."
  },
  "ja": {
    "title": "建物管理 | FIX BUILDING",
    "description": "賃料収入・空室・テナント・費用・設備・記録を軸に、建物保有期間の管理方法と管理日誌を整理します。",
    "og": "建物の保有期間に収益・リスク・設備・テナント・運営履歴を管理するための実践ガイドです。"
  }
};

const CONTENT={
  ko:{sections:KO_SECTIONS,tutorialGroups:KO_GROUPS,tutorialAxes:KO_AXES,periods:KO_PERIODS,cases:KO_CASES,tools:KO_TOOLS},
  en:{sections:EN_SECTIONS,tutorialGroups:EN_MANAGEMENT_TUTORIAL_GROUPS,tutorialAxes:EN_MANAGEMENT_TUTORIAL_AXES,periods:EN_MANAGEMENT_PERIODS,cases:EN_MANAGEMENT_CASES,tools:EN_MANAGEMENT_TOOLS},
  ja:{sections:JA_SECTIONS,tutorialGroups:JA_MANAGEMENT_TUTORIAL_GROUPS,tutorialAxes:JA_MANAGEMENT_TUTORIAL_AXES,periods:JA_MANAGEMENT_PERIODS,cases:JA_MANAGEMENT_CASES,tools:JA_MANAGEMENT_TOOLS},
};

export function getManagementContent(locale='ko'){
  const lang=CONTENT[locale]?locale:'ko';
  return {...CONTENT[lang],ui:UI[lang],imageAlts:IMAGE_ALTS[lang],meta:META[lang],locale:lang};
}

export const MANAGEMENT_LOCALES=['ko','en','ja'];
export const MANAGEMENT_SLUGS=['rent','vacancy','tenant','cost','facility','record'];
