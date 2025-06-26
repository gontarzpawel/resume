const experienceData = [
    {
        company: 'Contentsquare',
        location: 'Remote',
        role: 'Senior Data Engineer, Transversal Lead',
        period: 'Feb 2025 – Present',
        achievements: [
            'Onboarded and drafted technical vision for the unification of legacy systems to manage identity resolution across three afiliated companies',
            'Defined the strategy to enable Contentsquare customers and partners to use their Contentsquare data in AI agents. It includes cross-departments collaboration and client interviews to establish business use cases. It also also includes demonstrating prototypes showing the feasibility and value for internal and external users.',                
        ]
    },
    {
        company: 'Contentsquare',
        location: 'Remote',
        role: 'Senior Data Engineer, Team Lead',
        period: '2022 – Jan 2025',
        achievements: [
            'Led the design and implementation of a new near real-time data ingestion pipeline, reducing data availability latency by 3000%, from ~30 min to 1 min, and supporting dashboarding of API and JS errors sliced by different dimensions.',
            'Led the projects to optimize data processing costs, achieving over $100k in annual savings by implementing more efficient data storage and processing strategies.',
            'Maintain and improve the existing core data infrastructure, ensuring high availability and reliability of data services.',
            'Led the team of up to 6 data engineers, providing technical guidance, mentoring, and fostering a collaborative team environment.',
            'Recruited and onboarded new team members, ensuring a smooth integration into the team and company culture.',
            'Recruited and mentored an intern who run an exploratory project on behavioural bot detection, leading to a successful proof of concept and a potential for new product features.',
            'Managed roadmap and priorities for the team, aligning with business goals and ensuring timely delivery of projects.',
            'Improved team productivity by automating and parallelizing continuous integration (CI) pipelines, reducing build times by 65%.',
            'Improved team operational experience by creating tooling to monitor and visualise production health and infrastructure cost.',
        ]
    },
    {
        company: 'Contentsquare',
        location: 'Paris, France',
        role: 'Data Engineer',
        period: '2019 – 2022',
        achievements: [
            'Collaborated with product, engineering and data science teams to design and implement various data driven products. Some examples include: proactive insights generation causing digital frustration (i.e. rage click), full text search engine allowing to segment sessions by text content seen by user, impact revenue quantification from experienced frustration, ...', 
            'Identified and resolved various engineering bottlenecks: slow CI pipeline causing delays in development, lack of test coverage causing regressions, missing observability over core product objects usage leading to gaps in performance bottlenecks understanding, ...',
            'Identified opportunity to improve all customer facing queries performances by > 50% at a medium response latency, pitched it and led the implementation in a cross-functional team. Solution was later adopted by the open source community. It also led the company to take the ownership of almost unmaintained project: https://github.com/ContentSquare/chproxy',
            'Improved systems processing performance to deal with traffic peaks and unequal traffic patterns by troubleshooting memory and CPU bottlenecks, optimizing data structures and algorithms.',
            'Contributed to design and implementation of the optimized system for storing session replay data, leading to 100s of $$$ gain yearly by enabling batched upload to blob storage and efficient retrieval',
            'Participated in the batman rotation to react on production incidents, ensuring high availability and reliability of data services.',
            'Participated in the support duties to address customer issues and provide technical assistance, ensuring high customer satisfaction.',
        ]
    },
    {
        company: 'Powerspace',
        location: 'Paris, France',
        role: 'Software Engineer',
        period: '2018 – 2019',
        achievements: [
            'Developed and maintained features for programmatic advertising that bridged customers inventories with available and user-tailored ads content.',
            'Re-designed and implemented advertising budgeting system to overcome ongoing scaling limits - an inability to handle traffic peaks.',
        ]
    },
    {
        company: 'TouK (aquired by Snowflake)',
        location: 'Warsaw, Poland',
        role: 'Junior Software Engineer',
        period: '2017 – 2018',
        achievements: [
            'Developed banking mobile application for Android plaform in Kotlin, enabling users to check balance of their account, perform a top up and initiate a money transfer.',
            'Implement Scala backend microservices enabling countries with poor internet connectivity to access banking services through USSD banking ',
            'Participated in code reviews, testing, and deployment processes to ensure high-quality software delivery.'
        ]
    },
    {
        company: 'Sotrender',
        location: 'Warsaw, Poland',
        role: 'Software Engineer Intern',
        period: 'Jul 2017 – Aug 2017',
        achievements: [
            'Developed social media crawler to index and analyze data from various platforms (Facebook, Instagram, Twitter).',
        ]
    }
];

const skillsData = {
    'Programming Languages': [
        { name: 'Python', level: 3 }, { name: 'Scala', level: 5 }, { name: 'Go', level: 5 }
    ],
    'Big Data Tech': [
        { name: 'Kafka', level: 5 }, { name: 'Flink', level: 3 },
    ],
    'Cloud Platforms': [
        { name: 'AWS', level: 5 }, { name: 'Azure', level: 4 }, { name: 'GCP', level: 2 },
    ],
    'Databases': [
        { name: 'Clickhouse', level: 5 }, { name: 'Aerospike', level: 4 }, { name: 'Redis', level: 4 }, { name: 'Singlestore', level: 3 },
        { name: 'PostgreSQL', level: 3 }
    ],
    'DevOps & Tools': [
        { name: 'Docker', level: 4 }, { name: 'Kubernetes', level: 4 }, { name: 'Git', level: 5 },
        { name: 'Github Actions', level: 4 }, { name: 'ArgoCD', level: 3 }
    ],
    'Concepts': [
        { name: 'Data Modeling', level: 5 }, { name: 'Microservices', level: 4 }, { name: 'Stream processing', level: 5 }
    ],
    'Team management': [
        { name: 'Team Leadership', level: 5 }, { name: 'Mentoring', level: 5 }, { name: 'Recruitment', level: 4 },
        { name: 'Project Management', level: 4 }, { name: 'Stakeholder Management', level: 4 }
    ]
};
