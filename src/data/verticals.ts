export type Vertical = {
  slug: string;
  name: string;
  shortName: string;
  pain: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  findings: { symptom: string; detail: string }[];
  faq: { q: string; a: string }[];
};

export const verticals: Vertical[] = [
  {
    slug: "dental",
    name: "Multi-practice Dental Groups",
    shortName: "Dental groups & DSOs",
    pain: "You have three offices on three phone bills, two PMS systems, and one HIPAA exposure you don't know about.",
    metaTitle: "Technology advisor for multi-practice dental groups | Catalytix",
    metaDescription:
      "Catalytix runs the Operator's Audit for 2–10 location dental groups and DSOs. We find the HIPAA, PMS, and connectivity gaps your IT vendor doesn't.",
    intro:
      "We work with GP-led dental groups and DSOs running 2 to 10 locations. The patterns are consistent: phone systems acquired one office at a time, a PMS that doesn't speak to the second PMS you inherited, and a HIPAA posture that passes a checklist but wouldn't survive an actual breach review.",
    findings: [
      {
        symptom: "Three offices, three phone systems, three bills",
        detail:
          "Each location was set up by whoever was selling phones that quarter. Hunt groups don't span sites. After-hours routing is a stack of forwards. Patients drop on hold between offices.",
      },
      {
        symptom: "PMS sprawl after acquisition",
        detail:
          "An office you bought is still on Dentrix while the rest run Open Dental. The connectivity, backup, and HIPAA story is different at every site and nobody owns the consolidation plan.",
      },
      {
        symptom: "HIPAA posture that's a checklist, not a posture",
        detail:
          "You pass the annual risk analysis. You also have a flat network, no segmentation between guest WiFi and the PMS, and admin credentials shared in a Google Doc.",
      },
      {
        symptom: "No business continuity if the internet drops",
        detail:
          "When the circuit goes down, the front desk can't check in patients, can't take payment, and can't pull X-rays. There is no failover. There is a phone tree of IT vendors.",
      },
      {
        symptom: "Carrier contracts that auto-renewed in silence",
        detail:
          "Three of your locations are still paying 2019 rates on a ratified contract that has been auto-extending. Nobody renegotiated when you added sites four and five.",
      },
    ],
    faq: [
      {
        q: "Do you replace our IT company?",
        a: "No. We work alongside your MSP. The Audit is diagnostic; we identify what's working and what isn't, and we hold every vendor — including your MSP — to a single architecture you actually own.",
      },
      {
        q: "Are you HIPAA compliant as an advisor?",
        a: "Catalytix does not access PHI. Our work is on the underlying communications, connectivity, security, and continuity stack. When suppliers we recommend touch PHI, BAAs are executed before deployment.",
      },
      {
        q: "We're a 3-office GP. Are we too small?",
        a: "Two locations is the floor. Below that, the multi-site dynamics that make the Audit valuable don't exist yet.",
      },
      {
        q: "Do you sell dental software?",
        a: "No. We don't recommend or resell PMS, imaging, or clinical software. The Audit covers the infrastructure those systems run on.",
      },
      {
        q: "How long does the Audit take?",
        a: "One day on-site per location for groups under five sites; sampled site visits for larger groups. The brief lands within two weeks of the last visit.",
      },
    ],
  },
  {
    slug: "optometry",
    name: "Optometry Practices",
    shortName: "Optometry",
    pain: "Diagnostic equipment from 2014 still on its own VLAN, EHR in the cloud, and a phone system the previous owner left behind.",
    metaTitle: "Technology advisor for multi-location optometry practices | Catalytix",
    metaDescription:
      "The Operator's Audit for independent optometry groups and small chains. Stabilize the stack between diagnostic equipment, cloud EHR, and patient communications.",
    intro:
      "Independent optometry — single-doctor expansions and small chains — sits between a hardware-heavy exam lane and a SaaS-heavy front office. The two halves were almost never designed to live on the same network, and most practices are running a truce, not an architecture.",
    findings: [
      {
        symptom: "Diagnostic devices on the same flat LAN as guest WiFi",
        detail:
          "The OCT, the visual field, and the patient WiFi share a broadcast domain. One mis-plugged cable and the lane goes down with somebody's Netflix.",
      },
      {
        symptom: "Cloud EHR throttled by a residential-grade circuit",
        detail:
          "You're paying for cloud software on a 100/10 cable line. Image uploads stall during peak hours. Your team blames the EHR vendor. The vendor blames the carrier.",
      },
      {
        symptom: "Multi-location patient comms held together by a single person",
        detail:
          "Recall, reminders, and reviews live in a system that one staff member knows. When she leaves, the workflow leaves with her.",
      },
      {
        symptom: "No POTS replacement plan",
        detail:
          "Your alarm panel and elevator phone still ride on copper. The carrier is sunsetting the line. Nobody has told you and nobody has scoped the swap.",
      },
      {
        symptom: "Two phone numbers per location, neither of them the published one",
        detail:
          "Patients call the listed number. It rolls to a personal cell. The 'main' line goes unanswered. Reviews show it.",
      },
    ],
    faq: [
      {
        q: "We're on RevolutionEHR / Crystal / Compulink. Does that matter?",
        a: "Not directly. We don't tune the EHR. We make sure the network, the circuits, and the failover serve whatever EHR you've chosen.",
      },
      {
        q: "What about the dispensing and lab side?",
        a: "Lab orders, frame board software, and edger connectivity are part of the floor walk. We document what relies on the network and what doesn't.",
      },
      {
        q: "Can you help with the PCI side of optical sales?",
        a: "Yes. PCI scope reduction and proper segmentation between the POS and the rest of the practice is a standard finding.",
      },
      {
        q: "Do you work with single-location practices?",
        a: "The Audit is built for two or more locations. Single-location practices generally don't have the consolidation surface that justifies it.",
      },
      {
        q: "How do you get paid?",
        a: "Suppliers we recommend pay residual to the master agent we operate under. You pay nothing to Catalytix.",
      },
    ],
  },
  {
    slug: "veterinary",
    name: "Veterinary Practices",
    shortName: "Veterinary",
    pain: "Imaging files the size of a small movie, a PIMS that requires a constant tunnel, and a phone tree built by the previous office manager.",
    metaTitle: "Technology advisor for multi-location veterinary practices | Catalytix",
    metaDescription:
      "The Operator's Audit for independent multi-location vet groups and small DVM-led chains. Connectivity, PIMS, and continuity built for clinical workflow.",
    intro:
      "Independent vet groups and small DVM-led chains run heavy clinical files on networks that were never engineered for them. The result is staff working around the system instead of through it.",
    findings: [
      {
        symptom: "Imaging stalls between exam room and server",
        detail:
          "Digital radiography produces files large enough to choke a residential circuit. Techs wait. Then they retake. Then they wait again.",
      },
      {
        symptom: "PIMS dependency with no continuity plan",
        detail:
          "When the cloud PIMS is unreachable, the practice cannot bill, schedule, or check in. There is no offline mode. There is no second path to the internet.",
      },
      {
        symptom: "Phone tree designed for one office, deployed across four",
        detail:
          "Calls intended for the new location route to the original. Voicemails accumulate at sites that closed last year.",
      },
      {
        symptom: "Backups that haven't been tested in 18 months",
        detail:
          "There is a backup. Nobody has restored from it. The first restore attempt is during an actual outage, which is the wrong time to learn it doesn't work.",
      },
      {
        symptom: "Specialty equipment on the carrier's modem",
        detail:
          "An ultrasound or laser is plugged into the ISP-supplied gateway because nobody scoped a real LAN. The vendor's remote support depends on it.",
      },
    ],
    faq: [
      {
        q: "Do you work with corporate vet groups (NVA, Mars, etc.)?",
        a: "No. We work with independent multi-location vets and small DVM-owned groups. Corporate groups have their own internal teams.",
      },
      {
        q: "We're on Cornerstone / AVImark / ezyVet. Will any of this matter?",
        a: "Yes — the answer for cloud-hosted PIMS is not the same as for on-prem. The Audit identifies which model you're actually running.",
      },
      {
        q: "Can you help with the boarding and grooming side?",
        a: "Anything that runs on the network is in scope: cameras, kennel comms, retail POS.",
      },
      {
        q: "What about telemedicine?",
        a: "Telemedicine is bandwidth-sensitive and continuity-sensitive. If you're offering it, the Audit will pressure-test the stack supporting it.",
      },
      {
        q: "How long until we see findings?",
        a: "On-site the same day. Written brief within two weeks.",
      },
    ],
  },
  {
    slug: "urgent-care",
    name: "Urgent Care Centers",
    shortName: "Urgent care",
    pain: "Door-to-discharge time gated by a network nobody has measured.",
    metaTitle: "Technology advisor for independent urgent care centers | Catalytix",
    metaDescription:
      "The Operator's Audit for independent urgent care and small regional chains. Throughput-grade connectivity, EHR continuity, and HIPAA posture without the theater.",
    intro:
      "Independent urgent care lives or dies on throughput. The clinical software, the labs interface, the imaging, and the patient registration all ride a network that was usually scoped for an office, not a clinic running 60 patients on a Saturday.",
    findings: [
      {
        symptom: "Single circuit, single point of failure",
        detail:
          "When the cable line drops, you stop seeing patients. There is no LTE failover. There is no secondary circuit. There is a sign on the door.",
      },
      {
        symptom: "EHR latency dressed up as a clinical complaint",
        detail:
          "Providers are spending eight extra seconds per chart waiting for the EHR to respond. Multiply that across a shift. That's clinic capacity.",
      },
      {
        symptom: "Lab and imaging interfaces on the wrong VLAN",
        detail:
          "Results route slowly because the integration sits on a shared subnet with patient WiFi. The vendor calls it 'normal.' It isn't.",
      },
      {
        symptom: "Front desk wait-time visibility nobody has set up",
        detail:
          "Patients track wait time on your competitor's site. Yours doesn't publish it. The data exists in the EHR.",
      },
      {
        symptom: "After-hours coverage routing through a personal cell",
        detail:
          "On-call providers are reachable through a number that was set up in 2018. When they change, the number doesn't.",
      },
    ],
    faq: [
      {
        q: "Are you HIPAA-aware?",
        a: "Yes. Catalytix doesn't touch PHI. Suppliers that do execute BAAs before deployment.",
      },
      {
        q: "We're on Experity / DocuTAP / Athena. Will the Audit fit?",
        a: "The Audit is EHR-agnostic. We assess the stack the EHR runs on, not the EHR itself.",
      },
      {
        q: "Can you help with provider credentialing tech?",
        a: "Out of scope. We focus on communications, connectivity, security, and continuity.",
      },
      {
        q: "Do you work with hospital-owned urgent care?",
        a: "No. We focus on independent operators and small regional chains.",
      },
      {
        q: "What does cost optimization usually look like?",
        a: "Most operators recover 12–25% of recurring telecom and connectivity spend in year one. We don't promise it; the Audit measures it.",
      },
    ],
  },
  {
    slug: "cannabis",
    name: "Cannabis Operators",
    shortName: "Cannabis",
    pain: "State-legal compliance running on consumer-grade hardware and goodwill.",
    metaTitle: "Technology advisor for cannabis operators | Catalytix",
    metaDescription:
      "The Operator's Audit for state-legal dispensaries, cultivators, and processors. Track-and-trace, surveillance retention, and segmentation built for compliance.",
    intro:
      "State-legal cannabis is the most regulated retail environment most operators have ever worked in, and the technology stack rarely reflects it. The Audit looks at the stack the way a compliance officer would, then the way an operator would.",
    findings: [
      {
        symptom: "Surveillance retention that doesn't actually meet the rule",
        detail:
          "The DVR is configured for the wrong frame rate, the wrong retention, or both. Pulling a clip on demand is a 40-minute exercise.",
      },
      {
        symptom: "POS, track-and-trace, and guest WiFi on one flat network",
        detail:
          "There is no segmentation between the patient/customer-facing wireless and the systems regulators care about. One compromised guest device puts the license at risk.",
      },
      {
        symptom: "Connectivity that goes down at the wrong time",
        detail:
          "When the circuit drops, METRC / BioTrack / state portal sync stops. Sales continue offline. Reconciliation becomes Monday's problem.",
      },
      {
        symptom: "Compliance stitched together by one person",
        detail:
          "Reports run because someone built a workflow in their head. They take a vacation; the workflow does too.",
      },
      {
        symptom: "Cultivation ops on a network that wasn't scoped for them",
        detail:
          "Environmental controls, fertigation, and security cameras share bandwidth with the office. Latency spikes have operational consequences.",
      },
    ],
    faq: [
      {
        q: "Do you work in every state-legal market?",
        a: "We work where Catalytix can legally engage and where Intelisys-portfolio suppliers serve. We'll tell you up front if your market is out of scope.",
      },
      {
        q: "Do you advise on cannabis banking or payments?",
        a: "No. Payments in cannabis are a specialty practice we don't claim. We focus on communications, connectivity, security, surveillance, and continuity.",
      },
      {
        q: "Are your supplier recommendations cannabis-aware?",
        a: "Some suppliers in the master-agent portfolio are cannabis-tolerant; many aren't. We only recommend what will actually take the business.",
      },
      {
        q: "Can you fix our METRC connection?",
        a: "We don't operate the seed-to-sale system. We make sure the underlying network supports it.",
      },
      {
        q: "What does this cost?",
        a: "Nothing to you. Suppliers pay residual to the master agent we operate under.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hotels & Restaurants",
    shortName: "Hospitality",
    pain: "Guest experience riding on networks that were scoped for staff email.",
    metaTitle: "Technology advisor for independent hotels & restaurant groups | Catalytix",
    metaDescription:
      "The Operator's Audit for independent hotels, restaurant groups, and franchisees. Guest WiFi, PMS, POS, and continuity that won't blow up Friday at 7pm.",
    intro:
      "Independent hotels, restaurant groups, and franchisees run customer-facing technology on infrastructure that was designed for a back office. The brand experience your guest remembers — the WiFi that worked, the check-in that didn't take 15 minutes, the POS that didn't crash — depends on a stack nobody is sitting on top of.",
    findings: [
      {
        symptom: "Guest WiFi that meets the brand standard on paper, not in the room",
        detail:
          "Coverage maps from the install are five years old. Half the rooms get a usable signal. The other half don't, and you're paying for the same circuit either way.",
      },
      {
        symptom: "PMS / POS continuity nobody has tested",
        detail:
          "When the internet drops on a Friday at 7pm, the POS goes into offline mode that nobody has trained the staff to operate.",
      },
      {
        symptom: "POTS lines holding up the building",
        detail:
          "Elevator phones, fire panel, alarm. All on copper. All on a sunset path. Nobody has scoped the replacement.",
      },
      {
        symptom: "Multi-property phone systems that don't talk to each other",
        detail:
          "The reservation desk at one property can't transfer to another. Group inquiries die between sites.",
      },
      {
        symptom: "Surveillance retention shorter than your liability window",
        detail:
          "If an incident happens 31 days ago, you don't have footage. Insurance is going to ask.",
      },
    ],
    faq: [
      {
        q: "Are you brand-approved (Marriott, Hilton, Choice, etc.)?",
        a: "We work with franchisees within their brand standards. Brand-mandated suppliers stay; we focus on what's not mandated.",
      },
      {
        q: "Restaurant groups — do you advise on POS replacement?",
        a: "Indirectly. We assess what the POS depends on (network, payments path, continuity) and architect that. POS selection is a decision you keep.",
      },
      {
        q: "Do you do PCI work?",
        a: "PCI scope reduction is a routine finding. We won't sell you a QSA engagement, but we'll architect what the QSA needs to see.",
      },
      {
        q: "We're a single restaurant. Are we a fit?",
        a: "Below two locations the math usually doesn't work. We'll tell you that on the first call.",
      },
      {
        q: "How long does this take?",
        a: "On-site walk per property; full brief within two weeks of the last visit.",
      },
    ],
  },
  {
    slug: "convenience-stores",
    name: "Convenience Store Operators",
    shortName: "C-stores",
    pain: "POS, lottery, age verification, ATM, and back-office on one tired circuit.",
    metaTitle: "Technology advisor for multi-location convenience stores | Catalytix",
    metaDescription:
      "The Operator's Audit for multi-location independent c-store operators. Stabilize POS, payments, lottery, surveillance, and back-office under one architecture.",
    intro:
      "Independent c-store operators — often paired with fuel — run more concurrent systems per square foot than almost any other retail format. The Audit looks at every one of them, on every site, and identifies the ones that share a single point of failure.",
    findings: [
      {
        symptom: "Every system shares one circuit",
        detail:
          "POS, payment processing, lottery, age verification, ATM, surveillance, back-office. When the line drops, the store stops.",
      },
      {
        symptom: "No PCI segmentation — and no plan to get it",
        detail:
          "Cardholder data, employee WiFi, and surveillance share the same VLAN. Scope is the entire store. It doesn't have to be.",
      },
      {
        symptom: "Surveillance retention that won't satisfy a claim",
        detail:
          "DVRs configured at install. Never re-checked. Retention shorter than the incident window your insurer asks about.",
      },
      {
        symptom: "Site-to-site visibility nobody has",
        detail:
          "You don't know in real time which stores are up. You find out when the manager calls.",
      },
      {
        symptom: "POTS lines you forgot you were paying for",
        detail:
          "Copper lines for ATMs and alarms that haven't been used in years still on the bill. Cancelling them is its own project.",
      },
    ],
    faq: [
      {
        q: "Do you work with single-store operators?",
        a: "No. The Audit is for multi-store operators. We typically engage starting at four sites.",
      },
      {
        q: "Are you tied to a specific POS?",
        a: "No. We're POS-agnostic. We assess the stack the POS runs on.",
      },
      {
        q: "Do you handle the fuel side too?",
        a: "Yes — most of our c-store engagements are paired with fuel. See the gas stations page.",
      },
      {
        q: "What about loyalty and mobile apps?",
        a: "Loyalty platforms are out of scope. The connectivity they ride on isn't.",
      },
      {
        q: "How is this different from what my MSP does?",
        a: "Your MSP runs the stack. We architect it. The Audit identifies what should change before the MSP is asked to operate it.",
      },
    ],
  },
  {
    slug: "gas-stations",
    name: "Gas Station Operators",
    shortName: "Gas stations",
    pain: "Pump controllers, payment, tank monitoring, and a jobber-supplied circuit that was never scoped for any of it.",
    metaTitle: "Technology advisor for California multi-site gas station operators | Catalytix",
    metaDescription:
      "The Operator's Audit for California-focused multi-site gas station operators. Pumps, EMV, tank monitoring, surveillance, and POTS replacement under one architecture.",
    intro:
      "California-focused, multi-site, jobber-supplied operators are the most demanding c-store/fuel hybrid in the country. CARB, EMV, ADA, and the brand fuel agreement all converge on a network that the carrier rep has never set foot inside. The Audit is for ten or more sites; below that the dynamics aren't there yet.",
    findings: [
      {
        symptom: "POTS replacement nobody has scoped",
        detail:
          "Tank monitoring, alarm, and elevator phones still on copper. The carrier is moving off it. The cost to do nothing goes up every year.",
      },
      {
        symptom: "EMV liability sitting on hardware that's a generation behind",
        detail:
          "Pumps that were grandfathered in are now exposed. The chargeback math has changed.",
      },
      {
        symptom: "Surveillance retention shorter than the brand requires",
        detail:
          "DVRs were installed at the original spec. The brand spec changed. Nobody updated the sites.",
      },
      {
        symptom: "Stranded carrier spend across the footprint",
        detail:
          "When you added stations seven through ten, you signed a contract per site. Nobody renegotiated the original three.",
      },
      {
        symptom: "Back-office visibility you don't actually have",
        detail:
          "You can't see in real time which sites are taking cards, which are down, and which have a tank reading the manager hasn't acknowledged.",
      },
    ],
    faq: [
      {
        q: "Do you work outside California?",
        a: "Yes, but California is the focus because the regulatory environment shapes the architecture more than any other state.",
      },
      {
        q: "We have a jobber agreement. Does that constrain you?",
        a: "Sometimes. Brand fuel agreements specify some technology. We work within them.",
      },
      {
        q: "Can you handle pump-side technology directly?",
        a: "We don't replace pump controllers or service stations. We make sure the connectivity, payments path, and back-office serve them properly.",
      },
      {
        q: "What about the c-store side?",
        a: "Same engagement. See the convenience stores page.",
      },
      {
        q: "How small is too small for the Audit?",
        a: "We engage starting at ten sites for fuel.",
      },
    ],
  },
];

export const verticalBySlug = (slug: string) => verticals.find((v) => v.slug === slug);
