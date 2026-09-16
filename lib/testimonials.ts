export type Testimonial = {
  name: string;
  quote: string;
  snippet: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michal Carlock",
    quote:
      "I will never go anywhere else! This is the best dentist on earth! I avoided the dentist like the plague and it was always full of dread until now. I felt nothing getting my wisdom teeth out. I’ve been healed of my fear of the dentist!",
    snippet:
      "I avoided the dentist like the plague… I felt nothing getting my wisdom teeth out. I’ve been healed of my fear of the dentist!",
  },
  {
    name: "Joann McKnight",
    quote:
      "I just love the staff and the dentist. They are so friendly. They get you in and out with no long wait.",
    snippet: "They get you in and out with no long wait.",
  },
  {
    name: "Dwight Chandler",
    quote: "Service was very professional and knowledgeable and courteous!",
    snippet: "Professional, knowledgeable, and courteous.",
  },
  {
    name: "Jerry Wilkerson",
    quote: "100% satisfied. Staff is great. Dr. Chen is the best.",
    snippet: "100% satisfied. Dr. Chen is the best.",
  },
  {
    name: "Patty Lee",
    quote: "The hygienists are very good and thorough. Maggie and Helen.",
    snippet: "The hygienists are very good and thorough. Maggie and Helen.",
  },
  {
    name: "Crystal Cross",
    quote: "Great staff.",
    snippet: "Great staff.",
  },
  {
    name: "Diane Wright",
    quote: "Always a friendly and professional experience.",
    snippet: "Always a friendly and professional experience.",
  },
  {
    name: "Theo Igbalajobi",
    quote: "The service was professional and the staff were very helpful.",
    snippet: "Professional service and a very helpful staff.",
  },
  {
    name: "Debra Morring",
    quote:
      "I have been coming to Dr. Chen for the past couple of years!! I can honestly say that this practice is always 100% clean, the staff is welcoming, and the hygienist is informative and easy to talk to! Since being there my oral health has improved. I can appreciate a welcoming dentist and his staff!",
    snippet:
      "This practice is always 100% clean, the staff is welcoming, and the hygienist is informative.",
  },
  {
    name: "Ron Williams",
    quote:
      "Dr. Chen and his staff are always very kind and professional. Also, Helen does a great job on my cleanings. Once again, thanks.",
    snippet: "Kind and professional. Helen does a great job on my cleanings.",
  },
  {
    name: "Lawanda Curtiss",
    quote:
      "I love this place. I have had so many negative experiences with dental offices throughout the years. It seemed like every time I went to the dentist, there was something else wrong with my teeth. Ever since I’ve been going to Dr. Chen, the condition of my teeth has been getting better! Most recently, I switched my son to Dr. Chen because his previous office had poor communication. Dr. Chen sat with him for a good 30 minutes educating him on how to improve the condition of his teeth and let him know what the root cause of all of his dental problems was. My son felt relieved and encouraged knowing that he was in good hands with Dr. Chen. I am going to switch my daughter to his office next. He is amazing, his staff is amazing, and I highly recommend his office!",
    snippet:
      "Dr. Chen sat with my son for a good 30 minutes educating him. My son felt relieved and encouraged.",
  },
  {
    name: "Jacole St.Rozier",
    quote:
      "They are amazing. Everyone is so nice and welcoming. They make you feel very comfortable even in a nervous situation. Helen is so great — she made sure I was comfortable throughout my procedure. I would recommend this dentist for your oral health.",
    snippet:
      "They make you feel very comfortable even in a nervous situation.",
  },
  {
    name: "Danielle Ruff",
    quote:
      "I found this dental office while shopping around. I needed to switch from my old dentist ASAP. I saw all the great reviews for this office and thought I would give it a try, and I’m so glad that I did. It’s like a breath of fresh air. Dr. Michael Chen was very kind, thorough, and matter of fact when discussing my dental care during the initial visit. I also saw Helen the hygienist, and she was beyond sweet and accommodating, going as far as giving me a blanket to use while getting my teeth cleaned because I was cold. She made my visit relaxing, and I don’t usually say that about the dentist because I’m usually on edge. I felt safe and cared for. I would also like to shout out the front desk staff Aysha and Carol — whether via phone or in person they have always been pleasant, professional, patient, and understanding. I look forward to my follow-up visits.",
    snippet:
      "Dr. Chen was kind, thorough, and matter of fact. Helen made my visit relaxing. I felt safe and cared for.",
  },
];

export const featuredSnippets = [
  testimonials[0],
  testimonials[1],
  testimonials[4],
  testimonials[8],
] as const;
