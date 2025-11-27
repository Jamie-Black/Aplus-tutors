// CBT questions data
const questions = {
  
    //Mathematics questions here
    Mathematics: [
    {
      question:"Simplify 0.000215 x 0.000028 and express your answer in standard form",
      options: ["6.03 x 10⁹","6.02 x 10⁹", "6.03 x 10-⁹","6.02 x 10-⁹"],
      answer: 3,
    },
    {
      question: "Factorise x + y – ax – ay",
      options: ["(x– y)(1– a)","(x + y)(1– a)","(x + y)(1– a)","(x– y)(1 + a)"],
      answer:2,
    },
    {
      question: "In the diagram, ∠PSR = 22⁰, ∠SPQ = 58⁰ and ∠PQR = 41⁰. Calculate the obtuse angle QRS. ",
      image: "./Screenshot_20251118-085800.png",
      imageAlt: "irregular quadrilateral",
      options: ["99°", "100°", "121°", "165°"],
      answer: 2,
    },
    {
      question: "A car uses one litre of petrol for every 14 km. IIf one litre of petrol costs N63.00, how far can the car go with N900.00 worth of petrol? ",
      options: ["420km", "405km", "210", "200km"],
      answer: 3,
    },
    {
      question: "Correct 0.002473 to 3 significant figures. ",
      options: ["0.002", "0.0024", "0.00247", "0.0025"],
      answer: 2,
    },
    {
      question: "The sum of 2 consecutive whole numbers is ⅚ of their product. Find the numbers",
      options: ["3, 4", "1, 2", "2, 3", "0, 1"],
      answer: 2,
    },
    {
      question: " Find the value of m in the diagram",
      image: "./Screenshot_20251118-091233.png",
      imageAlt: "intersecting lines",
      options: ["20°", "30°", "40°", "50°"],
      answer: 1,
    },
    {
      question: "In the diagram, QR//ST, /PQ/ = /PR/ and ∠PST = 75⁰. Find the value of y. ",
      image: "./Screenshot_20251118-091641.png",
      imageAlt: "lines and triangles",
      options: ["105°", "110°", "130°", "150°"],
      answer: 0,
    },
    {
      question: "A casting is made up of Copper and Zinc. If 65% of the casting is Zinc and there are 147g of Copper, what is the mass of the casting? ",
      options: ["320", "420", "520", "620"],
      answer: 1,
    },
    {
      question: "Given that P = {x: 1 ≤ x ≤ 6} and Q = {x: 2 < x < 10}, where x is an integer. Find n(P ⋂ Q). ",
      options: ["4", "6", "8", "10"],
      answer: 0,
    },
    {
      question: "The sum of 6 and one - third of x is one more than twice of x. Find x.",
      options: ["7", "5", "3", "2"],
      answer: 0,
    },
    {
      question: "Simplify: 3x + 4x − 2x.",
      options: ["5x", "6x", "7x", "9x"],
      answer: 2,
    },
    {
      question: " Given that T = { x: -2 < x ≤ 9 } where x is an integer.What is n(T)?",
      options: ["9", "10", "11", "12"],
      answer: 2,
    },
    {
      question: "Solve the inequality: 3(x+1) ≤ 5(x+2) + 15.",
      options: ["x ≥ -14", "x ≤ -14", "x ≤ -11", "x ≥ -11 "],
      answer: 3,
    },
    {
      question: "An empty rectangular tank is 250cm long and 120cm wide. If 180 litres of water is poured into the tank, calculate the height of the water. ",
      options: ["6.0", "5.5", "5.0", "4.5"],
      answer: 0,
    },
    {
      question: "Find the value of x if 2x − 2 = 10.",
      options: ["2", "5", "6", "4"],
      answer: 2,
    },
    {
      question: "Find the value of x if 2x − 2 = 10.",
      options: ["2", "5", "6", "4"],
      answer: 2,
    },
    {
      question: "The area of a circle of radius 7 cm is:",
      options: ["44 cm²", "154 cm²", "18 cm²", "332 cm²"],
      answer: 1,
    },
    {
      question: "The table shows the number of pets kept by 30 students in a class.If a student is picked at random from the class, what is the probability that he or she kept more than one pet?",
      image: "./Screenshot_20251118-130659.png",
      imageAlt: "frequency table showing data",
      options: ["⅕", "⅖", "⅗", "⅘"],
      answer: 2,
    },
    {
      question: "In the diagram, the tangent MN makes an angle of 55⁰ with chord PS. If O is the centre of the circle, find ∠RPS. ",
      image: "./Screenshot_20251118-131040.png",
      imageAlt: "circle quadrilateral",
      options: ["55°", "45°", "35°", "25°"],
      answer: 2,
    },
    {
    question: "In the diagram, triangles HKL and HIJ are similar. Which of the following ratios is equal to LH/JH ",
    image: "./Screenshot_20251118-132351.png",
    imageAlt: "triangle questions",
    options: ["KL/JI", "HJ/JK", "JI/KL", "HK/LK"],
    answer: 0,
  },
  
    {
      question: "Evaluate 3² × 2³.",
      options: ["12", "18", "24", "72"],
      answer: 2,
    },
    {
      question: "Simplify: (2/3) ÷ (4/9).",
      options: ["3/2", "2/3", "9/8", "8/9"],
      answer: 0,
    },
    {
      question: "Find the simple interest on ₦4000 at 5% per annum for 3 years.",
      options: ["₦300", "₦500", "₦600", "₦700"],
      answer: 2,
    },
    {
      question: "If y = 2x + 3, find y when x = 4.",
      options: ["9", "10", "11", "12"],
      answer: 2,
    },
    {
      question: "The mean of 3, 7, 5, and 9 is:",
      options: ["5", "6", "6.5", "7"],
      answer: 2,
    },
    {
      question: "Solve for x: 5x = 20.",
      options: ["2", "3", "4", "5"],
      answer: 2,
    },
    {
      question: "Find the mode of 2, 3, 4, 3, 2, 3, 5.",
      options: ["2", "3", "4", "5"],
      answer: 1,
    },
    {
      question: "The perimeter of a rectangle is 24 cm. If its length is 8 cm, find its breadth.",
      options: ["4 cm", "6 cm", "8 cm", "12 cm"],
      answer: 0,
    },
    {
      question: "A die is thrown once. What is the probability of getting an even number?",
      options: ["1/2", "1/3", "2/3", "1/6"],
      answer: 0,
    },
    {
      question: "Simplify: 5a − 2b + 3a + b.",
      options: ["8a − b", "8a + 3b", "2a − 3b", "5a + 2b"],
      answer: 0,
    },
    {
      question: "Find the gradient of the line joining (2, 3) and (4, 7).",
      options: ["2", "3", "1", "4"],
      answer: 0,
    },
    
    {
      question: "Convert 0.125 to a fraction in its simplest form.",
      options: ["½", "¼", "⅛", "⅜"],
      answer: 2,
    },
    {
      question: "Expand: (x + 2)(x + 3).",
      options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 3", "x² + 3x + 6"],
      answer: 0,
    },
    {
      question: "Find the value of log₁₀ 1000.",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      question: "The exterior angle of a regular polygon is 30°. Find the number of sides.",
      options: ["6", "8", "10", "12"],
      answer: 3,
    },
    {
      question: "If sin x = ⅗, find cos x.",
      options: ["⅘", "5/3", "3/4", "⅕"],
      answer: 0,
    },
    {
      question: "The bearing of B from A is 065°. Find the bearing of A from B.",
      options: ["115°", "245°", "300°", "245°"],
      answer: 1,
    },
    {
      question: "The mean of the numbers 2, 5, 2x and 7 is less than or equal to 5. Find the range of the values of x.",
      options: ["x ≤ 3", "x ≥ 3", "x < 3 ", "x > 3"],
      answer: 0,
    },
    {
      question: "In the diagram, ∠WOX = 60⁰, ∠YOE = 50⁰ and ∠OXY = 30⁰. What is the bearing of x from y? ",
      image: "./Screenshot_20251118-142838.png",
      options: ["300°", "240°", "190°", "150°"],
      answer: 0,
    },
    {
      question: "A man bought a radio for ₦4500 and sold it for ₦5400. Find his gain percent.",
      options: ["10%", "15%", "20%", "25%"],
      answer: 2,
    },
    {
      question: "The distance between two towns on a map is 5 cm. If the scale is 1 : 100 000, find the actual distance in km.",
      options: ["2 km", "5 km", "10 km", "15 km"],
      answer: 2,
    },
    {
      question: "Simplify: x²y³ × x³y",
      options: ["x⁵y⁴", "x⁶y³", "x⁴y⁴", "x³y³"],
      answer: 0,
    }, 
    {
      question: "In an athletics competition, the probability that an athlete wins a 100m race is and the probability that he wins in high jump is. What is the probability that he wins only one of the events?",
      options: ["3/32", "3/16", "7/32", "5/16"],
      answer: 3,
    },
    {
      question: "If x = 2 and y = 3, find the value of 3x² + 2y.",
      options: ["12", "18", "20", "24"],
      answer: 1,
    },
    {
      question: "If the sum of the roots of the equation (x – p)(2x + 1) = 0 is 1, find the value of p. .",
      options: ["1½", "½", "-½", "-1½"],
      answer: 1,
    },
    
    {
      question: "Find the LCM of 12, 15, and 20.",
      options: ["30", "45", "60", "120"],
      answer: 2,
    },
    {
      question: "If x kmh<sup>-1</sup>= y ms<sup>-1</sup>, then y = ",
      options: ["(7/18)x", "(11/20)x", "(4/15)x", "(5/18)x"],
      answer: 3,
    },
    
    {
      question: "A box contains 3 red, 4 blue, and 5 green balls. What is the probability of picking a red ball?",
      options: ["1/4", "1/3", "3/12", "3/10"],
      answer: 3,
    },
    {
      question: "The quadratic equation x² - 5x + 6 = 0 has roots:",
      options: ["2 and 3", "−2 and 3", "−2 and −3", "3 and 5"],
      answer: 0,
    },
    {
      question: "Simplify: (4x²y) ÷ (2xy²).",
      options: ["2x/y", "2y/x", "x/2y", "2xy"],
      answer: 0,
    },
    {
      question: "Convert 0.375 to a fraction in simplest form.",
      options: ["3/5", "3/8", "5/8", "3/4"],
      answer: 1,
    },
    {
      question: "If a = 2, b = 3, find the value of a² + 2ab + b².",
      options: ["16", "20", "25", "49"],
      answer: 0,
    },
    {
      question: "If x² + kx + <sup>16</sup>/<sub>9</sub> is a perfect square, find the value of x.",
      options: ["8/3", "7/3", "5/3", "2/3"],
      answer: 0,
    },
    {
    question: "In the diagram, O is the centre of the circle.Find the value of x in degree.",
    image: "./Screenshot_20251118-144722.png",
    options: ["34", "39", "17", "14"],
    answer: 3,
  },
    
    {
      question: "Simplify: (x + 3)(x − 3).",
      options: ["x² + 6x + 9", "x² − 9", "x² − 6x + 9", "x² + 9"],
      answer: 1,
    },
    {
      question: "The subtraction below is in base seven.Find the missing number.",
      image: "./Screenshot_20251118-145159.png",
      options: ["2", "3", "4", "5"],
      answer: 0,
    },
    {
      question: "A straight line passes through (0, 2) and (2, 6). Find its equation.",
      options: ["y = 2x + 2", "y = 3x + 2", "y = 4x + 2", "y = x + 2"],
      answer: 1,
    },
    {
      question: "Find the 5th term of the arithmetic sequence 3, 7, 11, 15...",
      options: ["19", "20", "21", "23"],
      answer: 0,
    },
    {
      question: "Simplify: (2x + 3)².",
      options: ["4x² + 6x + 9", "4x² + 9x + 6", "4x² + 12x + 9", "4x² + 9"],
      answer: 2,
    },
    {
      question: "If tan θ = 3/4, find sin θ.",
      options: ["3/5", "4/5", "5/3", "1/5"],
      answer: 0,
    },
    {
      question: "A car travels 120 km in 3 hours. Find its average speed.",
      options: ["30 km/h", "35 km/h", "40 km/h", "45 km/h"],
      answer: 2,
    },
    {
      question: "A chord of a circle is 10 cm long and its distance from the center is 6 cm. Find the radius.",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: 3,
    },
    {
      question: "Find the gradient of the line 3y = 2x + 5.",
      options: ["3/2", "2/3", "−2/3", "−3/2"],
      answer: 1,
    },
    {
      question: "The diagram shows a rectangular cardboard from which a semi circle is cut off. Calculate the area of the remaining part. ",
      image: "./Screenshot_20251118-150124.png",
      options: ["44cm²", "99cm²", "154cm²", "165cm²"],
      answer: 1,
    },
    {
      question: "The diagram is a net of a right rectangular pyramid.Calculate the total surface area.",
      image: "./Screenshot_20251118-150424.png",
      options: ["208cm²", "112cm²", "92cm²", "76cm²"],
      answer: 2,
    },
    {
      question: "Simplify: (3a²b³)².",
      options: ["6a⁴b⁶", "9a⁴b⁶", "6a³b⁴", "9a³b⁶"],
      answer: 1,
    },
    {
      question: "The 10th term of an arithmetic progression is 32, and the first term is 4. Find the common difference.",
      options: ["3", "3.5", "4", "3.2"],
      answer: 2,
    },
    {
      question: "If 4 men can do a job in 6 days, how many days will 3 men take?",
      options: ["6", "7", "8", "9"],
      answer: 2,
    },
    {
      question: "The volume of a cube is 27 cm³. Find its edge.",
      options: ["2 cm", "3 cm", "4 cm", "6 cm"],
      answer: 1,
    },
    {
      question: "Solve for x: 2(x − 3) = 10.",
      options: ["3", "5", "6", "7"],
      answer: 3,
    },
    {
      question: "Simplify: √50.",
      options: ["5√2", "10√5", "25√2", "2√5"],
      answer: 0,
    },
    {
      question: "Find the median of 2, 4, 6, 8, 10.",
      options: ["4", "5", "6", "7"],
      answer: 2,
    },
    {
      question: "Evaluate 2³ + 3².",
      options: ["12", "13", "17", "18"],
      answer: 2,
    },
    {
      question: "If y varies directly as x and y = 10 when x = 4, find y when x = 6.",
      options: ["12", "13", "14", "15"],
      answer: 3,
    },
    {
      question: "Find the simple interest on ₦10,000 at 5% per annum for 3 years.",
      options: ["₦1,500", "₦1,000", "₦2,000", "₦2,500"],
      answer: 0,
    },
    {
      question: "Express 0.04 as a percentage.",
      options: ["0.4%", "4%", "40%", "400%"],
      answer: 1,
    },
    {
      question: "Find the missing term in the sequence: 3, 9, 27, __, 243.",
      options: ["54", "72", "81", "90"],
      answer: 2,
    },
    {
      question: "The table is for the relation y = mx + c, where m and c are constants. Use it to answer the question. What is the value of x when y = 5 ",
      image: "./Screenshot_20251118-150942.png",
      options: ["8", "9", "10", "11"],
      answer: 0,
    },
    {
      question: "The table is for the relation y = mx + c, where m and c are constants. Use it to answer the question. What is the equation of the line described in the table? ",
      image: "./Screenshot_20251118-150942.png",
      options: ["y = 2x", "y = x + 1", "y = x", "y = ½x + 1"],
      answer: 3,
    },
    {
      question: "If 3x + 4 = 10, find x.",
      options: ["2", "3", "4", "5"],
      answer: 0,
    },
    {
      question: "Find the mean of the numbers 5, 7, 9, 11, 13.",
      options: ["7", "9", "10", "11"],
      answer: 1,
    },
    {
      question: "Simplify: (x²y³)³.",
      options: ["x⁶y⁹", "x⁵y⁶", "x³y⁶", "x⁹y⁶"],
      answer: 0,
    },
    {
      question: "A rectangle has a length of 8 cm and a width of 3 cm. Find its perimeter.",
      options: ["11 cm", "16 cm", "22 cm", "24 cm"],
      answer: 2,
    },
    {
      question: "Find the next term of the sequence 1, 4, 9, 16, __.",
      options: ["20", "24", "25", "30"],
      answer: 2,
    },
    {
      question: "Solve: 5x − 7 = 18.",
      options: ["4", "5", "6", "7"],
      answer: 3,
    },
    
    {
      question: "Simplify: (3/4) ÷ (2/3).",
      options: ["1/2", "9/8", "8/9", "2/3"],
      answer: 1,
    },
    {
      question: "In a class of 40 students, 18 are boys. What percentage are girls?",
      options: ["45%", "50%", "55%", "60%"],
      answer: 2,
    },
    {
      question: "Find the range of the numbers 2, 5, 7, 9, 10.",
      options: ["5", "7", "8", "10"],
      answer: 2,
    },
    {
      question: "The interior angles of a triangle are in the ratio 2:3:4. Find the largest angle.",
      options: ["40°", "60°", "80°", "100°"],
      answer: 2,
    },
    {
      question: "A man bought a radio for ₦6,000 and sold it for ₦7,500. Find his percentage gain.",
      options: ["15%", "20%", "25%", "30%"],
      answer: 2,
    },
    {
      question: "Simplify: (x + y)(x − y).",
      options: ["x² − y²", "x² + y²", "x² − 2xy + y²", "x² + 2xy + y²"],
      answer: 0,
    },
    {
      question: "Solve for x: x² − 16 = 0.",
      options: ["x = ±4", "x = 4", "x = −4", "x = 0"],
      answer: 0,
    },
    {
      question: "Simplify: (2x³y²) ÷ (4xy).",
      options: ["x²y", "x²y²", "(x²y)/2", "2x²y"],
      answer: 2,
    },
    {
      question: "Find the area of a triangle with base 10 cm and height 8 cm.",
      options: ["40 cm²", "80 cm²", "60 cm²", "20 cm²"],
      answer: 0,
    },
    {
      question: "Find the mode of 2, 4, 4, 5, 5, 5, 6.",
      options: ["2", "4", "5", "6"],
      answer: 2,
    },
    {
      question: "If the radius of a sphere is 3 cm, find its volume. (π = 3.142)",
      options: ["100 cm³", "110 cm³", "113 cm³", "120 cm³"],
      answer: 2,
    },
    {
      question: "A car depreciates by 10% annually. If it was bought for ₦1,000,000, find its value after 2 years.",
      options: ["₦900,000", "₦810,000", "₦800,000", "₦950,000"],
      answer: 1,
    },
    {
      question: "Simplify: (a + b)² − (a − b)².",
      options: ["4ab", "2ab", "ab", "a² − b²"],
      answer: 0,
    },
    
    {
      question: "The mean age of R men in a club is 50 years.Two men, aged 55 and 63, left the club and the mean age reduced by 1 year.Find the value of R ",
      options: ["18", "20", "22", "28"],
      answer: 1,
    },
    
    
    {
      question: "In the diagram above, ∠ROS = 66⁰ and ∠POQ = 3x. Some construction lines are shown. Calculate the value of x.  ",
      image: "./Screenshot_20251118-152311.png",
      options: ["10", "11", "22", "30"],
      answer: 1,
    },
    
    {
      question: "Bala sold an article for ₦6,900.00 and made a profit of 15%. If he sold it for ₦6,600.00, he would make a",
      options: ["profit of 13 %","loss of 12 %","profit of 10 %","loss of 5 %"],
      answer:2,
    },
    
    {
      question: "In the diagram, GI is a tangent to the circle at H. If EFI/GI, calculate the size of ∠EHF. ",
      image: "./Screenshot_20251118-152835.png",
      options: ["126", "72", "54", "28"],
      answer: 1,
    },
    
    
    //differentiation questions starts here
    {
    question: "Using first principles, find f'(x) for f(x) = x<sup>2</sup>.",
    options: ["2x", "x", "x<sup>2</sup>", "1"],
    answer: 0,
  },
  {
    question: "Using first principles, find f'(x) for f(x) = 3x.",
    options: ["3", "x", "0", "6x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = x<sup>3</sup>.",
    options: ["3x<sup>2</sup>", "x<sup>2</sup>", "x<sup>3</sup>", "9x<sup>2</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = 5x<sup>4</sup>.",
    options: ["20x<sup>3</sup>", "5x<sup>3</sup>", "x<sup>4</sup>", "20x<sup>4</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = 7 ",
    options: ["0", "7", "1", "7x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = x<sup>5</sup> − 2x<sup>3</sup> + x.",
    options: ["5x<sup>4</sup> − 6x<sup>2</sup> + 1", "5x<sup>4</sup> − 6x + 1", "x<sup>4</sup> − 6x<sup>2</sup> + 1", "5x<sup>4</sup> − 6x<sup>2</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = sin x.",
    options: ["cos x", "−cos x", "sin x", "−sin x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = cos x.",
    options: ["−sin x", "sin x", "cos x", "−cos x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = tan x.",
    options: ["sec<sup>2</sup> x", "csc<sup>2</sup> x", "sec x tan x", "1/cos x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = e<sup>x</sup>.",
    options: ["e<sup>x</sup>", "x e<sup>x</sup>", "1", "ln e"],
    answer: 0,
  },
  {
    question: "Differentiate: y = ln x",
    options: ["1/x", "ln x", "x", "−1/x"],
    answer: 0,
  },
  {
    question: "If y = 2x(x<sup>2</sup> + 1). Find dy/dx.",
    options: ["2(x<sup>2</sup> + 1) + (2x)(2x)", "2x(2x) + (x<sup>2</sup> + 1)(2)", "2x(x<sup>2</sup> + 1)", "4x<sup>2</sup> + 2"],
    answer: 0,
  },
  {
    question: "Given that y = x<sup>2</sup>·sin x. Differentiate y.",
    options: ["2x sin x + x<sup>2</sup> cos x", "x<sup>2</sup> cos x", "2x cos x + x<sup>2</sup> sin x", "2x sin x − x<sup>2</sup> cos x"],
    answer: 0,
  },
  {
    question: "If the function y = (x<sup>2</sup> + 1)/x. Find y'.",
    options: ["(2x·x − (x<sup>2</sup> + 1)·1)/x<sup>2</sup>", "(2x + 1)/x", "(2x)/x", "1 − 1/x<sup>2</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (3x + 2)<sup>2</sup>.",
    options: ["2(3x + 2)(3)", "2(3x + 2)", "6x + 4", "3(3x + 2)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (x<sup>3</sup> + 1)<sup>4</sup>.",
    options: ["4(x<sup>3</sup> + 1)<sup>3</sup>·3x<sup>2</sup>", "4(x<sup>3</sup> + 1)<sup>3</sup>", "12x<sup>2</sup>(x<sup>3</sup> + 1)<sup>4</sup>", "3x<sup>2</sup>(x<sup>3</sup> + 1)<sup>3</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate implicitly: x<sup>2</sup> + y<sup>2</sup> = 25. Find dy/dx.",
    options: ["−x/y", "y/x", "−y/x", "x/y"],
    answer: 0,
  },
  {
    question: "Differentiate: x + xy + y = 0. Find dy/dx.",
    options: ["dy/dx = −(1 + y)/(x + 1)", "dy/dx = −(1 + x)/(y + 1)", "dy/dx = −1/(x + 1)", "dy/dx = (1 + y)/(1 + x)"],
    answer: 0,
  },
  {
    question: "Find the second derivative of y = x<sup>3</sup>.",
    options: ["6x", "3x", "3", "0"],
    answer: 0,
  },
  {
    question: "Find d/dx of y = x<sup>−2</sup>.",
    options: ["−2x<sup>−3</sup>", "2x<sup>−1</sup>", "−x<sup>−2</sup>", "2x<sup>−3</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = <sup>(2x + 1)</sup>/<sub>(x − 1)</sub>",
    options: ["((2)(x − 1) − (2x + 1)(1))/(x − 1)<sup>2</sup>", "(2x + 1)'/(x − 1)'", "(2x + 1)/(x − 1)<sup>2</sup>", "(2x + 1)'(x − 1) − (2x + 1)(x − 1)'"],
    answer: 0,
  },
  {
    question: "Find slope of tangent to y = x<sup>2</sup> at x = 3.",
    options: ["2·3 = 6", "3", "9", "5"],
    answer: 0,
  },
  {
    question: "Differentiate: y = ln(3x).",
    options: ["1/x", "1/(3x)", "3/x", "1/(x·ln 3)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = e<sup>2x</sup>.",
    options: ["2e<sup>2x</sup>", "e<sup>2x</sup>", "2x e<sup>2x</sup>", "e<sup>x</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = arctan x.",
    options: ["1/(1 + x<sup>2</sup>)", "1/(1 − x<sup>2</sup>)", "−1/(1 + x<sup>2</sup>)", "1/x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = sec x.",
    options: ["sec x tan x", "sec<sup>2</sup> x", "tan x", "csc x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (x<sup>2</sup> + 1)<sup>−1</sup>.",
    options: ["−2x(x<sup>2</sup> + 1)<sup>−2</sup>", "2x(x<sup>2</sup> + 1)<sup>−2</sup>", "−x(x<sup>2</sup> + 1)<sup>−2</sup>", "2x(x<sup>2</sup> + 1)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = ln(x<sup>2</sup> + 1).",
    options: ["(2x)/(x<sup>2</sup> + 1)", "1/(x<sup>2</sup> + 1)", "2/(x<sup>2</sup> + 1)", "x/(x<sup>2</sup> + 1)"],
    answer: 0,
  },
  {
    question: "Find d/dx of y = x·e<sup>x</sup> (product rule).",
    options: ["e<sup>x</sup>(1 + x)", "x e<sup>x</sup>", "e<sup>x</sup>", "x + e<sup>x</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (3x<sup>2</sup> − x)(x + 2). Use product rule.",
    options: ["(6x − 1)(x + 2) + (3x<sup>2</sup> − x)(1)", "(3x<sup>2</sup> − x)'(x + 2)'", "3x( x +2) + (3x<sup>2</sup> − x)(1)", "(6x − 1)(x + 2)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = x/(x + 1).",
    options: ["1/(x + 1)<sup>2</sup>", "1/(x + 1)", "1/(x + 1)<sup>3</sup>", "−1/(x + 1)<sup>2</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = sin(2x).",
    options: ["2 cos(2x)", "cos(2x)", "sin 2x", "−2 sin(2x)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = cos(3x + 1).",
    options: ["−3 sin(3x + 1)", "−sin(3x + 1)", "3 cos(3x + 1)", "sin(3x + 1)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (ln x)<sup>2</sup>.",
    options: ["2 ln x · (1/x)", "2 ln x", "(ln x)/x", "1/x<sup>2</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = x<sup>x</sup> (use ln-differentiation).",
    options: ["y' = x<sup>x</sup>(ln x + 1)", "y' = x<sup>x</sup> ln x", "y' = x<sup>x</sup>·x", "y' = x<sup>x−1</sup>(ln x + 1)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (1 + x)<sup>1/3</sup>.",
    options: ["1/3(1 + x)<sup>−2/3</sup>", "1/3(1 + x)<sup>1/3</sup>", "3(1 + x)<sup>−2/3</sup>", "(1 + x)<sup>−2/3</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = cot x.",
    options: ["−cosec<sup>2</sup> x", "cosec<sup>2</sup> x", "−sec<sup>2</sup> x", "sec<sup>2</sup> x"],
    answer: 0,
  },
  {
    question: "A balloon rises so that its height above ground is h(t) = 5t<sup>2</sup> metres at t seconds. Find velocity at t = 3s.",
    options: ["dh/dt = 10t so at t=3, v = 30 m/s", "v = 45 m/s", "v = 15 m/s", "v = 9 m/s"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (2x + 3)<sup>−2</sup>.",
    options: ["−4(2x + 3)<sup>−3</sup>", "−2(2x + 3)<sup>−2</sup>", "4(2x + 3)<sup>−3</sup>", "−2(2x + 3)<sup>−3</sup>"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (x<sup>2</sup> + 2x + 1) = (x + 1)<sup>2</sup>. Find dy/dx.",
    options: ["2(x + 1)", "x + 1", "x<sup>2</sup> + 2x + 1", "2x + 1"],
    answer: 0,
  },
  {
    question: "Differentiate: y = sin x.",
    options: ["cos x", "sin x", "e<sup>x</sup>", "tan x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = cos 2x",
    options: ["2sin2x", "sin2x", "2 cos2x", "cos2x"],
    answer: 0,
  },
  {
    question: "Find derivative of y = 1/(x<sup>3</sup> + 1).",
    options: ["−3x<sup>2</sup>/(x<sup>3</sup> + 1)<sup>2</sup>", "3x<sup>2</sup>/(x<sup>3</sup> + 1)<sup>2</sup>", "−1/(x<sup>3</sup> + 1)<sup>2</sup>", "−3/(x<sup>3</sup> + 1)"],
    answer: 0,
  },
  {
    question: "Differentiate and simplify: y = x<sup>4</sup>·ln x.",
    options: ["4x<sup>3</sup> ln x + x<sup>3</sup>", "4x<sup>3</sup> ln x + x<sup>4</sup>", "x<sup>4</sup>/x + ln x", "4x<sup>3</sup> + ln x"],
    answer: 0,
  },
  {
    question: "Differentiate using chain rule: y = (sin x)<sup>3</sup>.",
    options: ["3(sin x)<sup>2</sup> cos x", "3 sin x cos x", "sin<sup>3</sup> x", "cos x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = ln(sinx) for x where sin x > 0.",
    options: ["cot x", "tan x", "csc x", "sec x"],
    answer: 0,
  },
  {
    question: "Differentiate: y = (x<sup>2</sup> + x)<sup>3</sup>.",
    options: ["3(x<sup>2</sup> + x)<sup>2</sup>(2x + 1)", "3(x<sup>2</sup> + x)<sup>2</sup>", "(2x + 1)(x<sup>2</sup> + x)", "6x(x + 1)"],
    answer: 0,
  },
  {
    question: "Differentiate: y = arccos x.",
    options: ["−1/√(1 − x<sup>2</sup>)", "1/√(1 − x<sup>2</sup>)", "1/(1 − x<sup>2</sup>)", "−1/(1 − x<sup>2</sup>)"],
    answer: 0,
  },
    {
      question: "Solve for x and y: 2x + y = 7, x - y = 1.",
      options: ["x = 3, y = 1", "x = 2, y = 3", "x = 4, y = -1", "x = 1, y = 5"],
      answer: 0
    },
    {
      question: "Find the values of x and y if 3x + 2y = 12 and 2x - y = 1.",
      options: ["x = 2, y = 3", "x = 3, y = 1.5", "x = 2.5, y = 2", "x = 2, y = 2"],
      answer: 1
    },
    {
      question: "Solve for x and y: x + y = 10, 2x - y = 5.",
      options: ["x = 5, y = 5", "x = 7, y = 3", "x = 6, y = 4", "x = 4, y = 6"],
      answer: 1
    },
    {
      question: "If 5x + 3y = 19 and x - y = 1, find y.",
      options: ["y = 2", "y = 3", "y = 4", "y = 1"],
      answer: 1
    },
    {
      question: "The solution of 4x - y = 11 and 3x + y = 9 is:",
      options: ["x = 2, y = 3", "x = 4, y = 1", "x = 2, y = 1", "x = 3, y = 2"],
      answer: 1
    },
    {
      question: "Solve for x: 2x + 3y = 12, x + y = 5.",
      options: ["x = 3, y = 2", "x = 2, y = 3", "x = 3.5, y = 1.5", "x = 4, y = 1"],
      answer: 0
    },
    {
      question: "If 3x - 2y = 4 and 2x + y = 7, find x.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1
    },
    {
      question: "Solve: x + 3y = 9, 2x - y = 3.",
      options: ["x = 3, y = 2", "x = 2, y = 3", "x = 1, y = 4", "x = 4, y = 1"],
      answer: 0
    },
    {
      question: "If x + y = 8 and x - y = 2, find x.",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      answer: 2
    },
    {
      question: "Solve for y: 5x + 2y = 16, 3x - y = 5.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 0
    },
    {
      question: "If 2x + 5y = 20 and x - 2y = -4, find x.",
      options: ["x = 4", "x = 2", "x = 3", "x = 6"],
      answer: 0
    },
    {
      question: "Solve: 7x - 3y = 11, 2x + y = 4.",
      options: ["x = 2, y = 0", "x = 1, y = 2", "x = 3, y = -2", "x = 2, y = -1"],
      answer: 0
    },
    {
      question: "If 4x + y = 10 and x + y = 6, find y.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 1
    },
    {
      question: "Find x and y: 5x - 2y = 8, x + y = 4.",
      options: ["x = 2, y = 2", "x = 3, y = 1", "x = 4, y = 0", "x = 2.5, y = 1.5"],
      answer: 1
    },
    {
      question: "If x + 2y = 10 and 2x - 3y = -4, find y.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 2
    },
    {
      question: "Solve the simultaneous equations: 3x + y = 9, x - y = 1.",
      options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 5, y = 0"],
      answer: 1
    },
    {
      question: "If 2x - y = 3 and 3x + y = 12, find x.",
      options: ["x = 3", "x = 2", "x = 4", "x = 5"],
      answer: 0
    },
    {
      question: "Solve for y: x + 2y = 7, 3x - y = 8.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 0
    },
    {
      question: "If 5x + 4y = 14 and x - 2y = 1, find x.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1
    },
    {
      question: "Solve: 4x + y = 11, 2x + y = 7.",
      options: ["x = 2, y = 3", "x = 1, y = 4", "x = 2, y = 5", "x = 3, y = 5"],
      answer: 0
    },
    {
      question: "Find the value of y: 3x + 2y = 12, 2x - y = 1.",
      options: ["y = 3", "y = 2", "y = 4", "y = 5"],
      answer: 0
    },
    {
      question: "If x + y = 10 and x - y = 2, find y.",
      options: ["y = 4", "y = 3", "y = 5", "y = 6"],
      answer: 2
    },
    {
      question: "Solve for x: 3x - y = 5, x + y = 7.",
      options: ["x = 3, y = 4", "x = 4, y = 3", "x = 2, y = 5", "x = 5, y = 2"],
      answer: 1
    },
    {
      question: "Solve: 2x + y = 4, x + 2y = 5.",
      options: ["x = 1, y = 2", "x = 2, y = 1", "x = 3, y = 1", "x = 1, y = 1.5"],
      answer: 0
    },
    {
      question: "Find x and y: 4x - y = 5, 2x + y = 7.",
      options: ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"],
      answer: 0
    },
    {
      question: "Solve: 7x + 2y = 16, 3x - y = 5.",
      options: ["x = 2, y = 1", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
      answer: 3
    },
    {
      question: "The equations 2x + 3y = 7 and 4x + 6y = 14 represent:",
      options: ["The same line", "Two parallel lines", "Two intersecting lines", "No line"],
      answer: 0
    },
    {
      question: "If 4x - 3y = 5 and 2x + 3y = 13, find x.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 2
    },
    {
      question: "Solve for y: 6x + 2y = 16, 3x + y = 8.",
      options: ["y = 0", "y = 1", "y = 2", "y = 3"],
      answer: 1
    },
    {
      question: "If x + y = 9 and 3x - y = 11, find x.",
      options: ["x = 5", "x = 4", "x = 6", "x = 7"],
      answer: 0
    },
    {
      question: "Solve for y: 4x + 3y = 18, x + y = 6.",
      options: ["y = 3", "y = 2", "y = 4", "y = 5"],
      answer: 0
    },
    {
      question: "Find x: 3x - 2y = 1, x + y = 4.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1
    },
    {
      question: "If 2x + 5y = 10 and x + y = 3, find y.",
      options: ["y = 1", "y = 2", "y = 3", "y = 4"],
      answer: 0
    },
    {
      question: "Solve: 2x - 3y = 1, 4x + y = 11.",
      options: ["x = 2, y = 3", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
      answer: 1
    },
    {
      question: "If 5x + y = 16 and 3x - y = 8, find x.",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      answer: 1
    },
    {
      question: "Solve: x + y = 5, 2x - 3y = -4.",
      options: ["x = 1, y = 4", "x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 1"],
      answer: 0
    },
    {
      question: "Find x and y: 3x + 2y = 8, 2x - y = 1.",
      options: ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 1", "x = 2, y = 2"],
      answer: 0
    },
    {
      question: "If 4x + 3y = 18 and 3x + 2y = 13, find y.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 0
    },
    {
      question: "Solve for x: 5x - y = 9, 2x + y = 8.",
      options: ["x = 3", "x = 2", "x = 4", "x = 1"],
      answer: 0
    },
    {
      question: "If x + y = 7 and 3x - y = 9, find y.",
      options: ["y = 2", "y = 3", "y = 4", "y = 5"],
      answer: 1
    },
    {
      question: "Find x and y: 6x - y = 11, 2x + y = 5.",
      options: ["x = 2, y = 1", "x = 3, y = 1", "x = 2, y = 2", "x = 3, y = 2"],
      answer: 1
    },
    {
      question: "Solve for x: 3x + 4y = 18, x - y = 2.",
      options: ["x = 4, y = 2", "x = 3, y = 1", "x = 4, y = 1", "x = 5, y = 3"],
      answer: 0
    },
    {
      question: "If 2x + 3y = 9 and 3x - 2y = 4, find x.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 0
    },
    {
      question: "Solve: x + y = 8, 3x - y = 4.",
      options: ["x = 3, y = 5", "x = 2, y = 6", "x = 4, y = 4", "x = 1, y = 7"],
      answer: 0
    },
    {
      question: "If 4x + 2y = 10 and 3x - y = 5, find y.",
      options: ["y = 1", "y = 2", "y = 3", "y = 4"],
      answer: 2
    },
    {
      question: "Solve: 2x + y = 6, 3x + 2y = 10.",
      options: ["x = 2, y = 2", "x = 1, y = 4", "x = 3, y = 1", "x = 2, y = 3"],
      answer: 0
    },
    {
      question: "If 5x - 2y = 8 and 3x + y = 7, find x.",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: 1
    },
    
    //quadratic equations 
    {
      question: "Simplify: (x + 2)(x + 3).",
      options: ["x² + 6", "x² + 5x + 6", "x² + 3x + 2", "x² + 2x + 3"],
      answer: 1
    },
    {
      question: "Expand: (2x − 3)(x + 4).",
      options: ["2x² + 5x − 12", "2x² − 5x − 12", "2x² + 8x − 3", "2x² + 8x + 12"],
      answer: 0
    },
    {
      question: "Simplify: (x + 1)².",
      options: ["x² + 2x + 1", "x² + 1", "x² + 1x + 1", "x² + 2x"],
      answer: 0
    },
    {
      question: "Find the product of (x + 2) and (x − 2).",
      options: ["x² + 4", "x² − 4", "x² + 2x − 2", "x² − 2x + 2"],
      answer: 1
    },
    {
      question: "Simplify: (2x + 3)(x − 5).",
      options: ["2x² − 7x − 15", "2x² + 7x − 15", "2x² − 10x + 3", "2x² + 10x − 3"],
      answer: 0
    },
    {
      question: "If f(x) = x² − 4x + 3, find f(2).",
      options: ["3", "1", "0", "-1"],
      answer: 1
    },
    {
      question: "Simplify: (3x + 2)(x + 4).",
      options: ["3x² + 14x + 8", "3x² + 12x + 8", "3x² + 6x + 8", "x² + 12x + 8"],
      answer: 0
    },
    {
      question: "Factorize: x² + 5x + 6.",
      options: ["(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 1)(x + 6)", "(x − 1)(x − 6)"],
      answer: 0
    },
    {
      question: "Factorize completely: x² − 9.",
      options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 1)(x + 9)", "(x − 3)²"],
      answer: 0
    },
    {
      question: "Simplify: (x − 2)³.",
      options: ["x³ − 8", "x³ − 6x² + 12x − 8", "x³ − 4x² + 4x − 8", "x³ − 2x² + 4x − 8"],
      answer: 1
    },
    {
      question: "Find the remainder when x³ + 3x² + 3x + 1 is divided by x + 1.",
      options: ["0", "1", "2", "−1"],
      answer: 0
    },
    {
      question: "Simplify: (x + 5)(x² − 5x + 25).",
      options: ["x³ + 125", "x³ − 125", "x³ + 25x + 125", "x³ + 50x + 125"],
      answer: 0
    },
    {
      question: "If p(x) = x² − 2x − 3, find p(3).",
      options: ["0", "3", "−3", "−6"],
      answer: 1
    },
    {
      question: "Factorize: x² − x − 6.",
      options: ["(x − 3)(x + 2)", "(x + 3)(x − 2)", "(x − 1)(x − 6)", "(x − 2)(x + 3)"],
      answer: 0
    },
    {
      question: "Expand: (2x + 1)(x − 3).",
      options: ["2x² − 5x − 3", "2x² − x − 3", "2x² + 5x − 3", "2x² − 6x + 1"],
      answer: 0
    },
    {
      question: "Find the coefficient of x² in (x + 3)(x − 4).",
      options: ["1", "3", "−1", "2"],
      answer: 0
    },
    {
      question: "Simplify: (x² + 3x + 2) − (x² + x − 1).",
      options: ["2x + 3", "2x + 1", "x + 3", "2x + 2"],
      answer: 1
    },
    {
      question: "Find the constant term in (x + 2)(x − 3).",
      options: ["6", "−6", "5", "−5"],
      answer: 1
    },
    {
      question: "If f(x) = x³ − 2x² + x − 3, find f(1).",
      options: ["−3", "−4", "−5", "−2"],
      answer: 0
    },
    {
      question: "Simplify: (x + 1)(x² − x + 1).",
      options: ["x³ + 1", "x³ − 1", "x² + 1", "x³ − x + 1"],
      answer: 0
    },
    {
      question: "Factorize: x³ − 8.",
      options: ["(x − 2)(x² + 2x + 4)", "(x + 2)(x² − 2x + 4)", "(x − 4)(x² + 4x + 4)", "(x + 4)(x² − 4x + 4)"],
      answer: 0
    },
    {
      question: "Find the sum of the roots of x² − 5x + 6 = 0.",
      options: ["5", "6", "1", "−5"],
      answer: 0
    },
    {
      question: "Find the product of the roots of x² + 3x + 2 = 0.",
      options: ["2", "3", "1", "−2"],
      answer: 0
    },
    {
      question: "Simplify: (x + 2y)(x − 2y).",
      options: ["x² + 4y²", "x² − 4y²", "x² − 2y²", "x² + 2y²"],
      answer: 1
    },
    {
      question: "Expand: (x − 3)(x² + 3x + 9).",
      options: ["x³ − 27", "x³ + 27", "x³ − 9x − 27", "x³ + 9x + 27"],
      answer: 0
    },
    {
      question: "Simplify: (x² + 4x + 3) ÷ (x + 3).",
      options: ["x + 1", "x + 2", "x + 3", "x + 4"],
      answer: 0
    },
    {
      question: "If f(x) = 2x³ − 3x² + x − 5, find f(0).",
      options: ["−5", "−3", "0", "1"],
      answer: 0
    },
    {
      question: "Factorize: x² + 7x + 12.",
      options: ["(x + 3)(x + 4)", "(x − 3)(x − 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)"],
      answer: 0
    },
    {
      question: "Simplify: (3x − 2)(x² + 2x + 4).",
      options: ["3x³ − 2", "3x³ + 2x² + 12x − 8", "3x³ + 6x² + 12x − 8", "3x³ − 2x² + 12x + 8"],
      answer: 2
    },
    {
      question: "Find the remainder when x³ − 2x² + 3x − 5 is divided by x − 1.",
      options: ["−3", "−4", "−5", "−2"],
      answer: 1
    },
    {
      question: "If x = −1 is a root of x³ + x² − x − 1 = 0, factorize the polynomial.",
      options: ["(x + 1)(x² − 1)", "(x + 1)(x² − x − 1)", "(x + 1)(x² + x + 1)", "(x + 1)(x² − 2)"],
      answer: 1
    },
    {
      question: "Simplify: (x + 2)³.",
      options: ["x³ + 6x² + 12x + 8", "x³ + 3x² + 3x + 2", "x³ + 4x² + 8x + 8", "x³ + 5x² + 10x + 8"],
      answer: 0
    },
    {
      question: "If f(x) = 3x² − 2x + 5, find f(−2).",
      options: ["19", "15", "17", "21"],
      answer: 0
    },
    {
      question: "Factorize: x² − 16.",
      options: ["(x − 4)(x + 4)", "(x − 8)(x + 8)", "(x − 2)(x + 8)", "(x − 4)²"],
      answer: 0
    },
    {
      question: "Find the coefficient of x³ in (2x + 1)(x − 3)(x + 4).",
      options: ["2", "1", "0", "3"],
      answer: 0
    },
    {
      question: "Simplify: (x − 1)(x² + x + 1).",
      options: ["x³ − 1", "x³ + 1", "x³ − x + 1", "x³ + x − 1"],
      answer: 0
    },
    {
      question: "Expand: (x + 2y)(x² − 2xy + 4y²).",
      options: ["x³ + 8y³", "x³ − 8y³", "x³ − 6xy² + 8y³", "x³ − 4xy² + 8y³"],
      answer: 0
    },
    {
      question: "Factorize: 2x² − 8x.",
      options: ["2x(x − 4)", "x(2x − 4)", "2(x − 4)", "2x(x + 4)"],
      answer: 0
    },
    {
      question: "Simplify: (x² − 9) ÷ (x − 3).",
      options: ["x + 3", "x − 3", "x² + 3x", "x² − 3x"],
      answer: 0
    },
    {
      question: "Find the remainder when x³ − 6x² + 11x − 6 is divided by x − 1.",
      options: ["−6", "0", "5", "1"],
      answer: 1
    },
    {
      question: "If f(x) = x³ + 3x² + 3x + 1, find f(−1).",
      options: ["0", "−1", "1", "2"],
      answer: 0
    },
    {
      question: "Simplify: (x + 3)(x² − 3x + 9).",
      options: ["x³ + 27", "x³ − 27", "x³ − 9", "x³ + 9x + 27"],
      answer: 0
    },
    {
      question: "Factorize: x³ + 8y³.",
      options: ["(x + 2y)(x² − 2xy + 4y²)", "(x + 2y)(x² + 2xy + 4y²)", "(x − 2y)(x² + 2xy + 4y²)", "(x − 2y)(x² − 2xy + 4y²)"],
      answer: 0
    },
    {
      question: "Simplify: (x² + 3x + 2)(x + 1).",
      options: ["x³ + 4x² + 5x + 2", "x³ + 3x² + 5x + 3", "x³ + 2x² + 3x + 2", "x³ + 4x² + 6x + 2"],
      answer: 0
    },
    {
      question: "If p(x) = x² + 2x + 1, find p(−1).",
      options: ["0", "1", "2", "−1"],
      answer: 0
    },
    {
      question: "Expand: (x + 4)(x − 5).",
      options: ["x² − x − 20", "x² − x + 20", "x² + 9x + 20", "x² − 9x − 20"],
      answer: 0
    },
    {
      question: "Find the constant term in (x + 1)(x² + x + 1).",
      options: ["1", "2", "3", "0"],
      answer: 0
    },
    {
      question: "Simplify: (x + 2)(x − 1)(x + 3).",
      options: ["x³ + 4x² + x − 6", "x³ + 4x² − x − 6", "x³ + 2x² + 3x − 6", "x³ − 2x² + 3x + 6"],
      answer: 1
    },
    
    
    //polynomials and remainder theorem
    
    {
      question: "Factorize completely: x² − 9.",
      options: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 1)(x + 9)", "(x − 3)²"],
      answer: 0
    },
    {
      question: "Find the remainder when x³ − 2x² + 3x − 5 is divided by x − 1.",
      options: ["−3", "−4", "0", "−2"],
      answer: 2
    },
    {
      question: "Factorize: x² + 5x + 6.",
      options: ["(x + 2)(x + 3)", "(x − 2)(x − 3)", "(x + 1)(x + 6)", "(x − 1)(x − 6)"],
      answer: 0
    },
    {
      question: "If f(x) = x³ − 4x² + x + 6, find f(2).",
      options: ["0", "2", "−2", "6"],
      answer: 0
    },
    {
      question: "Simplify: (x + 2)(x − 2).",
      options: ["x² + 4", "x² − 4", "x² − 2x + 2", "x² + 2x − 2"],
      answer: 1
    },
    {
      question: "Factorize completely: x³ + 8.",
      options: ["(x + 2)(x² − 2x + 4)", "(x + 2)(x² + 2x + 4)", "(x − 2)(x² + 2x + 4)", "(x − 2)(x² − 2x + 4)"],
      answer: 0
    },
    {
      question: "Using the remainder theorem, find the remainder when 2x³ − 3x² + x − 5 is divided by x − 2.",
      options: ["−5", "1", "−3", "7"],
      answer: 3
    },
    {
      question: "Factorize: x² − 7x + 12.",
      options: ["(x − 3)(x − 4)", "(x − 6)(x − 2)", "(x − 4)(x − 3)", "(x − 2)(x − 6)"],
      answer: 2
    },
    {
      question: "Find the sum of the roots of x² − 6x + 8 = 0.",
      options: ["6", "8", "−6", "−8"],
      answer: 0
    },
    {
      question: "Find the product of the roots of x² − 5x + 6 = 0.",
      options: ["6", "5", "1", "−6"],
      answer: 0
    },
    {
      question: "Factorize: x³ − 27.",
      options: ["(x − 3)(x² + 3x + 9)", "(x − 3)(x² − 3x + 9)", "(x + 3)(x² − 3x + 9)", "(x + 3)(x² + 3x + 9)"],
      answer: 1
    },
    {
      question: "If f(x) = x³ − 3x² + 4, find f(1).",
      options: ["2", "0", "1", "−2"],
      answer: 0
    },
    {
      question: "Factorize: 2x² − 8x.",
      options: ["2x(x − 4)", "x(2x − 4)", "2(x − 4)", "2x(x + 4)"],
      answer: 0
    },
    {
      question: "Simplify: (x + 1)(x² − x + 1).",
      options: ["x³ + 1", "x³ − 1", "x² + 1", "x³ − x + 1"],
      answer: 0
    },
    {
      question: "Using remainder theorem, find remainder when x³ + 2x² − x + 1 is divided by x + 1.",
      options: ["0", "2", "−2", "1"],
      answer: 3
    },
    {
      question: "Factorize: x³ − 8x.",
      options: ["x(x − 2)(x + 2)", "x(x − 4)(x + 2)", "x(x − 1)(x + 8)", "x(x − 8)(x + 1)"],
      answer: 0
    },
    {
      question: "Simplify: (x + 2)² − (x − 2)².",
      options: ["8x", "4x", "2x", "x² − 4"],
      answer: 0
    },
    {
      question: "Factorize completely: x³ − x² − 4x + 4.",
      options: ["(x − 1)(x + 2)(x − 2)", "(x + 1)(x − 2)(x + 2)", "(x − 2)(x² + x − 2)", "(x + 2)(x² − x − 2)"],
      answer: 0
    },
    {
      question: "Find remainder when x³ + 4x² − 5x + 2 is divided by x − 1.",
      options: ["0", "2", "1", "−1"],
      answer: 2
    },
    {
      question: "Factorize: x² + 2x − 15.",
      options: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x − 3)(x + 5)", "(x + 3)(x − 5)"],
      answer: 0
    },
    {
      question: "Using remainder theorem, if f(x) = x³ − 3x + 4, find remainder when divided by x − 2.",
      options: ["0", "2", "−2", "6"],
      answer: 3
    },
    {
      question: "Factorize: 4x² − 9.",
      options: ["(2x − 3)(2x + 3)", "(4x − 3)(x + 3)", "(2x − 9)(2x + 1)", "(4x − 1)(x + 9)"],
      answer: 0
    },
    {
      question: "Find the remainder when 3x³ − 5x² + 2x − 1 is divided by x + 1.",
      options: ["−7", "1", "0", "5"],
      answer: 0
    },
    {
      question: "Factorize: x³ − x² − x + 1.",
      options: ["(x − 1)(x² − 1)", "(x − 1)²(x + 1)", "(x + 1)(x − 1)²", "(x + 1)(x² − 1)"],
      answer: 1
    },
    {
      question: "Simplify: (x − 3)(x + 2) + (x − 3)(x − 2).",
      options: ["2x(x − 3)", "x² − 5", "x² − 9", "2x² − 3x − 10"],
      answer: 0
    },
    {
      question: "Factorize completely: x³ + 3x² − 4x − 12.",
      options: ["(x + 3)(x − 2)(x + 2)", "(x − 3)(x + 2)(x − 2)", "(x + 2)(x − 3)(x − 2)", "(x − 2)(x + 3)(x − 2)"],
      answer: 0
    },
    {
      question: "Find remainder when x³ − 6x² + 11x − 6 is divided by x − 1.",
      options: ["0", "1", "−1", "2"],
      answer: 0
    },
    {
      question: "Factorize: x³ − x.",
      options: ["x(x − 1)(x + 1)", "x(x − 1)²", "x²(x − 1)", "x(x² − 1)"],
      answer: 0
    },
    {
      question: "Using remainder theorem, find remainder when x³ − 2x² + 3x − 5 is divided by x − 2.",
      options: ["1", "−1", "3", "0"],
      answer: 0
    },
    {
      question: "Factorize completely: x³ + 2x² − x − 2.",
      options: ["(x + 2)(x + 1)(x − 1)", "(x + 2)(x − 1)²", "(x − 2)(x + 1)(x − 1)", "(x + 1)(x + 2)(x − 1)"],
      answer: 0
    },
    {
      question: "Simplify: (x + 2)³ − (x − 1)³.",
      options: ["3x² + 9x + 7", "3x² + 7x + 5", "x³ + 3x² + 6x + 7", "x³ − 3x² + 6x − 7"],
      answer: 2
    },
    {
      question: "Factorize: x² − 5x + 6.",
      options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)", "(x + 1)(x + 6)"],
      answer: 0
    },
    {
      question: "Find remainder when 2x³ − 3x² + x − 5 is divided by x − 1.",
      options: ["−5", "−3", "−1", "−2"],
      answer: 3
    },
    {
      question: "Factorize: x³ − 6x² + 11x − 6.",
      options: ["(x − 1)(x − 2)(x − 3)", "(x − 1)(x − 2)²", "(x − 3)(x − 2)(x − 1)", "(x − 1)(x − 3)(x − 2)"],
      answer: 0
    },
    {
      question: "Simplify: (x + 1)(x² + 2x + 1).",
      options: ["x³ + 3x² + 3x + 1", "x³ + 2x² + 2x + 1", "x³ + x² + 2x + 1", "x³ + 3x² + 2x + 1"],
      answer: 0
    },
    {
      question: "Using remainder theorem, find remainder when x³ − x² + 2x − 1 is divided by x − 1.",
      options: ["0", "2", "1", "−1"],
      answer: 0
    },
    {
      question: "Factorize completely: x³ + 4x² + x − 6.",
      options: ["(x + 3)(x + 2)(x − 1)", "(x + 2)(x − 3)(x + 1)", "(x + 1)(x + 2)(x − 3)", "(x − 1)(x + 2)(x + 3)"],
      answer: 0
    },
    {
      question: "Factorize: 3x³ − 12x².",
      options: ["3x²(x − 4)", "3x²(x + 4)", "3x(x − 4)", "3x(x + 4)"],
      answer: 0
    },
    {
      question: "Simplify: (x − 2)(x² + 2x + 4).",
      options: ["x³ − 8", "x³ + 8", "x³ − 4", "x³ + 4"],
      answer: 0
    },
    {
      question: "Factorize completely: x³ − 2x² − x + 2.",
      options: ["(x − 1)(x − 2)(x + 1)", "(x + 1)(x − 2)(x − 1)", "(x − 2)(x + 2)(x − 1)", "(x − 1)(x + 2)(x − 1)"],
      answer: 0
    },
    
    {
      question: "In the diagram, /EF/ = 8 cm, /FG/ = x cm, /GH/ = (x+2) cm, ∠EFC = 90⁰. If the area of the shaded portion is 40 cm², find the area of ⊿EFG. ",
      image:"./Screenshot_20251119-105950.png",
      options: ["128cm²", "72cm²", "64cm²", "32cm²"],
      answer:3 ,
    },
    
    {
    question: "How many times, correct to the nearest whole number, will a man run round a circular track of diameter 100m to cover a distance of 1000m? ",
    options: ["3", "4", "5", "6"],
    answer: 0,
  },
  
  {
    question: "The nth term of a sequence: -2, 4, -8, 16, ... is given by ___ ",
    options: ["T<sub>n</sub> = 2<sup>n</sup>", "T<sub>n</sub> = (-2)<sup>n</sup>", "T<sub>n</sub> = -2n", "T<sub>n</sub> = n<sup>2</sup>"],
    answer: 1,
  },
  
  
  {
    question: "In the diagram, O is the centre of the circle.∠SQR = 60⁰, ∠SPR = y and∠ SOR = 3 x.Find the value of (x + y).",
    image: "./Screenshot_20251119-110828.png",
    options: ["110°", "100°", "80°", "70°"],
    answer: 1,
  },  
    
    //set and venn diagrams
    {
    question: "If A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.",
    options: ["{1, 4}", "{2, 3}", "{1, 2, 3, 4}", "{1, 2, 3}"],
    answer: 1
  },
  {
    question: "What is the length of a rectangular garden whose perimeter is 32 cm and area 39 cm²? ",
    options: ["25cm", "18cm", "13cm", "9cm"],
    answer: 2
  },
  {
    question: "The sum of the exterior angles of an n-sided convex polygon is half the sum of its interior angles. Find n. ",
    options: ["6", "8", "9", "12"],
    answer: 0
  },
  {
    question: " If sin 3y = cos 2y and 0⁰ ≤ y ≤ 90⁰, find the value of y ",
    options: ["18°", "36°", "54°", "90°"],
    answer: 0
  },
  {
    question: " If sin 3y = cos 2y and 0⁰ ≤ y ≤ 90⁰, find the value of y ",
    options: ["18°", "36°", "54°", "90°"],
    answer: 0
  },
  
  {
    question: "If U = {1, 2, 3, 4, 5} and A = {2, 4}, find A' (the complement of A).",
    options: ["{2, 4}", "{1, 3, 5}", "{1, 2, 3, 5}", "{3, 4, 5}"],
    answer: 1
  },
  {
    question: "Given A = {a, b}, B = {b, c}, find A ∪ B.",
    options: ["{a, b}", "{a, b, c}", "{b, c}", "{a, c}"],
    answer: 1
  },
  {
    question: "The number of subsets of a set with 4 elements is:",
    options: ["4", "8", "16", "32"],
    answer: 2
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A - B.",
    options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"],
    answer: 0
  },
  {
    question: "In a Venn diagram, 10 students like Maths, 8 like English, and 3 like both. How many like either Maths or English?",
    options: ["15", "12", "18", "5"],
    answer: 0
  },
  {
    question: "If U = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3}, and B = {4, 5}, find A ∪ B.",
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6}", "{4, 5, 6}", "{1, 2, 3}"],
    answer: 0
  },
  {
    question: "If A ⊆ B, which of the following is true?",
    options: ["All elements of B are in A", "A and B are disjoint", "All elements of A are in B", "A is empty"],
    answer: 2
  },
  {
    question: "In a class, 20 students play football, 15 play basketball, 5 play both. How many play only football?",
    options: ["15", "5", "20", "10"],
    answer: 0
  },
  {
    question: "If A = {x | x is an even number less than 10}, list A.",
    options: ["{2, 4, 6, 8}", "{1, 3, 5, 7}", "{2, 4, 6}", "{1, 2, 3, 4, 5, 6, 7, 8, 9}"],
    answer: 0
  },
  {
    question: "Given A = {1, 2}, B = {2, 3}, C = {3, 4}, find A ∩ B ∩ C.",
    options: ["{2}", "{3}", "{}", "{1}"],
    answer: 2
  },
  {
    question: "If U = {a, b, c, d, e}, A = {a, c}, B = {b, c, d}, find A ∪ B.",
    options: ["{a, b, c, d}", "{a, b, c}", "{a, c, d}", "{b, c, d, e}"],
    answer: 0
  },
  {
    question: "A survey shows 12 students like tea, 10 like coffee, and 5 like both. How many like either tea or coffee?",
    options: ["17", "10", "12", "5"],
    answer: 0
  },
  {
    question: "If A = {1, 2, 3, 4}, what is the number of elements in the power set of A?",
    options: ["4", "8", "16", "12"],
    answer: 2
  },
  {
    question: "In a Venn diagram, if |A ∩ B| = 3, |A| = 7, |B| = 5, find |A ∪ B|.",
    options: ["9", "10", "12", "15"],
    answer: 0
  },
  {
    question: "If A = {x | x is a prime number less than 10}, list A.",
    options: ["{2, 3, 5, 7}", "{1, 2, 3, 5, 7}", "{2, 3, 5}", "{3, 5, 7}"],
    answer: 0
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A ∪ B.",
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 3}", "{3, 4, 5}", "{1, 2, 4, 5}"],
    answer: 0
  },
  {
    question: "In a class of 30 students, 18 study Maths, 12 study English, 5 study both. How many study neither?",
    options: ["5", "7", "10", "15"],
    answer: 1
  },
  {
    question: "If A = {1, 3, 5}, B = {2, 3, 4}, find A - B.",
    options: ["{1, 5}", "{3}", "{2, 4}", "{1, 3, 5}"],
    answer: 0
  },
  {
    question: "The complement of the universal set U is:",
    options: ["Empty set", "U", "Undefined", "U itself"],
    answer: 0
  },
  {
    question: "If |A| = 5, |B| = 7, |A ∩ B| = 3, find |A ∪ B|.",
    options: ["12", "9", "10", "15"],
    answer: 2
  },
  {
    question: "A survey shows 8 students like cats, 10 like dogs, 3 like both. How many like only dogs?",
    options: ["7", "10", "8", "3"],
    answer: 0
  },
  {
    question: "If A = {x | x < 6, x ∈ N}, list A.",
    options: ["{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4, 5}", "{1, 2, 3, 4}", "{0, 1, 2, 3, 4}"],
    answer: 0
  },
  {
    question: "If A = {1, 2, 3}, B = {2, 3, 4}, find B - A.",
    options: ["{4}", "{2, 3}", "{1}", "{1, 4}"],
    answer: 0
  },
  {
    question: "If |U| = 20, |A| = 12, |B| = 9, |A ∩ B| = 4, find the number not in A or B.",
    options: ["7", "8", "5", "6"],
    answer: 0
  },
  {
    question: "Find A ∩ (B ∪ C) given sets A, B, C.",
    options: ["{x | x ∈ A and x ∈ B or C}", "{x | x ∈ A or B and C}", "{x | x ∈ B}", "{x | x ∈ C}"],
    answer: 0
  },
  {
    question: "If A = {a, b, c}, B = {c, d, e}, find A ∩ B.",
    options: ["{c}", "{a, b}", "{d, e}", "{}"],
    answer: 0
  },
  {
    question: "In a class, 15 students like tea, 20 like coffee, 5 like both. How many like only tea?",
    options: ["10", "15", "20", "5"],
    answer: 0
  },
  {
    question: "If A ∪ B = B, then which of the following is true?",
    options: ["A is empty", "A = B", "B is empty", "A ∩ B = {}"],
    answer: 1
  },
  {
    question: "The number of elements in the set {x | x is an odd number less than 10} is:",
    options: ["4", "5", "3", "6"],
    answer: 0
  },
  {
    question: "If |A| = 6, |B| = 8, |A ∩ B| = 3, find |A ∪ B|.",
    options: ["11", "12", "9", "14"],
    answer: 0
  },
  {
    question: "Find the complement of A if U = {1, 2, 3, 4, 5}, A = {2, 4}.",
    options: ["{1, 3, 5}", "{2, 4}", "{1, 2, 3, 5}", "{3, 5}"],
    answer: 0
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, find (A ∪ B) - (A ∩ B).",
    options: ["{1, 2, 4, 5}", "{3}", "{1, 2, 3, 4, 5}", "{4, 5}"],
    answer: 0
  },
  {
    question: "In a Venn diagram, if |A| = 10, |B| = 8, |A ∩ B| = 3, find |A - B|.",
    options: ["7", "3", "5", "10"],
    answer: 2
  },
  {
    question: "If U = {1, 2, 3, 4, 5, 6}, A = {1, 3, 5}, B = {2, 4, 6}, find A ∪ B.",
    options: ["U", "{1, 2, 3, 4}", "{1, 3, 5}", "{2, 4, 6}"],
    answer: 0
  },
  {
    question: "Find the number of elements in the union of disjoint sets A and B if |A| = 6, |B| = 5.",
    options: ["11", "10", "6", "5"],
    answer: 0
  },
  {
    question: "If A ⊆ B and B ⊆ A, then which statement is true?",
    options: ["A = B", "A ∩ B = ∅", "A ∪ B = B", "A is empty"],
    answer: 0
  },
  {
    question: "If |U| = 50, |A| = 20, |B| = 30, |A ∩ B| = 10, find the number not in A or B.",
    options: ["10", "15", "20", "25"],
    answer: 0
  },
  {
    question: "Simplify (2³ × 2⁻⁴) × 2².",
    options: ["2¹", "2²", "2³", "2⁰"],
    answer: 1
  },
  {
    question: "Simplify (x²y⁻³)⁴.",
    options: ["x⁸y⁻¹²", "x⁸y¹²", "x⁶y⁻¹²", "x⁴y⁻¹²"],
    answer: 0
  },
  {
    question: "Simplify (3² × 3⁻³) ÷ 3⁻².",
    options: ["3¹", "3⁰", "3²", "3⁻¹"],
    answer: 0
  },
  {
    question: "Simplify (a³b⁻²)² × (a⁻¹b)³.",
    options: ["a³b⁻¹", "a⁵b⁻¹", "a⁴b⁻¹", "a⁶b⁻²"],
    answer: 2
  },
  {
    question: "Simplify ((2x³)⁴ × (x²y)³) ÷ (4x²y²)².",
    options: ["2³x¹⁰y³", "2⁴x¹⁰y³", "2³x¹⁰y²", "2³x⁹y³"],
    answer: 0
  },
  {
    question: "Simplify (x⁵y⁻²) ÷ (x²y³).",
    options: ["x³y⁻⁵", "x³y⁵", "x⁷y⁻⁵", "x³y⁻¹"],
    answer: 0
  },
  {
    question: "Simplify (a²b³)⁰ × (ab⁻¹)².",
    options: ["a²b⁻²", "ab⁻²", "a²b²", "a²b⁻¹"],
    answer: 0
  },
  {
    question: "Simplify (4⁰ × 2³ × 2⁻⁵)³.",
    options: ["2⁻⁶", "2⁻⁴", "2⁰", "2⁻³"],
    answer: 0
  },
  {
    question: "Simplify (x⁻²y³)⁴ ÷ (x²y⁻¹)³.",
    options: ["x⁻¹⁴y¹⁵", "x⁻¹⁴y¹⁰", "x⁻¹⁴y⁹", "x⁻¹⁴y¹²"],
    answer: 1
  },
  {
    question: "Simplify (3a²b³)² × (2a⁻¹b)³.",
    options: ["24a¹b⁹", "12a¹b⁹", "24a³b⁹", "12a³b⁶"],
    answer: 0
  },
  {
    question: "Simplify (x³y⁻²)² ÷ (x²y³).",
    options: ["x⁴y⁻⁷", "x⁴y⁵", "x⁶y⁻⁷", "x⁴y⁻¹"],
    answer: 0
  },
  {
    question: "Simplify ((2x²y³)³ × (xy²)²) ÷ (4x³y)².",
    options: ["2³x⁴y¹¹", "2³x⁴y¹²", "2³x⁶y⁸", "2⁴x⁴y¹¹"],
    answer: 0
  },
  {
    question: "Simplify (a²b⁻¹)⁴ ÷ (a³b²)².",
    options: ["a⁻²b⁻⁸", "a⁻²b⁻²", "a⁻²b⁶", "a²b⁻⁸"],
    answer: 0
  },
  {
    question: "Simplify (x⁵y⁻³)² ÷ (x³y²)³.",
    options: ["x⁻¹y⁻¹²", "x⁻¹y⁰", "x⁴y⁻⁹", "x⁴y⁻¹²"],
    answer: 0
  },
  {
    question: "Simplify (2² × 2⁻³ × 2⁴) ÷ 2².",
    options: ["2¹", "2²", "2³", "2⁰"],
    answer: 0
  },
  {
    question: "Simplify ((x³y⁴)² × (x⁻²y³)) ÷ (x⁴y²).",
    options: ["x⁰y⁹", "x⁰y⁸", "x⁰y¹⁰", "x¹y⁹"],
    answer: 0
  },
  {
    question: "Simplify (5⁻² × 5³) ÷ 5⁻¹.",
    options: ["5²", "5³", "5⁰", "5¹"],
    answer: 0
  },
  {
    question: "Simplify ((a²b⁻³)⁴ × (a⁻¹b²)³) ÷ (a³b⁻²)².",
    options: ["a²b⁻²", "a²b⁻³", "a³b⁻²", "a⁴b⁻⁵"],
    answer: 0
  },
  {
    question: "Simplify ((x⁻²y³)² × (xy⁻¹)³) ÷ x⁻¹y².",
    options: ["x⁰y⁴", "x⁰y³", "x¹y⁴", "x⁰y⁵"],
    answer: 0
  },
  {
    question: "Simplify (2³ × 2⁻² × 2⁴) ÷ 2³.",
    options: ["2²", "2³", "2⁴", "2¹"],
    answer: 3
  },
  {
    question: "Simplify (x⁴y⁻²)³ ÷ (x²y³)².",
    options: ["x⁶y⁻¹⁰", "x¹²y⁻⁴", "x⁶y⁴", "x⁸y⁻⁸"],
    answer: 0
  },
  {
    question: "Simplify ((3x²y⁻³)² × (2x⁻¹y²)³) ÷ (x²y⁻¹)².",
    options: ["72x¹y⁰", "72x¹y¹", "72x²y⁰", "36x¹y⁰"],
    answer: 0
  },
  {
    question: "Simplify (a⁻²b³)⁴ ÷ (a²b⁻¹)².",
    options: ["a⁻¹²b¹⁴", "a⁻¹²b¹⁰", "a⁻¹²b¹²", "a⁻⁸b¹⁰"],
    answer: 1
  },
  {
    question: "Simplify (x³y⁻²)⁰ × (x²y⁴)².",
    options: ["x⁴y⁸", "x⁴y⁴", "x²y⁸", "x⁴y⁸",],
    answer: 0
  },
  {
    question: "Simplify ((2x³)² × (x⁻¹y²)³) ÷ 4x²y⁴.",
    options: ["2x⁴y²", "2x⁵y²", "x⁴y²", "2x⁴y³"],
    answer: 0
  },
  {
    question: "Simplify ((x⁻²y³)³ × (x³y⁻¹)²) ÷ x²y.",
    options: ["x⁻¹y⁷", "x⁻¹y⁶", "x⁻²y⁷", "x⁻²y⁶"],
    answer: 1
  },
  {
    question: "Simplify (4⁻¹ × 2³)².",
    options: ["2⁴", "2²", "2³", "2⁰"],
    answer: 0
  },
  {
    question: "Simplify ((a²b³)³ × (a⁻¹b²)⁴) ÷ (a³b²)².",
    options: ["a³b¹²", "a³b¹¹", "a⁴b¹²", "a⁴b¹¹"],
    answer: 0
  },
  {
    question: "Simplify (x⁻³y²)⁴ ÷ (x²y⁻¹)³.",
    options: ["x⁻¹⁰y¹¹", "x⁻¹⁰y¹⁰", "x⁻⁹y¹¹", "x⁻¹⁰y⁹"],
    answer: 0
  },
  {
    question: "Simplify ((2x³y²)² × (x²y⁻¹)³) ÷ (2²x²y²).",
    options: ["2x⁷y¹", "2x⁸y¹", "2x⁷y²", "x⁷y¹"],
    answer: 0
  },
  {
    question: "Simplify ((x⁴y⁻²)³ × (x⁻¹y³)²) ÷ x³y⁻¹.",
    options: ["x⁶y⁰", "x⁸y⁰", "x⁶y¹", "x⁷y⁰"],
    answer: 0
  },
  {
    question: "Simplify (3⁻² × 3⁴) ÷ 3.",
    options: ["3⁰", "3¹", "3²", "3³"],
    answer: 1
  },
  {
    question: "Simplify ((2a³b⁻¹)² × (a⁻²b²)³) ÷ (a²b)².",
    options: ["a²b¹", "a²b²", "a¹b¹", "a²b⁰"],
    answer: 0
  },
  {
    question: "Simplify ((x³y⁻²)² × (x⁻¹y)³) ÷ (x²y⁻¹).",
    options: ["x²y⁰", "x²y¹", "x⁰y⁰", "x⁰y¹"],
    answer: 1
  },
  {
    question: "Simplify ((5x²y³)³ × (x⁻¹y²)²) ÷ 5²x³y⁴.",
    options: ["5x⁴y⁷", "5x⁵y⁷", "5x⁴y⁶", "5x⁵y⁶"],
    answer: 0
  },
  {
    question: "Simplify ((x⁴y⁻³)³ × (x⁻²y²)²) ÷ x⁵y⁻¹.",
    options: ["x³y⁻⁴", "x³y⁻³", "x⁴y⁻⁴", "x⁴y⁻³"],
    answer: 1
  },
  {
    question: "Simplify ((2x³)³ × (x⁻¹y²)⁴) ÷ 8x⁴y³.",
    options: ["2x⁵y⁵", "2x⁵y⁶", "x⁵y⁵", "x⁵y⁶"],
    answer: 0
  },
  {
    question: "Simplify ((x⁻²y³)⁴ × (x³y⁻¹)²) ÷ x²y⁴.",
    options: ["x⁰y⁶", "x⁰y⁷", "x⁻¹y⁶", "x⁻¹y⁷"],
    answer: 0
  },
  {
    question: "Simplify ((3x²y³)² × (x⁻¹y²)³) ÷ 9x²y⁴.",
    options: ["x¹y⁵", "x¹y⁶", "x²y⁵", "x²y⁶"],
    answer: 0
  },
  {
    question: "Simplify ((a²b³c⁴)² × (a⁻¹b²c³)³) ÷ (a²b⁴c²)².",
    options: ["a³b⁵c¹³", "a³b⁵c¹²", "a³b⁶c¹³", "a³b⁶c¹²"],
    answer: 0
  },
  {
    question: "Simplify ((x³y⁻²)³ × (x⁻²y)²) ÷ (x⁴y⁻¹).",
    options: ["x¹y⁻³", "x¹y⁻²", "x⁰y⁻³", "x⁰y⁻²"],
    answer: 0
  },
  {
    question: "Simplify ((2a³b²)³ × (a²b⁻¹)²) ÷ 4a⁴b³.",
    options: ["2a⁵b³", "2a⁷b³", "2a⁵b²", "2a⁷b²"],
    answer: 1
  },
  
  //Logarithm questions 
  
  {
    question: "Simplify log₁₀(1000).",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "If logₐ 81 = 4, find a.",
    options: ["3", "4", "9", "2"],
    answer: 2
  },
  {
    question: "Simplify log₂ 8 + log₂ 4.",
    options: ["4", "5", "6", "3"],
    answer: 1
  },
  {
    question: "If log x = 2, find the value of x.",
    options: ["10", "100", "1000", "20"],
    answer: 1
  },
  {
    question: "Simplify log₃ 27 ÷ log₃ 3.",
    options: ["2", "3", "4", "1"],
    answer: 1
  },
  {
    question: "Solve for x: log(x²) = 4.",
    options: ["10", "100", "1000", "20"],
    answer: 1
  },
  {
    question: "If log₅ 25 = x, find x.",
    options: ["1", "2", "3", "5"],
    answer: 1
  },
  {
    question: "Simplify log₁₀ 50 + log₁₀ 2.",
    options: ["log₁₀ 52", "log₁₀ 100", "log₁₀ 25", "log₁₀ 48"],
    answer: 1
  },
  {
    question: "If log₂ x = 5, find x.",
    options: ["25", "32", "16", "10"],
    answer: 1
  },
  {
    question: "Simplify logₐ(a⁷).",
    options: ["7a", "a⁷", "7", "1"],
    answer: 2
  },
  {
    question: "Solve: log₁₀(x) + log₁₀(10) = 3.",
    options: ["10", "100", "1", "90"],
    answer: 1
  },
  {
    question: "Simplify log₄ 16 − log₄ 2.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "If log₁₀ 2 = 0.301, find log₁₀ 8.",
    options: ["0.903", "0.602", "0.301", "1.204"],
    answer: 0
  },
  {
    question: "Solve for x: log₅ x = 3.",
    options: ["15", "125", "25", "5"],
    answer: 1
  },
  {
    question: "Simplify log₁₀(100 ÷ 10).",
    options: ["1", "2", "3", "0"],
    answer: 0
  },
  {
    question: "Simplify log₃ 9 × log₃ 3.",
    options: ["2", "3", "4", "1"],
    answer: 0
  },
  {
    question: "If log₁₀ x = 2.5, find x.",
    options: ["250", "100", "316.2", "200"],
    answer: 2
  },
  {
    question: "Simplify log₇ 49 + log₇ 7.",
    options: ["2", "3", "4", "1"],
    answer: 1
  },
  {
    question: "Solve: log₄ x² = 3.",
    options: ["2", "8", "4", "16"],
    answer: 3
  },
  {
    question: "If log₁₀ 5 ≈ 0.699, find log₁₀ 25.",
    options: ["1.398", "0.699", "2", "1.301"],
    answer: 0
  },
  {
    question: "Simplify log₆ 36 ÷ log₆ 6.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "Simplify log(x³y²).",
    options: ["3 log x + 2 log y", "log x + log y", "3 log(xy²)", "3 log x log y²"],
    answer: 0
  },
  {
    question: "Simplify log₁₀ 0.01.",
    options: ["-2", "2", "-1", "1"],
    answer: 0
  },
  {
    question: "If log₂ 8 = x, find x.",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "Solve for x: log₃(x) − log₃ 3 = 2.",
    options: ["9", "27", "3", "6"],
    answer: 1
  },
  {
    question: "Simplify log₁₀(50 × 2).",
    options: ["log₁₀ 52", "log₁₀ 100", "log₁₀ 48", "log₁₀ 25"],
    answer: 1
  },
  {
    question: "Simplify log₅ 125 − log₅ 5.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "If log₁₀ 7 ≈ 0.845, find log₁₀ 49.",
    options: ["1.69", "0.845", "2", "1.7"],
    answer: 0
  },
  {
    question: "Simplify log₃ 27 ÷ log₃ 9.",
    options: ["1", "1.5", "2", "3"],
    answer: 1
  },
  {
    question: "Solve: log₁₀ x + log₁₀ 4 = 2.",
    options: ["10", "25", "50", "100"],
    answer: 1
  },
  {
    question: "Simplify log₁₀ 5² × log₁₀ 5.",
    options: ["3 log₁₀ 5", "log₁₀ 25", "2 log₁₀ 5", "log₁₀ 5"],
    answer: 0
  },
  {
    question: "Solve for x: log₂(x − 1) = 3.",
    options: ["7", "8", "9", "4"],
    answer: 1
  },
  {
    question: "Simplify log₁₀(100 × 1000).",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "If log₄ x = 3, find x.",
    options: ["16", "64", "32", "8"],
    answer: 1
  },
  {
    question: "Simplify log₂ 32 − log₂ 8.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "Solve: log₁₀(x²) = 6.",
    options: ["1000", "100", "10000", "10"],
    answer: 2
  },
  {
    question: "Simplify log₁₀ 1 ÷ log₁₀ 10.",
    options: ["0", "1", "-1", "10"],
    answer: 0
  },
  {
    question: "Simplify log(xy³) − log y.",
    options: ["log x + 2 log y", "log x + 3 log y", "log x − 2 log y", "log x + log y"],
    answer: 0
  },
  {
    question: "If log₂ 3 ≈ 1.585, find log₂ 9.",
    options: ["3.17", "3.0", "2.585", "2"],
    answer: 0
  },
  {
    question: "Simplify log₁₀(100) + log₁₀ 1000.",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "Solve for x: log₅ x + log₅ 25 = 3.",
    options: ["5", "25", "125", "1250"],
    answer: 2
  },
  {
    question: "Simplify log₆ 36 + log₆ 6.",
    options: ["3", "4", "5", "2"],
    answer: 2
  },
  {
    question: "If log₁₀ 2 ≈ 0.301, find log₁₀ 16.",
    options: ["1.204", "1", "1.5", "2"],
    answer: 0
  },
  {
    question: "Simplify log₁₀(x²y³).",
    options: ["2 log₁₀ x + 3 log₁₀ y", "log₁₀ x + log₁₀ y", "2 log₁₀(xy³)", "3 log₁₀ x + 2 log₁₀ y"],
    answer: 0
  },
  {
    question: "Solve: log₃(x) = 4.",
    options: ["27", "64", "81", "16"],
    answer: 2
  },
  {
    question: "Simplify log₁₀(1000 ÷ 10).",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "Simplify log₂ 16 × log₂ 2.",
    options: ["4", "2", "8", "16"],
    answer: 0
  },
  {
    question: "If log₁₀ 9 ≈ 0.954, find log₁₀ 81.",
    options: ["1.908", "0.954", "1.9", "1.8"],
    answer: 0
  },
  {
    question: "Simplify log(x³y⁴) − log y².",
    options: ["3 log x + 2 log y", "3 log x + 4 log y", "3 log x + log y", "3 log x + 6 log y"],
    answer: 0
  },
  {
    question: "If ln x = 3, find x.",
    options: ["3", "e³", "ln 3", "e"],
    answer: 1
  },
  {
    question: "Simplify ln(e⁵).",
    options: ["5", "e⁵", "1", "ln 5"],
    answer: 0
  },
  {
    question: "Solve: log₄ x + log₄ 16 = 5.",
    options: ["32", "64", "48", "16"],
    answer: 1
  },
  {
    question: "If log₁₀ x = 2.7, find x.",
    options: ["500", "501", "502", "503"],
    answer: 0
  },
  {
    question: "Simplify logₐ(x⁷y³).",
    options: ["7 logₐ x + 3 logₐ y", "7x + 3y", "7 log x log y³", "logₐ x⁷y³"],
    answer: 0
  },
  {
    question: "Solve for x: log₅(2x − 3) = 3.",
    options: ["64", "125", "124", "126"],
    answer: 1
  },
  {
    question: "Simplify log₃ 81 ÷ log₃ 9.",
    options: ["3/2", "2", "1", "4/3"],
    answer: 0
  },
  {
    question: "If log₂ x = 7, find x.",
    options: ["128", "127", "129", "64"],
    answer: 0
  },
  {
    question: "Simplify ln(a²b³) − ln(ab).",
    options: ["ln ab²", "ln a²b²", "ln a²b³", "ln a b³"],
    answer: 0
  },
  {
    question: "Solve: log₁₀(x² − 4) = 2.",
    options: ["6", "14", "16", "12"],
    answer: 2
  },
  {
    question: "If log₄ 32 = x, find x.",
    options: ["2.5", "3", "4", "5"],
    answer: 0
  },
  {
    question: "Simplify log₅ 125 − log₅ 25.",
    options: ["1", "2", "3", "0"],
    answer: 0
  },
  {
    question: "Solve for x: ln(2x) = 3.",
    options: ["e³/2", "3/2", "2e³", "e³"],
    answer: 0
  },
  {
    question: "Simplify log₁₀ 0.001.",
    options: ["-3", "3", "-2", "2"],
    answer: 0
  },
  {
    question: "Solve: log₇(x − 1) + log₇(x + 1) = 2.",
    options: ["7", "8", "6", "9"],
    answer: 0
  },
  {
    question: "If ln x − ln 2 = 3, find x.",
    options: ["2e³", "e³", "2 ln 3", "6"],
    answer: 0
  },
  {
    question: "Simplify log₂ 64 × log₂ 2.",
    options: ["6", "64", "8", "2"],
    answer: 0
  },
  {
    question: "Solve for x: log₃(x + 4) − log₃ 2 = 3.",
    options: ["50", "52", "54", "48"],
    answer: 1
  },
  {
    question: "If log₁₀ x = 1/2, find x.",
    options: ["5", "√10", "10", "0.5"],
    answer: 1
  },
  {
    question: "Simplify ln e⁵ − ln e².",
    options: ["3", "5", "2", "7"],
    answer: 0
  },
  {
    question: "Solve: log₂(x²) − log₂ 8 = 3.",
    options: ["16", "32", "64", "8"],
    answer: 1
  },
  {
    question: "If log₁₀ 3 ≈ 0.4771, find log₁₀ 27.",
    options: ["1.4313", "1.477", "1.5", "1.43"],
    answer: 0
  },
  {
    question: "Simplify log₅(125x²).",
    options: ["3 + 2 log₅ x", "5 + log₅ x²", "3 log₅ x²", "2 log₅ x + 125"],
    answer: 0
  },
  {
    question: "Solve: ln(x − 1) = 2.",
    options: ["e² + 1", "e² − 1", "2e − 1", "e²"],
    answer: 1
  },
  {
    question: "If log₃ x = 4/2, find x.",
    options: ["9", "16", "81", "8"],
    answer: 0
  },
  {
    question: "Simplify log₁₀(50) + log₁₀(20).",
    options: ["log₁₀ 1000", "log₁₀ 70", "log₁₀ 50 × 20", "log₁₀ 100"],
    answer: 0
  },
  {
    question: "Solve for x: log₁₀(x + 5) = 2.",
    options: ["90", "95", "100", "105"],
    answer: 1
  },
  {
    question: "Simplify log₄ 8 × log₄ 2.",
    options: ["3/2", "2", "1", "1/2"],
    answer: 0
  },
  {
    question: "If ln 5 ≈ 1.609, find ln 25.",
    options: ["3.218", "1.609", "2", "4.218"],
    answer: 0
  },
  {
    question: "Simplify ln(a²b⁵) − ln(ab²).",
    options: ["ln a b³", "ln a² b³", "ln a² b⁷", "ln a b²"],
    answer: 1
  },
  {
    question: "Solve: log₆(x² − 1) = 2.",
    options: ["7", "35", "37", "36"],
    answer: 3
  },
  {
    question: "If log₂ x + log₂(x − 2) = 3, find x.",
    options: ["4", "6", "8", "5"],
    answer: 1
  },
  {
    question: "Simplify log₁₀ 0.1 × log₁₀ 1000.",
    options: ["-1", "1", "0", "2"],
    answer: 2
  },
  {
    question: "Solve: ln(x²) − ln 4 = 3.",
    options: ["4e³", "2e³", "e³", "8e³"],
    answer: 1
  },
  {
    question: "If log₇ 49 = x, find x.",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "Simplify log₁₀(200 ÷ 2).",
    options: ["1", "2", "2.5", "3"],
    answer: 3
  },
  {
    question: "Solve: log₂(x + 3) = 5.",
    options: ["29", "32", "28", "31"],
    answer: 1
  },
  {
    question: "Simplify ln(xy²) + ln(x²y).",
    options: ["3 ln x + 3 ln y", "3 ln xy", "ln x + ln y", "2 ln x + 2 ln y"],
    answer: 0
  },
  {
    question: "Solve for x: log₁₀(x − 2) + log₁₀(x + 2) = 2.",
    options: ["6", "10", "8", "12"],
    answer: 3
  },
  {
    question: "If ln 2 ≈ 0.693, find ln 16.",
    options: ["2.772", "2.718", "2.8", "2.75"],
    answer: 0
  },
  {
    question: "Simplify log₃ 9³ ÷ log₃ 3.",
    options: ["6", "5", "4", "3"],
    answer: 0
  },
  {
    question: "Solve: ln(3x) − ln 2 = 4.",
    options: ["e⁴/3", "2e⁴/3", "e⁴", "3e⁴/2"],
    answer: 0
  },
  {
    question: "Simplify log₁₀(x⁵y²) − log₁₀(x²y).",
    options: ["3 log x + log y", "5 log x + 2 log y", "2 log x + log y", "log x + log y"],
    answer: 0
  },
  {
    question: "Solve for x: log₄(x − 1) + log₄(x + 1) = 3.",
    options: ["7", "8", "9", "6"],
    answer: 0
  },
  {
    question: "Simplify ln(e²x³) − ln(x³).",
    options: ["2", "ln e²", "3 ln x", "2 + 3 ln x"],
    answer: 0
  },
  {
    question: "If log₁₀ 11 ≈ 1.041, find log₁₀ 121.",
    options: ["2.082", "2.041", "2", "1.041"],
    answer: 0
  },
  {
    question: "Simplify log₂(x²y³z).",
    options: ["2 log x + 3 log y + log z", "log x + log y + log z", "2 log x + 2 log y + log z", "2 log x + 3 log y"],
    answer: 0
  },
  {
    question: "Solve: log₅(x² − x − 6) = 2.",
    options: ["6", "11", "12", "10"],
    answer: 2
  },
  
  //surds questions
  {
    question: "Simplify √50.",
    options: ["5√2", "10√2", "25√2", "2√5"],
    answer: 0
  },
  {
    question: "Simplify √72 + √32.",
    options: ["8√2", "10√2", "12√2", "14√2"],
    answer: 1
  },
  {
    question: "Rationalize the denominator: 5/√2.",
    options: ["5√2/2", "√2/5", "5/2√2", "2√5"],
    answer: 0
  },
  {
    question: "Simplify √18 × √8.",
    options: ["12", "24", "36", "16"],
    answer: 0
  },
  {
    question: "Simplify √50 − √8.",
    options: ["3√2", "√42", "√58", "√10"],
    answer: 0
  },
  {
    question: "Simplify (√3 + √2)².",
    options: ["5 + 2√6", "3 + 2√6", "5 + √6", "5 + 4√6"],
    answer: 0
  },
  {
    question: "Simplify √12 ÷ √3.",
    options: ["2", "3", "4", "√4"],
    answer: 0
  },
  {
    question: "Rationalize the denominator: 7/(√5 − 2).",
    options: ["(7√5 + 14)/1", "(7√5 + 14)/1", "(7√5 + 14)/1", "(7√5 + 14)/1"],
    answer: 0
  },
  {
    question: "Simplify √98 − √32.",
    options: ["3√2", "2√2", "4√2", "√66"],
    answer: 0
  },
  {
    question: "Simplify (√5 − √2)(√5 + √2).",
    options: ["3", "7", "√7", "√3"],
    answer: 0
  },
  {
    question: "Simplify √32 + √18.",
    options: ["7√2", "8√2", "9√2", "10√2"],
    answer: 1
  },
  {
    question: "Simplify √50 × √2.",
    options: ["10", "12", "14", "8"],
    answer: 0
  },
  {
    question: "Rationalize the denominator: 3/(√3 + 1).",
    options: ["(3√3 − 3)/2", "3(√3 − 1)/2", "3/√2", "3√3/2"],
    answer: 0
  },
  {
    question: "Simplify √45 ÷ √5.",
    options: ["3", "4", "5", "√9"],
    answer: 0
  },
  {
    question: "Simplify √20 + 2√5.",
    options: ["4√5", "6√5", "2√5", "3√5"],
    answer: 0
  },
  {
    question: "Simplify (√7 + √3)².",
    options: ["10 + 2√21", "7 + 2√21", "10 + √21", "7 + √21"],
    answer: 0
  },
  {
    question: "Simplify √75 − √12.",
    options: ["3√3", "5√3", "√63", "√87"],
    answer: 0
  },
  {
    question: "Simplify (√2 + √5)(√2 − √5).",
    options: ["-3", "3", "-7", "7"],
    answer: 0
  },
  {
    question: "Simplify √50 ÷ √2.",
    options: ["5", "√25", "√50", "√48"],
    answer: 0
  },
  {
    question: "Simplify √8 × √18.",
    options: ["12", "14", "16", "24"],
    answer: 0
  },
  {
    question: "Rationalize the denominator: 2/(√7 − √3).",
    options: ["(2√7 + 2√3)/4", "(2√7 + 2√3)/4", "(2√7 + 2√3)/4", "(√7 + √3)/2"],
    answer: 0
  },
  {
    question: "Simplify √98 + √50.",
    options: ["7√2 + 5√2", "√148", "√148", "12√2"],
    answer: 0
  },
  {
    question: "Simplify (√6 + √2)².",
    options: ["8 + 2√12", "8 + 4√3", "6 + 2√12", "6 + 4√3"],
    answer: 1
  },
  {
    question: "Simplify √32 − √18.",
    options: ["2√2", "4√2", "√14", "√20"],
    answer: 1
  },
  {
    question: "Simplify √12 × √3.",
    options: ["6", "5", "3", "√36"],
    answer: 0
  },
  {
    question: "Simplify (√10 + √5)(√10 − √5).",
    options: ["5", "10", "15", "√5"],
    answer: 1
  },
  {
    question: "Simplify √45 + √20.",
    options: ["5√2 + 3√5", "3√5 + 2√5", "3√5 + 2√2", "5√2 + 2√5"],
    answer: 3
  },
  {
    question: "Rationalize: 5/(√2 + √3).",
    options: ["(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1", "(5√2 − 5√3)/-1"],
    answer: 0
  },
  {
    question: "Simplify √8 + √18 − √2.",
    options: ["5√2", "6√2", "4√2", "7√2"],
    answer: 0
  },
  {
    question: "Simplify √50 × √8.",
    options: ["20", "16", "24", "18"],
    answer: 0
  },
  {
    question: "Simplify (√3 + √7)² − (√3 − √7)².",
    options: ["28", "20", "14", "10"],
    answer: 0
  },
  {
    question: "Simplify √32 + √50 − √18.",
    options: ["10√2", "8√2", "12√2", "9√2"],
    answer: 0
  },
  {
    question: "Simplify √98 ÷ √2.",
    options: ["7", "5", "6", "9"],
    answer: 0
  },
  {
    question: "Simplify √45 − √5.",
    options: ["√5(3 − 1)", "√5(3 − 2)", "2√5", "√5"],
    answer: 0
  },
  {
    question: "Simplify √72 × √2.",
    options: ["12", "14", "10", "8"],
    answer: 0
  },
  {
    question: "Simplify (√6 + √3)(√6 − √3).",
    options: ["3", "6", "9", "1"],
    answer: 1
  },
  {
    question: "Rationalize the denominator: 1/(√5 + √2).",
    options: ["(√5 − √2)/3", "(√5 − √2)/7", "(√5 − √2)/1", "(√5 − √2)/2"],
    answer: 0
  },
  {
    question: "Simplify √50 − √8 + √18.",
    options: ["7√2", "6√2", "5√2", "8√2"],
    answer: 1
  },
  {
    question: "Simplify √128 ÷ √2.",
    options: ["8", "16", "6", "4"],
    answer: 0
  },
  {
    question: "Simplify (√10 + √2)².",
    options: ["12 + 4√5", "12 + 2√20", "12 + 4√10", "12 + 2√5"],
    answer: 2
  },
  {
    question: "Simplify √200 − √50.",
    options: ["5√2", "10√2", "7√2", "15√2"],
    answer: 1
  },
  {
    question: "Simplify √72 + √50 − √8.",
    options: ["12√2", "10√2", "14√2", "8√2"],
    answer: 0
  },
  {
    question: "Simplify (√5 + √3)(√5 − √3).",
    options: ["2", "5", "8", "1"],
    answer: 1
  },
  {
    question: "Simplify √32 + √18 − √8.",
    options: ["8", "6√2", "10", "7√2"],
    answer: 1
  },
  {
    question: "Simplify √98 + √50 − √32.",
    options: ["10√2", "12√2", "8√2", "9√2"],
    answer: 0
  },
  {
    question: "Rationalize the denominator: 2/(√3 + √5).",
    options: ["(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2", "(2√3 − 2√5)/-2"],
    answer: 0
  },
  
  //ratio, proportion and averages
  
  {
    question: "The ratio of boys to girls in a class is 3:4. If there are 21 boys, how many girls are there?",
    options: ["28", "24", "30", "35"],
    answer: 0
  },
  {
    question: "A recipe requires sugar and flour in the ratio 2:5. If 10 kg of flour is used, how much sugar is needed?",
    options: ["4 kg", "5 kg", "3 kg", "6 kg"],
    answer: 0
  },
  {
    question: "The ages of A and B are in the ratio 5:7. If A is 25 years old, find B's age.",
    options: ["35", "30", "28", "40"],
    answer: 0
  },
  {
    question: "Divide ₦1200 among X, Y, and Z in the ratio 2:3:5.",
    options: ["₦240, ₦360, ₦600", "₦200, ₦300, ₦700", "₦240, ₦380, ₦580", "₦250, ₦350, ₦600"],
    answer: 0
  },
  {
    question: "If 5 pencils cost ₦150, find the cost of 8 pencils.",
    options: ["₦240", "₦200", "₦250", "₦220"],
    answer: 0
  },
  {
    question: "A sum of money is divided among 3 people in the ratio 4:5:6. If the total is ₦7500, how much does the middle person get?",
    options: ["₦2500", "₦3000", "₦2800", "₦2700"],
    answer: 1
  },
  {
    question: "The ratio of length to width of a rectangle is 5:3. If the width is 12 cm, find the length.",
    options: ["20 cm", "18 cm", "15 cm", "25 cm"],
    answer: 1
  },
  {
    question: "A and B can do a work in 12 and 8 days respectively. Working together, how long will it take them to finish the work?",
    options: ["4.8 days", "5 days", "5.5 days", "6 days"],
    answer: 0
  },
  {
    question: "The average of 5 numbers is 20. Four of the numbers are 18, 22, 24, 16. Find the fifth number.",
    options: ["20", "18", "22", "24"],
    answer: 0
  },
  {
    question: "The ratio of A's salary to B's salary is 7:5. If B earns ₦15000, what does A earn?",
    options: ["₦21000", "₦20000", "₦22000", "₦25000"],
    answer: 0
  },
  {
    question: "Three numbers are in the ratio 2:3:5. Their sum is 100. Find the largest number.",
    options: ["50", "40", "30", "45"],
    answer: 0
  },
  {
    question: "The ratio of two numbers is 4:7. If their sum is 44, find the numbers.",
    options: ["16 and 28", "18 and 26", "20 and 24", "15 and 29"],
    answer: 0
  },
  {
    question: "The average of 10 numbers is 18. If one number, 24, is removed, find the new average.",
    options: ["17.6", "17.5", "18", "17"],
    answer: 0
  },
  {
    question: "A mixture contains milk and water in the ratio 5:2. If the mixture is 14 liters, how much milk is there?",
    options: ["10 liters", "8 liters", "9 liters", "12 liters"],
    answer: 0
  },
  {
    question: "If 8 men can complete a job in 12 days, how many days will it take 6 men to complete it?",
    options: ["16 days", "14 days", "18 days", "12 days"],
    answer: 0
  },
  {
    question: "The average of five consecutive even numbers is 24. Find the numbers.",
    options: ["20, 22, 24, 26, 28", "18, 20, 22, 24, 26", "22, 24, 26, 28, 30", "24, 26, 28, 30, 32"],
    answer: 0
  },
  {
    question: "A and B share a sum of money in the ratio 3:2. If B gets ₦600, find the total sum.",
    options: ["₦1500", "₦1200", "₦1800", "₦1400"],
    answer: 1
  },
  {
    question: "The ratio of 3 numbers is 2:3:4. If the largest is 40, find the smallest.",
    options: ["20", "15", "10", "25"],
    answer: 2
  },
  {
    question: "If 5 workers earn ₦4500, how much will 8 workers earn?",
    options: ["₦7200", "₦7500", "₦7000", "₦8000"],
    answer: 0
  },
  {
    question: "The ratio of boys to girls in a school is 5:3. If there are 120 boys, find the number of girls.",
    options: ["72", "75", "80", "70"],
    answer: 0
  },
  {
    question: "The average of 6 numbers is 15. If one number, 18, is replaced by 24, find the new average.",
    options: ["16", "15.5", "16.5", "17"],
    answer: 2
  },
  {
    question: "A sum of money is divided among 4 people in the ratio 1:2:3:4. If the total is ₦10000, find the share of the second person.",
    options: ["₦2000", "₦3000", "₦2500", "₦4000"],
    answer: 1
  },
  {
    question: "The ratio of two numbers is 7:9. If the smaller number is 21, find the larger number.",
    options: ["27", "25", "28", "30"],
    answer: 0
  },
  {
    question: "If the ratio of A:B is 3:5 and B:C is 4:7, find the ratio of A:C.",
    options: ["12:35", "15:28", "12:28", "7:15"],
    answer: 0
  },
  {
    question: "The average of 8 numbers is 16. If one number, 20, is removed, find the new average.",
    options: ["15.5", "15", "16", "14.5"],
    answer: 0
  },
  {
    question: "Divide ₦900 among X, Y, Z in the ratio 2:3:4.",
    options: ["₦200, ₦300, ₦400", "₦180, ₦270, ₦450", "₦220, ₦330, ₦350", "₦200, ₦300, ₦350"],
    answer: 1
  },
  {
    question: "The ratio of ages of A and B is 5:6. If the sum of their ages is 55, find A's age.",
    options: ["25", "23", "22", "24"],
    answer: 3
  },
  {
    question: "If a:b = 3:4 and b:c = 2:5, find a:c.",
    options: ["3:10", "3:20", "6:20", "3:8"], 
    answer: 1
  },
  {
    question: "The average of 10 numbers is 25. One number is wrongly recorded as 28 instead of 18. Find the correct average.",
    options: ["24", "23.9", "24.9", "25"],
    answer: 2
  },
  {
    question: "A mixture contains water and alcohol in the ratio 3:2. If the mixture is 25 liters, find the amount of alcohol.",
    options: ["10 liters", "12 liters", "15 liters", "8 liters"],
    answer: 0
  },
  {
    question: "The ratio of two numbers is 9:11. If their sum is 200, find the numbers.",
    options: ["90 and 110", "100 and 100", "80 and 120", "85 and 115"],
    answer: 0
  },
  {
    question: "Divide ₦1500 among three people in the ratio 3:5:7.",
    options: ["₦300, ₦500, ₦700", "₦375, ₦625, ₦500", "₦360, ₦600, ₦540", "₦375, ₦625, ₦500"],
    answer: 1
  },
  {
    question: "The average of 5 numbers is 20. Four numbers are 18, 24, 16, 22. Find the fifth number.",
    options: ["20", "22", "18", "16"],
    answer: 0
  },
  {
    question: "If 12 men can complete a work in 20 days, how long will 15 men take?",
    options: ["16 days", "18 days", "15 days", "14 days"],
    answer: 0
  },
  {
    question: "The ratio of two numbers is 7:9. Their sum is 64. Find the numbers.",
    options: ["28 and 36", "30 and 34", "32 and 32", "27 and 37"],
    answer: 0
  },
  {
    question: "A sum of money is shared among 5 people in the ratio 2:3:4:5:6. If the total is ₦1000, find the share of the third person.",
    options: ["₦160", "₦200", "₦180", "₦150"],
    answer: 0
  },
  {
    question: "The average of 9 numbers is 12. One number is replaced by 18. Find the new average.",
    options: ["12.7", "13", "12.5", "12.8"],
    answer: 0
  },
  {
    question: "If a:b:c = 2:3:4 and their sum is 72, find b.",
    options: ["24", "20", "18", "22"],
    answer: 0
  },
  {
    question: "A mixture contains milk and water in the ratio 7:3. If the total is 50 liters, find the amount of milk.",
    options: ["35 liters", "30 liters", "25 liters", "40 liters"],
    answer: 0
  },
  {
    question: "If 5 men can do a work in 15 days, 3 men will do it in how many days?",
    options: ["25 days", "20 days", "30 days", "15 days"],
    answer: 0
  },
  {
    question: "The ratio of three numbers is 4:5:6. If the smallest is 12, find the largest.",
    options: ["18", "20", "16", "15"],
    answer: 0
  },
  {
    question: "Divide ₦1200 among A, B, C in the ratio 3:4:5.",
    options: ["₦300, ₦400, ₦500", "₦360, ₦400, ₦440", "₦350, ₦400, ₦450", "₦300, ₦360, ₦540"],
    answer: 0
  },
  {
    question: "The average of 8 numbers is 15. If one number 20 is removed, find the new average.",
    options: ["14.5", "14", "15", "15.5"],
    answer: 0
  },
  
  
  //linear inequality 
  
  {
    question: "Solve for x: 2x + 5 > 9",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve: 5 - 3x ≤ 8",
    options: ["x ≥ -1", "x ≤ -1", "x ≥ 1", "x ≤ 1"],
    answer: 3
  },
  {
    question: "If 4x - 7 < 9, find x",
    options: ["x < 4", "x > 4", "x < 16", "x > 16"],
    answer: 0
  },
  {
    question: "Solve for y: 3y + 2 ≥ 11",
    options: ["y ≥ 3", "y ≥ 4", "y ≤ 3", "y ≤ 4"],
    answer: 0
  },
  {
    question: "2x - 5 < 3x + 1, find x",
    options: ["x > -6", "x < -6", "x > 6", "x < 6"],
    answer: 0
  },
  {
    question: "Solve: -2x + 7 ≥ 1",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "If 5x - 9 < 16, find x",
    options: ["x < 5", "x > 5", "x < -5", "x > -5"],
    answer: 0
  },
  {
    question: "Solve 7 - 2x > 1",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "3x + 4 ≤ 10, find x",
    options: ["x ≤ 2", "x ≥ 2", "x ≤ -2", "x ≥ -2"],
    answer: 0
  },
  {
    question: "Solve: 6 - x > 2",
    options: ["x < 4", "x > 4", "x < -4", "x > -4"],
    answer: 0
  },
  {
    question: "Solve for x: 4x + 3 ≤ 15",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 4", "x ≥ 4"],
    answer: 0
  },
  {
    question: "If -3x + 5 > 2, find x",
    options: ["x < 1", "x > 1", "x < -1", "x > -1"],
    answer: 0
  },
  {
    question: "Solve: 2x - 3 ≥ 7",
    options: ["x ≥ 5", "x ≤ 5", "x ≥ 2", "x ≤ 2"],
    answer: 0
  },
  {
    question: "Solve: x/3 + 2 < 5",
    options: ["x < 9", "x > 9", "x < 6", "x > 6"],
    answer: 0
  },
  {
    question: "Solve: 5 - 2x ≥ 1",
    options: ["x ≤ 2", "x ≥ 2", "x ≤ -2", "x ≥ -2"],
    answer: 0
  },
  {
    question: "If 7x - 4 < 17, find x",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "Solve 3x + 7 > 13",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve -5x + 9 ≤ 4",
    options: ["x ≥ 1", "x ≤ 1", "x ≥ -1", "x ≤ -1"],
    answer: 0
  },
  {
    question: "Solve: 2x - 3 ≤ 5",
    options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
    answer: 0
  },
  {
    question: "Solve 3 - x > 0",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "Solve for x: 4 - 2x < 0",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve: 5x + 6 ≥ 16",
    options: ["x ≥ 2", "x ≤ 2", "x ≥ 4", "x ≤ 4"],
    answer: 0
  },
  {
    question: "Solve: 2 - 3x ≤ -7",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
    answer: 0
  },
  {
    question: "Solve: 3x - 5 > 1",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve: 2x + 3 ≤ 11",
    options: ["x ≤ 4", "x ≥ 4", "x ≤ 5", "x ≥ 5"],
    answer: 0
  },
  {
    question: "Solve -x + 6 > 2",
    options: ["x < 4", "x > 4", "x < -4", "x > -4"],
    answer: 0
  },
  {
    question: "Solve: 7 - 3x ≤ 1",
    options: ["x ≥ 2", "x ≤ 2", "x ≥ -2", "x ≤ -2"],
    answer: 0
  },
  {
    question: "Solve 5x - 10 < 15",
    options: ["x < 5", "x > 5", "x < -5", "x > -5"],
    answer: 0
  },
  {
    question: "Solve: -2x + 7 > 3",
    options: ["x < 2", "x > 2", "x < -2", "x > -2"],
    answer: 0
  },
  {
    question: "Solve: 4x - 5 ≤ 7",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 2", "x ≥ 2"],
    answer: 0
  },
  {
    question: "Solve for x: 3x + 4 < 13",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "Solve: 5 - x ≥ 2",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: 2x - 7 > -1",
    options: ["x > 3", "x < 3", "x > -3", "x < -3"],
    answer: 0
  },
  {
    question: "Solve 6 - 4x ≤ 2",
    options: ["x ≥ 1", "x ≤ 1", "x ≥ -1", "x ≤ -1"],
    answer: 0
  },
  {
    question: "Solve: 3x + 5 > 11",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve: -x + 8 ≤ 3",
    options: ["x ≥ 5", "x ≤ 5", "x ≥ -5", "x ≤ -5"],
    answer: 0
  },
  {
    question: "Solve: 2x + 7 ≥ 13",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ 4", "x ≤ 4"],
    answer: 0
  },
  {
    question: "Solve 5x - 3 ≤ 12",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 2", "x ≥ 2"],
    answer: 0
  },
  {
    question: "Solve: -3x + 9 > 0",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "Solve: 4x + 1 < 9",
    options: ["x < 2", "x > 2", "x < -2", "x > -2"],
    answer: 0
  },
  {
    question: "Solve for x: 6 - x ≥ 3",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: 3x - 4 ≤ 5",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 4", "x ≥ 4"],
    answer: 0
  },
  {
    question: "Solve: -2x + 6 < 0",
    options: ["x > 3", "x < 3", "x > -3", "x < -3"],
    answer: 0
  },
  {
    question: "Solve: 5x + 2 > 17",
    options: ["x > 3", "x < 3", "x > -3", "x < -3"],
    answer: 0
  },
  {
    question: "Solve for x: 7 - x ≤ 4",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
    answer: 0
  },
  {
    question: "Solve 3x + 2 ≥ 11",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ 4", "x ≤ 4"],
    answer: 0
  },
  {
    question: "Solve: -4x + 8 > 0",
    options: ["x < 2", "x > 2", "x < -2", "x > -2"],
    answer: 0
  },
  {
    question: "Solve for x: 3x - 7 > 2x + 5",
    options: ["x > 12", "x < 12", "x > -12", "x < -12"],
    answer: 0
  },
  {
    question: "Solve: -2x + 5 ≤ 3x - 10",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
    answer: 1
  },
  {
    question: "Solve for y: 5 - 2y < 3y + 10",
    options: ["y > -1", "y < -1", "y > 3", "y < 3"],
    answer: 0
  },
  {
    question: "Solve: 7x + 3 ≤ 2x + 18",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ 5", "x ≥ 5"],
    answer: 0
  },
  {
    question: "If -3x + 4 > 10, find x",
    options: ["x < -2", "x > -2", "x < 2", "x > 2"],
    answer: 0
  },
  {
    question: "Solve for x: 4(x - 3) ≥ 2x + 6",
    options: ["x ≥ 9", "x ≤ 9", "x ≥ 3", "x ≤ 3"],
    answer: 0
  },
  {
    question: "Solve: -5x + 2 < 3 - 2x",
    options: ["x > -1/3", "x < -1/3", "x > 1/3", "x < 1/3"],
    answer: 1
  },
  {
    question: "Solve: 1/2 x - 3 ≥ 1/4 x + 5",
    options: ["x ≥ 32", "x ≤ 32", "x ≥ -32", "x ≤ -32"],
    answer: 0
  },
  {
    question: "Solve: 3x/4 - 5 < x/2 + 2",
    options: ["x < 28", "x > 28", "x < -28", "x > -28"],
    answer: 0
  },
  {
    question: "Solve for x: 2(3x - 5) ≤ 4x + 10",
    options: ["x ≤ 10", "x ≥ 10", "x ≤ -10", "x ≥ -10"],
    answer: 0
  },
  {
    question: "Solve: -3(x - 2) + 5 > 2x - 1",
    options: ["x < 2", "x > 2", "x < 1", "x > 1"],
    answer: 0
  },
  {
    question: "If 2x + 5 < 3x - 7, find x",
    options: ["x > 12", "x < 12", "x > -12", "x < -12"],
    answer: 1
  },
  {
    question: "Solve: 5 - 3x > 2 - 2x",
    options: ["x < -3", "x > -3", "x < 3", "x > 3"],
    answer: 0
  },
  {
    question: "Solve: 2(x - 1) < 3(x + 2) - 5",
    options: ["x > -3", "x < -3", "x > 3", "x < 3"],
    answer: 1
  },
  {
    question: "Solve: -4x + 7 ≥ 3x - 14",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: 3 - 2(x + 1) < 5x - 7",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 0
  },
  {
    question: "Solve: (x - 3)/2 > (2x + 1)/3",
    options: ["x < 11", "x > 11", "x < -11", "x > -11"],
    answer: 1
  },
  {
    question: "Solve for x: 5x - 2 ≤ 2x + 7",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: -3x + 6 < 2x - 4",
    options: ["x > 2", "x < 2", "x > -2", "x < -2"],
    answer: 1
  },
  {
    question: "Solve: 4 - 5x > 3x + 8",
    options: ["x < -1/2", "x > -1/2", "x < 1/2", "x > 1/2"],
    answer: 0
  },
  {
    question: "Solve: 2/3 x - 5 ≤ x/2 + 3",
    options: ["x ≤ 48", "x ≥ 48", "x ≤ -48", "x ≥ -48"],
    answer: 0
  },
  {
    question: "Solve: -7x + 3 ≥ 4x - 25",
    options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
    answer: 0
  },
  {
    question: "Solve for x: 3(x - 1) < 2x + 5",
    options: ["x < 8", "x > 8", "x < -8", "x > -8"],
    answer: 0
  },
  {
    question: "Solve: 2x/5 + 3 ≥ x/2 + 5",
    options: ["x ≥ 30/9", "x ≤ 30/9", "x ≥ -30/9", "x ≤ -30/9"],
    answer: 1
  },
  {
    question: "Solve: -x/3 + 5 < 2x/3 - 1",
    options: ["x > 9", "x < 9", "x > -9", "x < -9"],
    answer: 0
  },
  {
    question: "Solve: 2(4 - x) ≥ 3x - 1",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: 5x - 2 < 3x + 6",
    options: ["x < 4", "x > 4", "x < -4", "x > -4"],
    answer: 0
  },
  {
    question: "Solve: 3 - x/2 ≥ 2x - 5",
    options: ["x ≤ 4", "x ≥ 4", "x ≤ -4", "x ≥ -4"],
    answer: 0
  },
  {
    question: "Solve: -2(x + 3) < 3 - x",
    options: ["x < -1", "x > -1", "x < 1", "x > 1"],
    answer: 0
  },
  {
    question: "Solve: 4x/3 - 5 > x/2 + 2",
    options: ["x > 10.5", "x < 10.5", "x > -10.5", "x < -10.5"],
    answer: 0
  },
  {
    question: "Solve for x: -3x + 8 ≤ 2x - 7",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
    answer: 1
  },
  {
    question: "Solve: (x - 5)/2 + 3 < x/3 + 7",
    options: ["x < 23", "x > 23", "x < -23", "x > -23"],
    answer: 0
  },
  {
    question: "Solve: -4x + 9 > 5x - 12",
    options: ["x < 3", "x > 3", "x < -3", "x > -3"],
    answer: 0
  },
  {
    question: "Solve: 3x - 7 ≤ 2x + 5",
    options: ["x ≤ 12", "x ≥ 12", "x ≤ -12", "x ≥ -12"],
    answer: 0
  },
  {
    question: "Solve: 5 - 2x > 3x - 5",
    options: ["x < 2", "x > 2", "x < -2", "x > -2"],
    answer: 0
  },
  {
    question: "Solve for x: 4(x - 2) + 3 ≤ 2x + 11",
    options: ["x ≤ 5", "x ≥ 5", "x ≤ -5", "x ≥ -5"],
    answer: 0
  },
  {
    question: "Solve: -x + 8 ≥ 2x - 1",
    options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
    answer: 0
  },
  {
    question: "Solve: 3x/2 - 4 < x/3 + 5",
    options: ["x < 18", "x > 18", "x < -18", "x > -18"],
    answer: 0
  },
  {
    question: "Solve: 2(x + 3) ≥ 5x - 7",
    options: ["x ≤ 13/3", "x ≥ 13/3", "x ≤ -13/3", "x ≥ -13/3"],
    answer: 0
  },
  {
    question: "Solve: -5x + 10 < 2 - 3x",
    options: ["x > 4", "x < 4", "x > -4", "x < -4"],
    answer: 1
  },
  {
    question: "Solve: 3 - 2(x - 1) ≥ x + 2",
    options: ["x ≤ -1", "x ≥ -1", "x ≤ 1", "x ≥ 1"],
    answer: 0
  },
  {
    question: "Solve for x: (x - 4)/3 + 2 < (2x + 1)/4",
    options: ["x < 15", "x > 15", "x < -15", "x > -15"],
    answer: 0
  },
  {
    question: "Solve: -x/2 + 7 ≥ 3x/4 - 5",
    options: ["x ≤ 24/5", "x ≥ 24/5", "x ≤ -24/5", "x ≥ -24/5"],
    answer: 0
  },
  {
    question: "Solve: 4(x - 1)/3 + 2 < 2x + 1",
    options: ["x < 5", "x > 5", "x < -5", "x > -5"],
    answer: 0
  },
  {
    question: "Solve: -3x + 9 ≤ 2(x - 3)",
    options: ["x ≥ 3", "x ≤ 3", "x ≥ -3", "x ≤ -3"],
    answer: 1
  },
  
  
  //numbers and basic arithmetic operations 
  
  {
    question: "Find the sum: 235 + 487 + 128",
    options: ["850", "850", "860", "870"],
    answer: 2
  },
  {
    question: "Find the difference: 1200 - 875",
    options: ["325", "325", "315", "345"],
    answer: 0
  },
  {
    question: "Multiply: 45 × 23",
    options: ["1035", "1025", "1040", "1050"],
    answer: 0
  },
  {
    question: "Divide: 144 ÷ 12",
    options: ["10", "12", "11", "14"],
    answer: 1
  },
  {
    question: "Find the remainder when 245 is divided by 7",
    options: ["0", "1", "2", "3"],
    answer: 0
  },
  {
    question: "Express 1011₂ in decimal",
    options: ["11", "12", "13", "10"],
    answer: 0
  },
  {
    question: "Express 1101₂ in decimal",
    options: ["13", "12", "15", "14"],
    answer: 0
  },
  {
    question: "Express 7₁₀ in binary",
    options: ["111", "101", "110", "100"],
    answer: 0
  },
  {
    question: "Express 13₁₀ in binary",
    options: ["1101", "1011", "1110", "1111"],
    answer: 0
  },
  {
    question: "Find the product: 0.25 × 0.4",
    options: ["0.1", "0.01", "0.2", "1"],
    answer: 0
  },
  {
    question: "Simplify: 3/4 + 2/5",
    options: ["23/20", "19/20", "17/20", "21/20"],
    answer: 3
  },
  {
    question: "Simplify: 7/8 − 3/4",
    options: ["1/8", "2/8", "3/8", "4/8"],
    answer: 1
  },
  {
    question: "Find LCM of 12 and 18",
    options: ["36", "54", "72", "48"],
    answer: 0
  },
  {
    question: "Express 255₁₀ in hexadecimal",
    options: ["FF", "FE", "AA", "F0"],
    answer: 0
  },
  {
    question: "Express 3A₁₆ in decimal",
    options: ["58", "59", "60", "61"],
    answer: 0
  },
  {
    question: "Add 1011₂ + 1101₂",
    options: ["11000₂", "10110₂", "10000₂", "11110₂"],
    answer: 3
  },
  {
    question: "Subtract 1010₂ − 110₂",
    options: ["1000₂", "100₁₀", "111₂", "1001₂"],
    answer: 0
  },
  {
    question: "Multiply: 101₂ × 11₂",
    options: ["1111₂", "1011₂", "1110₂", "1101₂"],
    answer: 2
  },
  {
    question: "Divide: 1100₂ ÷ 10₂",
    options: ["110₂", "100₂", "101₂", "111₂"],
    answer: 1
  },
  {
    question: "Simplify: 5 × (7 − 3) + 6 ÷ 2",
    options: ["26", "23", "28", "24"],
    answer: 0
  },
  {
    question: "Simplify: 12 ÷ (2 + 4) × 3",
    options: ["6", "5", "4", "3"],
    answer: 0
  },
  {
    question: "Find the square of 15",
    options: ["225", "215", "205", "235"],
    answer: 0
  },
  {
    question: "Find the cube of 4",
    options: ["64", "48", "16", "32"],
    answer: 0
  },
  {
    question: "Find √121",
    options: ["11", "12", "10", "13"],
    answer: 0
  },
  {
    question: "Find √196",
    options: ["14", "13", "12", "15"],
    answer: 0
  },
  {
    question: "Simplify: (7² − 3²)",
    options: ["40", "37", "36", "34"],
    answer: 0
  },
  {
    question: "Simplify: (5³ − 4³)",
    options: ["61", "49", "64", "81"],
    answer: 0
  },
  {
    question: "Convert 100₈ to decimal",
    options: ["64", "72", "80", "100"],
    answer: 0
  },
  {
    question: "Convert 77₈ to decimal",
    options: ["63", "61", "57", "65"],
    answer: 0
  },
  {
    question: "Add: 45 + 67 + 89",
    options: ["201", "211", "201", "201"],
    answer: 1
  },
  {
    question: "Subtract: 765 − 487",
    options: ["278", "288", "268", "298"],
    answer: 0
  },
  {
    question: "Multiply: 25 × 48",
    options: ["1200", "1150", "1250", "1300"],
    answer: 0
  },
  {
    question: "Divide: 960 ÷ 32",
    options: ["30", "28", "32", "40"],
    answer: 3
  },
  {
    question: "Find LCM of 15, 20",
    options: ["60", "45", "50", "75"],
    answer: 0
  },
  {
    question: "Find GCD of 56 and 98",
    options: ["14", "28", "7", "56"],
    answer: 1
  },
  {
    question: "Convert 1010₂ to decimal",
    options: ["10", "11", "12", "9"],
    answer: 0
  },
  {
    question: "Convert 1101₂ to decimal",
    options: ["13", "12", "14", "15"],
    answer: 0
  },
  {
    question: "Convert 15₁₀ to binary",
    options: ["1111", "1110", "1101", "1011"],
    answer: 0
  },
  {
    question: "Convert 9₁₀ to binary",
    options: ["1001", "1000", "1010", "1111"],
    answer: 0
  },
  {
    question: "Add 1010₂ + 110₁₀",
    options: ["1010₂ + 110₁₀", "1110₂", "1000₂", "1100₂"],
    answer: 3
  },
  {
    question: "Subtract 1001₂ − 101₂",
    options: ["100", "1000", "1010", "111"],
    answer: 1
  },
  {
    question: "Multiply 11₂ × 10₂",
    options: ["110₂", "101₂", "100₂", "111₂"],
    answer: 0
  },
  {
    question: "Divide 111₂ ÷ 11₂",
    options: ["11₂", "10₂", "1₂", "101₂"],
    answer: 1
  },
  {
    question: "Find the sum of first 10 natural numbers",
    options: ["55", "50", "45", "60"],
    answer: 0
  },
  {
    question: "Find the sum of first 15 odd numbers",
    options: ["225", "200", "210", "215"],
    answer: 0
  },
  {
    question: "Simplify: 2³ × 2²",
    options: ["2⁵", "2⁶", "2⁴", "2³"],
    answer: 0
  },
  {
    question: "Simplify: 5² × 5³",
    options: ["5⁵", "5⁶", "5⁴", "5³"],
    answer: 0
  },
  
  //algebraic expressions
  
  {
    question: "Simplify: 3x + 5x",
    options: ["8x", "15x", "2x", "5x"],
    answer: 0
  },
  {
    question: "Simplify: 7a - 3a + 4",
    options: ["4a + 4", "10a + 4", "4a", "7a + 4"],
    answer: 0
  },
  {
    question: "Simplify: 2x + 3y - x + 4y",
    options: ["x + 7y", "3x + 7y", "x + y", "x + 4y"],
    answer: 0
  },
  {
    question: "Simplify: 5(a + 2) - 3(a - 1)",
    options: ["2a + 13", "8a + 13", "2a + 7", "8a + 7"],
    answer: 0
  },
  {
    question: "Simplify: 3(x + 2y) - 2(x - y)",
    options: ["x + 8y", "5x + 4y", "x + 4y", "5x + 8y"],
    answer: 0
  },
  {
    question: "Simplify: 4(2a - 3) + 5(a + 1)",
    options: ["13a - 7", "8a + 2", "13a - 2", "8a - 2"],
    answer: 0
  },
  {
    question: "Simplify: 6x - 3(2x - 5)",
    options: ["15", "6x + 15", "0", "6x - 15"],
    answer: 0
  },
  {
    question: "Simplify: 2(x + y) + 3(x - y)",
    options: ["5x + y", "x + 5y", "5x - y", "x - 5y"],
    answer: 0
  },
  {
    question: "Simplify: 5(a + b) - 2(a - b)",
    options: ["3a + 7b", "7a + 3b", "3a - 7b", "7a - 3b"],
    answer: 0
  },
  {
    question: "Simplify: (2x + 3) + (4x - 5)",
    options: ["6x - 2", "6x + 8", "2x - 2", "4x - 2"],
    answer: 0
  },
  {
    question: "Simplify: (3a - 5) - (a + 2)",
    options: ["2a - 7", "4a - 3", "2a + 3", "2a - 2"],
    answer: 0
  },
  {
    question: "Simplify: 2(x + 3) - 3(x - 2)",
    options: ["-x + 12", "5x + 12", "x + 6", "-x - 12"],
    answer: 0
  },
  {
    question: "Simplify: 5x - (3x - 7)",
    options: ["2x + 7", "8x - 7", "2x - 7", "8x + 7"],
    answer: 0
  },
  {
    question: "Simplify: 3(2x - 4) - 5(x - 1)",
    options: ["x - 7", "x + 1", "x - 1", "x + 7"],
    answer: 0
  },
  {
    question: "Simplify: 6(x + 1) - 2(2x - 3)",
    options: ["2x + 12", "2x + 8", "2x + 6", "2x + 10"],
    answer: 0
  },
  {
    question: "Simplify: (x + 3) + (2x - 5) - (x - 2)",
    options: ["2x", "3x", "x + 4", "x - 4"],
    answer: 0
  },
  {
    question: "Simplify: 4a + 3b - 2a + b",
    options: ["2a + 4b", "6a + 2b", "2a + 2b", "4a + 4b"],
    answer: 0
  },
  {
    question: "Simplify: 5(x - 2) + 3(2x + 1)",
    options: ["11x - 7", "11x - 1", "x - 7", "x + 1"],
    answer: 0
  },
  {
    question: "Simplify: 2(3a - 4b) + 5(b - a)",
    options: ["a - 3b", "a + 3b", "6a - 3b", "-a - 3b"],
    answer: 0
  },
  {
    question: "Simplify: 3(x + 2) - 4(x - 1)",
    options: ["-x + 10", "7x + 10", "x - 2", "7x - 10"],
    answer: 0
  },
  {
    question: "Simplify: 2a + 3b - (a - b)",
    options: ["a + 4b", "3a + 2b", "a + 2b", "2a + 4b"],
    answer: 0
  },
  {
    question: "Simplify: (x + 2y) - (2x - 3y)",
    options: ["-x + 5y", "3x + 5y", "x - y", "-x - y"],
    answer: 0
  },
  {
    question: "Simplify: 3(x - 2y) + 4(2y - x)",
    options: ["-x + 2y", "x + 2y", "x - 2y", "-x - 2y"],
    answer: 0
  },
  {
    question: "Simplify: 5(2x - y) - 3(x + y)",
    options: ["7x - 8y", "7x - 2y", "x - 8y", "x - 2y"],
    answer: 0
  },
  {
    question: "Simplify: 4a - 3b + 2(3b - a)",
    options: ["2a + 3b", "2a - 3b", "a + 3b", "a - 3b"],
    answer: 0
  },
  {
    question: "Simplify: 6(x - 2) - 3(2x + 1)",
    options: ["0 - 15", "0 - 12", "0 - 9", "0 - 6"],
    answer: 0
  },
  {
    question: "Simplify: 2x + 3y - (x + 2y) + (x - y)",
    options: ["2x", "2y", "x + y", "2x + y"],
    answer: 0
  },
  {
    question: "Simplify: (3a + 2b) - (2a - b)",
    options: ["a + 3b", "5a + b", "a - b", "a + b"],
    answer: 0
  },
  {
    question: "Simplify: 2(x + y) + 3(x - y) - x",
    options: ["4x - y", "4x + y", "x + y", "5x - y"],
    answer: 0
  },
  {
    question: "Simplify: 5(a - b) + 2(b - a)",
    options: ["3a - 3b", "7a - 7b", "3a + 3b", "-3a + 3b"],
    answer: 0
  },
  {
    question: "Simplify: 2(x - y) + 3(y - 2x)",
    options: ["-4x + y", "-4x - y", "x - y", "x + y"],
    answer: 0
  },
  {
    question: "Simplify: 4a + 5b - 2(2a - b)",
    options: ["4b", "6b", "3b", "5b"],
    answer: 0
  },
  {
    question: "Simplify: 3(x + y) - 2(2x - y)",
    options: ["-x + 5y", "x + 5y", "-x - y", "x - y"],
    answer: 0
  },
  {
    question: "Simplify: (a + b) + (2a - b) - (3a - 2b)",
    options: ["0", "a + 2b", "2a + 2b", "-a + 2b"],
    answer: 0
  },
  {
    question: "Simplify: 2(x + 3) + 3(2x - 1)",
    options: ["8x + 3", "8x + 7", "8x + 1", "7x + 7"],
    answer: 0
  },
  {
    question: "Simplify: 5(a + 2b) - 3(a - b)",
    options: ["2a + 13b", "8a + b", "2a + 7b", "8a + 7b"],
    answer: 0
  },
  {
    question: "Simplify: 3(x - y) + 4(2y - x)",
    options: ["-x + 5y", "x + 5y", "-x - y", "x - y"],
    answer: 0
  },
  {
    question: "Simplify: 2(a + b) + 3(a - b)",
    options: ["5a - b", "5a + b", "a + 5b", "a - 5b"],
    answer: 0
  },
  {
    question: "Simplify: 4(x + 2y) - 2(3x - y)",
    options: ["-2x + 9y", "2x + 9y", "-2x - y", "2x - y"],
    answer: 0
  },
  {
    question: "Simplify: (x + y) + (2x - 3y) - (x - y)",
    options: ["2x - y", "2x + y", "x - y", "x + y"],
    answer: 0
  },
  {
    question: "Simplify: 5(a + b) - 2(2a - 3b)",
    options: ["a + 11b", "a + 7b", "9a - b", "a + 5b"],
    answer: 0
  },
  {
    question: "Simplify: 3(x + 4) - 2(2x - 5)",
    options: ["-x + 23", "x + 23", "-x - 23", "x - 23"],
    answer: 0
  },
  
  
  //rational expression 
  
  {
    question: "Simplify: (x² - 9) / (x + 3)",
    options: ["x - 3", "x + 3", "x² - 3", "x² + 3"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 5x + 6) / (x + 2)",
    options: ["x + 3", "x + 2", "x + 6", "x + 1"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 4x + 4) / (x - 2)",
    options: ["x - 2", "x + 2", "x² - 2", "x² + 2"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 16) / (x - 4)",
    options: ["x + 4", "x - 4", "x² - 4", "x² + 4"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 7x + 12) / (x + 3)",
    options: ["x + 4", "x + 3", "x + 5", "x + 2"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 6x + 9) / (x - 3)",
    options: ["x - 3", "x + 3", "x² - 3", "x² + 3"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 2x - 15) / (x + 5)",
    options: ["x - 3", "x + 3", "x - 5", "x + 5"],
    answer: 0
  },
  {
    question: "Simplify: (x² - x - 12) / (x - 4)",
    options: ["x + 3", "x - 3", "x + 4", "x - 4"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 6x + 9) / (x + 3)",
    options: ["x + 3", "x - 3", "x² + 3", "x² - 3"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 25) / (x - 5)",
    options: ["x + 5", "x - 5", "x² + 5", "x² - 5"],
    answer: 0
  },
  {
    question: "Simplify: (2x² + 8x) / (2x)",
    options: ["x + 4", "x - 4", "2x + 8", "x² + 4"],
    answer: 0
  },
  {
    question: "Simplify: (3x² - 12) / (3x)",
    options: ["x - 4/x", "x + 4/x", "x² - 4", "x² + 4"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 5x + 6) / (x + 2) / (x + 3)",
    options: ["1", "x", "x + 1", "x + 2"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 9) / (x² + 6x + 9)",
    options: ["(x - 3)/(x + 3)", "(x + 3)/(x - 3)", "x - 3", "x + 3"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 3x - 10) / (x² - 4)",
    options: ["(x + 5)/(x + 2)", "(x - 2)/(x - 5)", "(x - 5)/(x - 2)", "(x + 2)/(x + 5)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + x - 6) / (x² - x - 6)",
    options: ["(x + 3)/(x - 3)", "(x - 3)/(x + 3)", "(x + 2)/(x - 2)", "(x - 2)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 16) / (x² + 4x + 4)",
    options: ["(x - 4)/(x + 2)", "(x + 4)/(x - 2)", "(x - 4)/(x - 2)", "(x + 4)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - x - 20) / (x² + 4x + 4)",
    options: ["(x - 5)/(x + 2)", "(x + 5)/(x + 2)", "(x - 4)/(x + 4)", "(x + 4)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 1) / (x² - 2x + 1)",
    options: ["(x + 1)/(x - 1)", "(x - 1)/(x + 1)", "(x + 1)/(x + 1)", "(x - 1)/(x - 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 2x - 15) / (x² - 9)",
    options: ["(x + 5)/(x + 3)", "(x - 5)/(x - 3)", "(x + 3)/(x + 5)", "(x - 3)/(x - 5)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 5x + 6) / (x² - 3x + 2)",
    options: ["(x - 2)/(x - 1)", "(x - 1)/(x - 2)", "(x - 3)/(x - 2)", "(x - 2)/(x - 3)"],
    answer: 0
  },
  {
    question: "Simplify: (2x² + 3x - 5) / (x² + x - 2)",
    options: ["(2x - 1)/(x + 2)", "(2x + 5)/(x - 1)", "(2x - 1)/(x - 1)", "(2x + 5)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 4x + 4) / (x² - 2x)",
    options: ["(x - 2)/x", "(x + 2)/x", "(x - 2)/(x - 2)", "(x + 2)/(x - 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 6x + 8) / (x² - 4)",
    options: ["(x - 2)/(x + 2)", "(x - 4)/(x + 2)", "(x - 2)/(x - 2)", "(x + 4)/(x - 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 7x + 12) / (x² + 5x + 6)",
    options: ["(x + 4)/(x + 2)", "(x + 3)/(x + 2)", "(x + 4)/(x + 3)", "(x + 3)/(x + 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 9x + 20) / (x² - 4x)",
    options: ["(x - 5)/(x - 2)", "(x - 4)/(x - 2)", "(x - 5)/(x + 2)", "(x - 4)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - x - 12) / (x² - 4x + 3)",
    options: ["(x + 3)/(x - 1)", "(x - 3)/(x - 1)", "(x + 4)/(x - 1)", "(x - 4)/(x + 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + x - 6) / (x² - x - 6)",
    options: ["(x + 3)/(x - 3)", "(x - 3)/(x + 3)", "(x + 2)/(x - 2)", "(x - 2)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (2x² + 5x + 3) / (x² + 4x + 3)",
    options: ["(2x + 3)/(x + 1)", "(2x + 1)/(x + 3)", "(2x + 3)/(x + 3)", "(2x + 1)/(x + 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 9) / (x² + 6x + 9)",
    options: ["(x - 3)/(x + 3)", "(x + 3)/(x - 3)", "(x - 3)/(x - 3)", "(x + 3)/(x + 3)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 16) / (x² - 8x + 16)",
    options: ["(x + 4)/(x - 4)", "(x - 4)/(x + 4)", "(x + 4)/(x + 4)", "(x - 4)/(x - 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 3x - 18) / (x² + 6x + 8)",
    options: ["(x - 3)/(x + 2)", "(x + 6)/(x + 2)", "(x - 3)/(x + 4)", "(x + 3)/(x + 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - x - 6) / (x² - 9)",
    options: ["(x + 2)/(x + 3)", "(x - 2)/(x - 3)", "(x + 3)/(x + 2)", "(x - 3)/(x - 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 5x + 6) / (x² - 4x + 3)",
    options: ["(x - 2)/(x - 1)", "(x - 3)/(x - 1)", "(x - 3)/(x + 1)", "(x - 2)/(x + 1)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 7x + 12) / (x² + 3x - 4)",
    options: ["(x + 4)/(x + 4)", "(x + 3)/(x - 1)", "(x + 4)/(x - 1)", "(x + 3)/(x + 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - 4x + 4) / (x² - 2x)",
    options: ["(x - 2)/x", "(x + 2)/x", "(x - 2)/(x - 2)", "(x + 2)/(x - 2)"],
    answer: 0
  },
  {
    question: "Simplify: (x² - x - 20) / (x² - 9x + 20)",
    options: ["(x + 4)/(x - 5)", "(x - 4)/(x - 5)", "(x + 5)/(x - 4)", "(x - 5)/(x - 4)"],
    answer: 0
  },
  {
    question: "Simplify: (x² + 5x + 6) / (x² + 7x + 12)",
    options: ["(x + 2)/(x + 4)", "(x + 3)/(x + 4)", "(x + 2)/(x + 3)", "(x + 3)/(x + 2)"],
    answer: 0
  },
  
  // sequence and series
  
  {
    question: "The first term of an AP is 5 and the common difference is 3. Find the 10th term.",
    options: ["32", "35", "30", "28"],
    answer: 0
  },
  {
    question: "The 5th term of an AP is 20 and the 2nd term is 8. Find the first term.",
    options: ["2", "4", "6", "8"],
    answer: 1
  },
  {
    question: "Find the sum of the first 20 terms of an AP: 3, 7, 11,...",
    options: ["880", "920", "940", "960"],
    answer: 3
  },
  {
    question: "The sum of first n terms of an AP is 200. If a = 5 and d = 3, find n.",
    options: ["10", "11", "12", "13"],
    answer: 2
  },
  {
    question: "The 8th term of an AP is 34 and the 3rd term is 19. Find the common difference.",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    question: "The sum of first 15 natural numbers is:",
    options: ["120", "105", "135", "150"],
    answer: 1
  },
  {
    question: "Find the 12th term of the AP: 2, 5, 8,...",
    options: ["35", "32", "38", "41"],
    answer: 1
  },
  {
    question: "If a = 7 and d = 4, find the sum of first 25 terms of the AP.",
    options: ["875", "825", "900", "950"],
    answer: 0
  },
  {
    question: "The sum of first n terms of an AP is given by S<sub>n</sub> = n² + 3n. Find the 5th term.",
    options: ["35", "31", "28", "30"],
    answer: 1
  },
  {
    question: "The 7th term of an AP is 19. If a = 1 and d = 3, find n such that T_n = 19.",
    options: ["7", "6", "8", "5"],
    answer: 0
  },
  {
    question: "Find the sum of first 10 terms of the AP: 1, 4, 7,...",
    options: ["145", "130", "160", "115"],
    answer: 1
  },
  {
    question: "The 4th term of a GP is 54 and the first term is 2. If the common ratio is r, find r.",
    options: ["3", "4", "5", "6"],
    answer: 0
  },
  {
    question: "The sum of first 5 terms of a GP: 3, 6, 12,... is:",
    options: ["189", "195", "201", "210"],
    answer: 0
  },
  {
    question: "The sum to infinity of a GP is 16. If a = 8, find r.",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answer: 0
  },
  {
    question: "If a = 5 and r = 2, find the 6th term of the GP.",
    options: ["160", "155", "180", "200"],
    answer: 0
  },
  {
    question: "The sum of first n terms of a GP is S<sub>n</sub> = 3(2^n - 1). Find the 5th term.",
    options: ["48", "45", "50", "40"],
    answer: 0
  },
  {
    question: "Find the 8th term of GP: 1, 3, 9,...",
    options: ["2187", "243", "729", "6561"],
    answer: 0
  },
  {
    question: "If the 3rd term of a GP is 12 and the 6th term is 96, find the first term.",
    options: ["3", "2", "4", "6"],
    answer: 0
  },
  {
    question: "The sum of first 4 terms of a GP: 2, 6, 18,... is:",
    options: ["80", "74", "68", "65"],
    answer: 2
  },
  {
    question: "If S∞ = 10 and a = 5, find the common ratio r of the GP.",
    options: ["1/2", "1/3", "1/4", "2/3"],
    answer: 0
  },
  {
    question: "The sum of first 6 terms of an AP: 4, 9, 14,... is:",
    options: ["129", "138", "144", "149"],
    answer: 2
  },
  {
    question: "The 10th term of the AP: 7, 11, 15,... is:",
    options: ["43", "47", "51", "55"],
    answer: 2
  },
  {
    question: "If a = 2, d = 3, find the 20th term of the AP.",
    options: ["59", "60", "61", "62"],
    answer: 2
  },
  {
    question: "Find the sum of first 12 terms of AP: 5, 9, 13,...",
    options: ["384", "360", "396", "420"],
    answer: 2
  },
  {
    question: "The sum of first n terms of an AP: 2, 5, 8,... is 275. Find n.",
    options: ["15", "20", "25", "30"],
    answer: 2
  },
  {
    question: "If a = 3 and r = 2, find the sum of first 8 terms of GP.",
    options: ["765", "765", "765", "510"],
    answer: 0
  },
  {
    question: "The 5th term of GP: 2, 4, 8,... is:",
    options: ["32", "16", "64", "128"],
    answer: 1
  },
  {
    question: "If S∞ = 12 and a = 8, find the common ratio r.",
    options: ["1/3", "1/2", "1/4", "1/5"],
    answer: 1
  },
  {
    question: "Find the sum of first 7 terms of AP: 6, 10, 14,...",
    options: ["210", "182", "196", "224"],
    answer: 2
  },
  {
    question: "The 9th term of an AP is 50. If a = 6, d = 5, find n for T_n = 50.",
    options: ["9", "10", "8", "11"],
    answer: 0
  },
  {
    question: "The sum of first n terms of GP: 3, 6, 12,... is 189. Find n.",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "The 6th term of a GP: 1, 2, 4,... is:",
    options: ["32", "16", "64", "8"],
    answer: 1
  },
  {
    question: "If a = 1, r = 1/2, find S∞ of the GP.",
    options: ["2", "1", "3", "4"],
    answer: 0
  },
  {
    question: "The sum of first 15 natural numbers is:",
    options: ["120", "105", "135", "120"],
    answer: 2
  },
  {
    question: "The sum of first 20 terms of AP: 7, 10, 13,... is:",
    options: ["570", "600", "630", "660"],
    answer: 1
  },
  {
    question: "The 12th term of AP: 3, 7, 11,... is:",
    options: ["47", "43", "39", "51"],
    answer: 0
  },
  {
    question: "Find n if S<sub>n</sub> = 120 for AP: 2, 5, 8,...",
    options: ["10", "12", "15", "20"],
    answer: 2
  },
  {
    question: "The 8th term of GP: 5, 10, 20,... is:",
    options: ["320", "640", "1280", "2560"],
    answer: 1
  },
  {
    question: "If a = 3, r = 1/3, find S∞ of GP.",
    options: ["9/2", "3/2", "6", "4"],
    answer: 1
  },
  {
    question: "The sum of first 10 terms of AP: 4, 9, 14,... is:",
    options: ["460", "475", "495", "500"],
    answer: 2
  },
  {
    question: "The 5th term of AP: 2, 5, 8,... is:",
    options: ["14", "15", "16", "17"],
    answer: 1
  },
  {
    question: "Find the 10th term of GP: 1, 3, 9,...",
    options: ["19683", "59049", "729", "2187"],
    answer: 0
  },
  {
    question: "The sum of first n terms of GP: 2, 6, 18,... is 728. Find n.",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "If a = 8, r = 1/4, find S<sub>∞</sub> of GP.",
    options: ["10.67", "8/3", "32/3", "4"],
    answer: 2
  },
  {
    question: "The sum of first 12 terms of AP: 3, 7, 11,... is:",
    options: ["510", "564", "576", "600"],
    answer: 2
  },
  {
    question: "The 7th term of AP: 5, 9, 13,... is:",
    options: ["33", "29", "37", "41"],
    answer: 0
  }, 
  
    
    ],
    
    //English language questions here
    English: [
      {
        question: "Choose the correct spelling:",
        options: ["Enviroment", "Environment", "Enviromentt", "Enviromenth"],
        answer: 1,
      },
      {
          question: "The woman is beautiful. Choose the adjective.",
          options: ["Woman", "beautiful", "The", "is"],
          answer: 1,
      },
      {
    question: "Which of the following is a noun?",
    options: ["Quickly", "Table", "Beautiful", "Run"],
    answer: 1,
  },
  {
    question: "Which of these words is an adjective?",
    options: ["Beauty", "Beautiful", "Beautify", "Beautifully"],
    answer: 1,
  },
  {
    question: "Choose the correct plural of 'child'.",
    options: ["Childs", "Children", "Childes", "Childrens"],
    answer: 1,
  },
  {
    question: "Which of these sentences is in the past tense?",
    options: ["He walks to school", "He is walking to school", "He walked to school", "He will walk to school"],
    answer: 2,
  },
  {
    question: "Which of the following is a pronoun?",
    options: ["Boy", "He", "Jump", "Blue"],
    answer: 1,
  },
  {
    question: "Which of these is an example of a verb?",
    options: ["Book", "Jump", "Happy", "Blue"],
    answer: 1,
  },
  {
    question: "What part of speech is the word 'quickly'?",
    options: ["Noun", "Adjective", "Adverb", "Verb"],
    answer: 2,
  },
  {
    question: "Which of the following sentences is correct?",
    options: ["He go to school every day.", "He goes to school every day.", "He going to school every day.", "He gone to school every day."],
    answer: 1,
  },
  {
    question: "Select the correct synonym of 'big'.",
    options: ["Tiny", "Huge", "Small", "Little"],
    answer: 1,
  },
  {
    question: "Select the antonym of 'happy'.",
    options: ["Glad", "Cheerful", "Sad", "Joyful"],
    answer: 2,
  },
  {
    question: "Which of these sentences is in the future tense?",
    options: ["I eat rice", "I will eat rice", "I am eating rice", "I ate rice"],
    answer: 1,
  },
  {
    question: "Which of these words is a conjunction?",
    options: ["And", "Run", "Because", "Both A and C"],
    answer: 3,
  },
  {
    question: "What is the comparative form of 'good'?",
    options: ["Gooder", "More good", "Better", "Best"],
    answer: 2,
  },
  {
    question: "Which of these words is a preposition?",
    options: ["Under", "Beautiful", "Run", "Because"],
    answer: 0,
  },
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definitely", "Definetely", "Definatly"],
    answer: 1,
  },
  {
    question: "Which of these sentences is passive?",
    options: ["The boy kicked the ball.", "The ball was kicked by the boy.", "The boy is kicking the ball.", "The ball kicks the boy."],
    answer: 1,
  },
  {
    question: "Which of these is a synonym for 'begin'?",
    options: ["End", "Stop", "Start", "Finish"],
    answer: 2,
  },
  {
    question: "Which of these is an antonym of 'increase'?",
    options: ["Grow", "Expand", "Reduce", "Multiply"],
    answer: 2,
  },
  {
    question: "Which of these words is in the past participle form?",
    options: ["Go", "Went", "Gone", "Going"],
    answer: 2,
  },
  {
    question: "What is the plural of 'leaf'?",
    options: ["Leafs", "Leaves", "Leves", "Leavs"],
    answer: 1,
  },
  {
    question: "Which of these is a question tag for 'He is coming'?",
    options: ["Isn't he?", "Wasn't he?", "Doesn't he?", "Won't he?"],
    answer: 0,
  },
  {
    question: "Identify the adverb in this sentence: 'She sang beautifully.'",
    options: ["She", "Sang", "Beautifully", "Song"],
    answer: 2,
  },
  {
    question: "Which of these is an example of a simple sentence?",
    options: ["Although he came, he was late.", "He came early.", "He came and she left.", "Because he was late, he ran."],
    answer: 1,
  },
  {
    question: "Which word best completes the sentence: 'The cup is ____ the table.'",
    options: ["In", "At", "On", "By"],
    answer: 2,
  },
  {
    question: "Which of these is a collective noun?",
    options: ["Water", "Army", "Joy", "Pencil"],
    answer: 1,
  },
  {
    question: "What is the superlative form of 'bad'?",
    options: ["Worse", "Worst", "Badder", "Most bad"],
    answer: 1,
  },
  {
    question: "Which of these sentences is correct?",
    options: ["She don’t like rice.", "She doesn’t like rice.", "She not like rice.", "She didn’t likes rice."],
    answer: 1,
  },
  {
    question: "Which of these is a declarative sentence?",
    options: ["Are you coming?", "Close the door!", "I am tired.", "What a day!"],
    answer: 2,
  },
  {
    question: "Choose the correct word: 'He _____ to school every morning.'",
    options: ["Go", "Goes", "Going", "Gone"],
    answer: 1,
  },
  {
    question: "Which of these is a synonym for 'brave'?",
    options: ["Cowardly", "Bold", "Afraid", "Weak"],
    answer: 1,
  },
  {
    question: "Which of these is an antonym of 'honest'?",
    options: ["Truthful", "Sincere", "Deceitful", "Frank"],
    answer: 2,
  },
  {
    question: "Which of these is a correct indirect speech form of: 'He said, “I am tired.”'?",
    options: ["He said he was tired.", "He said he is tired.", "He said that I was tired.", "He said I am tired."],
    answer: 0,
  },
  {
    question: "Which of these is an example of a complex sentence?",
    options: ["He came and left.", "He came when I was sleeping.", "He came.", "He will come tomorrow."],
    answer: 1,
  },
  {
    question: "Which of these punctuation marks is used to end a question?",
    options: ["Comma", "Full stop", "Question mark", "Exclamation mark"],
    answer: 2,
  },
  {
    question: "Choose the correct preposition: 'She is interested ____ music.'",
    options: ["In", "On", "At", "About"],
    answer: 0,
  },
  {
    question: "Which of these words is a synonym for 'angry'?",
    options: ["Furious", "Calm", "Peaceful", "Happy"],
    answer: 0,
  },
  {
    question: "Which of these sentences contains a simile?",
    options: ["He is brave.", "She is as fast as a cheetah.", "The night was silent.", "He was very tall."],
    answer: 1,
  },
  {
    question: "Which of these words is a conjunction?",
    options: ["Because", "Before", "Both", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of these is an imperative sentence?",
    options: ["Do your homework.", "Are you ready?", "She is reading.", "I am late."],
    answer: 0,
  },
  {
    question: "What is the past tense of 'write'?",
    options: ["Writes", "Writing", "Wrote", "Written"],
    answer: 2,
  },
  {
    question: "Which of these words is a synonym for 'strong'?",
    options: ["Weak", "Powerful", "Fragile", "Soft"],
    answer: 1,
  },
  {
    question: "Which of these is an antonym of 'cold'?",
    options: ["Hot", "Cool", "Warm", "Frozen"],
    answer: 0,
  },
  {
    question: "Which of these sentences is correct?",
    options: ["He has ate his food.", "He have eaten his food.", "He has eaten his food.", "He eaten his food."],
    answer: 2,
  },
  {
    question: "What is the plural of 'goose'?",
    options: ["Gooses", "Goose", "Geese", "Goos"],
    answer: 2,
  },
  {
    question: "Which of these words is an example of a conjunction?",
    options: ["However", "Because", "Although", "All of the above"],
    answer: 3,
  },
  {
    question: "Which of these is an example of a compound sentence?",
    options: ["He came, and she left.", "Although he came, he was late.", "He ran fast.", "He is tall."],
    answer: 0,
  },
  {
    question: "What is the opposite of 'arrive'?",
    options: ["Depart", "Come", "Reach", "Stay"],
    answer: 0,
  },
  {
    question: "Which of these words is a pronoun?",
    options: ["John", "His", "Car", "Fast"],
    answer: 1,
  },
  {
    question: "Choose the correct article: 'He bought ____ umbrella.'",
    options: ["A", "An", "The", "No article"],
    answer: 1,
  },
  {
    question: "Which of these words means the same as 'intelligent'?",
    options: ["Clever", "Dull", "Slow", "Lazy"],
    answer: 0,
  },
  {
    question: "Which of these sentences contains an idiom?",
    options: ["She is tall.", "He kicked the bucket.", "He eats rice.", "She runs fast."],
    answer: 1,
  },
  {
    question: "Which of these is an interjection?",
    options: ["Wow!", "Slowly", "Blue", "Because"],
    answer: 0,
  }
    ],
    
    //Chemistry questions here
    Chemistry: [
      {
    question: "Which of the following is a pure substance made of only one type of atom?",
    options: ["Compound", "Element", "Mixture", "Alloy"],
    answer: 1,
  },
  {
    question: "A substance formed when two or more elements chemically combine in fixed proportions is called a _______.",
    options: ["Mixture", "Solution", "Compound", "Isotope"],
    answer: 2,
  },
  {
    question: "Which state of matter has a definite volume but no definite shape?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: 1,
  },
  {
    question: "Atoms of the same element that have different numbers of neutrons are called _______.",
    options: ["Ions", "Isotopes", "Allotropes", "Molecules"],
    answer: 1,
  },
  {
    question: "The number of protons in the nucleus of an atom is called the _______.",
    options: ["Mass number", "Atomic mass", "Atomic number", "Valency"],
    answer: 2,
  },
  {
    question: "Which particle has a negative charge and orbits the nucleus?",
    options: ["Proton", "Neutron", "Electron", "Photon"],
    answer: 2,
  },
  {
    question: "Which bond involves the transfer of electrons from one atom to another?",
    options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond"],
    answer: 1,
  },
  {
    question: "A covalent bond is formed by the _______ of electrons between atoms.",
    options: ["Transfer", "Exchange", "Sharing", "Loss"],
    answer: 2,
  },
  {
    question: "Which of these is an example of a homogeneous mixture?",
    options: ["Sand in water", "Granite", "Air", "Oil and water"],
    answer: 2,
  },
  {
    question: "The relative atomic mass of an element is the average mass of its atoms compared with _______.",
    options: ["Carbon-12", "Hydrogen-1", "Oxygen-16", "Proton mass"],
    answer: 0,
  },
  {
    question: "Which term describes the smallest particle of a compound that retains the properties of that compound?",
    options: ["Atom", "Molecule", "Ion", "Isotope"],
    answer: 1,
  },
  {
    question: "Avogadro's number (approximately 6.02 × 10^23) gives the number of particles in one _______.",
    options: ["Mole", "Gram", "Liter", "Molecule"],
    answer: 0,
  },
  {
    question: "The molar mass of water (H₂O) is approximately _______ g mol⁻¹.",
    options: ["16", "18", "20", "34"],
    answer: 1,
  },
  {
    question: "Which of these expresses concentration as moles of solute per litre of solution?",
    options: ["Molality", "Mass percent", "Normality", "Molarity"],
    answer: 3,
  },
  {
    question: "A substance that increases the rate of a chemical reaction without being consumed is called a _______.",
    options: ["Reactant", "Catalyst", "Inhibitor", "Solvent"],
    answer: 1,
  },
  {
    question: "Which of the following is a property of metals?",
    options: ["Brittle", "Poor conductor of heat", "Malleable", "Non-lustrous"],
    answer: 2,
  },
  {
    question: "The pH of a neutral aqueous solution at 25°C is approximately _______.",
    options: ["0", "7", "14", "1"],
    answer: 1,
  },
  {
    question: "Which of the following is a strong acid?",
    options: ["Acetic acid (CH₃COOH)", "Hydrochloric acid (HCl)", "Ethanol (C₂H₅OH)", "Ammonia (NH₃)"],
    answer: 1,
  },
  {
    question: "A solution that resists changes in pH when small amounts of acid or base are added is called a _______.",
    options: ["Buffer", "Dilute solution", "Saturated solution", "Colloid"],
    answer: 0,
  },
  {
    question: "The substance in which solute dissolves is called the _______.",
    options: ["Solute", "Solvent", "Solution", "Precipitate"],
    answer: 1,
  },
  //waec questions
  
  {
    question: "The substance in which solute dissolves is called the _______.",
    options: ["Solute", "Solvent", "Solution", "Precipitate"],
    answer: 1,
  },
  {
    question: "Which separation technique is best for separating suspended solids from a liquid?",
    options: ["Distillation", "Filtration", "Chromatography", "Electrolysis"],
    answer: 1,
  },
  {
    question: "Which process separates components of a mixture based on differences in boiling points?",
    options: ["Filtration", "Evaporation", "Distillation", "Sedimentation"],
    answer: 2,
  },
  {
    question: "An ionic compound must contain _______.",
    options: ["Only non-metals", "Only metals", "Metal and non-metal", "Only noble gases"],
    answer: 2,
  },
  {
    question: "Which is true about isotopes?",
    options: ["Same number of neutrons, different protons", "Same atomic number, different mass number", "Different chemical element", "Always unstable"],
    answer: 1,
  },
  {
    question: "Electrolytes are substances that produce _______ when dissolved in water.",
    options: ["Insulating solution", "Non-conductive medium", "Ions", "Colloids"],
    answer: 2,
  },
  {
    question: "Which gas is released when an acid reacts with a carbonate?",
    options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
    answer: 2,
  },
  {
    question: "Which of these best describes an empirical formula?",
    options: ["Exact number of atoms in a molecule", "Lowest whole-number ratio of atoms in a compound", "Molecular mass expressed in g mol⁻¹", "Number of moles present"],
    answer: 1,
  },
  {
    question: "The electronic configuration of sodium (atomic number 11) in its ground state ends with _______.",
    options: ["...2s²", "...3s¹", "...3p⁶", "...2p⁶"],
    answer: 1,
  },
  {
    question: "Which of the following is a covalent molecular compound?",
    options: ["Sodium chloride (NaCl)", "Magnesium oxide (MgO)", "Water (H₂O)", "Calcium carbonate (CaCO₃)"],
    answer: 2,
  },
  {
    question: "Which property describes how easily a substance dissolves in a solvent?",
    options: ["Viscosity", "Solubility", "Boiling point", "Conductivity"],
    answer: 1,
  },
  {
    question: "Which technique separates pigments based on their solubility and capillary action?",
    options: ["Distillation", "Chromatography", "Filtration", "Titration"],
    answer: 1,
  },
  {
    question: "The boiling point elevation and freezing point depression are colligative properties that depend on _______.",
    options: ["Type of solute particles", "Number of solute particles", "Color of solution", "pH of solution"],
    answer: 1,
  },
  {
    question: "In a redox reaction, the species that loses electrons is _______.",
    options: ["Reduced", "Oxidized", "Neutralized", "Hydrolyzed"],
    answer: 1,
  },
  {
    question: "Which of the following best describes an acid according to Brønsted–Lowry theory?",
    options: ["Electron pair donor", "Proton (H⁺) donor", "Proton acceptor", "Electron acceptor"],
    answer: 1,
  },
  {
    question: "Which indicator changes colour around pH 7 and is often used for neutrality tests?",
    options: ["Methyl orange", "Phenolphthalein", "Bromothymol blue", "Litmus"],
    answer: 2,
  },
  {
    question: "Hard water is mainly caused by high concentrations of _______ and _______ ions.",
    options: ["Na⁺ and K⁺", "Ca²⁺ and Mg²⁺", "Cl⁻ and NO₃⁻", "H⁺ and OH⁻"],
    answer: 1,
  },
  {
    question: "Which term describes the mass of one mole of a substance in grams?",
    options: ["Atomic number", "Molar mass", "Relative abundance", "Mole fraction"],
    answer: 1,
  },
  {
    question: "Which statement about catalysts is TRUE?",
    options: ["They change the equilibrium position", "They increase activation energy", "They are consumed in the reaction", "They provide an alternative reaction pathway with lower activation energy"],
    answer: 3,
  },
  {
    question: "A neutralisation reaction occurs between an acid and a base to form _______.",
    options: ["Salt and water", "Carbon dioxide and water", "Oxide and hydrogen", "Gas and precipitate"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a physical change?",
    options: ["Melting of ice", "Boiling of water", "Rusting of iron", "Dissolving sugar in water"],
    answer: 2,
  },
  {
    question: "Which type of bond is primarily responsible for the unique properties of water (e.g., high surface tension)?",
    options: ["Ionic bonds", "Covalent bonds", "Hydrogen bonds", "Metallic bonds"],
    answer: 2,
  },
  {
    question: "Which technique is used to determine the concentration of an acid or base using a standard solution?",
    options: ["Titration", "Chromatography", "Distillation", "Filtration"],
    answer: 0,
  },
  {
    question: "An aqueous solution with [H⁺] = 1 × 10⁻⁴ mol L⁻¹ has a pH of _______.",
    options: ["2", "3", "4", "10"],
    answer: 2,
  },
  {
    question: "Which of the following formulae represents a molecule that is a hydrocarbon?",
    options: ["C₂H₅OH", "CH₄", "H₂O", "NH₃"],
    answer: 1,
  },
  {
    question: "Which quantity gives the number of particles in a given mass of substance by using molar mass and Avogadro's number?",
    options: ["Molarity", "Mass percent", "Number of moles", "Mole calculation using n = mass/molar mass then × Avogadro's number",],
    options: ["Molarity", "Mass percent", "Number of moles", "Mole calculation using n = mass/molar mass then × Avogadro's number"],
    answer: 3,
  },
  {
    question: "Which process involves the gain of electrons?",
    options: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    options: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    answer: 1,
  },
  {
    question: "Which property increases down a group in the periodic table for alkali metals?",
    options: ["Ionization energy", "Atomic radius", "Electronegativity", "Number of valence electrons"],
    answer: 1,
  },
  {
    question: "Which of the following is an example of a chemical change?",
    options: ["Cutting paper", "Dissolving salt in water", "Combustion of petrol", "Melting butter"],
    answer: 2,
  },
  {
    question: "Which compound is a major component of biological buffers in blood (important for biology students to know)?",
    options: ["Sodium chloride", "Sodium bicarbonate (NaHCO₃)", "Calcium carbonate", "Magnesium sulfate"],
    answer: 1,
  },
  {
    question: "Which reagent would you use to test for the presence of starch in a sample?",
    options: ["Litmus paper", "Iodine solution", "Benedict's solution", "Silver nitrate"],
    answer: 1,
  },
  {
    question: "Which of the following best describes an exothermic reaction?",
    options: ["Absorbs heat from surroundings", "Releases heat to surroundings", "No heat exchange", "Consumes products"],
    answer: 1,
  },
  
      {
        question: "The chemical symbol for Gold is:",
        options: ["Ag", "Au", "Fe", "Pb"],
        answer: 1,
      },
      {
        question: "Identify this element",
        options: ["Carbon", "Oxygen", "Gold", "Iron"],
        answer: 2,
        image: "number line - Copy.jpg"
      },
      {
        question: "Which element is the most abundant in the Earth's crust?",
        options: ["Silicon", "Aluminum", "Oxygen", "Iron"],
        answer: 2,
      },
      {
        question: "The following elements are halogens except",
        options: ["Silicon", "Chlorine", "Iodine", "Bromine"],
        answer:0,
      },
      {
    question: "Which of the following particles has a negative charge?",
    options: ["Proton", "Electron", "Neutron", "Positron"],
    answer: 1,
  },
  {
    question: "Which of these elements is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    answer: 2,
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "8", "4"],
    answer: 0,
  },
  {
    question: "Which of these is a compound?",
    options: ["Air", "Water", "Oxygen", "Argon"],
    answer: 1,
  },
  {
    question: "The bond formed when electrons are shared between atoms is called a ____ bond.",
    options: ["Ionic", "Hydrogen", "Covalent", "Metallic"],
    answer: 2,
  },
  {
    question: "What is the chemical symbol for Sodium?",
    options: ["So", "Na", "Sn", "S"],
    answer: 1,
  },
  {
    question: "Which of these is a transition metal?",
    options: ["Calcium", "Copper", "Sodium", "Potassium"],
    answer: 1,
  },
  {
    question: "The number of protons in an atom is called its ____.",
    options: ["Mass number", "Atomic number", "Charge", "Valency"],
    answer: 1,
  },
  {
    question: "Which of the following is an alkali?",
    options: ["NaOH", "HCl", "CH₃COOH", "H₂SO₄"],
    answer: 0,
  },
  {
    question: "Which gas is liberated when an acid reacts with a metal?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    answer: 2,
  },
  {
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "10", "14"],
    answer: 1,
  },
  {
    question: "Which of these elements is a halogen?",
    options: ["Fluorine", "Sulphur", "Oxygen", "Nitrogen"],
    answer: 0,
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
    answer: 1,
  },
  {
    question: "Which of these is an endothermic process?",
    options: ["Combustion", "Photosynthesis", "Freezing", "Condensation"],
    answer: 1,
  },
  {
    question: "Which of the following is an example of a physical change?",
    options: ["Burning wood", "Rusting iron", "Melting ice", "Baking bread"],
    answer: 2,
  },
  {
    question: "What is the most abundant gas in the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 1,
  },
  {
    question: "Which of the following is used as a drying agent?",
    options: ["Conc. H₂SO₄", "NaCl", "Water", "Ethanol"],
    answer: 0,
  },
  {
    question: "Which of these is an example of a mixture?",
    options: ["Salt", "Water", "Air", "Glucose"],
    answer: 2,
  },
  {
    question: "The smallest particle of an element that can take part in a chemical reaction is the ____.",
    options: ["Molecule", "Atom", "Ion", "Proton"],
    answer: 1,
  },
  {
    question: "Which of the following oxides is acidic?",
    options: ["CO₂", "Na₂O", "CaO", "MgO"],
    answer: 0,
  },
  {
    question: "Which of these is an organic compound?",
    options: ["NaCl", "CH₄", "H₂SO₄", "KOH"],
    answer: 1,
  },
  {
    question: "Which of these gases turns lime water milky?",
    options: ["CO₂", "O₂", "H₂", "N₂"],
    answer: 0,
  },
  {
    question: "The process by which liquids change into vapour is called ____.",
    options: ["Condensation", "Evaporation", "Sublimation", "Distillation"],
    answer: 1,
  },
  {
    question: "Which of these is a chemical property?",
    options: ["Color", "Density", "Flammability", "Boiling point"],
    answer: 2,
  },
  {
    question: "The atomic mass of an element is measured in ____.",
    options: ["Grams", "Moles", "Atomic mass units", "Kilograms"],
    answer: 2,
  },
  {
    question: "Which of these gases supports combustion?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: 0,
  },
  {
    question: "Which of these is used to test for hydrogen gas?",
    options: ["Glowing splint", "Burning splint", "Lime water", "Litmus paper"],
    answer: 1,
  },
  {
    question: "Which law states that mass is neither created nor destroyed in a chemical reaction?",
    options: ["Boyle’s law", "Charles’ law", "Law of conservation of mass", "Dalton’s law"],
    answer: 2,
  },
  {
    question: "Which of the following is a reducing agent?",
    options: ["Oxygen", "Hydrogen", "Chlorine", "Sulphur dioxide"],
    answer: 1,
  },
  {
    question: "The process of passing electric current through an electrolyte is called ____.",
    options: ["Electrolysis", "Ionization", "Oxidation", "Reduction"],
    answer: 0,
  },
  {
    question: "Which electrode is negatively charged during electrolysis?",
    options: ["Anode", "Cathode", "Diode", "Conductor"],
    answer: 1,
  },
  {
    question: "Which of these hydrocarbons is an alkane?",
    options: ["C₂H₂", "C₂H₄", "C₂H₆", "C₆H₆"],
    answer: 2,
  },
  {
    question: "Which of these is not a greenhouse gas?",
    options: ["CO₂", "CH₄", "N₂", "O₃"],
    answer: 2,
  },
  {
    question: "What is the valency of nitrogen in ammonia (NH₃)?",
    options: ["1", "2", "3", "4"],
    answer: 2,
  },
  {
    question: "Which of these acids is found in vinegar?",
    options: ["Hydrochloric acid", "Sulphuric acid", "Acetic acid", "Nitric acid"],
    answer: 2,
  },
  {
    question: "What is the molar mass of water (H₂O)?",
    options: ["10 g/mol", "16 g/mol", "18 g/mol", "20 g/mol"],
    answer: 2,
  },
  {
    question: "Which type of reaction involves both oxidation and reduction?",
    options: ["Neutralization", "Redox", "Decomposition", "Combustion"],
    answer: 1,
  },
  {
    question: "Which of these gases is used in the Haber process?",
    options: ["Methane and Oxygen", "Nitrogen and Hydrogen", "Nitrogen and Carbon dioxide", "Hydrogen and Oxygen"],
    answer: 1,
  },
  {
    question: "Which of these is used as a catalyst in the Haber process?",
    options: ["Nickel", "Platinum", "Iron", "Copper"],
    answer: 2,
  },
  {
    question: "The process used to separate crude oil into components is called ____.",
    options: ["Filtration", "Crystallization", "Fractional distillation", "Sublimation"],
    answer: 2,
  },
  {
    question: "Which of these is an example of a base?",
    options: ["HCl", "H₂SO₄", "NaOH", "CO₂"],
    answer: 2,
  },
  {
    question: "Which of the following is not a state of matter?",
    options: ["Solid", "Liquid", "Plasma", "Radiation"],
    answer: 3,
  },
  {
    question: "Which of these quantities is measured in moles?",
    options: ["Temperature", "Amount of substance", "Volume", "Mass"],
    answer: 1,
  },
  {
    question: "What is the color of litmus paper in an acidic solution?",
    options: ["Blue", "Red", "Green", "Purple"],
    answer: 1,
  },
  {
    question: "Which of these is a property of metals?",
    options: ["Brittleness", "Good conductivity", "Poor heat conduction", "Low melting point"],
    answer: 1,
  },
  {
    question: "Which of these is a non-metal?",
    options: ["Sodium", "Calcium", "Sulphur", "Magnesium"],
    answer: 2,
  },
  {
    question: "Which of the following is a monatomic gas?",
    options: ["O₂", "N₂", "He", "CO₂"],
    answer: 2,
  },
  {
    question: "Which of these substances is amphoteric?",
    options: ["NaOH", "Al(OH)₃", "H₂SO₄", "CO₂"],
    answer: 1,
  },
  {
    question: "Which gas is used in fire extinguishers?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    answer: 1,
  },
  {
    question: "Which of these is the main constituent of natural gas?",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    answer: 0,
  },
  {
    question: "Which law relates pressure and volume of a gas at constant temperature?",
    options: ["Charles’ law", "Boyle’s law", "Avogadro’s law", "Graham’s law"],
    answer: 1,
  },
  {
    question: "Which of these indicators turns pink in basic solution?",
    options: ["Methyl orange", "Litmus", "Phenolphthalein", "Bromothymol blue"],
    answer: 2,
  }
    ],
    
    //Physics questions here
    Physics: [
  {
    question: "Which of the following is a fundamental quantity?",
    options: ["Force", "Length", "Velocity", "Pressure"],
    answer: 1
  },
  {
    question: "Two cars moving in the same direction have speeds of 100 kmh<sup>-1</sup> and 130 kmh<sup>-1</sup>. What is the velocity of the faster car as measured by an observer in the slower car ?",
    options: ["130km/hr", "230km/hr", "200km/hr", "30km/hr"],
    answer:3 ,
  },
  {
    question: "Which of the following is NOT a fundamental quantity?",
    options: ["Time", "Mass", "Volume", "Length"],
    answer: 2
  },
  {
     question: "The diagram above shows a velocity-time graph. The statement that is true about this motion is that, the car",
     image: "./Screenshot_20251121-174533.png",
     options: ["decelerates between points F and H ", "accelerates between points F and G", "has a constant speed between points E and", "has no acceleration between point F and G."],
     answer:3,
  },
  {
    question: "A stone and a feather dropped from the same height above the earth surface. Ignoring air resistance, which of the following is correct?",
    options: ["The stone and feather will both reach the ground at the same time", "The stone will reach the ground first", "The feather will reach the ground first", "The feather will be blown away by the wind while stone will drop steadily."],
    answer: 2
  },
  {
     question: "The diagram above represents balls in an undulating surface. Which of the following options represents positions of stable equilibrium? ",
     image: "./Screenshot_20251121-200604.png",
     options: ["II, V and VIII", "I, II and VII", "III, VI and IX", "III, IV and VIII" ],
     answer: 2,
  },
  
  {
    question: "How many fundamental quantities are there in physics?",
    options: ["3", "5", "7", "9"],
    answer: 2
  },
  {
    question: "Which of these is a derived quantity?",
    options: ["Length", "Mass", "Area", "Time"],
    answer: 2
  },
  {
    question: "The SI unit of length is:",
    options: ["Meter", "Kilogram", "Second", "Ampere"],
    answer: 0
  },
  {
    question: "The diagram above shows a balanced metre bridge the value of x is",
    image: "./Screenshot_20251121-201158.png",
    options: ["66.7cm", "25.0cm", "33.3cm", "75.0cm"],
    answer: 2,
  },
  {
    question: "Which of the following is the SI unit of mass?",
    options: ["Newton", "Kilogram", "Gram", "Pound"],
    answer: 1
  },
  {
    question: "The SI unit of time is:",
    options: ["Minute", "Hour", "Second", "Millisecond"],
    answer: 2
  },
  {
    question: "Which of these physical quantities is derived?",
    options: ["Mass", "Temperature", "Density", "Length"],
    answer: 2
  },
  {
    question: "In the diagram above, a 200 W bulb is lighted by a 240 V a.cmains supply. If 1kWh is sold at N40, the cost of keeping the bulb lighted for a day is.",
    image: "./Screenshot_20251121-201218.png",
    options: ["#192.0", "#1.92", "#19.2", "#1,920"],
    answer: 0,
  },
  {
    question: "In the diagram above, if the south poles of two magnets stroke a steel bar, the polarities at T and V will respectively be",
    image: "./Screenshot_20251121-201235.png",
    options: ["north and south poles", "south and south", "north and north pole", "south and north"],
    answer: 2,
  },
  
  {
    question: "The diagram above shows two vectors at right angles to each other. The value of the resultant vector is",
    image: "./Screenshot_20251121-201257.png",
    options: ["13N", "14N", "10N", "12N"],
    answer: 3
  },
  
  
  {
    question: "The SI unit of density is:",
    options: ["kg/m³", "kg/m²", "N/m³", "m³/kg"],
    answer: 0
  },
  {
    question: "Pressure is given as:",
    options: ["Force × Area", "Force ÷ Area", "Area ÷ Force", "Mass ÷ Volume"],
    answer: 1
  },
  {
    question: "The SI unit of force is:",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: 1
  },
  {
    question: "The diagrams above show the positions of a cone. The position which can be described as neutral equilibrium is represented as",
    image: "./Screenshot_20251121-201316.png",
    options: ["Y and X", "Z only", "X only", "Y and Z"],
    answer: 2
  },
  {
    question: "Which of the following is the SI unit of energy?",
    options: ["Watt", "Joule", "Volt", "Newton"],
    answer: 1
  },
  {
    question: "The SI unit of power is:",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: 2
  },
  {
    question: "The quantity measured in amperes is:",
    options: ["Current", "Voltage", "Resistance", "Power"],
    answer: 0
  },
  {
    question: "The dimensional formula of velocity is:",
    options: ["[M⁰L¹T⁻¹]", "[ML⁻¹T⁻²]", "[M⁰L⁰T⁰]", "[M¹L¹T⁻²]"],
    answer: 0
  },
  {
    question: "Acceleration is measured in:",
    options: ["m/s", "m/s²", "m²/s", "s/m²"],
    answer: 1
  },
  {
    question: "Which of these is a derived quantity?",
    options: ["Temperature", "Mass", "Area", "Length"],
    answer: 2
  },
  {
    question: "Which of these is NOT a base quantity?",
    options: ["Length", "Electric current", "Time", "Energy"],
    answer: 3
  },
  {
    question: "The SI unit of pressure is:",
    options: ["Newton", "Pascal", "Joule", "Tesla"],
    answer: 1
  },
  {
    question: "Which of the following quantities has a unit of N/m²?",
    options: ["Work", "Pressure", "Energy", "Power"],
    answer: 1
  },
  {
    question: "The quantity measured in volts is:",
    options: ["Current", "Potential difference", "Power", "Charge"],
    answer: 1
  },
  {
    question: "The SI unit of electric charge is:",
    options: ["Ampere", "Coulomb", "Volt", "Ohm"],
    answer: 1
  },
  {
    question: "The SI unit of resistance is:",
    options: ["Coulomb", "Ohm", "Ampere", "Watt"],
    answer: 1
  },
  
  {
    question: "In the circuit below, three resistors, 2Ω, 4 Ω and 12 Ω are connected in parallel and a 12 V battery is connected across the combination. The current flowing through the 12 Ω resistor is ",
    image: "./Screenshot_20251123-201921.png",
    options: ["9.6A", "14.4A", "1.0A", "3.2A"],
    answer: 3
  },
  
  {
    question: "Which of these has the dimension [ML⁻³]?",
    options: ["Pressure", "Density", "Acceleration", "Velocity"],
    answer: 1
  },
  {
    question: "The dimensional formula for force is:",
    options: ["[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]", "[M⁰L¹T⁻²]"],
    answer: 0
  },
  {
    question: "The quantity measured in joules per second is:",
    options: ["Energy", "Power", "Force", "Work"],
    answer: 1
  },
  {
    question: "Which of these has the unit of kg·m/s²?",
    options: ["Force", "Energy", "Pressure", "Momentum"],
    answer: 0
  },
  {
    question: "Work done is given by:",
    options: ["Force × Distance", "Force ÷ Distance", "Force × Time", "Force ÷ Time"],
    answer: 0
  },
  {
    question: "From the diagram above, OT is, ",
    image: "./Screenshot_20251123-201945.png",
    options: ["18N", "14N", "5N", "2N"],
    answer: 2
  },
  {
    question: "The SI unit of work is equivalent to:",
    options: ["Newton", "Pascal", "Joule", "Watt"],
    answer: 2
  },
  {
    question: "Which of the following is a derived quantity?",
    options: ["Mass", "Length", "Time", "Velocity"],
    answer: 3
  },
  {
    question: "From the velocity-time graph shown above, which of the following quantities CANNOT be determined?",
    image: "./Screenshot_20251123-202739.png",
    options: ["Deceleration", "initial velocity", "total distance covered", "initial acceleration"],
    answer: 3
  },
  {
    question: "The SI unit of momentum is:",
    options: ["kg·m/s", "kg·m²/s²", "N·m", "Joule"],
    answer: 0
  },
  {
    question: "The diagram above shows a wooden block just about to slide down an inclined plane whose inclination to the horizontal is α. The coefficient of frictional force between the block and the plane is ",
    image: "./Screenshot_20251123-202804.png",
    options: ["sin oc", "tan oc", "cot oc", "cos oc"],
    answer: 1
  },
  {
    question: "What is the SI unit of energy per unit time?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: 2
  },
  {
    question: "Which of these is not a derived quantity?",
    options: ["Speed", "Density", "Current", "Acceleration"],
    answer: 2
  },
  {
    question: "The SI unit of temperature is:",
    options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
    answer: 1
  },
  
  {
    question: "From the diagram above, calculate the work done when the particle moves from x = 0m to x = 80m. ",
    image: "./Screenshot_20251123-202836.png",
    options: ["1200", "2400", "6000", "7000"],
    answer: 1
  },
  {
    question: "Which physical quantity is represented by N·m?",
    options: ["Power", "Work", "Pressure", "Force"],
    answer: 1
  },
  {
    question: "The SI unit of frequency is:",
    options: ["Hertz", "Radian", "Newton", "Ohm"],
    answer: 0
  },
  {
    question: "Which derived quantity has the unit kg·m⁻¹·s⁻²?",
    options: ["Pressure", "Force", "Density", "Power"],
    answer: 0
  },
  {
    question: "From the diagram above, if the particles F is at a distance x from O to the right, the phase of the vibration will be different from that at O by",
    image: "./Screenshot_20251123-202913.png",
    options: ["2x/h", "h/2x", "x/h", "h/x"],
    answer: 0
  },
  
  {
    question: "The SI unit of heat is:",
    options: ["Joule", "Calorie", "Watt", "Kelvin"],
    answer: 0
  },
  {
    question: "Which physical quantity has a dimension of [ML²T⁻³]?",
    options: ["Power", "Force", "Energy", "Pressure"],
    answer: 0
  },
  {
    question: "What is the SI unit of angular velocity?",
    options: ["Radian per second", "Meter per second", "Degree per second", "Hertz"],
    answer: 0
  },
  {
    question: "Which of these is a base unit?",
    options: ["Coulomb", "Meter", "Newton", "Joule"],
    answer: 1
  },
  {
    question: "From the diagram below, calculate the incident angle i.",
    image: "./Screenshot_20251123-202952.png",
    options: ["41°", "49°", "55°", "61°"],
    answer: 0
  },
  {
    question: "The dimensional formula of pressure is:",
    options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[M⁰L⁰T⁰]", "[ML²T⁻³]"],
    answer: 0
  },
  {
    question: "What does the diagram above represent?",
    image: "./Screenshot_20251123-203015.png",
    options: ["telescope in normal use", "microscope in normal use", "telescope in abnormal use. ", "microscope in abnormal use"],
    answer: 0
  },
  {
    question: "The SI unit of luminous intensity is:",
    options: ["Candela", "Lux", "Lumen", "Watt"],
    answer: 0
  },
  {
    question: "Electric current is measured in:",
    options: ["Volt", "Coulomb", "Ampere", "Ohm"],
    answer: 2
  },
  {
    question: "The SI unit of potential difference is:",
    options: ["Ampere", "Ohm", "Coulomb", "Volt"],
    answer: 3
  },
  {
    question: "Which quantity has no dimension?",
    options: ["Strain", "Force", "Stress", "Power"],
    answer: 0
  },
  {
    question: "The unit of specific heat capacity is:",
    options: ["J/kg·K", "J/kg", "J/K", "W/kg"],
    answer: 0
  },
  {
    question: "From the diagram, the region of zero acceleration is",
    image: "./Screenshot_20251123-205245.png",
    options: ["MN", "NS", "SP ", "PQ"],
    answer: 1
  },
  {
    question: "Which of these is NOT a derived SI unit?",
    options: ["Newton", "Joule", "Kilogram", "Pascal"],
    answer: 2
  },
  {
    question: "The dimensional formula of energy is:",
    options: ["[ML²T⁻²]", "[MLT⁻²]", "[M⁰L¹T⁻¹]", "[ML⁻¹T⁻²]"],
    answer: 0
  },
  {
    question: "The quantity measured in coulombs per second is:",
    options: ["Current", "Charge", "Resistance", "Voltage"],
    answer: 0
  },
  {
    question: "From the diagram above, the point that represent the elastic limit is ",
    image: "./Screenshot_20251123-205305.png",
    options: ["Q", "R", "S ", "T"],
    answer: 1
  },
  {
    question: "Which of these is both a derived and vector quantity?",
    options: ["Speed", "Velocity", "Density", "Energy"],
    answer: 1
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Force", "Velocity", "Power", "Acceleration"],
    answer: 2
  },
  {
    question: "What is the S.I. unit of mass?",
    options: ["Gram", "Kilogram", "Pound", "Newton"],
    answer: 1
  },
  {
    question: "The S.I. unit of time is?",
    options: ["Minute", "Second", "Hour", "Day"],
    answer: 1
  },
  {
    question: "The fundamental unit of electric current is?",
    options: ["Volt", "Coulomb", "Ampere", "Ohm"],
    answer: 2
  },
  {
    question: "The diagram above show a stationery wave of wavelength 40 cm in a closed tube. The length L in the resonating air column is ",
    image: "./Screenshot_20251123-205322.png",
    options: ["10cm", "20cm", "30cm ", "40cm"],
    answer: 0
  },
  
  {
    question: "Which of the following quantities is NOT a fundamental quantity?",
    options: ["Length", "Mass", "Time", "Force"],
    answer: 3
  },
  {
    question: "The S.I. unit of temperature is?",
    options: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
    answer: 1
  },
  {
    question: "The unit of luminous intensity is?",
    options: ["Candela", "Lux", "Lumen", "Watt"],
    answer: 0
  },
  {
    question: "Which of the following is a derived quantity?",
    options: ["Length", "Mass", "Velocity", "Temperature"],
    answer: 2
  },
  {
    question: "Calculate the effective capacitance of the circuit above",
    image: "./Screenshot_20251123-205339.png",
    options: ["1 microfarad", "2 microfarad", "3 microfarad ", "4 microfarad"],
    answer: 0
  },
  
  {
    question: "The unit of pressure is?",
    options: ["Pascal", "Newton", "Joule", "Watt"],
    answer: 0
  },
  {
    question: "One Newton is equivalent to?",
    options: ["1 kg·m/s", "1 kg·m/s²", "1 kg/s²", "1 kg·m²/s²"],
    answer: 1
  },
  {
    question: "The unit of energy is?",
    options: ["Joule", "Newton", "Pascal", "Ampere"],
    answer: 0
  },
  {
    question: "The diagram above is that of ",
    image: "./Screenshot_20251123-205359.png",
    options: ["a step- up transformer", "20cm", "an autotransformer ", "an oil transformer"],
    answer: 0
  },
  {
    question: "Which of the following is not a base quantity?",
    options: ["Length", "Mass", "Temperature", "Density"],
    answer: 3
  },
  {
    question: "Derived units are obtained from?",
    options: ["Base units", "Fundamental laws", "Physical constants", "Mathematical formulae"],
    answer: 0
  },
  {
    question: "The S.I. unit of force is?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: 1
  },
  {
    question: "Which of the following is not a base quantity?",
    image: "./Screenshot_20251123-211240.png",
    options: ["a compound microscope", "a binocular", "an astronomical telescope", "a periscope"],
    answer: 2
  },
  {
    question: "Which of these quantities is dimensionless?",
    options: ["Velocity", "Strain", "Pressure", "Acceleration"],
    answer: 1
  },
  {
    question: "The unit of work and energy are the same. What is it?",
    options: ["Watt", "Joule", "Newton", "Calorie"],
    answer: 1
  },
  {
    question: "A body of mass 6kg rests on an inclined plane. The normal reaction R and the limiting frictional force is F as shown in the diagram. If F is 30N and g=10ms<sup>-2</sup>, then the angle of inclination, Ө is",
    image: "./Screenshot_20251123-211342.png",
    options: ["15°", "60°", "45°", "30°"],
    answer: 3
  },
  {
    question: "The S.I. unit of power is?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: 2
  },
  {
    question: "The S.I. unit of frequency is?",
    options: ["Hertz", "Newton", "Joule", "Tesla"],
    answer: 0
  },
  {
    question: "Which of the following is a vector quantity?",
    options: ["Mass", "Temperature", "Velocity", "Energy"],
    answer: 2
  },
  {
    question: "The dimensional formula of force is?",
    options: ["MLT⁻²", "ML²T⁻²", "M⁻¹LT", "M⁻¹L²T⁻³"],
    answer: 0
  },
  {
    question: "The dimensional formula for pressure is?",
    options: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻³", "M⁻¹LT"],
    answer: 0
  },
  {
    question: "Which of the following quantities has the unit m/s²?",
    options: ["Velocity", "Acceleration", "Force", "Pressure"],
    answer: 1
  },
  {
    question: "The unit of momentum is?",
    options: ["kg·m/s", "kg·m/s²", "kg·m²/s²", "N·s"],
    answer: 0
  },
  {
    question: "The S.I. unit of charge is?",
    options: ["Ampere", "Coulomb", "Volt", "Farad"],
    answer: 1
  },
  {
    question: "What is the unit of electric potential difference?",
    options: ["Ampere", "Ohm", "Volt", "Coulomb"],
    answer: 2
  },
  {
    question: "The S.I. unit of resistance is?",
    options: ["Ohm", "Volt", "Ampere", "Farad"],
    answer: 0
  },
  {
    question: "The S.I. unit of capacitance is?",
    options: ["Ohm", "Henry", "Farad", "Tesla"],
    answer: 2
  },
  {
    question: "What is the S.I. unit of inductance?",
    options: ["Farad", "Henry", "Ohm", "Volt"],
    answer: 1
  },
  {
    question: "A particle is injected perpendicularly into an electric field.It travels along a curved path as depicted in the diagram. The particle is",
    image: "./Screenshot_20251123-211401.png",
    options: ["gamma ray", "a proton", "a neutron", "an electron"],
    answer: 3
  },
  
  {
    question: "The S.I. unit of magnetic flux density is?",
    options: ["Tesla", "Weber", "Henry", "Farad"],
    answer: 0
  },
  {
    question: "The unit of magnetic flux is?",
    options: ["Weber", "Tesla", "Ampere", "Henry"],
    answer: 0
  },
  {
    question: "The diagram above shows a maximum and minimum thermometer divided into three portions P, Q and r. which of the following is true about the respective content of p, q and R? ",
    image: "./Screenshot_20251123-211427.png",
    options: ["Air, alcohol and mercury", "alcohol, mercury and alcohol", "mercury, alcohol and mercury", "Air, mercury and alcohol"],
    answer: 2
  },
  {
    question: "The unit of angular velocity is?",
    options: ["radian", "radian per second", "degree", "degree per second"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a derived quantity?",
    options: ["Velocity", "Density", "Temperature", "Force"],
    answer: 2
  },
  {
    question: "The dimensional formula for energy is?",
    options: ["ML²T⁻²", "MLT⁻²", "ML⁻¹T⁻²", "M⁻¹L²T⁻³"],
    answer: 0
  },
  {
    question: "The S.I. unit of density is?",
    options: ["kg/m²", "kg/m³", "kg·m/s²", "g/cm³"],
    answer: 1
  },
  {
    question: "The S.I. unit of area is?",
    options: ["m", "m²", "m³", "m/s"],
    answer: 1
  },
  {
    question: "Which of these quantities has the unit N/m²?",
    options: ["Stress", "Energy", "Velocity", "Power"],
    answer: 0
  },
  {
    question: "What is the S.I. unit of strain?",
    options: ["No unit", "Newton", "Joule", "Pascal"],
    answer: 0
  },
  {
    question: "Which of the following has the unit of J/kg?",
    options: ["Specific heat capacity", "Pressure", "Energy", "Power"],
    answer: 0
  },
  {
    question: "The unit of angular acceleration is?",
    options: ["rad/s", "rad/s²", "s/rad", "radian"],
    answer: 1
  },
  {
    question: "The electromotive force in the secondary winding is",
    image: "./Screenshot_20251124-013915.png",
    options: ["stabilizing", "reducing", "increasing", "varying"],
    answer: 2
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Force", "Velocity", "Mass", "Displacement"],
    answer: 2
  },
  {
    question: "The unit of surface tension is?",
    options: ["N/m", "N/m²", "J/m", "J/m²"],
    answer: 0
  },
  {
    question: "The S.I. unit of energy per unit charge is?",
    options: ["Volt", "Joule", "Ohm", "Coulomb"],
    answer: 0
  },
  {
    question: "Which of the following quantities has no direction?",
    options: ["Velocity", "Force", "Mass", "Acceleration"],
    answer: 2
  },
  {
    question: "Calculate the e.m.f of the cell in the above circuit if its internal resistance is negligible.",
    image: "./Screenshot_20251124-013937.png",
    options: ["12V", "36V", "2V", "8V"],
    answer: 3
  },
  {
    question: "Which of these is a base quantity?",
    options: ["Pressure", "Force", "Length", "Power"],
    answer: 2
  },
  {
    question: "Which of these is NOT a physical quantity?",
    options: ["Mass", "Temperature", "Length", "Happiness"],
    answer: 3
  },
  {
    question: "What is the S.I. unit of specific volume?",
    options: ["m³/kg", "kg/m³", "m²/kg", "kg/m²"],
    answer: 0
  },
  {
    question: "The diagram above shows plank RS pivoted at its centre of gravity O and is in equilibrium with the weighs P and Q. If a weight 2P is added to P, the plank will be in equilibrium again by.",
    image: "./Screenshot_20251124-013956.png",
    options: ["moving P nearer to O", "moving Q nearer to O", "adding a weight of Q to Q", "moving P further away from O"],
    answer: 1
  },
  
  {
    question: "The S.I. unit of stress is the same as that of?",
    options: ["Pressure", "Power", "Work", "Energy"],
    answer: 0
  },
  {
    question: "Which of these pairs has the same dimensional formula?",
    options: ["Work and Energy", "Force and Velocity", "Power and Acceleration", "Pressure and Momentum"],
    answer: 0
  },
  {
    question: "The dimensional formula of power is?",
    options: ["ML²T⁻³", "ML²T⁻²", "MLT⁻²", "M⁻¹L²T⁻³"],
    answer: 0
  },
  {
    question: "Which of the following pairs has equal base and derived units?",
    options: ["Energy and Force", "Power and Work", "Mass and Weight", "Joule and Newton-meter"],
    answer: 3
  },
  {
    question: "Which physical quantity has the unit kg·m²/s²?",
    options: ["Force", "Work", "Momentum", "Acceleration"],
    answer: 1
  },
  {
    question: "The refractive index of the medium M in the diagram above is",
    image: "./Screenshot_20251124-014136.png",
    options: ["2/√3", "√3", "1/√3", "2√3"],
    answer: 1
  },
  {
    question: "Which of the following quantities is a vector?",
    options: ["Speed", "Distance", "Displacement", "Time"],
    answer: 2
  },
  {
    question: "Which of these represents uniform motion?",
    options: ["Constant velocity", "Changing acceleration", "Constant speed in a curve", "Zero displacement"],
    answer: 0
  },
  {
    question: "In the series a.c circuit shown below, the p.d across the inductors 8 V<sub>r.m.s</sub>>. The effective voltage is ",
    image: "./Screenshot_20251124-014054.png",
    options: ["10v", "2v", "14v", "48v"],
    answer: 0
  },
  
  {
    question: "A car moves with a uniform speed of 20 m/s for 10 seconds. What distance does it cover?",
    options: ["100 m", "150 m", "200 m", "250 m"],
    answer: 2
  },
  {
    question: "Which of the following is not a type of motion?",
    options: ["Linear", "Rotational", "Translational", "Circular current"],
    answer: 3
  },
  {
    question: "Acceleration is defined as?",
    options: ["Change in displacement", "Change in velocity per unit time", "Change in speed", "Velocity per time"],
    answer: 1
  },
  {
    question: "The slope of a velocity-time graph represents?",
    options: ["Speed", "Acceleration", "Displacement", "Momentum"],
    answer: 1
  },
  {
    question: "The area under a velocity-time graph gives?",
    options: ["Acceleration", "Force", "Distance", "Momentum"],
    answer: 2
  },
  {
    question: "If a car accelerates from rest at 4 m/s² for 5 seconds, its final velocity is?",
    options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
    answer: 2
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Velocity", "Displacement", "Speed", "Force"],
    answer: 2
  },
  {
    question: "In the diagram above, PQ and R are vectors.Which of the following options gives the correct relationship between the vectors ?",
    image: "./Screenshot_20251124-014136.png",
    options: ["P = Q + R", "P = Q - R", "P = R - Q", "P + Q + R = 0"],
    answer: 3
  },
  {
    question: "A body moving in a circle at constant speed is said to have?",
    options: ["Zero velocity", "Constant acceleration", "Variable velocity", "No acceleration"],
    answer: 2
  },
  {
    question: "Which of the following equations of motion is correct?",
    options: ["v = u + at", "s = ut − ½at²", "v² = u² − 2as", "t = s/u + a"],
    answer: 0
  },
  {
    question: "What is the unit of acceleration?",
    options: ["m/s", "m/s²", "m²/s", "s/m²"],
    answer: 1
  },
  {
    question: "A body of mass 2 kg moves with velocity 3 m/s. Its momentum is?",
    options: ["3 kgm/s", "5 kgm/s", "6 kgm/s", "9 kgm/s"],
    answer: 2
  },
  {
    question: "Newton’s first law of motion is also known as?",
    options: ["Law of acceleration", "Law of inertia", "Law of momentum", "Law of action and reaction"],
    answer: 1
  },
  {
    question: "The force which opposes motion between two surfaces in contact is?",
    options: ["Tension", "Friction", "Normal force", "Weight"],
    answer: 1
  },
  {
    question: "If no external force acts on a body, its state of motion will?",
    options: ["Change", "Remain constant", "Accelerate", "Stop"],
    answer: 1
  },
  {
    question: "The diagram above represents the stress-strain for a typical metal rod. What does X represent? ",
    image: "./Screenshot_20251124-014549.png",
    options: ["yield point", "breaking point", "elastic limit", "proportional limit"],
    answer: 1
  },
  {
    question: "The acceleration due to gravity on Earth is approximately?",
    options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
    answer: 1
  },
  {
    question: "A stone is thrown vertically upwards with velocity 20 m/s. What is its maximum height? (g = 10 m/s²)",
    options: ["10 m", "20 m", "30 m", "40 m"],
    answer: 1
  },
  {
    question: "In the diagram above, which of the angles Ө1, Ө2, Ө3, and Ө4 is the angle of deviation of a ray of light passing through XYZ?",
    image: "./Screenshot_20251124-014643.png",
    options: ["Ө2", "Ө3", "Ө1", "Ө4"],
    answer: 1
  },
  {
    question: "The third law of motion states that?",
    options: ["Force equals mass times acceleration", "Every action has an equal and opposite reaction", "Inertia is proportional to mass", "Momentum is conserved"],
    answer: 1
  },
  {
    question: "Which of these quantities is conserved in all collisions?",
    options: ["Energy", "Force", "Momentum", "Acceleration"],
    answer: 2
  },
  {
    question: "When a car suddenly stops, passengers move forward due to?",
    options: ["Friction", "Inertia", "Momentum", "Acceleration"],
    answer: 1
  },
  {
    question: "The net capacitance in the circuit shown above is ",
    image: "./Screenshot_20251124-014727.png",
    options: ["8.0 μF", "6.0 μF", "2.0 μF", "4.0 μF"],
    answer: 2
  },
  {
    question: "A 5 kg object accelerates at 2 m/s². The force acting is?",
    options: ["2 N", "5 N", "7 N", "10 N"],
    answer: 3
  },
  {
    question: "The momentum of a moving body is the product of?",
    options: ["Mass and acceleration", "Mass and velocity", "Force and time", "Velocity and distance"],
    answer: 1
  },
  {
    question: "The unit of momentum is?",
    options: ["kg·m/s", "kg·m/s²", "N·m", "J/s"],
    answer: 0
  },
  {
    question: "A ball thrown vertically upward returns to the thrower because of?",
    options: ["Inertia", "Gravity", "Momentum", "Elasticity"],
    answer: 1
  },
  {
    question: "A car moves at 72 km/h. What is its speed in m/s?",
    options: ["18 m/s", "20 m/s", "25 m/s", "30 m/s"],
    answer: 1
  },
  {
    question: "A force of 50 N moves an object 2 m in the direction of the force. The work done is?",
    options: ["25 J", "50 J", "75 J", "100 J"],
    answer: 3
  },
  {
    question: "Uniform acceleration means?",
    options: ["Constant speed", "Constant acceleration", "Zero velocity", "Zero acceleration"],
    answer: 1
  },
  {
    question: "If a car moves with uniform speed, its acceleration is?",
    options: ["Zero", "Constant", "Increasing", "Negative"],
    answer: 0
  },
  {
    question: "The rate of change of momentum is equal to?",
    options: ["Velocity", "Force", "Acceleration", "Work"],
    answer: 1
  },
  {
    question: "A freely falling object has?",
    options: ["Uniform speed", "Uniform acceleration", "Zero acceleration", "Increasing acceleration"],
    answer: 1
  },
  {
    question: "In the absence of air resistance, all bodies fall with?",
    options: ["Different acceleration", "Equal acceleration", "Constant speed", "Increasing force"],
    answer: 1
  },
  {
    question: "What is the resultant resistance of the circuit given above ?",
    image: "./Screenshot_20251124-015005.png",
    options: ["8Ω", "11Ω", "4Ω", "3.6Ω"],
    answer: 0
  },
  {
    question: "If a car accelerates from 5 m/s to 15 m/s in 5 s, find its acceleration.",
    options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"],
    answer: 1
  },
  {
    question: "A truck of mass 2000 kg moves with velocity 10 m/s. Its momentum is?",
    options: ["2000 kgm/s", "20,000 kgm/s", "200 kgm/s", "2,000,000 kgm/s"],
    answer: 1
  },
  {
    question: "Which of these describes uniform circular motion?",
    options: ["Constant velocity", "Constant speed with changing direction", "Constant acceleration", "Zero net force"],
    answer: 1
  },
  {
    question: "The centripetal force acts?",
    options: ["Tangentially", "Outward", "Inward", "Downward"],
    answer: 2
  },
  {
    question: "The diagram represents a block and tackle pulley system on which an effort of W Newtons supports a load of 120.0N. If the efficiency of the machine is 40, then the value of W is ",
    image: "./Screenshot_20251124-015035.png",
    options: ["28N", "48N", "288N", "50N"],
    answer: 1
  },
  
  {
    question: "When no external force acts on a system, its total momentum?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: 2
  },
  {
    question: "The motion of the Earth around the Sun is an example of?",
    options: ["Linear motion", "Circular motion", "Random motion", "Translational motion"],
    answer: 1
  },
  {
    question: "A body is said to be in equilibrium when?",
    options: ["It is moving", "Resultant force is zero", "Acceleration is constant", "Force is maximum"],
    answer: 1
  },
  {
    question: "The impulse of a force is given by?",
    options: ["Force × Distance", "Force × Time", "Mass × Velocity", "Energy/Time"],
    answer: 1
  },
  {
    question: "The unit of impulse is the same as that of?",
    options: ["Work", "Force", "Momentum", "Acceleration"],
    answer: 2
  },
  {
    question: "In the diagram above, the hanging mass m<sub>1</sub> is adjusted until m<sub>2</sub>  is on the verge of sliding. The coefficient of static friction between mass m and the table is",
    image: "./Screenshot_20251124-015101.png",
    options: ["m<sub>1</sub>/m<sub>2</sub>", "m<sub>1</sub>g/m<sub>2</sub>", "m<sub>2</sub>/m<sub>1</sub>", "m<sub>2</sub>g/m<sup>1</sup>"],
    answer: 3
  },
  {
    question: "A force of 20 N acts for 2 s. The impulse is?",
    options: ["10 Ns", "20 Ns", "30 Ns", "40 Ns"],
    answer: 3
  },
  {
    question: "A body moving with constant velocity has?",
    options: ["Zero acceleration", "Constant force", "Increasing momentum", "Decreasing velocity"],
    answer: 0
  },
  {
    question: "The first law of motion defines?",
    options: ["Force", "Momentum", "Inertia", "Acceleration"],
    answer: 2
  },
  {
    question: "In the diagram below, if the atmosphere pressure is 760mm, the pressure in the chamber G is",
    image: "./Screenshot_20251124-015122.png",
    options: ["660mm", "830mm", "690mm", "860mm"],
    answer: 1
  },
  {
    question: "When a gun is fired, the recoil of the gun is due to?",
    options: ["Law of inertia", "Conservation of momentum", "Gravitational pull", "Air resistance"],
    answer: 1
  },
  {
    question: "What is the S.I. unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: 1
  },
  {
    question: "The force acting on a body of mass 10 kg moving with acceleration 2 m/s² is?",
    options: ["5 N", "10 N", "15 N", "20 N"],
    answer: 3
  },
  {
    question: "In the diagram below, which of the simple pendula will resonate with P when set into oscillation? ",
    image: "./Screenshot_20251124-015156.png",
    options: ["U", "T", "R and T", "Q and R"],
    answer: 1
  },
  {
    question: "Which of these describes retardation?",
    options: ["Increase in velocity", "Decrease in velocity", "Constant speed", "Zero motion"],
    answer: 1
  },
  {
    question: "The motion of a pendulum is an example of?",
    options: ["Random motion", "Circular motion", "Oscillatory motion", "Translational motion"],
    answer: 2
  },
  {
    question: "Work is said to be done when?",
    options: ["A force acts without motion", "A force moves a body through a distance", "An object remains at rest", "A force is balanced"],
    answer: 1
  },
  {
    question: "The SI unit of work is?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    answer: 2
  },
  {
    question: "Calculate the effective capacitance of the circuit above. ",
    image: "./Screenshot_20251124-015244.png",
    options: ["4μf", "3μf", "2μf", "1μf"],
    answer: 3
  },
  {
    question: "If a force of 10 N moves a body through 5 m, the work done is?",
    options: ["2 J", "15 J", "50 J", "100 J"],
    answer: 2
  },
  {
    question: "A man lifts a 20 kg load to a height of 2 m. Find the work done. (g = 10 m/s²)",
    options: ["200 J", "300 J", "400 J", "500 J"],
    answer: 2
  },
  {
    question: "Energy is defined as?",
    options: ["The ability to move", "The rate of doing work", "The ability to do work", "The force applied on a body"],
    answer: 2
  },
  {
    question: "The unit of energy is?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    answer: 1
  },
  {
    question: "Power is the rate of?",
    options: ["Change of acceleration", "Doing work", "Energy flow", "Displacement"],
    answer: 1
  },
  {
    question: "The unit of power is?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: 1
  },
  {
    question: "If 200 J of work is done in 5 seconds, the power developed is?",
    options: ["20 W", "25 W", "30 W", "40 W"],
    answer: 1
  },
  {
    question: "A force of 15 N acts through a distance of 3 m in the direction of the force. Find the work done.",
    options: ["30 J", "35 J", "40 J", "45 J"],
    answer: 3
  },
  {
    question: "Which of the following has potential energy?",
    options: ["A rolling ball", "A moving car", "A stretched spring", "A falling stone"],
    answer: 2
  },
  {
    question: "A body of mass 5 kg is raised to a height of 10 m. Calculate its potential energy. (g = 10 m/s²)",
    options: ["50 J", "100 J", "200 J", "500 J"],
    answer: 3
  },
  {
    question: "The energy possessed by a moving body is called?",
    options: ["Potential energy", "Kinetic energy", "Heat energy", "Elastic energy"],
    answer: 1
  },
  {
    question: "A car of mass 800 kg moves at 10 m/s. Find its kinetic energy.",
    options: ["20,000 J", "30,000 J", "40,000 J", "50,000 J"],
    answer: 2
  },
  {
    question: "Kinetic energy is directly proportional to?",
    options: ["Velocity", "Mass", "Velocity squared", "Height"],
    answer: 2
  },
  {
    question: "A 2 kg ball moves with velocity 4 m/s. Its kinetic energy is?",
    options: ["4 J", "8 J", "12 J", "16 J"],
    answer: 3
  },
  {
    question: "When work is done against friction, energy is converted to?",
    options: ["Sound", "Potential energy", "Heat", "Light"],
    answer: 2
  },
  {
    question: "Mechanical energy is the sum of?",
    options: ["Kinetic and heat energy", "Kinetic and potential energy", "Heat and chemical energy", "Work and power"],
    answer: 1
  },
  
  
  //questions from all inclusive calculations in physics
  
  {
    question: "A boy cycles continuously through a distance of 1.0km in 5 minutes. Calculate his average speed.",
    options: ["3.33m/s", "5.0m/s", "12m/s", "15m/s"],
    answer: 0
  },
  
  {
    question: "An air force jet flying with a speed of 335m/s went past an anti aircraft gun. How far is the aircraft 5s later when the gun was fired.",
    options: [ "838m", "3350m", "670m", "1675m" ],
    answer: 3
  },
  
  {
    question: "A car travels with a constant velocity of 45 km/hr for 20s. What distance does it cover in this time?",
    options: ["120m", "300m", "250m", "100m"],
    answer: 2,
  },
  {
    question: "A body starts from rest and accelerates uniformly at 5m/s2 until it attains a velocity of 25m/s. Calculate the time taken to attain this velocity.",
    options: ["5s", "10s", "15s", "20s"],
    answer: 0,
  },
  {
    question: "A train has an initial velocity of 44m/s and an acceleration of -4m/s2. Its velocity after 10 sec is",
    options: [ "2m/s", "4m/s", "8m/s", "12m/s"],
    answer: 1,
  },
  {
    question: "If a car starts from rest and moves with a uniform acceleration of 10m/s² for ten  seconds, the distance it covers in the last one second of motion is",
    options: [ "95m", "100m", "500m", "905m"], 
    answer: 0,
  },
  {
    question: "A body starts from rest and moves with uniform acceleration of 6m/s2. What distance does it cover in the third second?",
    options: [ "15m", "18m", "27m", "30m"], 
    answer: 0,
  },
  {
    question: "A body accelerates uniformly from rest at the rate of 3m/s2 for 8s. Calculate the distance covered by the body during acceleration.",
    options: ["100m", "90m", "96m", "110m"],
    answer: 2,
  },
  {
    question: "A particle starts from rest and moves with a constant acceleration of 0.5m/s². Calculate the time taken by the particle to cover a distance of 25m.",
    options: [ "5s", "20s", "10s", "15s"],
    answer: 2,
  },
  {
    question: "How far will a body move in 4 seconds if uniformly accelerated from rest at the rate of 2m/s².",
    options: ["12m", "10m", "16m", "20m"],
    answer: 2,
  },
  {
    question: "A car takes off from rest and covers a distance of 80m on a straight road in 10s. Calculate the magnitude of its acceleration.",
    options: ["2.0m/s²", "1.6m/s²", "4m/s²", "10m/s²"],
    answer: 1,
  },
  {
    question: "A bus travelling at 15m/s accelerates uniformly at 4m/s2. What is the distance covered in 10s?",
    options: ["300m", "400m", "500m", "350m" ],
    answer: 3,
  },
  {
    question: "A body starts from rest and accelerates uniformly at 5ms'2. Calculate the time taken by the body to cover a distance of 1 km.",
    options: ["10s", "12s", "13s", "20" ],
    answer: 3,
  },
  {
    question: "A particle starts from rest and moves with a constant acceleration of 0.5m/s2. The distance covered by the particle in 10s is",
    options: ["2.5m", "5.0m", "25.0m", "50.0m"],
    answer: 2,
  },
  {
    question: "An aeroplane lands on a runway at a speed of 180km/hr and is brought to rest uniformly in 30 seconds. What distance does it cover on the runway before coming to rest?",
    options: [ "360m", "540m", "750m", "957m"],
    answer: 2,
  },
  {
    question: "Two points on a velocity- time graph have coordinates (5s, 10m/s) and (20s, 20m/s). Calculate the mean acceleration between the two points.",
    options: [ "0.67m/s²", "0.83m/s²", "1.50m/s²", "2.00m/s²"],
    answer: 0,
  },
  {
    question: "A motor vehicle is brought to rest from a speed of 15m/s in 20 seconds. Calculate  the retardation.",
    options: [ "0.75m/s²", "1.33m/s²", "5.00m/s²", "7.50m/s²"],
    answer: 0,
  },
  {
    question: "The diagram represents the velocity - time graph of a body in motion. The total distance travelled by the body is 195m. Calculate the acceleration of the body in section OP of the graph.",
    image: "./Screenshot_20251124-160418.png",
    options: ["2.0m/s²", "5m/s²", "6m/s²", "2.5m/s²"],
    answer: 3,
  },
  {
    question: "The diagram above illustrates the velocity -time graph of the motion of a body. Calculate the total distance covered by the body.",
    image:"./Screenshot_20251124-160731.png" ,
    options: ["100m", "200m", "225m", "250m" ],
    answer: 2,
  },
  {
    question: "A ball is dropped from a height of 45m above the ground. Calculate the velocity of the ball just before it strikes the ground.",
    options: ["20m/s", "25m/s", "30m/s", "35m/s"],
    answer: 2,
  },
  {
    question: "An orange is dropped from a height of 100m above the ground level. Calculate the velocity of the orange just before it strikes the ground.",
    options: ["10.8m/s", "44.7m/s", "34.7m/s", "12.8m/s"],
    answer: 1,
  },
  {
    question: "The graph above describes the motion of a particle. The acceleration of the particle during the motion is",
    image: "./Screenshot_20251124-162016.png",
    options: [ "O.OOm/s²", "0.25m/s²", "4.00m/s²", "8.00m/s²"],
    answer: 2,
  },
  {
    question: "The diagram above shows a velocity- time graph representing the motion of a car. Find the total distance covered during the acceleration and retardation periods of the motion",
    image: "./Screenshot_20251124-232510.png",
    options: ["75m", "150m", "300m", "375m"],
    answer: 0,
  },
  {
    question: "A stone is released from a height of 80m above the ground. Calculate its velocity just before it strikes the ground.",
    options: [ "50m/s", "40m/s", "30m/s", "60m/s"],
    answer: 1,
  },
  {
    question: "A body falls freely under gravity (g = 9.8m/s²) from a height of 40m on to the top of a platform 0.8m above the ground. It’s velocity on reaching the platform is",
    options: ["784m/s", "80m/s", "78.4m/s", "27.7m/s"],
    answer: 3,
  },
  {
    question: "An orange drops to the ground from the top of a tree 45m tall. How long does it take to reach the ground?",
    options: ["5s", "1s", "3s", "2s"],
    answer: 2,
  },
  {
    question: "An object is released from rest at a height of 25m. Calculate the time it takes to fall to the ground.",
    options: ["4.44s", "5.32s", "2.24s", "1.24s"],
    amswer: 2,
  },
  {
    question: "A palm fruit dropped to the ground from the top of a tree 45m tall. How long does it take to reach the ground? [g = 10m/s²]",
    options: ["9s", "4.5s", "6s", "3s"],
    answer: 3,
  },
  {
    question: "A stone is dropped from the top of a tower of height 11.25m. Calculate the time it will take to reach the ground.",
    options: ["1.50s", "2.5s", "3.5s", "4.5s"],
    answer: 0,
  },
  {
    question: "A small metal ball is thrown vertically upwards from the top of a tower with an initial  velocity of 20m/s. If the ball took a total of 6 seconds to reach the ground level, determine the height of the tower.(g=10m/s²)",
    options: ["60m", "20m", "100m", "120m"],
    amswer: 1,
  },
  {
    question: "A piece of stone is projected vertically upwards with a speed of 25m/s. Determine its speed at its highest point reached.",
    options: ["1.0m/s", "2.0m/s", "3.0m/s", "0.0m/s"],
    answer: 3,
  },
  {
    question: "In free fall, a body of mass 1kg drops from a height of 125m from rest in 5s. How long will it take another body of mass 2kg to fall from rest from the same height? [g=10m/s²]",
    options: ["5s", "10s", "12s", "15s"],
    answer: 0,
  },
  {
    question: "A force of 20N applied parallel to the surface of a horizontal table is just sufficient to make a block of mass 4kg move on the table. Calculate the coefficient of friction between the block and the table (g=10m/s²).",
    options: ["0.5", "0.1", "0.2", "0.4"],
    answer: 0,
  },
  {
    question: "A metal block of mass 5kg lies on a rough horizontal platform. If a horizontal force of 8N applied to the block through its center of mass just slides the block on the platform, then the coefficient of limiting friction between the block and the platform is",
    options: ["0.16", "0.63", "0.80", "1.60"],
    answer: 0
  },
  {
    question: "A lOOKg box is pushed along a road with a force of 500N. If the box moves with a uniform velocity, the coefficient of friction between the box and the road is",
    options: ["0.5", "0.4", "1.0", "0.8"],
    answer: 0,
  },
  {
    question: "What is the coefficient of static friction between a load of mass 2kg and horizontal surface, if the limiting frictional force is ION",
    options: ["2.0", "1.5", "0.5", "1,0"],
    answer: 2,
  },
  {
    question: "A block weighing 15N rests on a flat surface and a horizontal force of 3N is exerted on it. Determine the frictional force on the block.",
    options: ["1N", "2N", "4N", "3N"],
    answer: 3,
  },
  {
    question: "A concrete block of mass 35kg is pulled along a horizontal floor with the aid of a rope inclined at an angle of 30° to the horizontal. If the coefficient of friction is 0.75, calculate the force required to move the block over the floor",
    options: [ "122.5N", "211.5N", "250.5", "120.5"],
    answer: 1,
  },
  {
    question: "A body of mass 10kg rests on a rough inclined plane whose angle of tilt 0 is variable. 0 is gradually increased until the body starts to slide down the plane at 30°. The coefficient of limiting friction between the body and the plane is?",
    options: ["0.30", "0.50", "0.58", "0.87"],
    answer :2,
  },
  {
    question: "A force, 10N drags a mass 10kg on a horizontal table with an acceleration of 0.2m/s². If the acceleration due to gravity is 10m/s², the coefficient of friction between the moving mass and the table is?",
    options: ["0.02","0.08","0.20","0.80"],
  answer:3,
},
{
  question: "The coefficient of static friction between a 40kg crate and a concrete surface is 0.25. Find the magnitude of the minimum force needed to keep the crate stationary on the concrete base inclined at 45° to the horizontal.  (g = 10m/s²) ",
  options: ["400N","300N","283N","212N"],
  answer: 3,
},
{
  question: "When a box of mass 45kg is given an initial speed of 5m/s, it slides along a horizontal floor a distance of 3m before coming to rest. What is the coefficient of the kinetic friction between the box and the floor?",
  options: ["⅚","5/12", "⅓","⅔"],
  answer: 1
},
{
  question: "A body of mass 10 kg on a smooth inclined plane is connected over a smooth pulley to a mass of 15 kg as shown above.The acceleration of the system is",
  image: "./Screenshot_20251125-064224.png",
  options: ["¼g", "½g", "⅖g", "¾g"],
  answer: 2,
},
{
  question: "A mass of 2kg on a surface of coefficient of static friction ½ is connected to a second mass of 4kg over a frictionless pulley as shown above. If the acceleration due to gravity is 9.8 m/s², the masses will",
  image: "./Screenshot_20251125-064244.png",
  options: ["accelerate at 4.9m/s²", "remain stationary", "accelerate at 9.8m/s²", "accelerate at 19.6m/s²"],
  answer: 0,
},

//Hooke's law and elasticity
{
  question: "A lOg mass placed on the pan of a spring balance causes an extension of 5cm. If a 15g mass is placed on the pan of the same spring balance, the extension is",
  options: ["3.3cm", "6.5cm","7.5cm", "10.8cm"],
  answer: 2,
},
{
  question: "A spiral spring extends from a length of 10.00cm to 10.01cm when a force of 20N is applied on it. Calculate the force constant of the spring.",
  optios: ["2 × 10⁵N/m", "2 × 10⁴N/m", "2 × 10³N/m", "2 × 10²N/m"],
  answer: 0,
},
{
  question: "The total length of a spring when a mass of 20g is hung from its end is 14cm, while its total length is 16cm when a mass of 30g is hung from the same end. Calculate the unstretched length of the spring assuming Hooke’s law is obeyed.",
  options: ["9.33cm", "10.00cm","10.66cm","12.00cm"],
  answer:1,
},
{
  question: "A force of 100N stretches an elastic string to a total length of 20cm. If an additional force of 100N stretches the string 5cm further, find the natural length of the spring.",
  options: ["15cm","12cm","lOcm", "8cm"],
  amswer: 2,
},
{
  question: "The spiral spring of a spring balance is 25.0cm long when 5N hangs on it and 30.0cm long when the weight is 10N. What is the length of the spring if the weight is 3N assuming Hooke’s law is obeyed?",
  options: ["15.0cm","17.0cm","20.0cm","23.0cm"],
  answer: 3,
},
{
  question: "A force of 15N stretches a spring to a total length of 30cm. An additional force of 1ON stretches the spring 5cm further. Find the natural length of the spring.",
  options: ["25.0cm","22.5cm","20.0cm","15.0cm"],
  answer: 1
},
{
  question: "A piece of rubber 10cm long stretches 6mm when a load of 100N is hung from it. What is the strain?",
  options: ["60", "6", "6 x l0²", "6 x l0³"],
  answer: 2,
},
{
  question: "A load of 20N on a wire of cross-sectional area 8 x 10<sup>–7</sup>m², produces an extension of 10<sup>–4</sup>m. Calculate Young’s Modulus for the material of the wire if its length is 3m.",
  options: ["7.0 x 10¹¹ N/m²", "7.5 x 10¹¹N/m²","8.5 x 10¹¹N/m²","9.0 x 10¹¹N/m²"],
  answer: 1,
},
{
  question: "The tendon in a man’s leg is 0.01m long. If a force of 5N stretches the tendon by 2.0 x 10<sup>–5</sup>m, calculate the strain on the muscle.",
  options: ["5 x 10⁶","5 x 10²", "2 x 10<sup>-3</sup>", "2 x 10<sup>–7</sup>"],
  answer: 1,
}, 
{
  question: "If the stress on a wire is 10⁷N/m² and the wire is stretched from its original length of 10.0cm to 10.05cm. The Young’s Modulus of the wire is",
  options: ["5.0 x 10⁴N/m²", "5.0xl0⁵N/m²", "2.0 x 10⁸N/m²", "2.0 x 10⁹N/m²"],
  answer: 3
},
{
  question: "A spiral spring of natural length 30.0cm and force constant of 20Nm 1 is compressed to 20.0cm. Calculate the energy stored in the spring",
  options: ["0.1J", "0.2J","0.3J", "0.4J"],
  answer: 0,
},
{
  question: "An elastic string of force constant 200N/m is stretched through 0.8m within its elastic limit. Calculate the energy stored in the string.",
  options: ["64J", "20J","40J", "50J"],
  answer: 0,
},
{
  question: "A spring of force constant 1500N/m is acted upon by a constant force of 75N. Calculate the potential energy stored in the spring.",
  options: ["1.9J", "3.2J","3.8J", "5.0J"],
  answer: 0,
},
{
  question: "When a force of 50N is applied to the free end of an elastic cord, an extension of 4cm is produced in the cord. Calculate the work done on the cord.",
  options: ["1J", "2J","3J", "4J"],
  answer: 0,
},
{
  question: "The diagram above represents the graph of the force applied in stretching a spiral against the corresponding extension (X). The force constant of the spring is",
  image: "./Screenshot_20251125-091202.png",
  options: ["20 N/m","40 N/m", "30 N/m", "10 N/m"],
  answer: 0,
},


//work, energy and power
{
  question: "A force varying linearly with the distance acts on a body as shown above.The work done on the body by the force during the first 10 meters of motion is",
  image: "./Screenshot_20251125-091838.png",
  options: [ "100J","150J","200J","300J","600J"],
  amswer: 0,
},
{
  question: "A body is under the action of a force F such that the force - displacement graph of the body is a semicircle as shown above.The work done on the body by the force in moving through 24 meters is",
  image: "./Screenshot_20251125-091902.png",
  options: ["367J", "72J", "144J", "288J"],
  answer: 1,
},
{
  question: "A load of mass 120 kg is raised vertically through a height of 2m in 30s by a machine whose efficiency is 100% .Calculate the power generated by the machine [g = 10 m/s²].",
  options: ["100W", "40W", "80W", "120W"],
  answer: 2,
},
{
  question: "A girl whose mass is 20 kg climbs up 25 steps each of height 15 cm in 10 seconds. Calculate the power expended [g = 10 m/s²]",
  options: ["100W", "75W", "80W", "120W"],
  answer: 1,
},
{
  question: "A man of mass 50 kg ascends a flight of stairs 5m high in 5 seconds. . If acceleration due to gravity is 10 m/s², the power expended is",
  options: ["100W", "200W", "500W", "400W"],
  answer: 2,
},
{
  question: "If a water pump at Kainji dam is capable of lifting 1000 kg of water through a vertical height of 10m in 10 s, the power of the pump is",
  options: ["1kW", "10kW", "12.5kW", "20kW"],
  answer: 1,
},
{
  question: "A man weighing 800 N climbs up a flight of stairs to a height of 15 m in 12.5 secs. What is the man’s average power output?",
  options: ["667W", "810W", "960W", "120W"],
  answer: 2,
},
{
  question: "An electric water pump rated 1.5 kW lifts 200 kg of water through a vertical height of 6 m in 1O sees. What is the efficiency of the pump?",
  options: ["100%", "40%", "80%", "20%"],
  answer: 2,
},
{
  question: "A man whose mass is 80 kg climbs a staircase in 20 s and expends a power of 120 W. Find the height of the staircase [g = 10 m/s²]",
  options: ["1.8m", "2.0m", "2.5m", "3.0m"],
  answer: 3,
},
{
  question: "A stone of mass 2.0 kg is thrown vertically upward with a velocity of 20.0 m/s². Calculate the initial kinetic energy of the stone.",
  options: ["100J", "400J", "800J", "1200J"],
  answer: 1
},
  
  {
    question: "If no energy is lost, the total mechanical energy of a system is?",
    options: ["Constant", "Decreasing", "Increasing", "Zero"],
    answer: 0
  },
  {
    question: "What type of energy transformation occurs in a falling stone?",
    options: ["Kinetic to potential", "Potential to kinetic", "Heat to potential", "Chemical to kinetic"],
    answer: 1
  },
  {
    question: "The work done lifting a 50 N load by 4 m is?",
    options: ["100 J", "150 J", "200 J", "250 J"],
    answer: 2
  },
  {
    question: "Power can be calculated as?",
    options: ["Work × Time", "Work ÷ Time", "Force × Velocity", "Force ÷ Time"],
    answer: 1
  },
  {
    question: "A machine does 400 J of work in 10 s. Find its power.",
    options: ["20 W", "30 W", "40 W", "50 W"],
    answer: 2
  },
  {
    question: "The energy stored in a stretched spring is called?",
    options: ["Elastic potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
    answer: 0
  },
  {
    question: "If a car engine develops 4000 W of power to move a car at 20 m/s, what is the force exerted?",
    options: ["100 N", "150 N", "200 N", "250 N"],
    answer: 2
  },
  {
    question: "A man of mass 60 kg climbs a staircase 5 m high in 10 s. Find his power. (g = 10 m/s²)",
    options: ["200 W", "250 W", "300 W", "350 W"],
    answer: 1
  },
  {
    question: "Which of the following is not a form of energy?",
    options: ["Mechanical", "Nuclear", "Frictional", "Sound"],
    answer: 2
  },
  {
    question: "One horsepower (hp) is equal to?",
    options: ["500 W", "650 W", "746 W", "1000 W"],
    answer: 2
  },
  {
    question: "The work done in moving an object horizontally with no friction is?",
    options: ["Zero", "Minimum", "Maximum", "Infinite"],
    answer: 0
  },
  {
    question: "A body of weight 100 N is lifted vertically through 2 m. Calculate the work done.",
    options: ["50 J", "100 J", "150 J", "200 J"],
    answer: 3
  },
  {
    question: "The efficiency of a machine is the ratio of?",
    options: ["Input to output", "Output to input", "Force to distance", "Work to time"],
    answer: 1
  },
  {
    question: "A machine with an efficiency of 80% and input of 500 J gives an output of?",
    options: ["300 J", "350 J", "400 J", "450 J"],
    answer: 2
  },
  {
    question: "If the velocity of a moving car is doubled, its kinetic energy becomes?",
    options: ["Doubled", "Tripled", "Quadrupled", "Halved"],
    answer: 2
  },
  {
    question: "Work done is negative when?",
    options: ["Force and displacement are in the same direction", "No motion occurs", "Force and displacement are opposite", "Force acts at right angles"],
    answer: 2
  },
  {
    question: "Which of the following devices converts electrical energy to mechanical energy?",
    options: ["Electric motor", "Generator", "Battery", "Solar panel"],
    answer: 0
  },
  {
    question: "Which of the following has both kinetic and potential energy?",
    options: ["A falling apple", "A stretched spring at rest", "A battery", "A rolling ball on flat ground"],
    answer: 0
  },
  {
    question: "Energy can neither be created nor destroyed. This is the law of?",
    options: ["Inertia", "Conservation of energy", "Motion", "Thermodynamics"],
    answer: 1
  },
  {
    question: "The work done in holding a book stationary on a table is?",
    options: ["Zero", "Equal to mg", "Infinite", "Maximum"],
    answer: 0
  },
  {
    question: "A car engine does 30 kJ of work in 15 s. Calculate its power.",
    options: ["1000 W", "1500 W", "2000 W", "2500 W"],
    answer: 2
  },
  {
    question: "A 4 kg mass moving at 5 m/s has kinetic energy equal to?",
    options: ["25 J", "50 J", "75 J", "100 J"],
    answer: 3
  },
  {
    question: "Which of these expressions represents potential energy?",
    options: ["½mv²", "mgh", "Pt", "Fv"],
    answer: 1
  },
  {
    question: "A force acts at an angle of 60° to displacement. The work done is?",
    options: ["F × s × sin60", "F × s × cos60", "F × s", "F/s"],
    answer: 1
  },
  {
    question: "When work is done at constant speed, power is proportional to?",
    options: ["Speed", "Force", "Time", "Mass"],
    answer: 0
  },
  {
    question: "Which of these is a unit of energy?",
    options: ["Joule", "Newton", "Ampere", "Coulomb"],
    answer: 0
  },
  {
    question: "The mechanical advantage of a machine is the ratio of?",
    options: ["Load to effort", "Effort to load", "Input to output", "Force to time"],
    answer: 0
  },
  {
    question: "If a machine lifts a 100 N load through 2 m with an effort of 50 N, find its efficiency.",
    options: ["80%", "90%", "100%", "75%"],
    answer: 2
  },
  {
    question: "The power developed by a machine that does 1200 J of work in 4 s is?",
    options: ["100 W", "200 W", "300 W", "400 W"],
    answer: 3
  },
  {
    question: "The energy of an object due to its position is called?",
    options: ["Elastic energy", "Potential energy", "Kinetic energy", "Heat energy"],
    answer: 1
  },
  {
    question: "A spring with constant 100 N/m is stretched by 0.2 m. Find the energy stored.",
    options: ["1 J", "2 J", "3 J", "4 J"],
    answer: 0
  },
  {
    question: "If the force and displacement are perpendicular, work done is?",
    options: ["Zero", "Positive", "Negative", "Infinite"],
    answer: 0
  },
  {
    question: "Energy possessed by a compressed gas is a form of?",
    options: ["Elastic potential energy", "Heat energy", "Mechanical energy", "Nuclear energy"],
    answer: 0
  },
  {
    question: "The SI unit of temperature is?",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Centigrade"],
    answer: 2
  },
  {
    question: "Temperature is a measure of?",
    options: ["Heat energy", "Degree of hotness or coldness", "Total energy of a body", "Potential energy"],
    answer: 1
  },
  {
    question: "Heat is a form of?",
    options: ["Light energy", "Mechanical energy", "Thermal energy", "Sound energy"],
    answer: 2
  },
  {
    question: "The SI unit of heat is?",
    options: ["Joule", "Calorie", "Watt", "Kelvin"],
    answer: 0
  },
  {
    question: "Which of the following is not a method of heat transfer?",
    options: ["Conduction", "Convection", "Radiation", "Reflection"],
    answer: 3
  },
  {
    question: "Metals are good conductors of heat because they have?",
    options: ["High density", "Free electrons", "Shiny surfaces", "Large specific heat capacity"],
    answer: 1
  },
  {
    question: "In which medium does convection occur?",
    options: ["Solid", "Liquid and gas", "Vacuum", "Metal"],
    answer: 1
  },
  {
    question: "Radiation can occur in?",
    options: ["Solids only", "Liquids only", "Vacuum", "Metals only"],
    answer: 2
  },
  {
    question: "The amount of heat required to raise the temperature of 1 kg of a substance by 1 K is?",
    options: ["Specific latent heat", "Specific heat capacity", "Thermal conductivity", "Heat flux"],
    answer: 1
  },
  {
    question: "The unit of specific heat capacity is?",
    options: ["J/kg", "J/kgK", "J/K", "W/kg"],
    answer: 1
  },
  {
    question: "A 2 kg copper block is heated from 20°C to 70°C. (c = 400 J/kgK). Find the heat absorbed.",
    options: ["20,000 J", "40,000 J", "50,000 J", "60,000 J"],
    answer: 1
  },
  {
    question: "The quantity of heat required to change 1 kg of ice to water at 0°C is?",
    options: ["Specific latent heat of fusion", "Specific latent heat of vaporization", "Specific heat capacity", "Thermal resistance"],
    answer: 0
  },
  {
    question: "The latent heat of vaporization is the heat required to?",
    options: ["Change solid to liquid", "Change liquid to gas", "Change gas to solid", "Change liquid to solid"],
    answer: 1
  },
  {
    question: "Which of these materials is the best absorber of radiant heat?",
    options: ["White polished surface", "Shiny surface", "Black dull surface", "Silver surface"],
    answer: 2
  },
  {
    question: "Which of the following surfaces is a poor emitter of radiation?",
    options: ["Black rough", "Black dull", "White shiny", "Matt black"],
    answer: 2
  },
  {
    question: "A copper rod is heated at one end. The heat travels through the rod by?",
    options: ["Conduction", "Convection", "Radiation", "Reflection"],
    answer: 0
  },
  {
    question: "When a liquid is heated, it expands because?",
    options: ["Molecules move closer", "Molecules move faster and farther apart", "Heat decreases cohesion", "Conduction increases"],
    answer: 1
  },
  {
    question: "When a gas is compressed adiabatically, its temperature?",
    options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    answer: 0
  },
  {
    question: "At what temperature are Celsius and Fahrenheit scales equal?",
    options: ["-40°C", "0°C", "100°C", "50°C"],
    answer: 0
  },
  {
    question: "Convert 27°C to Kelvin.",
    options: ["273 K", "290 K", "300 K", "310 K"],
    answer: 2
  },
  {
    question: "Convert 0°C to Fahrenheit.",
    options: ["0°F", "32°F", "100°F", "212°F"],
    answer: 1
  },
  {
    question: "A 500 g metal is heated by 2000 J. The temperature rises by 10°C. Find the specific heat capacity.",
    options: ["200 J/kgK", "300 J/kgK", "400 J/kgK", "500 J/kgK"],
    answer: 2
  },
  {
    question: "The total energy of all particles of a body is its?",
    options: ["Temperature", "Heat energy", "Potential energy", "Pressure"],
    answer: 1
  },
  {
    question: "When heat is absorbed or released without temperature change, the process is called?",
    options: ["Latent process", "Conduction", "Sensible heating", "Convection"],
    answer: 0
  },
  {
    question: "The process by which heat from the sun reaches the earth is?",
    options: ["Conduction", "Convection", "Radiation", "Reflection"],
    answer: 2
  },
  {
    question: "A black pot heats up faster than a white one because?",
    options: ["It reflects more heat", "It absorbs more heat", "It conducts less heat", "It stores less heat"],
    answer: 1
  },
  {
    question: "The temperature at which a pure solid changes to liquid is called?",
    options: ["Melting point", "Boiling point", "Freezing point", "Latent point"],
    answer: 0
  },
  {
    question: "The boiling point of pure water at standard atmospheric pressure is?",
    options: ["0°C", "50°C", "100°C", "212°C"],
    answer: 2
  },
  {
    question: "The expansion of a substance when heated is due to?",
    options: ["Increased molecular attraction", "Decreased molecular motion", "Increased molecular separation", "Change in mass"],
    answer: 2
  },
  {
    question: "The device used to measure temperature is called?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
    answer: 0
  },
  {
    question: "The thermometer used to measure high temperatures in furnaces is?",
    options: ["Clinical thermometer", "Laboratory thermometer", "Pyrometer", "Mercury thermometer"],
    answer: 2
  },
  {
    question: "Liquids expand more than solids because?",
    options: ["Their molecules are closely packed", "Their molecules are loosely packed", "They conduct heat better", "They have less mass"],
    answer: 1
  },
  {
    question: "When a gas expands at constant temperature, it is said to undergo?",
    options: ["Isobaric process", "Adiabatic process", "Isothermal process", "Isochoric process"],
    answer: 2
  },
  {
    question: "When two bodies at different temperatures are in contact, heat flows until?",
    options: ["Their masses are equal", "Their temperatures are equal", "Their specific heats are equal", "Their densities are equal"],
    answer: 1
  },
  {
    question: "Which of the following materials is a poor conductor of heat?",
    options: ["Iron", "Copper", "Wood", "Aluminium"],
    answer: 2
  },
  {
    question: "The specific latent heat of fusion of ice is 3.36×10⁵ J/kg. Find the heat required to melt 0.5 kg of ice.",
    options: ["1.68×10⁵ J", "3.36×10⁵ J", "6.72×10⁵ J", "8.4×10⁵ J"],
    answer: 0
  },
  {
    question: "Which of the following statements about heat and temperature is correct?",
    options: ["They are the same", "Heat causes temperature change", "Temperature causes heat", "They have same unit"],
    answer: 1
  },
  {
    question: "A 2 kg aluminium block (c = 900 J/kgK) is heated from 30°C to 70°C. Find the heat absorbed.",
    options: ["54,000 J", "72,000 J", "90,000 J", "100,000 J"],
    answer: 0
  },
  {
    question: "Which of these instruments measures both humidity and temperature?",
    options: ["Hygrometer", "Thermohygrograph", "Barometer", "Calorimeter"],
    answer: 1
  },
  {
    question: "The heat capacity of a body depends on its?",
    options: ["Mass only", "Material only", "Mass and nature", "Temperature only"],
    answer: 2
  },
  {
    question: "The process of heat transfer in which the medium does not move is?",
    options: ["Conduction", "Convection", "Radiation", "Absorption"],
    answer: 0
  },
  {
    question: "The rise of hot air and fall of cold air in the atmosphere is due to?",
    options: ["Conduction", "Convection", "Radiation", "Expansion"],
    answer: 1
  },
  {
    question: "A 1.5 kg block of iron at 100°C is dropped into 2 kg of water at 20°C. The final temperature will be?",
    options: ["Between 20°C and 100°C", "100°C", "20°C", "0°C"],
    answer: 0
  },
  {
    question: "Which of these gases is used in thermometers for very low temperatures?",
    options: ["Mercury", "Alcohol", "Argon", "Helium"],
    answer: 1
  },
  {
    question: "The amount of heat required to raise the temperature of a substance depends on?",
    options: ["Mass and specific heat", "Density and area", "Length and volume", "Time and speed"],
    answer: 0
  },
  {
    question: "The specific latent heat of vaporization of water is?",
    options: ["2.26×10⁵ J/kg", "2.26×10⁶ J/kg", "4.18×10⁶ J/kg", "1.0×10⁶ J/kg"],
    answer: 1
  },
  {
    question: "When ice melts to water, temperature remains constant because?",
    options: ["Heat is used to raise temperature", "Heat is lost", "Heat is used to change state", "Heat is converted to light"],
    answer: 2
  },
  {
    question: "A calorimeter is used to measure?",
    options: ["Heat capacity", "Heat energy", "Temperature only", "Density"],
    answer: 1
  },
  {
    question: "The fixed points on the Celsius scale are?",
    options: ["0°C and 50°C", "0°C and 100°C", "100°C and 200°C", "32°C and 212°C"],
    answer: 1
  },
  {
    question: "An increase in temperature generally causes?",
    options: ["Decrease in density", "Increase in density", "Increase in mass", "Decrease in heat energy"],
    answer: 0
  },
  {
    question: "Which of these statements about expansion is correct?",
    options: ["All substances expand equally", "Liquids expand least", "Gases expand most", "Solids expand most"],
    answer: 2
  },
  {
    question: "A wave is best described as?",
    options: ["A disturbance that travels through a medium transferring matter", "A disturbance that transfers energy from one point to another", "A flow of particles", "A flow of heat energy"],
    answer: 1
  },
  {
    question: "Which of these is a mechanical wave?",
    options: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
    answer: 2
  },
  {
    question: "Sound cannot travel through?",
    options: ["Solid", "Liquid", "Gas", "Vacuum"],
    answer: 3
  },
  {
    question: "The distance between two successive crests is called?",
    options: ["Amplitude", "Frequency", "Wavelength", "Period"],
    answer: 2
  },
  {
    question: "The number of complete vibrations per second is called?",
    options: ["Amplitude", "Period", "Frequency", "Wave velocity"],
    answer: 2
  },
  {
    question: "The unit of frequency is?",
    options: ["Second", "Hertz", "Metre", "Newton"],
    answer: 1
  },
  {
    question: "The time taken to complete one full vibration is called?",
    options: ["Period", "Frequency", "Amplitude", "Speed"],
    answer: 0
  },
  {
    question: "If a wave has a frequency of 10 Hz and wavelength of 3 m, its speed is?",
    options: ["10 m/s", "30 m/s", "3 m/s", "13 m/s"],
    answer: 1
  },
  {
    question: "The speed of a wave is given by?",
    options: ["v = fλ", "v = λ/f", "v = f + λ", "v = f − λ"],
    answer: 0
  },
  {
    question: "If the wavelength of a wave is doubled while its frequency remains the same, its speed will?",
    options: ["Double", "Halve", "Remain constant", "Be zero"],
    answer: 0
  },
  {
    question: "Sound waves are classified as?",
    options: ["Transverse waves", "Longitudinal waves", "Stationary waves", "Electromagnetic waves"],
    answer: 1
  },
  {
    question: "Which of the following is a property of transverse waves?",
    options: ["Particles vibrate along the direction of propagation", "They can travel through vacuum", "They have crests and troughs", "They cannot be polarized"],
    answer: 2
  },
  {
    question: "In longitudinal waves, the regions of high pressure are called?",
    options: ["Crests", "Troughs", "Compressions", "Rarefactions"],
    answer: 2
  },
  {
    question: "The loudness of a sound depends on its?",
    options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
    answer: 1
  },
  {
    question: "The pitch of a sound depends on?",
    options: ["Amplitude", "Frequency", "Wavelength", "Speed"],
    answer: 1
  },
  {
    question: "The speed of sound in air at room temperature is approximately?",
    options: ["150 m/s", "330 m/s", "500 m/s", "1000 m/s"],
    answer: 1
  },
  {
    question: "The reflection of sound waves from a surface is called?",
    options: ["Diffraction", "Refraction", "Echo", "Interference"],
    answer: 2
  },
  {
    question: "An echo can be heard if the reflecting surface is at least?",
    options: ["10 m away", "17 m away", "30 m away", "50 m away"],
    answer: 1
  },
  {
    question: "The phenomenon of sound persistence after the source stops is called?",
    options: ["Diffraction", "Resonance", "Reverberation", "Interference"],
    answer: 2
  },
  {
    question: "The bending of waves around obstacles is called?",
    options: ["Reflection", "Refraction", "Diffraction", "Resonance"],
    answer: 2
  },
  {
    question: "The change in direction of waves when they pass from one medium to another is?",
    options: ["Reflection", "Refraction", "Interference", "Diffraction"],
    answer: 1
  },
  {
    question: "Resonance occurs when?",
    options: ["Two waves of different frequencies meet", "The frequency of the source equals the natural frequency of the object", "A wave bends around an object", "Waves cancel out"],
    answer: 1
  },
  {
    question: "If a sound wave has frequency 250 Hz and wavelength 1.32 m, find its speed.",
    options: ["250 m/s", "330 m/s", "500 m/s", "660 m/s"],
    answer: 1
  },
  {
    question: "The principle of superposition is applied in explaining?",
    options: ["Refraction", "Diffraction", "Interference", "Reflection"],
    answer: 2
  },
  {
    question: "If the frequency of a wave is 50 Hz and its period is?",
    options: ["0.02 s", "0.2 s", "2 s", "5 s"],
    answer: 0
  },
  {
    question: "The product of frequency and wavelength gives?",
    options: ["Amplitude", "Velocity", "Time", "Period"],
    answer: 1
  },
  {
    question: "The region of low pressure in a sound wave is known as?",
    options: ["Compression", "Rarefaction", "Trough", "Node"],
    answer: 1
  },
  {
    question: "The equation v = fλ represents?",
    options: ["Newton’s Second Law", "Wave equation", "Hooke’s Law", "Ohm’s Law"],
    answer: 1
  },
  {
    question: "A sound of frequency above 20,000 Hz is called?",
    options: ["Audible sound", "Infrasound", "Ultrasound", "Supersonic sound"],
    answer: 2
  },
  {
    question: "A sound of frequency below 20 Hz is called?",
    options: ["Infrasound", "Ultrasound", "Supersonic", "Audible sound"],
    answer: 0
  },
  {
    question: "In a stationary wave, points of zero amplitude are called?",
    options: ["Nodes", "Antinodes", "Crests", "Troughs"],
    answer: 0
  },
  {
    question: "In a stationary wave, points of maximum amplitude are?",
    options: ["Nodes", "Antinodes", "Compressions", "Troughs"],
    answer: 1
  },
  {
    question: "The frequency of vibration of a stretched string is inversely proportional to?",
    options: ["Its length", "Its tension", "Its linear density", "Its amplitude"],
    answer: 0
  },
  {
    question: "If the speed of a wave is 300 m/s and the wavelength is 0.75 m, what is its frequency?",
    options: ["200 Hz", "300 Hz", "400 Hz", "500 Hz"],
    answer: 2
  },
  {
    question: "Which of these waves requires a medium for propagation?",
    options: ["Light wave", "Radio wave", "X-ray", "Sound wave"],
    answer: 3
  },
  {
    question: "Which of the following statements is true?",
    options: ["Sound travels faster in air than in metal", "Sound travels faster in metal than in air", "Sound speed is same in all media", "Sound does not travel in metal"],
    answer: 1
  },
  {
    question: "A wave has a wavelength of 0.5 m and speed of 250 m/s. Find its frequency.",
    options: ["250 Hz", "400 Hz", "500 Hz", "750 Hz"],
    answer: 2
  },
  {
    question: "The part of a longitudinal wave where particles are closest together is called?",
    options: ["Crest", "Compression", "Rarefaction", "Node"],
    answer: 1
  },
  {
    question: "A man claps his hands and hears an echo after 0.2 s. If the speed of sound in air is 340 m/s, how far is the wall?",
    options: ["17 m", "34 m", "68 m", "85 m"],
    answer: 1
  },
  {
    question: "Sound is a type of?",
    options: ["Mechanical wave", "Electromagnetic wave", "Transverse wave", "Stationary wave"],
    answer: 0
  },
  {
    question: "The speed of sound increases with?",
    options: ["Decrease in pressure", "Decrease in temperature", "Increase in temperature", "Increase in wavelength only"],
    answer: 2
  },
  {
    question: "The ratio of speed of sound in water to that in air is approximately?",
    options: ["1:2", "2:1", "4:1", "10:1"],
    answer: 2
  },
  {
    question: "Which of the following instruments can be used to demonstrate stationary waves?",
    options: ["Barometer", "Resonance tube", "Thermometer", "Hydrometer"],
    answer: 1
  },
  {
    question: "If the wavelength of a wave is 2 m and its period is 0.01 s, its speed is?",
    options: ["100 m/s", "150 m/s", "200 m/s", "250 m/s"],
    answer: 2
  },
  {
    question: "Beats are formed by?",
    options: ["Waves of same frequency", "Waves of slightly different frequencies", "Waves of equal amplitude", "Longitudinal waves only"],
    answer: 1
  },
  {
    question: "The human ear can hear frequencies between?",
    options: ["1 Hz and 100 Hz", "20 Hz and 20,000 Hz", "200 Hz and 200,000 Hz", "2,000 Hz and 20,000 Hz"],
    answer: 1
  },
  {
    question: "The amplitude of a wave measures its?",
    options: ["Loudness", "Pitch", "Speed", "Duration"],
    answer: 0
  },
  {
    question: "A wave with frequency 5 Hz travels at 10 m/s. Find its wavelength.",
    options: ["1 m", "2 m", "3 m", "4 m"],
    answer: 1
  },
  {
    question: "The phenomenon responsible for the change in pitch of a moving car horn is?",
    options: ["Resonance", "Doppler effect", "Reflection", "Refraction"],
    answer: 1
  },
  {
    question: "If two waves of equal amplitude and frequency travel in opposite directions, they form?",
    options: ["Longitudinal waves", "Stationary waves", "Transverse waves", "Progressive waves"],
    answer: 1
  },
  {
    question: "Which of these determines the pitch of a sound?",
    options: ["Amplitude", "Frequency", "Speed", "Medium"],
    answer: 1
  },
  {
        question: "Which of the following is NOT a fundamental quantity?",
        options: ["Mass", "Length", "Velocity", "Time"],
        answer: 2
      },
      {
        question: "Which of these is a fundamental unit?",
        options: ["Newton", "Meter", "Joule", "Watt"],
        answer: 1
      },
      {
        question: "The SI unit of mass is?",
        options: ["Gram", "Kilogram", "Milligram", "Tonne"],
        answer: 1
      },
      {
        question: "The SI unit of time is?",
        options: ["Minute", "Hour", "Second", "Millisecond"],
        answer: 2
      },
      {
        question: "Which of the following is a derived quantity?",
        options: ["Temperature", "Electric current", "Density", "Mass"],
        answer: 2
      },
      {
        question: "The unit of force is derived from which fundamental quantities?",
        options: ["Mass, length, and time", "Mass and temperature", "Length and time", "Mass and current"],
        answer: 0
      },
      {
        question: "What is the SI unit of energy?",
        options: ["Watt", "Newton", "Joule", "Pascal"],
        answer: 2
      },
      {
        question: "Which of these quantities is dimensionless?",
        options: ["Angle", "Mass", "Time", "Velocity"],
        answer: 0
      },
      {
        question: "The dimensional formula of velocity is?",
        options: ["[L T⁻¹]", "[M L⁻¹ T]", "[L T]", "[M T⁻²]"],
        answer: 0
      },
      {
        question: "What is the derived SI unit of pressure?",
        options: ["Newton", "Pascal", "Joule", "Watt"],
        answer: 1
      },
      {
        question: "Pressure is force per unit area. If force = 10 N and area = 2 m², find pressure.",
        options: ["2 N/m²", "5 N/m²", "10 N/m²", "20 N/m²"],
        answer: 1
      },
      {
        question: "Which of the following quantities is derived?",
        options: ["Mass", "Time", "Area", "Temperature"],
        answer: 2
      },
      {
        question: "Which of the following is a fundamental unit?",
        options: ["Coulomb", "Kelvin", "Joule", "Volt"],
        answer: 1
      },
      {
        question: "The dimensional formula of acceleration is?",
        options: ["[L T⁻²]", "[M L T⁻²]", "[L² T⁻²]", "[M T⁻¹]"],
        answer: 0
      },
      {
        question: "If a car moves 120 m in 10 s, what is its average velocity?",
        options: ["10 m/s", "12 m/s", "15 m/s", "20 m/s"],
        answer: 1
      },
      {
        question: "Which of the following represents power?",
        options: ["Energy per unit time", "Force per unit area", "Work × time", "Energy × distance"],
        answer: 0
      },
      {
        question: "The SI unit of power is?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: 1
      },
      {
        question: "Which of the following quantities is NOT derived?",
        options: ["Force", "Pressure", "Length", "Work"],
        answer: 2
      },
      {
        question: "Which of the following physical quantities has the same unit as energy?",
        options: ["Torque", "Momentum", "Pressure", "Power"],
        answer: 0
      },
      {
        question: "The SI base unit of electric current is?",
        options: ["Volt", "Ampere", "Coulomb", "Ohm"],
        answer: 1
      },
      {
        question: "The unit of charge can be derived from?",
        options: ["Ampere × Time", "Voltage × Resistance", "Mass × Acceleration", "Power × Time"],
        answer: 0
      },
      {
        question: "What is the unit of density?",
        options: ["kg/m³", "N/m²", "J/m³", "kg/m²"],
        answer: 0
      },
      {
        question: "If mass = 10 kg and volume = 2 m³, find the density.",
        options: ["2 kg/m³", "4 kg/m³", "5 kg/m³", "10 kg/m³"],
        answer: 2
      },
      {
        question: "Which of these pairs are both derived quantities?",
        options: ["Mass and Density", "Force and Pressure", "Time and Speed", "Length and Area"],
        answer: 1
      },
      {
        question: "The dimensional formula of work is?",
        options: ["[M L² T⁻²]", "[M L T⁻²]", "[L² T]", "[M L⁻¹ T⁻¹]"],
        answer: 0
      },
      {
        question: "The SI unit of frequency is?",
        options: ["Hertz", "Watt", "Joule", "Pascal"],
        answer: 0
      },
      {
        question: "Which of these represents momentum?",
        options: ["Mass × Velocity", "Force × Time", "Mass × Acceleration", "Energy × Distance"],
        answer: 0
      },
      {
        question: "The SI unit of momentum is?",
        options: ["kg·m/s", "kg/m²", "N·m", "m/s²"],
        answer: 0
      },
      {
        question: "The SI unit of work is equivalent to?",
        options: ["N/m", "N·m", "m/s", "N/s"],
        answer: 1
      },
      {
        question: "Which of the following is NOT correctly matched?",
        options: ["Energy - Joule", "Power - Watt", "Force - Pascal", "Pressure - Pascal"],
        answer: 2
      },
      {
        question: "What is the derived unit of speed?",
        options: ["m²/s", "m/s", "m/s²", "kg·m/s"],
        answer: 1
      },
      {
        question: "If a body travels 50 m in 5 s, find its speed.",
        options: ["5 m/s", "8 m/s", "10 m/s", "15 m/s"],
        answer: 2
      },
      {
        question: "Which of the following combinations gives the unit of power?",
        options: ["Work × Time", "Force × Distance", "Work / Time", "Energy × Time"],
        answer: 2
      },
      {
        question: "The SI unit of electric potential difference is?",
        options: ["Volt", "Ohm", "Coulomb", "Ampere"],
        answer: 0
      },
      {
        question: "A force of 10 N moves a body through 5 m. Find the work done.",
        options: ["10 J", "15 J", "25 J", "50 J"],
        answer: 3
      },
      {
        question: "The dimensional formula of force is?",
        options: ["[M L T⁻²]", "[M L² T⁻²]", "[L T⁻¹]", "[M T⁻²]"],
        answer: 0
      },
      {
        question: "Which of these is a derived physical quantity?",
        options: ["Temperature", "Mass", "Energy", "Length"],
        answer: 2
      },
      {
        question: "The product of force and distance gives?",
        options: ["Power", "Work", "Energy", "Momentum"],
        answer: 1
      },
      {
        question: "The derived unit of acceleration is?",
        options: ["m/s²", "m/s", "kg·m/s", "N/m"],
        answer: 0
      },
      {
        question: "The SI unit of pressure can be expressed as?",
        options: ["N/m²", "N/m", "N·m", "kg/m²"],
        answer: 0
      },
      {
        question: "The unit of momentum can be derived from?",
        options: ["Force × Time", "Mass × Acceleration", "Work / Time", "Power × Time"],
        answer: 0
      },
      {
        question: "The SI unit of energy and work are the same. True or False?",
        options: ["True", "False", "Depends on context", "None of the above"],
        answer: 0
      },
      {
        question: "The dimensional formula of pressure is?",
        options: ["[M L⁻¹ T⁻²]", "[M L² T⁻²]", "[M T⁻²]", "[L T⁻¹]"],
        answer: 0
      },
      {
        question: "The SI unit of volume is?",
        options: ["cm³", "m³", "dm³", "Litre"],
        answer: 1
      },
      {
        question: "If a cube has sides of 2 m, find its volume.",
        options: ["4 m³", "6 m³", "8 m³", "10 m³"],
        answer: 2
      },
      {
        question: "Which of these has the same dimension as force?",
        options: ["Momentum", "Pressure × Area", "Work × Distance", "Energy × Time"],
        answer: 1
      },
      {
        question: "The SI unit of angular velocity is?",
        options: ["radian", "radian per second", "degree", "degree per minute"],
        answer: 1
      },
      {
        question: "What is the dimensional formula of density?",
        options: ["[M L⁻³]", "[M L T⁻³]", "[M L⁻² T⁻¹]", "[M L⁻¹ T]"],
        answer: 0
      },
      {
        question: "The SI unit of charge is derived from?",
        options: ["Current × Time", "Voltage × Current", "Resistance × Power", "Power × Time"],
        answer: 0
      },
      {
        question: "What is the SI unit of resistance?",
        options: ["Coulomb", "Ohm", "Ampere", "Volt"],
        answer: 1
      },
      {
        question: "Which of the following pairs has the same dimensional formula?",
        options: ["Work and Energy", "Power and Force", "Force and Pressure", "Momentum and Work"],
        answer: 0
      },
      {
        question: "Which unit is derived from Joule per second?",
        options: ["Watt", "Newton", "Pascal", "Coulomb"],
        answer: 0
      }
    ],
    
    //Biology questions here
    Biology: [
  
  //introduction to biology
  
  {
    question: "Biology is the scientific study of _______.",
    options: ["Matter and energy", "Living organisms", "Rocks and minerals", "Atmospheric phenomena"],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a characteristic of living organisms?",
    options: ["Reproduction", "Growth and development", "Response to stimuli", "Ability to form crystals"],
    answer: 3,
  },
  {
    question: "The basic structural and functional unit of all living organisms is the _______.",
    options: ["Tissue", "Organ", "Cell", "Organ system"],
    answer: 2,
  },
  {
    question: "Which statement best expresses the cell theory?",
    options: ["All cells arise from non-living matter", "All organisms are unicellular", "All living things are made of cells and all cells come from preexisting cells", "Cells are only found in plants and animals"],
    answer: 2,
  },
  {
    question: "Which organelle is known as the 'powerhouse' of the cell because it produces ATP?",
    options: ["Chloroplast", "Endoplasmic reticulum", "Mitochondrion", "Golgi apparatus"],
    answer: 2,
  },
  {
    question: "Photosynthesis mainly occurs in which cell organelle?",
    options: ["Mitochondrion", "Chloroplast", "Nucleus", "Ribosome"],
    answer: 1,
  },
  {
    question: "Which of the following macromolecules is the main source of immediate energy for cells?",
    options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
    answer: 0,
  },
  {
    question: "Which biomolecule carries genetic information?",
    options: ["Carbohydrate", "Lipid", "Protein", "Nucleic acid"],
    answer: 3,
  },
  {
    question: "Enzymes are biological catalysts that _______.",
    options: ["Are permanently changed during the reaction", "Slow down chemical reactions", "Lower the activation energy of reactions", "Increase the equilibrium constant of reactions"],
    answer: 2,
  },
  {
    question: "Which of the following affects the activity of an enzyme?",
    options: ["Temperature", "pH", "Substrate concentration", "All of the above"],
    answer: 3,
  },
  {
    question: "Which process moves molecules from a region of higher concentration to lower concentration without energy input?",
    options: ["Active transport", "Facilitated diffusion", "Diffusion", "Endocytosis"],
    answer: 2,
  },
  {
    question: "Osmosis is the movement of _______ across a selectively permeable membrane.",
    options: ["Solute particles from low to high concentration", "Water from low to high potential", "Water from high to low water potential", "Ions against their concentration gradient"],
    answer: 2,
  },
  {
    question: "Which of these is a prokaryotic organism?",
    options: ["Amoeba", "Bacterium", "Frog", "Yeast"],
    answer: 1,
  },
  {
    question: "Which kingdom contains multicellular, photosynthetic organisms with cell walls made of cellulose?",
    options: ["Protista", "Fungi", "Plantae", "Animalia"],
    answer: 2,
  },
  {
    question: "Which pair correctly shows the sequence of biological organization from simplest to more complex?",
    options: ["Organ → Cell → Tissue → Organ system", "Atom → Molecule → Cell → Tissue", "Organism → Organ system → Organ → Tissue", "Population → Organism → Community → Ecosystem"],
    answer: 1,
  },
  {
    question: "Which of the following best describes homeostasis?",
    options: ["The change in species over time", "Maintenance of a stable internal environment", "Production of gametes", "Energy conversion in cells"],
    answer: 1,
  },
  {
    question: "Which tool is best for observing the shape and internal structure of small cells?",
    options: ["Stethoscope", "Light microscope", "Thermometer", "Balance"],
    answer: 1,
  },
  {
    question: "Which branch of biology studies interactions between organisms and their environment?",
    options: ["Genetics", "Ecology", "Cytology", "Anatomy"],
    answer: 1,
  },
  {
    question: "What is a population in ecological terms?",
    options: ["All organisms of different species in an area", "A group of individuals of the same species in an area", "All non-living components of an ecosystem", "All communities in a biosphere"],
    answer: 1,
  },
  {
    question: "Which of the following is an example of a biotic factor in an ecosystem?",
    options: ["Soil pH", "Temperature", "Predators", "Sunlight"],
    answer: 2,
  },
  {
    question: "DNA replication occurs during which phase of the cell cycle?",
    options: ["M phase (mitosis)", "G₁ phase", "S phase (synthesis)", "G₂ phase"],
    answer: 2,
  },
  {
    question: "Which process produces two genetically identical daughter cells?",
    options: ["Meiosis", "Mitosis", "Fertilization", "Crossing over"],
    answer: 1,
  },
  {
    question: "Which type of cell division reduces the chromosome number by half to produce gametes?",
    options: ["Binary fission", "Mitosis", "Meiosis", "Budding"],
    answer: 2,
  },
  {
    question: "Which nucleotide base is found in RNA but not in DNA?",
    options: ["Adenine", "Cytosine", "Uracil", "Thymine"],
    answer: 2,
  },
  {
    question: "Which process in plants converts light energy into chemical energy (glucose)?",
    options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
    answer: 2,
  },
  {
    question: "Which equation best represents aerobic respiration (generalised)?",
    options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂", "Light + H₂O → O₂ + glucose"],
    answer: 0,
  },
  {
    question: "Which organ system is primarily responsible for transporting oxygen and nutrients to body cells?",
    options: ["Digestive system", "Nervous system", "Circulatory system", "Excretory system"],
    answer: 2,
  },
  {
    question: "Which blood vessels carry blood away from the heart?",
    options: ["Veins", "Venules", "Capillaries", "Arteries"],
    answer: 3,
  },
  {
    question: "Which organ is the main site of nutrient absorption in the human digestive system?",
    options: ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
    answer: 2,
  },
  {
    question: "Which macromolecule is most important for building and repairing tissues?",
    options: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"],
    answer: 1,
  },
  {
    question: "Which vitamin is essential for normal blood clotting?",
    options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin A"],
    answer: 2,
  },
  {
    question: "Which structure carries genetic information that is passed from parents to offspring?",
    options: ["Ribosome", "Chromosome", "Lysosome", "Golgi body"],
    answer: 1,
  },
  {
    question: "Which of the following is a method for measuring the magnification of a light microscope image?",
    options: ["Multiply the eyepiece magnification by the objective magnification", "Add the eyepiece and objective magnifications", "Divide the objective by the eyepiece magnification", "Use only the objective magnification"],
    answer: 0,
  },
  {
    question: "Which of these is an example of a non-infectious disease?",
    options: ["Malaria", "Tuberculosis", "Sickle cell anaemia", "Measles"],
    answer: 2,
  },
  {
    question: "Which organ removes nitrogenous wastes from the blood in humans?",
    options: ["Lungs", "Liver", "Kidney", "Heart"],
    answer: 2,
  },
  {
    question: "Which type of reproduction produces offspring genetically identical to the parent?",
    options: ["Sexual reproduction", "Asexual reproduction", "Fertilization", "Crossing over"],
    answer: 1,
  },
  {
    question: "Which structure in a plant cell provides rigidity and is made of cellulose?",
    options: ["Cell membrane", "Cell wall", "Vacuole", "Plastid"],
    answer: 1,
  },
  {
    question: "Which physiological process in plants results mainly in loss of water vapour from leaves?",
    options: ["Transpiration", "Photosynthesis", "Respiration", "Germination"],
    answer: 0,
  },
  {
    question: "Which term describes small genetic changes in a population over a long time?",
    options: ["Homeostasis", "Evolution", "Metabolism", "Osmosis"],
    answer: 1,
  },
  {
    question: "Which structure controls the entry and exit of substances in and out of the cell?",
    options: ["Cell wall", "Nucleus", "Cell membrane", "Ribosome"],
    answer: 2,
  },
  {
    question: "Which simple test reagent is used to detect the presence of reducing sugars?",
    options: ["Iodine solution", "Benedict's solution", "Litmus paper", "Biuret reagent"],
    answer: 1,
  },
  {
    question: "What is the role of ribosomes in the cell?",
    options: ["Lipid synthesis", "Protein synthesis", "ATP production", "DNA replication"],
    answer: 1,
  },
  {
    question: "Which term describes the variety of all living organisms in an area?",
    options: ["Population", "Community", "Biodiversity", "Habitat"],
    answer: 2,
  },
  {
    question: "Which simple experimental practice involves comparing a treatment group to a group that does not receive the treatment?",
    options: ["Replication", "Randomization", "Control", "Observation"],
    answer: 2,
  },
  {
    question: "Which gas is a major by-product of photosynthesis and is released into the atmosphere?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
    answer: 1,
  },
  {
    question: "Which major macromolecule forms cell membranes (with phospholipids) and stores long-term energy?",
    options: ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"],
    answer: 2,
  },
  {
    question: "Which is the correct order of taxonomic ranks from broadest to most specific?",
    options: ["Species → Genus → Family → Order", "Kingdom → Phylum → Class → Order", "Genus → Species → Family → Order", "Order → Class → Phylum → Kingdom"],
    answer: 1,
  },
  
  //WAEC questions 2011
  {
    question: "Which of the following organism is not classified as an animal? ",
    options: ["amoeba", "paramecium", "euglena", "obelia"],
    answer: 2,
  },
  
  {
    question: "An organisation that operates at the cellular level of organisation, carries out its physiological activities by using its ",
    options: ["cell membrane", "organelles", "small size", "cytoplasm"],
    answer: 1,
  },
  
  {
    question: "The organelle which eliminates water from the bodyof a protozoam is the",
    options: ["plasma membrane", "contractile vacuole", "nucleus", "cell wall"],
    answer: 1,
  },
  
  {
    question: "Use the diagram to answer the question.\nThe parts that supply food and water to the developing embryo are labelled.",
    image: "./Screenshot_20251119-130443.png",
    options: ["I and II", "III and IV", "V and VI", "II and III"],
    answer: 2,
  },
  
  {
    question: "Use the diagram to answer the question.\nThe part labelled III is the",
    image: "./Screenshot_20251119-130443.png",
    options: ["albumen", "chalaza", "yolk", "air space"],
    answer: 1,
  },
  
  
  //cell and its environment 
  
  {
    question: "Which of the following is NOT a characteristic of living things?",
    options: ["Growth", "Respiration", "Photosynthesis", "Inertia"],
    answer: 3,
  },
  {
    question: "Which characteristic of living things involves the removal of waste products of metabolism?",
    options: ["Reproduction", "Nutrition", "Excretion", "Growth"],
    answer: 2,
  },
  {
    question: "The diagram below represents the phenomenon of growth in a meristemic cell of a plant. Use it to answer the question\nThe part labelled II in the diagram is the ___",
    image:"./Screenshot_20251120-001812.png",
    options: ["centrioles", "chloroplasts", "chromatids", "tonoplast"],
    answer: 2,
  },
  {
    question: "The ability of living organisms to respond to changes in their environment is called _______.",
    options: ["Irritability", "Adaptation", "Locomotion", "Homeostasis"],
    answer: 0,
  },
  {
    question: "Which of the following is the most basic characteristic of living things?",
    options: ["Ability to move", "Ability to respire", "Ability to reproduce", "Cellular organization"],
    answer: 3,
  },
  {
    question: "The maintenance of a constant internal environment in an organism is known as _______.",
    options: ["Metabolism", "Homeostasis", "Coordination", "Regulation"],
    answer: 1,
  },
  {
    question: "Which of the following life processes is necessary for continuity of species?",
    options: ["Excretion", "Respiration", "Reproduction", "Nutrition"],
    answer: 2,
  },
  {
    question: "Growth in living organisms occurs by _______.",
    options: ["Increase in size of cells only", "Increase in number and size of cells", "Absorption of water", "Accumulation of waste"],
    answer: 1,
  },
  {
    question: "The diagram below represents the phenomenon of growth in a meristemic cell of a plant. Use it to answer the question\The part labelled I is called the ___ ",
    image:"./Screenshot_20251120-001812.png",
    options: ["nucleolus", "centromere", "centriole", "spindle"],
    answer: 3,
  },
  {
    question: "Which of the following is NOT an example of movement in plants?",
    options: ["Nastic movement", "Tropic movement", "Locomotion", "Growth curvature"],
    answer: 2,
  },
  {
    question: "The process by which green plants make their food using sunlight is called _______.",
    options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
    answer: 2,
  },
  {
    question: "The life process by which energy is released from food substances is called _______.",
    options: ["Photosynthesis", "Respiration", "Digestion", "Circulation"],
    answer: 1,
  },
  {
    question: "Which of the following is a waste product of respiration?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Glucose"],
    answer: 1,
  },
  {
    question: "All living things are made up of _______.",
    options: ["Tissues", "Cells", "Organs", "Systems"],
    answer: 1,
  },
  {
    question: "The process by which living organisms take in food substances and utilize them is called _______.",
    options: ["Excretion", "Nutrition", "Respiration", "Irritability"],
    answer: 1,
  },
  {
    question: "Which of these is NOT a characteristic of living things?",
    options: ["Feeding", "Respiration", "Movement", "Evaporation"],
    answer: 3,
  },
  {
    question: "Which of the following statements about living things is true?",
    options: ["All living things are multicellular", "All living things reproduce", "All living things have backbones", "All living things live in water"],
    answer: 1,
  },
  {
    question: "Which of the following is an example of asexual reproduction?",
    options: ["Budding in yeast", "Pollination in plants", "Fertilization in humans", "Copulation in animals"],
    answer: 0,
  },
  {
    question: "The process by which organisms become suited to their environment is called _______.",
    options: ["Irritability", "Adaptation", "Evolution", "Reproduction"],
    answer: 1,
  },
  {
    question: "The diagram below represents the phenomenon of growth in a meristemic cell of a plant. Use it to answer the question\The part labelled I is called the ___ ",
    image:"./Screenshot_20251120-001812.png",
    options: ["nucleolus", "centromere", "centriole", "spindle"],
    answer: 3,
  },
  {
    question: "The ability of an organism to move from one place to another is called _______.",
    options: ["Locomotion", "Irritability", "Growth", "Tropism"],
    answer: 0,
  },
  {
    question: "Which of these characteristics is common to both plants and animals?",
    options: ["Photosynthesis", "Irritability", "Locomotion", "Heterotrophic feeding"],
    answer: 1,
  },
  {
    question: "Which process in living organisms ensures the continuity of life?",
    options: ["Growth", "Reproduction", "Nutrition", "Respiration"],
    answer: 1,
  },
  {
    question: "The graph below represents the growth pattern of an animal. Which of the following groups of animals shows this pattern of growth? ",
    image: "./Screenshot_20251121-082326.png",
    options: ["cestoda", "reptilia", "amphibian", "insecta"],
    answer: 3,
  },
  {
    question: "In living organisms, metabolism refers to _______.",
    options: ["Growth and development only", "All chemical reactions taking place in the body", "Reproduction and digestion only", "Movement and excretion only"],
    answer: 1,
  },
  {
    question: "Which of the individual is likely to be suffering from haemophilia? ",
    image: "./Screenshot_20251121-082422.png",
    options: ["I", "II", "III", "IV"],
    answer: 3,
  },
  {
    question: "The sum total of anabolic and catabolic reactions in an organism is called _______.",
    options: ["Metabolism", "Nutrition", "Respiration", "Homeostasis"],
    answer: 0,
  },
  {
    question: "Which of the following life processes involves both anabolic and catabolic reactions?",
    options: ["Respiration", "Metabolism", "Photosynthesis", "Reproduction"],
    answer: 1,
  },
  {
    question: "The diagram above are parts of a human lung.Which of the labelled parts is diagram Z taken from?",
    image: "./Screenshot_20251121-082352.png",
    options: ["II", "III", "IV", "V"],
    answer: 2,
  },
  {
    question: "The waste products of photosynthesis are _______.",
    options: ["Carbon dioxide and water", "Oxygen and water", "Oxygen and glucose", "Glucose and starch"],
    answer: 1,
  },
  {
    question: "Which feature distinguishes living things from non-living things?",
    options: ["Ability to expand", "Ability to reproduce", "Ability to reflect light", "Ability to rust"],
    answer: 1,
  },
  {
    question: "Which of the following represents a catabolic process?",
    options: ["Photosynthesis", "Protein synthesis", "Respiration", "Cell division"],
    answer: 2,
  },
  {
    question: "The diagram above is an illustration of the human excretory system. Which of the labelled parts contains the highest amount of nitrogenous waste? ",
    image: "./Screenshot_20251121-082454.png",
    options: ["I", "II", "IV", "VI"],
    answer: 0,
  },
  {
    question: "The process of breaking down large food molecules into simpler forms is known as _______.",
    options: ["Assimilation", "Digestion", "Absorption", "Respiration"],
    answer: 1,
  },
  {
    question: "In plants, movement of growth in response to light is called _______.",
    options: ["Geotropism", "Phototropism", "Hydrotropism", "Nastic movement"],
    answer: 1,
  },
  {
    question: "Which of the following organisms exhibits locomotion?",
    options: ["Mucor", "Hydra", "Mushroom", "Spirogyra"],
    answer: 1,
  },
  {
    question: "Which life process provides raw materials for respiration?",
    options: ["Photosynthesis", "Nutrition", "Excretion", "Reproduction"],
    answer: 1,
  },
  {
    question: "An illustration of a human male reproductive system is shown above.Which of the labelled part can be cut to ensure permanent sterility? ",
    image: "./Screenshot_20251121-082517.png",
    options: ["I", "II", "III", "IV"],
    answer: 1,
  },
  {
    question: "Which process ensures that organisms maintain their internal environment despite external changes?",
    options: ["Adaptation", "Homeostasis", "Irritability", "Reproduction"],
    answer: 1,
  },
  {
    question: "Which of these life processes involves the intake and use of oxygen?",
    options: ["Growth", "Excretion", "Respiration", "Photosynthesis"],
    answer: 2,
  },
  {
    question: "The release of energy from glucose molecules occurs in the _______.",
    options: ["Nucleus", "Mitochondrion", "Ribosome", "Chloroplast"],
    answer: 1,
  },
  {
    question: "The diagram above is an illustration of an experimental setup to test the action of yeast. What test would be used to confirm the nature of the gas given off at I?  ",
    image: "./Screenshot_20251121-082538.png",
    options: ["insert a glowing splint", "pass the gas through lime water", "insert a piece of litmus paper ", "smell the gas"],
    answer: 1,
  },
  {
    question: "Which of the following is a feature common to all living cells?",
    options: ["Nucleus", "Cytoplasm", "Cell wall", "Chloroplast"],
    answer: 1,
  },
  {
    question: "A change in an organism’s surroundings that causes a response is known as a _______.",
    options: ["Reflex", "Stimulus", "Impulse", "Adaptation"],
    answer: 1,
  },
  {
    question: "The appropriate food to be given to the child in the picture below is ___ ",
    image: "./Screenshot_20251121-082603.png",
    options: ["beans", "bread", "garri ", "avocado pear"],
    answer: 0,
  },
  {
    question: "Living organisms require energy mainly for _______.",
    options: ["Respiration", "Growth and maintenance of life", "Diffusion", "Photosynthesis"],
    answer: 1,
  },
  {
    question: "Which of the following best describes an autotroph?",
    options: ["An organism that feeds on others", "An organism that manufactures its own food", "An organism that decomposes organic matter", "An organism that lacks chlorophyll"],
    answer: 1,
  },
  {
    question: "The appropriate food to be given to the child in the picture below is ___ ",
    image: "./Screenshot_20251121-082603.png",
    options: ["beans", "bread", "garri ", "avocado pear"],
    answer: 0,
  },
  {
    question: "Which group of organisms reproduces by spore formation?",
    options: ["Mammals", "Fungi", "Insects", "Reptiles"],
    answer: 1,
  },
  {
    question: "Which of these life processes ensures the removal of toxic materials from the body?",
    options: ["Excretion", "Egestion", "Secretion", "Assimilation"],
    answer: 0,
  },
  {
    question: "The breaking down of food molecules to release energy is referred to as _______.",
    options: ["Digestion", "Catabolism", "Anabolism", "Assimilation"],
    answer: 1,
  },
  {
    question: "The best title for the above diagram is ___ ",
    image: "./Screenshot_20251121-085107.png",
    options: ["terrestial food web", "terrestial food chain", "aquatic food web ", "aquatic food chain"],
    answer: 0,
  },
  {
    question: "How many food chains are in the diagram ",
    image: "./Screenshot_20251121-085107.png",
    options: ["three", "four", "five ", "six"],
    answer: 2,
  },
  {
    question: "The structural complexity of living things is arranged in which order?",
    options: ["Organ → Tissue → Cell → Organ system", "Cell → Tissue → Organ → Organ system", "Tissue → Cell → Organ → System", "System → Organ → Cell → Tissue"],
    answer: 1,
  },
  {
    question: "Which of the following is a characteristic of all living organisms?",
    options: ["Movement", "Photosynthesis", "Backbone", "Seed formation"],
    answer: 0,
  },
  {
    question: "An example of excretion in plants is _______.",
    options: ["Loss of water vapour through the stomata", "Formation of starch", "Absorption of minerals", "Transport of food"],
    answer: 0,
  },
  {
    question: "In which of the zones can very few organism be found?",
    image: "./Screenshot_20251121-085131.png",
    options: ["I", "II", "III ", "IV"],
    answer: 3,
  },
  {
    question: "Which of the following factors exert a major effect on the distribution of living organisms in the habitat?",
    image: "./Screenshot_20251121-085131.png",
    options: ["salt", "pH", "light ", "rainfall"],
    answer: 2,
  },
  {
    question: "The basic difference between living and non-living things is the ability to _______.",
    options: ["Move", "Grow and reproduce", "Exist", "Change colour"],
    answer: 1,
  },
  {
    question: "Which process ensures survival of species over generations?",
    options: ["Reproduction", "Nutrition", "Excretion", "Growth"],
    answer: 0,
  },
  {
    question: "The diagram represents a ___ ",
    image: "./Screenshot_20251121-085159.png",
    options: ["cell", "filament", "colony ", "part of a living organism"],
    answer: 1,
  },
  {
    question: "Pyrenoid is present in the structure labelled ___ ",
    image: "./Screenshot_20251121-085159.png",
    options: ["IV", "III", "II ", "I"],
    answer: 0,
  },
  {
    question: "The removal of metabolic waste products in animals is carried out by the _______.",
    options: ["Heart", "Kidneys", "Lungs", "Liver"],
    answer: 1,
  },
  {
    question: "Which of the following activities is NOT common to all living things?",
    options: ["Movement", "Respiration", "Reproduction", "Photosynthesis"],
    answer: 3,
  },
  {
    question: "An organism’s ability to adjust to its environment for survival is known as _______.",
    options: ["Homeostasis", "Adaptation", "Metabolism", "Growth"],
    answer: 1,
  },
  {
    question: "Which part of the flower produces the structure labelled III? ",
    image: "./Screenshot_20251121-085221.png",
    options: ["carpel", "pollen", "stigma ", "anther"],
    answer: 3,
  },
  {
    question: "The parts labelled III and IV respectively are called ___ ",
    image: "./Screenshot_20251121-085221.png",
    options: ["pollen tube and style ", "pollen grain and pollen tube ", "anther and filament ", "stigma and style"],
    answer: 0,
  },
  {
    question: "Which of these describes a living thing?",
    options: ["Capable of reproducing and responding to stimuli", "Cannot move", "Cannot excrete waste", "Lacks growth ability"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a life process?",
    options: ["Feeding", "Excretion", "Metabolism", "Crystallization"],
    answer: 3,
  },
  {
    question: "What is the likely food of the bird in I ? ",
    image: "./Screenshot_20251121-091110.png",
    options: ["worms ", "seeds ", "necter", "fishes"],
    answer: 2,
  },
  {
    question: "The food of the bird in II is ___? ",
    image: "./Screenshot_20251121-091110.png",
    options: ["worms ", "seeds ", "necter", "fishes"],
    answer: 1,
  },
  {
    question: "Living things show organization in structure and function, beginning from _______.",
    options: ["Tissue", "Organ", "Cell", "Organ system"],
    answer: 2,
  },
    {
      question: "Which of the following is a basic characteristic of all living things?",
      options: ["Movement", "Photosynthesis", "Growth", "Reproduction"],
      answer: 3,
    },
    {
      question: "Which of these processes is necessary for the continuity of life?",
      options: ["Nutrition", "Excretion", "Reproduction", "Respiration"],
      answer: 2,
    },
    {
      question: "Which of the following characteristics of living things is demonstrated by a plant bending towards light?",
      options: ["Growth", "Irritability", "Reproduction", "Movement"],
      answer: 1,
    },
    {
    question: "The bone illustrated above is the ___",
    image: "./Screenshot_20251121-110929.png",
    options: ["femur ", "humerus ", "radius", "ulna"],
    answer: 0,
  },
  {
    question: "The function of the part labelled I is to ___ ",
    image: "./Screenshot_20251121-110929.png",
    options: ["fit into the glenoid cavity of the scapula  ", "fit into the acetabulum of the pelvic girdle  ", "support the lower arm ", "prevent the arm from bending backwards"],
    answer: 1,
  },
  {
    question: "The diagram below illustrates the left side if the human cerebrum. The part labelled X controls ___",
    image: "./Screenshot_20251121-111009.png",
    options: ["general memory", "speech", "sight ", "respiratory functions"],
    answer: 0,
  },
  
  {
    question: "The diagram above is an illustration of ___",
    image: "./Screenshot_20251121-110948.png",
    options: ["normal sight ", "short sightedness ", "correction of long sightedness", "correction of short sightedness"],
    answer: 2,
  },
  
  
  
    {
      question: "Which of the following is NOT a characteristic of living things?",
      options: ["Respiration", "Death", "Growth", "Decay"],
      answer: 3,
    },
    {
      question: "The ability of living organisms to respond to changes in their environment is called _______.",
      options: ["Reproduction", "Irritability", "Adaptation", "Metabolism"],
      answer: 1,
    },
    {
    question: "The instrument is a/an ",
    image: "./Screenshot_20251121-111030.png",
    options: ["anemometer ", "hygrometer ", "barometer", "wind vane"],
    answer: 3,
  },
  {
    question: "The instrument is used to measure the ___  ",
    image: "./Screenshot_20251121-111030.png",
    options: ["direction of wind ", "speed of wind ", "air pressure in an habitat", "turbidity of water"],
    answer: 0,
  },
    {
      question: "In animals, excretion is important for removing _____.",
      options: ["Carbon dioxide and nitrogenous waste", "Water and oxygen", "Nutrients and salts", "Enzymes and vitamins"],
      answer: 0,
    },
    {
      question: "The sum of all chemical processes in a living organism is referred to as _______.",
      options: ["Digestion", "Metabolism", "Irritability", "Circulation"],
      answer: 1,
    },
    {
      question: "Which of the following processes involves the breakdown of food substances to release energy?",
      options: ["Photosynthesis", "Respiration", "Excretion", "Digestion"],
      answer: 1,
    },
    {
      question: "The process by which green plants make their own food is called _______.",
      options: ["Osmosis", "Photosynthesis", "Respiration", "Transpiration"],
      answer: 1,
    },
    {
      question: "Living things increase in size and complexity through the process of _______.",
      options: ["Reproduction", "Growth", "Assimilation", "Irritability"],
      answer: 1,
    },
    
    {
      question: "Which of the labelled part enables the animal to stay under water most of the time? ",
      image: "./Screenshot_20251121-111059.png",
      options: ["I, IV and V", "I, II and V", "I, III and IV", "III, IV and V"],
      answer: 1,
    },
    {
      question: "Two characteristic features of the class to which the crocodile belongs are labelled ___ ",
      image: "./Screenshot_20251121-111059.png",
      options: ["I and II", "III and IV", "II and IV", "II and V"],
      answer: 1,
    },
    {
      question: "Which of these best explains why growth is a permanent increase in size?",
      options: ["It involves cell enlargement and division", "It involves temporary water intake", "It happens only at night", "It occurs without nutrition"],
      answer: 0,
    },
    {
      question: "The removal of metabolic waste from the body of an organism is called _______.",
      options: ["Excretion", "Egestion", "Secretion", "Diffusion"],
      answer: 0,
    },
    
    
    {
      question: "The ability of an organism to maintain a stable internal condition is called _______.",
      options: ["Homeostasis", "Metabolism", "Assimilation", "Adaptation"],
      answer: 0,
    },
    {
      question: "Which of the following characteristics is common to both plants and animals?",
      options: ["Movement", "Photosynthesis", "Respiration", "Egestion"],
      answer: 2,
    },
    {
      question: "All living things need energy mainly for _______.",
      options: ["Sleeping", "Growth and repair", "Evaporation", "Diffusion"],
      answer: 1,
    },
    {
      question: "The ability to produce offspring of the same kind is called _______.",
      options: ["Irritability", "Reproduction", "Growth", "Respiration"],
      answer: 1,
    },
    {
      question: "Which of these statements about living things is TRUE?",
      options: ["All living things can move from place to place", "All living things respire", "All living things have chlorophyll", "All living things are animals"],
      answer: 1,
    },
    {
      question: "Which characteristic of living things ensures survival in changing environments?",
      options: ["Adaptation", "Reproduction", "Metabolism", "Assimilation"],
      answer: 0,
    },
    {
      question: "In multicellular organisms, growth occurs mainly by _______.",
      options: ["Enlargement of existing cells", "Division of cells", "Accumulation of fat", "Water absorption"],
      answer: 1,
    },
    {
      question: "The part of the mammalian skeleton illustrated in the diagram is the ___ ",
      image: "./Screenshot_20251121-113343.png",
      options: ["altlas vertebrae", "axis vertebrae", "cervical vertebrae", "thoracic vertebrae"],
      answer: 2,
    },
    {
      question: "The function of the part I is to",
      image: "./Screenshot_20251121-113343.png",
      options: ["provide support to the spinal cord", "provide surface for attachment of the muscle", " carry the spinal cord ", "articulate with adjacent vertebrae "],
      answer: 0,
    },
    
    
    {
      question: "Which of the following distinguishes living things from non-living things?",
      options: ["Ability to reproduce", "Ability to expand", "Ability to reflect light", "Ability to float in water"],
      answer: 0,
    },
    {
      question: "Which of the following is a product of respiration?",
      options: ["Oxygen", "Carbon dioxide", "Glucose", "Chlorophyll"],
      answer: 1,
    },
    {
      question: "The process by which organisms take in materials for growth and energy is called _______.",
      options: ["Nutrition", "Irritability", "Metabolism", "Photosynthesis"],
      answer: 0,
    },
    {
      question: "The living part of an organism’s environment is called its _______.",
      options: ["Habitat", "Biotic component", "Abiotic component", "Niche"],
      answer: 1,
    },
    {
      question: "The part of the mammalian skeleton illustrated in the diagram is the ___ ",
      image: "./Screenshot_20251121-113343.png",
      options: ["altlas vertebrae", "axis vertebrae", "cervical vertebrae", "thoracic vertebrae"],
      answer: 2,
    },
    
    {
      question: "The non-living factors of an ecosystem are called _______.",
      options: ["Biotic factors", "Abiotic factors", "Organic factors", "Chemical factors"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a feature of living things?",
      options: ["Feeding", "Photosynthesis", "Growth", "Decay"],
      answer: 3,
    },
    {
      question: "In plants, movement is mainly shown by _______.",
      options: ["Tropism", "Running", "Walking", "Swimming"],
      answer: 0,
    },
    {
      question: "Which of these is an example of an autotrophic organism?",
      options: ["Man", "Fish", "Grass", "Mushroom"],
      answer: 2,
    },
    {
      question: "Which of the following is NOT a function of respiration?",
      options: ["Energy release", "Carbon dioxide production", "Water production", "Protein synthesis"],
      answer: 3,
    },
    {
      question: "The process by which living things remove undigested food is called _______.",
      options: ["Egestion", "Excretion", "Secretion", "Assimilation"],
      answer: 0,
    },
    
    {
      question: "The mode of nutrition of the plant in the diagram is ___",
      image: "./Screenshot_20251121-113404.png",
      options: ["photosynthetic and chemosynthetic", "saprophytic and carnivorous", "photosynthetic and carnivorous", " chemosynthetic and saprophytic"],
      answer: 2,
    },
    {
    question: "The structure labelled I is a/an",
    image: "./Screenshot_20251121-113404.png",
    options: ["pitcher", "onion ", "flower", " tendril"],
    answer: 0,
  },
  
    {
      question: "Which of these best describes reproduction?",
      options: ["Release of energy", "Formation of new individuals", "Breaking down of food", "Elimination of waste"],
      answer: 1,
    },
    {
      question: "Which of the following substances is a waste product of photosynthesis?",
      options: ["Carbon dioxide", "Water", "Oxygen", "Glucose"],
      answer: 2,
    },
    {
      question: "The movement of a plant shoot towards light is called _______.",
      options: ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"],
      answer: 0,
    },
    {
    question: "Which of the following statements about the cross is correct? ",
    image: "./Screenshot_20251121-113432.png",
    options: [" the gene for the spotted cat is recessive to the gene for the black cat ", "black cat and spotted cat are co-dominant ", "the gene for the spotted cat is dominant over the gene for the black cat ", " the genotype for F1 are homozygous dominant"],
    answer: 2,
    },
    {
      question: "An organism that depends on other organisms for food is called a _______.",
      options: ["Heterotroph", "Autotroph", "Producer", "Saprophyte"],
      answer: 0,
    },
    {
      question: "The characteristic of living things that ensures waste removal is _______.",
      options: ["Excretion", "Nutrition", "Respiration", "Growth"],
      answer: 0,
    },
    {
      question: "Which of the varieties is likely to increase most in number if a predatory fish is introduced in the river? ",
      image: "./Screenshot_20251121-113500.png",
      options: ["P", "Q", "R", "S"],
      answer:2 ,
    },
    {
    question: "Which of the varieties is most likely to outlive the other?",
    image: "./Screenshot_20251121-113500.png",
    options: ["P", "Q", "R", "S"],
    answer: 3,
  },
    {
      question: "The process by which organisms exchange gases with the environment is called _______.",
      options: ["Respiration", "Excretion", "Photosynthesis", "Osmosis"],
      answer: 0,
    },
    {
      question: "Which of these is NOT an example of movement in animals?",
      options: ["Running", "Flying", "Bending towards light", "Jumping"],
      answer: 2,
    },
    {
      question: "A cat responding to a sound is showing the characteristic of _______.",
      options: ["Reproduction", "Irritability", "Growth", "Nutrition"],
      answer: 1,
    },
    {
      question: "Which of these is an example of excretion in humans?",
      options: ["Sweating", "Eating", "Sleeping", "Talking"],
      answer: 0,
    },
    {
      question: "The ability of living organisms to change over long periods to suit their environment is called _______.",
      options: ["Adaptation", "Evolution", "Irritability", "Homeostasis"],
      answer: 0,
    },
    {
    question: "In which of the following cells is division likely to take place? ",
    options: ["sperm cell", "blood cell", "muscle cell", "uterine wall"],
    answer: 0,
  },
  
    {
      question: "Which of the following best describes metabolism?",
      options: ["All chemical reactions in an organism", "Only digestion", "Only respiration", "Excretion process"],
      answer: 0,
    },
    {
      question: "Which of these organisms cannot make its own food?",
      options: ["Mango tree", "Green algae", "Man", "Euglena"],
      answer: 2,
    },
    {
      question: "Which of these is the basic unit of life?",
      options: ["Tissue", "Cell", "Organ", "System"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT necessary for plant growth?",
      options: ["Light", "Air", "Sound", "Water"],
      answer: 2,
    },
    {
      question: "Animals excrete nitrogenous waste mainly as _______.",
      options: ["Carbon dioxide", "Ammonia", "Urea", "Water"],
      answer: 2,
    },
    {
      question: "The process of maintaining water balance in the body is a part of _______.",
      options: ["Homeostasis", "Osmosis", "Excretion", "Diffusion"],
      answer: 0,
    },
    {
      question: "Living things obtain energy from food through _______.",
      options: ["Respiration", "Digestion", "Photosynthesis", "Excretion"],
      answer: 0,
    },
    {
      question: "Which of the following best describes life processes?",
      options: ["Characteristics of living things", "Processes in machines", "Chemical changes in rocks", "Environmental cycles"],
      answer: 0,
    },
    {
      question: "Which characteristic of living things ensures increase in number of individuals?",
      options: ["Reproduction", "Growth", "Movement", "Irritability"],
      answer: 0,
    },
    {
      question: "All living organisms depend ultimately on _______ for energy.",
      options: ["The sun", "The moon", "The soil", "Water"],
      answer: 0,
    },
    {
      question: "The removal of metabolic waste through the skin is called _______.",
      options: ["Sweating", "Breathing", "Urination", "Egestion"],
      answer: 0,
    },
    {
      question: "Which of the following is a catabolic process?",
      options: ["Photosynthesis", "Protein synthesis", "Respiration", "Assimilation"],
      answer: 2,
    },
    {
      question: "An organism that carries out both photosynthesis and ingestion of food is _____.",
      options: ["Euglena", "Paramecium", "Amoeba", "Volvox"],
      answer: 0,
    }, 
    
  //cell and its environment 
    {
      question: "The cell is regarded as the basic unit of life because ______.",
      options: [
        "All living things are made up of cells",
        "It performs all life activities",
        "It exists only in animals",
        "It is visible to the naked eye"
      ],
      answer: 1,
    },
    {
      question: "The structure that controls the activities of the cell is the _______.",
      options: ["Cytoplasm", "Nucleus", "Cell wall", "Mitochondrion"],
      answer: 1,
    },
    {
      question: "The jelly-like substance that fills the cell and holds organelles is called _______.",
      options: ["Cytoplasm", "Nucleus", "Chloroplast", "Vacuole"],
      answer: 0,
    },
    {
      question: "Which of the following is a function of the cell membrane?",
      options: [
        "Protection and selective permeability",
        "Storage of food",
        "Photosynthesis",
        "Respiration"
      ],
      answer: 0,
    },
    {
      question: "Which of the following structures is found only in plant cells?",
      options: ["Mitochondrion", "Cell wall", "Nucleus", "Ribosome"],
      answer: 1,
    },
    {
      question: "The part of a plant cell responsible for photosynthesis is the _______.",
      options: ["Chloroplast", "Vacuole", "Nucleus", "Mitochondrion"],
      answer: 0,
    },
    {
      question: "The living content of a cell is called _______.",
      options: ["Protoplasm", "Plasma membrane", "Cytoplasm", "Chlorophyll"],
      answer: 0,
    },
    {
      question: "Which of the following controls movement of materials in and out of the cell?",
      options: ["Cell wall", "Cell membrane", "Cytoplasm", "Nucleolus"],
      answer: 1,
    },
    {
      question: "The power house of the cell is the _______.",
      options: ["Mitochondrion", "Ribosome", "Vacuole", "Chloroplast"],
      answer: 0,
    },
    {
      question: "Which cell organelle is responsible for protein synthesis?",
      options: ["Nucleus", "Ribosome", "Golgi body", "Vacuole"],
      answer: 1,
    },
    {
      question: "Which of these best describes osmosis?",
      options: [
        "Movement of water molecules through a semi-permeable membrane",
        "Movement of solute particles across a membrane",
        "Random movement of particles in air",
        "Uptake of minerals from soil"
      ],
      answer: 0,
    },
    {
      question: "Diffusion differs from osmosis because diffusion _______.",
      options: [
        "Occurs in all states of matter",
        "Involves only water",
        "Requires a semi-permeable membrane",
        "Needs energy"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is a function of the vacuole in a plant cell?",
      options: [
        "Maintains turgor pressure",
        "Controls cell division",
        "Carries genetic material",
        "Synthesizes protein"
      ],
      answer: 0,
    },
    {
      question: "Which of the following is absent in an animal cell?",
      options: ["Cell wall", "Nucleus", "Cytoplasm", "Ribosome"],
      answer: 0,
    },
    {
      question: "A cell that has lost water by osmosis is said to be _______.",
      options: ["Plasmolysed", "Turgid", "Flaccid", "Rigid"],
      answer: 0,
    },
    {
      question: "When a red blood cell is placed in distilled water, it ______.",
      options: ["Bursts", "Shrinks", "Remains the same", "Becomes flaccid"],
      answer: 0,
    },
    {
      question: "Which of these is a similarity between diffusion and osmosis?",
      options: [
        "Both are passive processes",
        "Both require energy",
        "Both occur only in liquids",
        "Both need living cells"
      ],
      answer: 0,
    },
    {
      question: "The process by which substances move against a concentration gradient using energy is called _______.",
      options: ["Active transport", "Diffusion", "Osmosis", "Plasmolysis"],
      answer: 0,
    },
    {
      question: "Which of the following best describes a semi-permeable membrane?",
      options: [
        "Allows only certain molecules to pass through",
        "Prevents all substances from passing",
        "Allows all substances freely",
        "Allows only gases to pass"
      ],
      answer: 0,
    },
    {
      question: "Which of these is not an organelle?",
      options: ["Mitochondrion", "Nucleus", "Ribosome", "Vacuole membrane"],
      answer: 3,
    },
    {
      question: "In plant cells, the cell wall is mainly composed of _____.",
      options: ["Cellulose", "Protein", "Lipid", "Chitin"],
      answer: 0,
    },
    {
      question: "Plasmolysis occurs when a cell is placed in a _____ solution.",
      options: ["Hypertonic", "Hypotonic", "Isotonic", "Neutral"],
      answer: 0,
    },
    {
      question: "Which of the following statements about osmosis is TRUE?",
      options: [
        "It involves the movement of water through a membrane",
        "It requires energy",
        "It only occurs in gases",
        "It is the movement of solutes"
      ],
      answer: 0,
    },
    {
      question: "Which structure controls the activities of other organelles?",
      options: ["Cytoplasm", "Nucleus", "Vacuole", "Ribosome"],
      answer: 1,
    },
    {
      question: "The process by which plant roots absorb water is _______.",
      options: ["Osmosis", "Diffusion", "Transpiration", "Active transport"],
      answer: 0,
    },
    {
      question: "The cell organelle involved in respiration is _____.",
      options: ["Mitochondrion", "Nucleus", "Ribosome", "Vacuole"],
      answer: 0,
    },
    {
      question: "Which of the following is found in both plant and animal cells?",
      options: ["Cell wall", "Chloroplast", "Nucleus", "Large vacuole"],
      answer: 2,
    },
    {
      question: "A cell becomes turgid when placed in a ______ solution.",
      options: ["Hypotonic", "Hypertonic", "Isotonic", "Concentrated"],
      answer: 0,
    },
    {
      question: "Which of these best defines diffusion?",
      options: [
        "Movement of molecules from high to low concentration",
        "Movement of water through a membrane",
        "Active movement of particles",
        "Flow of liquid through a pipe"
      ],
      answer: 0,
    },
    {
      question: "The plasma membrane is composed mainly of _______.",
      options: ["Lipids and proteins", "Sugars and starch", "Acids and bases", "Enzymes"],
      answer: 0,
    },
    {
      question: "When a cell is in an isotonic solution, water movement is _______.",
      options: ["Equal in both directions", "Only into the cell", "Only out of the cell", "Stopped completely"],
      answer: 0,
    },
    {
      question: "The region in the nucleus that produces ribosomes is the _______.",
      options: ["Nucleolus", "Chromosome", "Cytoplasm", "Vacuole"],
      answer: 0,
    },
    {
      question: "Which of these organelles is absent in prokaryotic cells?",
      options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosome"],
      answer: 0,
    },
    {
      question: "The movement of ions through the cell membrane often requires _______.",
      options: ["Energy", "Diffusion", "Osmosis", "Capillarity"],
      answer: 0,
    },
    {
      question: "Which process does not require energy?",
      options: ["Diffusion", "Active transport", "Cytoplasmic streaming", "Endocytosis"],
      answer: 0,
    },
    {
      question: "The function of the Golgi apparatus is to _______.",
      options: ["Package and transport materials", "Store water", "Control cell division", "Produce ribosomes"],
      answer: 0,
    },
    {
      question: "Which organelle is responsible for digestion of worn-out cell parts?",
      options: ["Lysosome", "Ribosome", "Golgi body", "Chloroplast"],
      answer: 0,
    },
    {
      question: "In a hypertonic solution, an animal cell will _______.",
      options: ["Shrink", "Burst", "Remain the same", "Become turgid"],
      answer: 0,
    },
    {
      question: "Which of these best explains active transport?",
      options: [
        "Movement of substances against concentration gradient using ATP",
        "Movement of water through osmosis",
        "Passive movement of solutes",
        "Random movement of particles"
      ],
      answer: 0,
    },
    {
      question: "The cell wall provides _______ to plant cells.",
      options: ["Support and protection", "Energy", "Food storage", "Photosynthesis"],
      answer: 0,
    },
    {
      question: "Which organelle controls cell metabolism?",
      options: ["Nucleus", "Ribosome", "Vacuole", "Lysosome"],
      answer: 0,
    },
    {
      question: "The selective permeability of a membrane means it _______.",
      options: [
        "Allows only certain substances to pass through",
        "Allows all substances freely",
        "Prevents all movement",
        "Allows only gases to move"
      ],
      answer: 0,
    },
    {
      question: "Cytoplasm serves as the site for _______.",
      options: [
        "Many metabolic reactions",
        "Photosynthesis only",
        "Protein synthesis only",
        "Excretion only"
      ],
      answer: 0,
    },
    {
      question: "Which structure in the cell is responsible for hereditary information?",
      options: ["Chromosomes", "Mitochondria", "Ribosomes", "Golgi bodies"],
      answer: 0,
    },
    {
      question: "The double-layered membrane around the nucleus is called the _______.",
      options: ["Nuclear envelope", "Plasma membrane", "Nucleolus", "Cell wall"],
      answer: 0,
    },
    {
      question: "Which of the following best describes endocytosis?",
      options: [
        "Intake of large particles by engulfing them",
        "Expulsion of waste from the cell",
        "Diffusion of ions",
        "Absorption of water"
      ],
      answer: 0,
    },
    {
      question: "The fluid mosaic model describes the _______.",
      options: ["Structure of cell membrane", "Structure of DNA", "Function of ribosome", "Structure of mitochondrion"],
      answer: 0,
    },
    {
      question: "Which of the following is NOT a function of the cell membrane?",
      options: [
        "Allowing materials to pass selectively",
        "Separating cell contents",
        "Providing energy for respiration",
        "Protecting cell contents"
      ],
      answer: 2,
    },
    {
      question: "Which of these is an example of passive transport?",
      options: ["Osmosis", "Active transport", "Pinocytosis", "Endocytosis"],
      answer: 0,
    },
    {
      question: "The mitochondrion releases energy in the form of _______.",
      options: ["ATP", "ADP", "DNA", "Glucose"],
      answer: 0,
    },
    {
      question: "Which of the following helps in intracellular digestion?",
      options: ["Lysosome", "Vacuole", "Ribosome", "Chloroplast"],
      answer: 0,
    },
    {
      question: "A cell placed in a hypotonic solution will _______.",
      options: ["Gain water", "Lose water", "Shrink", "Remain unchanged"],
      answer: 0,
    },
    
    //cell structures and functions 
    
    {
    question: "The cell is regarded as the basic unit of life because _______.",
    options: [
      "it is found in all organisms",
      "it performs all life activities",
      "it is microscopic",
      "it cannot exist independently"
    ],
    answer: 1,
  },
  {
    question: "The outer boundary of an animal cell is the _______.",
    options: [
      "cell wall",
      "cell membrane",
      "nuclear envelope",
      "cytoplasm"
    ],
    answer: 1,
  },
  {
    question: "The structure responsible for controlling the entry and exit of materials in a cell is the _______.",
    options: [
      "nucleus",
      "cytoplasm",
      "cell membrane",
      "vacuole"
    ],
    answer: 2,
  },
  {
    question: "The living substance of a cell excluding the nucleus is the _______.",
    options: [
      "cytoplasm",
      "protoplasm",
      "nucleoplasm",
      "organelles"
    ],
    answer: 0,
  },
  {
    question: "Which of the following organelles is present only in plant cells?",
    options: [
      "Chloroplast",
      "Mitochondrion",
      "Ribosome",
      "Nucleus"
    ],
    answer: 0,
  },
  {
    question: "The organelle responsible for respiration in the cell is the _______.",
    options: [
      "ribosome",
      "mitochondrion",
      "chloroplast",
      "Golgi body"
    ],
    answer: 1,
  },
  {
    question: "Which part of the cell contains the hereditary material?",
    options: [
      "Cytoplasm",
      "Nucleus",
      "Cell wall",
      "Vacuole"
    ],
    answer: 1,
  },
  {
    question: "The cell wall is composed mainly of _______.",
    options: [
      "lipids",
      "starch",
      "cellulose",
      "protein"
    ],
    answer: 2,
  },
  {
    question: "Which organelle packages and secretes materials in the cell?",
    options: [
      "Endoplasmic reticulum",
      "Golgi apparatus",
      "Mitochondrion",
      "Nucleolus"
    ],
    answer: 1,
  },
  {
    question: "Which organelle is responsible for photosynthesis?",
    options: [
      "Mitochondrion",
      "Lysosome",
      "Chloroplast",
      "Golgi body"
    ],
    answer: 2,
  },
  {
    question: "The jelly-like fluid within the cell membrane is called the _______.",
    options: [
      "protoplasm",
      "cytoplasm",
      "nucleoplasm",
      "vacuole"
    ],
    answer: 1,
  },
  {
    question: "The part of the cell where ribosomes are produced is the _______.",
    options: [
      "nucleolus",
      "nuclear membrane",
      "chromatin",
      "endoplasmic reticulum"
    ],
    answer: 0,
  },
  {
    question: "Which organelle helps in protein synthesis?",
    options: [
      "Lysosome",
      "Ribosome",
      "Vacuole",
      "Chloroplast"
    ],
    answer: 1,
  },
  {
    question: "Which organelle is called the ‘powerhouse’ of the cell?",
    options: [
      "Nucleus",
      "Mitochondrion",
      "Golgi apparatus",
      "Vacuole"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is present in both plant and animal cells?",
    options: [
      "Cell wall",
      "Chloroplast",
      "Mitochondrion",
      "Plastid"
    ],
    answer: 2,
  },
  {
    question: "The double-layered membrane surrounding the nucleus is called _______.",
    options: [
      "cell wall",
      "nuclear envelope",
      "cytoplasmic membrane",
      "nucleolus"
    ],
    answer: 1,
  },
  {
    question: "Which organelle stores waste and water in plant cells?",
    options: [
      "Chloroplast",
      "Vacuole",
      "Ribosome",
      "Nucleolus"
    ],
    answer: 1,
  },
  {
    question: "The endoplasmic reticulum is involved in _______.",
    options: [
      "digestion",
      "transport of materials",
      "photosynthesis",
      "respiration"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is not an organelle?",
    options: [
      "Nucleus",
      "Cytoplasm",
      "Ribosome",
      "Mitochondrion"
    ],
    answer: 1,
  },
  {
    question: "Which of these cell structures is non-living?",
    options: [
      "Nucleus",
      "Cytoplasm",
      "Cell wall",
      "Mitochondrion"
    ],
    answer: 2,
  },
  {
    question: "In plant cells, turgidity is maintained by the _______.",
    options: [
      "nucleus",
      "vacuole",
      "cytoplasm",
      "cell wall"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is common to all cells?",
    options: [
      "Mitochondria",
      "Cell membrane",
      "Chloroplast",
      "Cell wall"
    ],
    answer: 1,
  },
  {
    question: "Which part of a cell controls all metabolic activities?",
    options: [
      "Cytoplasm",
      "Nucleus",
      "Ribosome",
      "Golgi body"
    ],
    answer: 1,
  },
  {
    question: "The main function of lysosomes is _______.",
    options: [
      "digestion of worn-out cell parts",
      "protein synthesis",
      "cell division",
      "transport"
    ],
    answer: 0,
  },
  {
    question: "Which organelle detoxifies harmful substances in the liver?",
    options: [
      "Smooth endoplasmic reticulum",
      "Golgi body",
      "Mitochondrion",
      "Ribosome"
    ],
    answer: 0,
  },
  {
    question: "Chromosomes are found in the _______.",
    options: [
      "nucleolus",
      "nucleus",
      "cytoplasm",
      "mitochondrion"
    ],
    answer: 1,
  },
  {
    question: "The small spherical body within the nucleus is called _______.",
    options: [
      "chromatin",
      "nucleolus",
      "ribosome",
      "centriole"
    ],
    answer: 1,
  },
  {
    question: "The function of centrioles is to _______.",
    options: [
      "store water",
      "help in cell division",
      "carry genetic information",
      "absorb light energy"
    ],
    answer: 1,
  },
  {
    question: "The cell wall is absent in _______.",
    options: [
      "plant cell",
      "animal cell",
      "fungal cell",
      "bacterial cell"
    ],
    answer: 1,
  },
  {
    question: "Protoplasm is composed mainly of _______.",
    options: [
      "water, proteins, and lipids",
      "starch, fats, and sugar",
      "enzymes and cellulose",
      "minerals and acids"
    ],
    answer: 0,
  },
  {
    question: "The structure that maintains cell shape is the _______.",
    options: [
      "nucleus",
      "cell wall",
      "chloroplast",
      "ribosome"
    ],
    answer: 1,
  },
  {
    question: "Which of the following best describes cytoplasm?",
    options: [
      "The region where genetic materials are stored",
      "The site for most metabolic reactions",
      "A non-living structure in plant cells",
      "The thick outer layer of the cell"
    ],
    answer: 1,
  },
  {
    question: "Plasmodesmata are found in _______.",
    options: [
      "animal cells",
      "plant cells",
      "bacteria",
      "fungi"
    ],
    answer: 1,
  },
  {
    question: "The nuclear material of a prokaryotic cell is found in the _______.",
    options: [
      "nucleus",
      "cytoplasm",
      "chromosome",
      "nucleolus"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a function of ribosomes?",
    options: [
      "Protein synthesis",
      "Energy production",
      "Food storage",
      "Transport"
    ],
    answer: 0,
  },
  {
    question: "In a typical cell, the mitochondrion is more numerous in _______.",
    options: [
      "inactive cells",
      "muscle cells",
      "parenchyma cells",
      "epidermal cells"
    ],
    answer: 1,
  },
  {
    question: "The plasma membrane is composed mainly of _______.",
    options: [
      "cellulose and proteins",
      "lipids and proteins",
      "sugar and cellulose",
      "starch and fats"
    ],
    answer: 1,
  },
  {
    question: "Chromatin network is found in the _______.",
    options: [
      "cytoplasm",
      "nucleoplasm",
      "cell wall",
      "ribosome"
    ],
    answer: 1,
  },
  {
    question: "The cell organelle that digests worn-out parts is the _______.",
    options: [
      "lysosome",
      "vacuole",
      "ribosome",
      "mitochondrion"
    ],
    answer: 0,
  },
  {
    question: "What structure gives rigidity to plant cells?",
    options: [
      "Cell membrane",
      "Cytoplasm",
      "Cell wall",
      "Vacuole"
    ],
    answer: 2,
  },
  {
    question: "Which organelle assists in lipid synthesis?",
    options: [
      "Rough ER",
      "Smooth ER",
      "Mitochondria",
      "Chloroplast"
    ],
    answer: 1,
  },
  {
    question: "Cell theory was first proposed by _______.",
    options: [
      "Schwann and Schleiden",
      "Robert Hooke",
      "Pasteur and Darwin",
      "Watson and Crick"
    ],
    answer: 0,
  },
  {
    question: "A plant cell can be distinguished from an animal cell by the presence of _______.",
    options: [
      "nucleus",
      "cytoplasm",
      "chloroplast",
      "mitochondria"
    ],
    answer: 2,
  },
  {
    question: "The structure that controls all activities in a cell is the _______.",
    options: [
      "nucleus",
      "ribosome",
      "cytoplasm",
      "vacuole"
    ],
    answer: 0,
  },
  
  {
    question: "The cell membrane is described as selectively permeable because _______.",
    options: [
      "it allows all substances to pass freely",
      "it allows only certain substances to pass",
      "it blocks everything",
      "it is rigid and strong"
    ],
    answer: 1,
  },
  {
    question: "The main function of the Golgi apparatus is _______.",
    options: [
      "protein synthesis",
      "modification, packaging, and secretion",
      "respiration",
      "photosynthesis"
    ],
    answer: 1,
  },
  {
    question: "Centrioles are involved in _______.",
    options: [
      "protein synthesis",
      "cell division",
      "lipid storage",
      "photosynthesis"
    ],
    answer: 1,
  },
  {
    question: "The cell organelle responsible for storage of water and solutes in plant cells is the _______.",
    options: [
      "vacuole",
      "chloroplast",
      "ribosome",
      "lysosome"
    ],
    answer: 0,
  },
  {
    question: "Ribosomes are found on the surface of _______.",
    options: [
      "smooth endoplasmic reticulum",
      "rough endoplasmic reticulum",
      "mitochondria",
      "Golgi apparatus"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is true for prokaryotic cells?",
    options: [
      "They have a true nucleus",
      "They lack membrane-bound organelles",
      "They have chloroplasts",
      "They are always multicellular"
    ],
    answer: 1,
  },
  {
    question: "Which cell structure provides protection and shape to plant cells?",
    options: [
      "Cell membrane",
      "Cytoplasm",
      "Cell wall",
      "Vacuole"
    ],
    answer: 2,
  },
  {
    question: "The structure that stores genetic information in a cell is the _______.",
    options: [
      "ribosome",
      "nucleus",
      "mitochondrion",
      "Golgi body"
    ],
    answer: 1,
  },
  {
    question: "Which organelle breaks down waste materials and worn-out organelles?",
    options: [
      "Lysosome",
      "Vacuole",
      "Ribosome",
      "Chloroplast"
    ],
    answer: 0,
  },
  {
    question: "Cytoplasm is mainly composed of _______.",
    options: [
      "water and dissolved substances",
      "cellulose and lignin",
      "starch and sugar",
      "lipids and DNA"
    ],
    answer: 0,
  },
  {
    question: "Which organelle captures light energy for photosynthesis?",
    options: [
      "Mitochondrion",
      "Chloroplast",
      "Lysosome",
      "Endoplasmic reticulum"
    ],
    answer: 1,
  },
  {
    question: "The process by which a cell engulfs solid particles is called _______.",
    options: [
      "Exocytosis",
      "Endocytosis",
      "Phagocytosis",
      "Osmosis"
    ],
    answer: 2,
  },
  {
    question: "The fluid inside the nucleus is called _______.",
    options: [
      "Cytoplasm",
      "Nucleoplasm",
      "Vacuole sap",
      "Chlorophyll"
    ],
    answer: 1,
  },
  {
    question: "Which organelle synthesizes lipids and detoxifies substances?",
    options: [
      "Smooth endoplasmic reticulum",
      "Rough endoplasmic reticulum",
      "Golgi body",
      "Mitochondrion"
    ],
    answer: 0,
  },
  {
    question: "The nuclear membrane contains small openings called _______.",
    options: [
      "Nuclear pores",
      "Plasmodesmata",
      "Cytoplasmic channels",
      "Pits"
    ],
    answer: 0,
  },
  {
    question: "The semi-fluid material that surrounds organelles in a cell is called _______.",
    options: [
      "Cytoplasm",
      "Nucleoplasm",
      "Cell sap",
      "Chloroplast fluid"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is involved in the production of ATP?",
    options: [
      "Mitochondrion",
      "Ribosome",
      "Golgi apparatus",
      "Vacuole"
    ],
    answer: 0,
  },
  {
    question: "Plasmodesmata are channels found in _______.",
    options: [
      "plant cells",
      "animal cells",
      "bacteria",
      "fungi"
    ],
    answer: 0,
  },
  {
    question: "Which organelle stores proteins for secretion?",
    options: [
      "Golgi apparatus",
      "Mitochondrion",
      "Vacuole",
      "Ribosome"
    ],
    answer: 0,
  },
  {
    question: "The cell theory states that all cells arise from _______.",
    options: [
      "pre-existing cells",
      "cytoplasm",
      "protoplasm",
      "nucleus"
    ],
    answer: 0,
  },
  {
    question: "Which of the following structures is involved in intracellular transport?",
    options: [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Ribosome",
      "Lysosome"
    ],
    answer: 1,
  },
  {
    question: "Which organelle is responsible for producing ribosomal RNA?",
    options: [
      "Nucleolus",
      "Nucleus",
      "Cytoplasm",
      "Ribosome"
    ],
    answer: 0,
  },
  {
    question: "The structure that regulates the movement of substances into and out of the cell is the _______.",
    options: [
      "Cell membrane",
      "Cell wall",
      "Vacuole",
      "Nucleus"
    ],
    answer: 0,
  },
  {
    question: "Which cell organelle is mainly involved in secretion and packaging?",
    options: [
      "Golgi body",
      "Mitochondrion",
      "Ribosome",
      "Vacuole"
    ],
    answer: 0,
  },
  {
    question: "The cytoskeleton helps the cell to _______.",
    options: [
      "store water",
      "maintain shape and support",
      "synthesize proteins",
      "digest waste"
    ],
    answer: 1,
  },
  {
    question: "The function of the nucleolus is to _______.",
    options: [
      "produce ribosomes",
      "control cell activities",
      "store energy",
      "digest food"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is responsible for photosynthesis in plant cells?",
    options: [
      "Mitochondrion",
      "Chloroplast",
      "Lysosome",
      "Endoplasmic reticulum"
    ],
    answer: 1,
  },
  {
    question: "The rough endoplasmic reticulum is involved in _______.",
    options: [
      "lipid synthesis",
      "protein synthesis",
      "DNA replication",
      "energy production"
    ],
    answer: 1,
  },
  {
    question: "Which of the following organelles contains digestive enzymes?",
    options: [
      "Lysosome",
      "Vacuole",
      "Golgi body",
      "Mitochondrion"
    ],
    answer: 0,
  },
  {
    question: "The vacuole of a plant cell contains _______.",
    options: [
      "cell sap",
      "ribosomes",
      "chromatin",
      "mitochondria"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is responsible for energy release through respiration?",
    options: [
      "Chloroplast",
      "Mitochondrion",
      "Golgi apparatus",
      "Ribosome"
    ],
    answer: 1,
  },
  {
    question: "The cell membrane is made up mainly of _______.",
    options: [
      "lipids and proteins",
      "cellulose and lignin",
      "DNA and RNA",
      "carbohydrates and water"
    ],
    answer: 0,
  },
  {
    question: "Which of the following is not a function of the cytoplasm?",
    options: [
      "Transport of materials",
      "Site of metabolic activities",
      "Protein synthesis",
      "Control of cell activities"
    ],
    answer: 3,
  },
  {
    question: "The part of a plant cell that maintains turgidity is the _______.",
    options: [
      "vacuole",
      "chloroplast",
      "cytoplasm",
      "cell wall"
    ],
    answer: 0,
  },
  {
    question: "Which organelle forms the spindle fibers during cell division?",
    options: [
      "Centrioles",
      "Mitochondria",
      "Golgi body",
      "Ribosomes"
    ],
    answer: 0,
  },
  {
    question: "The double membrane of mitochondria encloses the _______.",
    options: [
      "matrix",
      "cytoplasm",
      "nucleolus",
      "ribosome"
    ],
    answer: 0,
  },
  {
    question: "The main function of the cell wall is to _______.",
    options: [
      "protect and support the cell",
      "produce ATP",
      "digest food",
      "transport proteins"
    ],
    answer: 0,
  },
  {
    question: "Which organelle synthesizes enzymes and hormones?",
    options: [
      "Rough ER",
      "Smooth ER",
      "Mitochondria",
      "Chloroplast"
    ],
    answer: 1,
  },
  {
    question: "The cell organelle that converts light energy into chemical energy is _______.",
    options: [
      "Chloroplast",
      "Mitochondrion",
      "Golgi body",
      "Endoplasmic reticulum"
    ],
    answer: 0,
  },
  {
    question: "The nucleus is surrounded by a _______.",
    options: [
      "cell wall",
      "nuclear envelope",
      "cytoplasm",
      "vacuole"
    ],
    answer: 1,
  },
  {
    question: "The structure that assists in the movement of substances within a cell is _______.",
    options: [
      "Endoplasmic reticulum",
      "Golgi body",
      "Mitochondrion",
      "Ribosome"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is absent in prokaryotic cells?",
    options: [
      "Ribosome",
      "Chloroplast",
      "Cytoplasm",
      "Cell membrane"
    ],
    answer: 1,
  },
  {
    question: "The nuclear pores allow _______.",
    options: [
      "entry and exit of substances from the nucleus",
      "attachment of ribosomes",
      "movement of mitochondria",
      "photosynthesis"
    ],
    answer: 0,
  },
  {
    question: "The main site of protein synthesis in a cell is the _______.",
    options: [
      "Ribosome",
      "Mitochondria",
      "Golgi apparatus",
      "Lysosome"
    ],
    answer: 0,
  },
  {
    question: "The jelly-like substance that forms the living content of the cell is called _______.",
    options: [
      "Protoplasm",
      "Cell wall",
      "Vacuole",
      "Chloroplast"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is responsible for modifying and packaging proteins for secretion?",
    options: [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Ribosome",
      "Vacuole"
    ],
    answer: 0,
  },
  {
    question: "The cell membrane is involved in _______.",
    options: [
      "movement of substances into and out of the cell",
      "protein synthesis",
      "energy production",
      "DNA storage"
    ],
    answer: 0,
  },
  {
    question: "Which organelle contains enzymes for breaking down macromolecules?",
    options: [
      "Lysosome",
      "Mitochondria",
      "Vacuole",
      "Golgi apparatus"
    ],
    answer: 0,
  },
  {
    question: "The plant cell organelle that stores pigments, starch, and proteins is _______.",
    options: [
      "Vacuole",
      "Plastid",
      "Nucleus",
      "Chloroplast"
    ],
    answer: 1,
  },
  {
    question: "Which organelle is involved in detoxification in the liver?",
    options: [
      "Smooth ER",
      "Rough ER",
      "Golgi body",
      "Mitochondrion"
    ],
    answer: 0,
  },
  {
    question: "Which organelle is not membrane-bound?",
    options: [
      "Ribosome",
      "Mitochondria",
      "Chloroplast",
      "Nucleus"
    ],
    answer: 0,
  },
  {
    question: "Which organelle produces ATP through cellular respiration?",
    options: [
      "Mitochondria",
      "Ribosome",
      "Chloroplast",
      "Golgi body"
    ],
    answer: 0,
  },
  {
    question: "The nucleus controls cell activities through _______.",
    options: [
      "DNA and RNA",
      "ATP",
      "Cytoplasm",
      "Lysosomes"
    ],
    answer: 0,
  },
  
  
  //cell division-meosis and mitosis
  
  {
    question: "Cell division is necessary for _______.",
    options: [
      "growth and repair",
      "photosynthesis",
      "respiration",
      "digestion"
    ],
    answer: 0,
  },
  {
    question: "Which type of cell division produces two identical daughter cells?",
    options: [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    answer: 0,
  },
  {
    question: "Which phase of mitosis is characterized by the alignment of chromosomes at the equator?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 1,
  },
  {
    question: "During which phase of mitosis do sister chromatids separate?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 2,
  },
  {
    question: "The nuclear membrane disappears during _______.",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "Cytokinesis is the process of _______.",
    options: [
      "division of the nucleus",
      "division of the cytoplasm",
      "duplication of chromosomes",
      "alignment of chromosomes"
    ],
    answer: 1,
  },
  {
    question: "Which stage of mitosis is characterized by the formation of two nuclei?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 3,
  },
  {
    question: "Which type of cell division reduces chromosome number by half?",
    options: [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    answer: 1,
  },
  {
    question: "Synapsis occurs during _______.",
    options: [
      "Prophase I of meiosis",
      "Metaphase II of meiosis",
      "Anaphase I of meiosis",
      "Telophase of mitosis"
    ],
    answer: 0,
  },
  {
    question: "Crossing over occurs during _______.",
    options: [
      "Prophase I of meiosis",
      "Metaphase I of meiosis",
      "Anaphase I of meiosis",
      "Telophase I of meiosis"
    ],
    answer: 0,
  },
  {
    question: "The separation of homologous chromosomes occurs in _______.",
    options: [
      "Anaphase I of meiosis",
      "Anaphase II of meiosis",
      "Anaphase of mitosis",
      "Prophase I of meiosis"
    ],
    answer: 0,
  },
  {
    question: "Gametes are produced by _______.",
    options: [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a diploid cell?",
    options: [
      "Gamete",
      "Zygote",
      "Sperm",
      "Egg"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a haploid cell?",
    options: [
      "Zygote",
      "Sperm",
      "Skin cell",
      "Muscle cell"
    ],
    answer: 1,
  },
  {
    question: "Which phase of meiosis is similar to mitosis?",
    options: [
      "Meiosis I",
      "Meiosis II",
      "Prophase I",
      "Metaphase I"
    ],
    answer: 1,
  },
  {
    question: "The chiasmata is formed during _______.",
    options: [
      "Crossing over in meiosis",
      "Chromosome replication",
      "Spindle formation",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "Independent assortment occurs during _______.",
    options: [
      "Metaphase I of meiosis",
      "Metaphase II of meiosis",
      "Metaphase of mitosis",
      "Prophase II of meiosis"
    ],
    answer: 0,
  },
  {
    question: "A zygote is formed by the fusion of _______.",
    options: [
      "Two somatic cells",
      "Sperm and egg",
      "Two sperm cells",
      "Two egg cells"
    ],
    answer: 1,
  },
  {
    question: "Which stage of meiosis produces four haploid cells?",
    options: [
      "Telophase I",
      "Telophase II",
      "Anaphase I",
      "Anaphase II"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is true about mitosis?",
    options: [
      "It produces gametes",
      "It reduces chromosome number",
      "It produces genetically identical cells",
      "It occurs only in reproductive organs"
    ],
    answer: 2,
  },
  {
    question: "Which of the following is true about meiosis?",
    options: [
      "It produces somatic cells",
      "It maintains chromosome number",
      "It produces genetically varied gametes",
      "It occurs in skin cells"
    ],
    answer: 2,
  },
  {
    question: "The stage when chromosomes become visible is _______.",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "The structure that attaches chromatids to spindle fibers is the _______.",
    options: [
      "Centromere",
      "Kinetochore",
      "Chromatin",
      "Nucleolus"
    ],
    answer: 0,
  },
  {
    question: "Which stage of mitosis involves movement of chromosomes toward opposite poles?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 2,
  },
  {
    question: "The end product of meiosis is _______.",
    options: [
      "Two diploid cells",
      "Four haploid cells",
      "One diploid cell",
      "Two haploid cells"
    ],
    answer: 1,
  },
  {
    question: "Which phase of meiosis involves pairing of homologous chromosomes?",
    options: [
      "Prophase I",
      "Prophase II",
      "Metaphase I",
      "Telophase II"
    ],
    answer: 0,
  },
  {
    question: "The number of chromosomes in human gametes is _______.",
    options: [
      "23",
      "46",
      "92",
      "12"
    ],
    answer: 0,
  },
  {
    question: "The number of chromosomes in human somatic cells is _______.",
    options: [
      "23",
      "46",
      "92",
      "12"
    ],
    answer: 1,
  },
  {
    question: "Which stage of meiosis is responsible for genetic recombination?",
    options: [
      "Prophase I",
      "Metaphase I",
      "Anaphase II",
      "Telophase II"
    ],
    answer: 0,
  },
  {
    question: "Which of the following events does not occur in mitosis?",
    options: [
      "Chromosome replication",
      "Crossing over",
      "Spindle formation",
      "Nuclear division"
    ],
    answer: 1,
  },
  {
    question: "During which phase do homologous chromosomes separate?",
    options: [
      "Anaphase I",
      "Anaphase II",
      "Telophase I",
      "Prophase II"
    ],
    answer: 0,
  },
  {
    question: "Reduction division occurs in _______.",
    options: [
      "Mitosis",
      "Meiosis I",
      "Meiosis II",
      "Binary fission"
    ],
    answer: 1,
  },
  {
    question: "The process that ensures each gamete gets only one chromosome from each pair is called _______.",
    options: [
      "Crossing over",
      "Independent assortment",
      "Replication",
      "Synapsis"
    ],
    answer: 1,
  },
  {
    question: "Chromatids are joined at the _______.",
    options: [
      "Centromere",
      "Nucleolus",
      "Spindle fiber",
      "Cytoplasm"
    ],
    answer: 0,
  },
  {
    question: "The main purpose of mitosis in multicellular organisms is _______.",
    options: [
      "production of gametes",
      "growth and repair",
      "variation",
      "fertilization"
    ],
    answer: 1,
  },
  {
    question: "The stage in which chromosomes line up at the equatorial plane is _______.",
    options: [
      "Metaphase",
      "Anaphase",
      "Prophase",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "During which stage do chromosomes condense and become visible?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "Spindle fibers are formed from _______.",
    options: [
      "Centrioles",
      "Ribosomes",
      "Mitochondria",
      "Chloroplasts"
    ],
    answer: 0,
  },
  {
    question: "The difference between meiosis I and meiosis II is _______.",
    options: [
      "Meiosis I is reductional; Meiosis II is equational",
      "Meiosis I is equational; Meiosis II is reductional",
      "Both are reductional",
      "Both are equational"
    ],
    answer: 0,
  },
  {
    question: "Which of the following occurs in meiosis II?",
    options: [
      "Separation of sister chromatids",
      "Synapsis",
      "Crossing over",
      "Independent assortment"
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a result of meiosis?",
    options: [
      "Genetically identical cells",
      "Genetically diverse gametes",
      "Somatic cells",
      "Clones"
    ],
    answer: 1,
  },
  {
    question: "During telophase of mitosis, _______ reforms around chromosomes.",
    options: [
      "nuclear membrane",
      "spindle fibers",
      "chromatids",
      "centromere"
    ],
    answer: 0,
  },
  {
    question: "Mitosis ensures that _______.",
    options: [
      "chromosome number is maintained",
      "gametes are produced",
      "chromosomes are halved",
      "crossing over occurs"
    ],
    answer: 0,
  },
  {
    question: "Which of the following occurs only in meiosis?",
    options: [
      "Chromosome replication",
      "Crossing over",
      "Chromosome alignment",
      "Spindle formation"
    ],
    answer: 1,
  },
  {
    question: "Fertilization restores the diploid number of chromosomes in _______.",
    options: [
      "zygote",
      "gametes",
      "somatic cells",
      "sperm"
    ],
    answer: 0,
  },
  {
    question: "Which stage of meiosis involves the separation of sister chromatids?",
    options: [
      "Meiosis I",
      "Meiosis II",
      "Prophase I",
      "Metaphase I"
    ],
    answer: 1,
  },
  {
    question: "Genetic variation arises in meiosis due to _______.",
    options: [
      "crossing over and independent assortment",
      "chromosome replication",
      "mitosis",
      "cytokinesis"
    ],
    answer: 0,
  },
  {
    question: "During which phase does the nuclear envelope break down?",
    options: [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],
    answer: 0,
  },
  {
    question: "The spindle apparatus is responsible for _______.",
    options: [
      "chromosome movement",
      "protein synthesis",
      "DNA replication",
      "cell growth"
    ],
    answer: 0,
  },
  {
    question: "Which of the following correctly describes meiosis II?",
    options: [
      "Equational division producing haploid cells",
      "Reduction division producing diploid cells",
      "Replication of DNA",
      "Fusion of gametes"
    ],
    answer: 0,
  },
  {
    question: "Which type of cell division occurs in somatic cells?",
    options: [
      "Mitosis",
      "Meiosis",
      "Gamete formation",
      "Fertilization"
    ],
    answer: 0,
  },
  {
    question: "Which type of cell division is involved in sexual reproduction?",
    options: [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    answer: 1,
  },
  {
    question: "The chromosomes become double-stranded after _______.",
    options: [
      "DNA replication",
      "Crossing over",
      "Metaphase",
      "Anaphase"
    ],
    answer: 0,
  },
  {
    question: "Which of the following stages occurs in both mitosis and meiosis?",
    options: [
      "Prophase",
      "Synapsis",
      "Crossing over",
      "Reduction division"
    ],
    answer: 0,
  },
  {
    question: "Which stage of meiosis is responsible for halving the chromosome number?",
    options: [
      "Meiosis I",
      "Meiosis II",
      "Prophase II",
      "Telophase II"
    ],
    answer: 0,
  },
  {
    question: "Which type of cell division ensures growth and repair in multicellular organisms?",
    options: [
      "Mitosis",
      "Meiosis",
      "Binary fission",
      "Budding"
    ],
    answer: 0,
  },
  {
    question: "The phase of meiosis in which chromatids separate is _______.",
    options: [
      "Anaphase II",
      "Anaphase I",
      "Metaphase I",
      "Telophase I"
    ],
    answer: 0,
  },
  {
    question: "Which stage of meiosis produces haploid daughter cells?",
    options: [
      "Telophase II",
      "Telophase I",
      "Metaphase I",
      "Prophase II"
    ],
    answer: 0,
  },
  {
    question: "The major difference between mitosis and meiosis is _______.",
    options: [
      "Mitosis produces identical cells; meiosis produces varied gametes",
      "Mitosis occurs only in reproductive cells",
      "Mitosis reduces chromosome number",
      "Meiosis occurs only in somatic cells"
    ],
    answer: 0,
  },
  
  
  //tissue and supportive system
  
  {
    question: "Tissues are _______.",
    options: [
      "groups of similar cells performing a common function",
      "a collection of organs",
      "cells with different functions",
      "organs performing the same function"
    ],
    answer: 0,
  },
  {
    question: "Which of the following is a plant tissue?",
    options: [
      "Xylem",
      "Blood",
      "Cartilage",
      "Muscle"
    ],
    answer: 0,
  },
  {
    question: "Which tissue in plants is responsible for transport of water?",
    options: [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    answer: 1,
  },
  {
    question: "Phloem transports _______ in plants.",
    options: [
      "Water",
      "Minerals",
      "Food",
      "Oxygen"
    ],
    answer: 2,
  },
  {
    question: "Parenchyma cells are mainly involved in _______.",
    options: [
      "support",
      "photosynthesis and storage",
      "water transport",
      "conduction of impulses"
    ],
    answer: 1,
  },
  {
    question: "Collenchyma provides _______ to plant organs.",
    options: [
      "rigid support",
      "flexible support",
      "water storage",
      "transport of food"
    ],
    answer: 1,
  },
  {
    question: "Sclerenchyma cells are _______.",
    options: [
      "living and flexible",
      "dead and lignified",
      "photosynthetic",
      "parenchymatous"
    ],
    answer: 1,
  },
  {
    question: "The tissue that connects bones to muscles is _______.",
    options: [
      "Tendon",
      "Ligament",
      "Cartilage",
      "Bone"
    ],
    answer: 0,
  },
  {
    question: "Ligaments connect _______.",
    options: [
      "muscle to muscle",
      "bone to bone",
      "muscle to bone",
      "bone to cartilage"
    ],
    answer: 1,
  },
  {
    question: "Which type of muscle is involuntary and non-striated?",
    options: [
      "Skeletal",
      "Cardiac",
      "Smooth",
      "Striated"
    ],
    answer: 2,
  },
  {
    question: "Cardiac muscle is found in the _______.",
    options: [
      "heart",
      "lungs",
      "stomach",
      "biceps"
    ],
    answer: 0,
  },
  {
    question: "Skeletal muscles are under _______ control.",
    options: [
      "involuntary",
      "voluntary",
      "autonomic",
      "reflex"
    ],
    answer: 1,
  },
  {
    question: "Which connective tissue stores fat?",
    options: [
      "Adipose tissue",
      "Cartilage",
      "Bone",
      "Ligament"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue cushions joints?",
    options: [
      "Cartilage",
      "Bone",
      "Tendon",
      "Ligament"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue connects bones to bones?",
    options: [
      "Tendon",
      "Ligament",
      "Cartilage",
      "Adipose"
    ],
    answer: 1,
  },
  {
    question: "Epithelial tissue functions mainly in _______.",
    options: [
      "covering and protection",
      "support",
      "transport",
      "movement"
    ],
    answer: 0,
  },
  {
    question: "Simple squamous epithelium is adapted for _______.",
    options: [
      "diffusion",
      "contraction",
      "transport",
      "storage"
    ],
    answer: 0,
  },
  {
    question: "Cuboidal epithelium is mainly involved in _______.",
    options: [
      "absorption and secretion",
      "protection",
      "support",
      "transport"
    ],
    answer: 0,
  },
  {
    question: "Columnar epithelium is found lining the _______.",
    options: [
      "small intestine",
      "lungs",
      "heart",
      "kidney"
    ],
    answer: 0,
  },
  {
    question: "Ciliated epithelium is specialized for _______.",
    options: [
      "movement of substances along surfaces",
      "protection",
      "photosynthesis",
      "conduction of impulses"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue provides rigid support to the body?",
    options: [
      "Bone",
      "Cartilage",
      "Ligament",
      "Adipose"
    ],
    answer: 0,
  },
  {
    question: "Cartilage differs from bone because it is _______.",
    options: [
      "softer and flexible",
      "hard and rigid",
      "vascular",
      "mineralized"
    ],
    answer: 0,
  },
  {
    question: "Which tissue forms the outer layer of skin?",
    options: [
      "Epithelial",
      "Muscle",
      "Connective",
      "Nervous"
    ],
    answer: 0,
  },
  {
    question: "Which tissue forms tendons and ligaments?",
    options: [
      "Connective",
      "Muscle",
      "Epithelial",
      "Nervous"
    ],
    answer: 0,
  },
  {
    question: "Adipose tissue is mainly composed of _______.",
    options: [
      "fat cells",
      "bone cells",
      "cartilage",
      "muscle fibers"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue provides cushioning in joints?",
    options: [
      "Cartilage",
      "Bone",
      "Tendon",
      "Ligament"
    ],
    answer: 0,
  },
  {
    question: "Which plant tissue is responsible for transporting organic food?",
    options: [
      "Xylem",
      "Phloem",
      "Collenchyma",
      "Sclerenchyma"
    ],
    answer: 1,
  },
  {
    question: "Which plant tissue is dead at maturity and lignified?",
    options: [
      "Sclerenchyma",
      "Collenchyma",
      "Parenchyma",
      "Xylem"
    ],
    answer: 0,
  },
  {
    question: "Collenchyma tissue provides _______.",
    options: [
      "flexible support",
      "rigid support",
      "transport",
      "absorption"
    ],
    answer: 0,
  },
  {
    question: "Which tissue connects plant cells for communication?",
    options: [
      "Plasmodesmata",
      "Phloem",
      "Xylem",
      "Sclerenchyma"
    ],
    answer: 0,
  },
  {
    question: "Blood is classified as a _______ tissue.",
    options: [
      "connective",
      "epithelial",
      "muscle",
      "nervous"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue transports oxygen and nutrients?",
    options: [
      "Blood",
      "Cartilage",
      "Bone",
      "Ligament"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue resists mechanical stress?",
    options: [
      "Bone",
      "Cartilage",
      "Ligament",
      "Adipose"
    ],
    answer: 2,
  },
  {
    question: "Smooth muscle is found in the _______.",
    options: [
      "stomach and intestines",
      "biceps",
      "heart",
      "lungs"
    ],
    answer: 0,
  },
  {
    question: "Cardiac muscle is adapted to _______.",
    options: [
      "continuous rhythmic contraction",
      "rapid voluntary movement",
      "support",
      "absorption"
    ],
    answer: 0,
  },
  {
    question: "Which tissue detects stimuli and conducts impulses?",
    options: [
      "Nervous tissue",
      "Muscle tissue",
      "Epithelial tissue",
      "Connective tissue"
    ],
    answer: 0,
  },
  {
    question: "Neurons consist of a cell body, dendrites, and _______.",
    options: [
      "axon",
      "myosin",
      "collagen",
      "cartilage"
    ],
    answer: 0,
  },
  {
    question: "Which tissue is responsible for voluntary movement?",
    options: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle",
      "Connective tissue"
    ],
    answer: 0,
  },
  {
    question: "Which plant tissue is responsible for mechanical strength?",
    options: [
      "Sclerenchyma",
      "Parenchyma",
      "Collenchyma",
      "Xylem"
    ],
    answer: 0,
  },
  {
    question: "Phloem consists of sieve tubes, companion cells, and _______.",
    options: [
      "fibers",
      "xylem vessels",
      "parenchyma",
      "collenchyma"
    ],
    answer: 0,
  },
  {
    question: "Xylem vessels are dead at maturity to allow _______.",
    options: [
      "efficient water transport",
      "food storage",
      "photosynthesis",
      "flexibility"
    ],
    answer: 0,
  },
  {
    question: "Sclerenchyma fibers provide _______.",
    options: [
      "mechanical support",
      "photosynthesis",
      "water storage",
      "conduction of food"
    ],
    answer: 0,
  },
  {
    question: "Which plant tissue allows flexibility in growing stems and leaves?",
    options: [
      "Collenchyma",
      "Sclerenchyma",
      "Parenchyma",
      "Xylem"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue forms the skeleton of the body?",
    options: [
      "Bone",
      "Cartilage",
      "Ligament",
      "Tendon"
    ],
    answer: 0,
  },
  {
    question: "Cartilage is found in the _______.",
    options: [
      "nose and ears",
      "bones",
      "ligaments",
      "muscles"
    ],
    answer: 0,
  },
  {
    question: "Tendons connect _______.",
    options: [
      "muscle to bone",
      "bone to bone",
      "muscle to muscle",
      "cartilage to bone"
    ],
    answer: 0,
  },
  {
    question: "The main function of ligaments is to _______.",
    options: [
      "connect bone to bone",
      "connect muscle to bone",
      "store fat",
      "transport oxygen"
    ],
    answer: 0,
  },
  {
    question: "Which tissue forms the linings of body cavities?",
    options: [
      "Epithelial",
      "Connective",
      "Muscle",
      "Nervous"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue stores energy in the form of fat?",
    options: [
      "Adipose",
      "Bone",
      "Cartilage",
      "Ligament"
    ],
    answer: 0,
  },
  {
    question: "Which tissue allows conduction of impulses in animals?",
    options: [
      "Nervous",
      "Muscle",
      "Epithelial",
      "Connective"
    ],
    answer: 0,
  },
  {
    question: "Which tissue is responsible for voluntary and involuntary movements?",
    options: [
      "Muscle tissue",
      "Connective tissue",
      "Epithelial tissue",
      "Nervous tissue"
    ],
    answer: 0,
  },
  {
    question: "Which tissue forms protective coverings in plants?",
    options: [
      "Epidermal tissue",
      "Collenchyma",
      "Sclerenchyma",
      "Parenchyma"
    ],
    answer: 0,
  },
  {
    question: "Phloem is made up of sieve tubes, companion cells, and _______.",
    options: [
      "fibres",
      "xylem",
      "parenchyma",
      "collenchyma"
    ],
    answer: 0,
  },
  {
    question: "Xylem consists of vessels, tracheids, xylem parenchyma, and _______.",
    options: [
      "fibres",
      "phloem",
      "sieve tubes",
      "companion cells"
    ],
    answer: 0,
  },
  {
    question: "The tissue that supports soft plant parts and stores food is _______.",
    options: [
      "Parenchyma",
      "Collenchyma",
      "Sclerenchyma",
      "Xylem"
    ],
    answer: 0,
  },
  {
    question: "The main role of collenchyma in plants is to provide _______.",
    options: [
      "flexible support",
      "rigid support",
      "photosynthesis",
      "food transport"
    ],
    answer: 0,
  },
  {
    question: "Adipose tissue is found beneath the _______.",
    options: [
      "skin",
      "bone",
      "cartilage",
      "muscle"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue forms the external ear?",
    options: [
      "Cartilage",
      "Bone",
      "Ligament",
      "Adipose"
    ],
    answer: 0,
  },
  {
    question: "Which connective tissue forms the skeleton of the trachea?",
    options: [
      "Cartilage",
      "Bone",
      "Ligament",
      "Tendon"
    ],
    answer: 0,
  },
  {
    question: "Smooth muscle is found in the _______.",
    options: [
      "intestine and stomach",
      "biceps",
      "heart",
      "ligaments"
    ],
    answer: 0,
  },
  {
    question: "Which tissue is responsible for voluntary movement in animals?",
    options: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle",
      "Connective tissue"
    ],
    answer: 0,
  },
  {
    question: "The tissue responsible for transmitting impulses in animals is _______.",
    options: [
      "Nervous tissue",
      "Muscle tissue",
      "Epithelial tissue",
      "Connective tissue"
    ],
    answer: 0,
  },
  {
    question: "Which plant tissue protects young organs and reduces water loss?",
    options: [
      "Epidermal tissue",
      "Parenchyma",
      "Sclerenchyma",
      "Collenchyma"
    ],
    answer: 0,
  },
  
  {
    question: "Which connective tissue connects muscles to bones?",
    options: ["Ligament", "Tendon", "Cartilage", "Adipose"],
    answer: 1,
  },
  {
    question: "Which connective tissue connects bones to bones?",
    options: ["Tendon", "Ligament", "Cartilage", "Bone"],
    answer: 1,
  },
  {
    question: "Cartilage provides _______ in joints.",
    options: ["rigid support", "flexible cushioning", "rigid and brittle structure", "water transport"],
    answer: 1,
  },
  {
    question: "Bone is a connective tissue that is _______.",
    options: ["rigid and mineralized", "soft and flexible", "non-vascular", "non-living"],
    answer: 0,
  },
  {
    question: "The main function of adipose tissue is to _______.",
    options: ["store fat and energy", "transport oxygen", "provide rigid support", "connect bones to muscles"],
    answer: 0,
  },
  {
    question: "Which type of muscle is striated and voluntary?",
    options: ["Skeletal", "Cardiac", "Smooth", "Ligament"],
    answer: 0,
  },
  {
    question: "Cardiac muscle is characterized by _______.",
    options: ["striated and involuntary", "striated and voluntary", "non-striated and voluntary", "non-striated and involuntary"],
    answer: 0,
  },
  {
    question: "Smooth muscle is found in _______.",
    options: ["walls of intestines and stomach", "biceps", "heart", "ligaments"],
    answer: 0,
  },
  {
    question: "Nervous tissue consists of neurons and _______.",
    options: ["neuroglia", "ligaments", "adipose", "cartilage"],
    answer: 0,
  },
  {
    question: "The main function of nervous tissue is to _______.",
    options: ["conduct impulses", "store fat", "provide support", "contract"],
    answer: 0,
  },
  {
    question: "Epithelial tissue is adapted for _______.",
    options: ["covering and protection", "support", "conduction", "movement"],
    answer: 0,
  },
  {
    question: "Simple squamous epithelium is suited for _______.",
    options: ["diffusion", "contraction", "storage", "protection"],
    answer: 0,
  },
  {
    question: "Cuboidal epithelium is involved in _______.",
    options: ["secretion and absorption", "conduction", "rigid support", "transport"],
    answer: 0,
  },
  {
    question: "Columnar epithelium is found lining the _______.",
    options: ["small intestine", "lungs", "heart", "kidney"],
    answer: 0,
  },
  {
    question: "Ciliated epithelium helps in _______.",
    options: ["movement of substances along surfaces", "protection", "conduction", "rigid support"],
    answer: 0,
  },
  {
    question: "Which connective tissue provides mechanical strength to the body?",
    options: ["Bone", "Cartilage", "Ligament", "Adipose"],
    answer: 0,
  },
  {
    question: "Which connective tissue cushions bones at joints?",
    options: ["Cartilage", "Bone", "Ligament", "Adipose"],
    answer: 0,
  },
  {
    question: "Which connective tissue stores energy and insulates the body?",
    options: ["Adipose", "Cartilage", "Bone", "Ligament"],
    answer: 0,
  },
  {
    question: "Which plant tissue is involved in transporting water?",
    options: ["Xylem", "Phloem", "Collenchyma", "Sclerenchyma"],
    answer: 0,
  },
  {
    question: "Which plant tissue transports food from leaves to other parts?",
    options: ["Phloem", "Xylem", "Parenchyma", "Collenchyma"],
    answer: 0,
  },
  {
    question: "Parenchyma cells function mainly in _______.",
    options: ["photosynthesis, storage and secretion", "support", "transport", "rigid protection"],
    answer: 0,
  },
  {
    question: "Collenchyma provides _______ to growing plant parts.",
    options: ["flexible support", "rigid support", "water transport", "food conduction"],
    answer: 0,
  },
  {
    question: "Sclerenchyma provides _______ to plant organs.",
    options: ["rigid mechanical support", "flexible support", "water transport", "photosynthesis"],
    answer: 0,
  },
  {
    question: "The main function of sieve tubes in phloem is _______.",
    options: ["transport of organic food", "transport of water", "photosynthesis", "storage"],
    answer: 0,
  },
  {
    question: "Companion cells in phloem function to _______.",
    options: ["support sieve tubes", "transport water", "provide mechanical strength", "store food"],
    answer: 0,
  },
  {
    question: "Xylem vessels are dead at maturity to allow _______.",
    options: ["efficient water conduction", "rigid support", "food transport", "photosynthesis"],
    answer: 0,
  },
  {
    question: "Sclerenchyma fibers are mainly for _______.",
    options: ["mechanical support", "photosynthesis", "water transport", "conduction of food"],
    answer: 0,
  },
  {
    question: "Which tissue stores starch in plants?",
    options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"],
    answer: 0,
  },
  {
    question: "Which connective tissue protects internal organs?",
    options: ["Bone", "Cartilage", "Adipose", "Ligament"],
    answer: 2,
  },
  {
    question: "Ligaments are composed mainly of _______.",
    options: ["collagen fibers", "elastin fibers", "bone", "cartilage"],
    answer: 0,
  },
  {
    question: "Tendons are made of _______.",
    options: ["dense fibrous connective tissue", "cartilage", "bone", "adipose"],
    answer: 0,
  },
  {
    question: "Smooth muscles are under _______ control.",
    options: ["involuntary", "voluntary", "conscious", "striated"],
    answer: 0,
  },
  {
    question: "Skeletal muscles are attached to bones by _______.",
    options: ["tendons", "ligaments", "cartilage", "adipose"],
    answer: 0,
  },
  {
    question: "Which muscle type is responsible for peristalsis in the gut?",
    options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Ligament"],
    answer: 0,
  },
  {
    question: "Cardiac muscle cells are connected by _______.",
    options: ["intercalated discs", "tendons", "ligaments", "fibers"],
    answer: 0,
  },
  {
    question: "Neurons transmit impulses from _______ to target cells.",
    options: ["dendrites to axon", "axon to dendrites", "cell body to axon", "axon to cell body"],
    answer: 0,
  },
  {
    question: "Neuroglia function to _______.",
    options: ["support and nourish neurons", "contract muscles", "connect bones", "transport food"],
    answer: 0,
  },
  {
    question: "The outer protective layer of plant stems is formed by _______.",
    options: ["epidermal tissue", "collenchyma", "sclerenchyma", "xylem"],
    answer: 0,
  },
  {
    question: "Which connective tissue has a matrix rich in calcium salts?",
    options: ["Bone", "Cartilage", "Ligament", "Adipose"],
    answer: 0,
  },
  {
    question: "Which connective tissue is avascular?",
    options: ["Cartilage", "Bone", "Blood", "Ligament"],
    answer: 0,
  },
  {
    question: "Which muscle tissue has striations and involuntary control?",
    options: ["Cardiac", "Skeletal", "Smooth", "Tendon"],
    answer: 0,
  },
  {
    question: "Adipose tissue acts as _______ in animals.",
    options: ["insulation and energy storage", "transport tissue", "protective layer", "muscle fiber"],
    answer: 0,
  },
  {
    question: "Which tissue forms the myelin sheath around neurons?",
    options: ["Neuroglia", "Neuron", "Ligament", "Bone"],
    answer: 0,
  },
  {
    question: "The function of connective tissue is mainly _______.",
    options: ["support, binding, and protection", "transport, absorption, and secretion", "conduction of impulses", "movement"],
    answer: 0,
  },
  {
    question: "The plant tissue that forms wood is mainly _______.",
    options: ["Xylem", "Phloem", "Collenchyma", "Parenchyma"],
    answer: 0,
  },
  {
    question: "Phloem conducts food mainly in the form of _______.",
    options: ["sucrose", "water", "amino acids", "minerals"],
    answer: 0,
  },
  {
    question: "Collenchyma cells are living at maturity and provide _______.",
    options: ["flexible support", "rigid support", "transport", "photosynthesis"],
    answer: 0,
  },
  {
    question: "Sclerenchyma cells are dead at maturity and provide _______.",
    options: ["rigid mechanical support", "flexible support", "photosynthesis", "food transport"],
    answer: 0,
  },
  {
    question: "Epithelial tissue lines the _______.",
    options: ["body surfaces and cavities", "muscles", "bones", "cartilage"],
    answer: 0,
  },
  {
    question: "Which connective tissue forms the tendons and ligaments?",
    options: ["Dense fibrous connective tissue", "Adipose", "Cartilage", "Bone"],
    answer: 0,
  },
  {
    question: "Which muscle tissue is multinucleated and striated?",
    options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Ligament"],
    answer: 0,
  },
  {
    question: "The main function of epidermis in plants is _______.",
    options: ["protection and water loss prevention", "transport of water", "support", "photosynthesis"],
    answer: 0,
  },
  
  //nervous and hormonal coordination 
  
  {
    question: "The basic structural and functional unit of the nervous system is the _______.",
    options: ["Neuron", "Axon", "Dendrite", "Synapse"],
    answer: 0,
  },
  {
    question: "The junction between two neurons is called a _______.",
    options: ["Synapse", "Axon", "Dendrite", "Neuron"],
    answer: 0,
  },
  {
    question: "The part of the neuron that receives impulses from other neurons is the _______.",
    options: ["Dendrite", "Axon", "Cell body", "Synapse"],
    answer: 0,
  },
  {
    question: "The part of the neuron that transmits impulses away from the cell body is the _______.",
    options: ["Axon", "Dendrite", "Synapse", "Cell body"],
    answer: 0,
  },
  {
    question: "The cell body of a neuron contains the _______.",
    options: ["nucleus", "axon", "synapse", "dendrite"],
    answer: 0,
  },
  {
    question: "Myelin sheath functions to _______.",
    options: ["increase the speed of impulse conduction", "protect the dendrites", "store neurotransmitters", "connect neurons"],
    answer: 0,
  },
  {
    question: "Gaps in the myelin sheath are called _______.",
    options: ["Nodes of Ranvier", "Synapses", "Axon terminals", "Dendrites"],
    answer: 0,
  },
  {
    question: "The resting potential of a neuron is maintained by _______.",
    options: ["sodium-potassium pump", "diffusion only", "synapses", "axons"],
    answer: 0,
  },
  {
    question: "The all-or-none law of neurons states that _______.",
    options: ["a neuron either fires completely or not at all", "a neuron can fire partially", "all neurons fire together", "neurons can stop firing voluntarily"],
    answer: 0,
  },
  {
    question: "Reflex action is _______.",
    options: ["a rapid, automatic response to a stimulus", "a voluntary response", "controlled by the brain only", "slow and deliberate"],
    answer: 0,
  },
  {
    question: "The central nervous system consists of the _______.",
    options: ["brain and spinal cord", "brain only", "spinal cord only", "nerves throughout the body"],
    answer: 0,
  },
  {
    question: "The peripheral nervous system consists of _______.",
    options: ["all nerves outside the brain and spinal cord", "brain only", "spinal cord only", "neurons inside the brain"],
    answer: 0,
  },
  {
    question: "Sensory neurons carry impulses _______.",
    options: ["from receptors to the CNS", "from CNS to effectors", "between muscles", "between glands"],
    answer: 0,
  },
  {
    question: "Motor neurons carry impulses _______.",
    options: ["from CNS to effectors", "from receptors to CNS", "between neurons", "between glands"],
    answer: 0,
  },
  {
    question: "Interneurons are found _______.",
    options: ["within the CNS", "between CNS and muscles", "in muscles", "in glands"],
    answer: 0,
  },
  {
    question: "The cerebrum is responsible for _______.",
    options: ["thought, memory, and voluntary actions", "balance and coordination", "breathing", "heartbeat"],
    answer: 0,
  },
  {
    question: "The cerebellum controls _______.",
    options: ["balance and coordination", "thought and memory", "vision", "hearing"],
    answer: 0,
  },
  {
    question: "The medulla oblongata controls _______.",
    options: ["heartbeat and breathing", "thinking", "balance", "sight"],
    answer: 0,
  },
  {
    question: "The hypothalamus regulates _______.",
    options: ["body temperature, hunger, and thirst", "balance", "voluntary movement", "hearing"],
    answer: 0,
  },
  {
    question: "The reflex arc typically involves _______ neurons.",
    options: ["sensory, motor, and interneurons", "only motor", "only sensory", "only interneurons"],
    answer: 0,
  },
  {
    question: "A hormone is _______.",
    options: ["a chemical messenger secreted into the blood", "an electrical impulse", "a neurotransmitter", "a muscle contraction"],
    answer: 0,
  },
  {
    question: "Endocrine glands secrete hormones _______.",
    options: ["directly into the blood", "into ducts", "into muscles", "into the brain"],
    answer: 0,
  },
  {
    question: "Exocrine glands secrete their products _______.",
    options: ["through ducts to body surfaces or cavities", "into the blood", "into muscles", "into the brain"],
    answer: 0,
  },
  {
    question: "The pancreas is both an endocrine and exocrine gland because it _______.",
    options: ["secretes insulin and digestive enzymes", "only secretes insulin", "only secretes digestive enzymes", "does not secrete hormones"],
    answer: 0,
  },
  {
    question: "Insulin is secreted by the _______ cells of the pancreas.",
    options: ["beta", "alpha", "delta", "gamma"],
    answer: 0,
  },
  {
    question: "Glucagon is secreted by the _______ cells of the pancreas.",
    options: ["alpha", "beta", "delta", "gamma"],
    answer: 0,
  },
  {
    question: "The pituitary gland is often called the _______.",
    options: ["master gland", "slave gland", "adrenal gland", "thyroid gland"],
    answer: 0,
  },
  {
    question: "Thyroxine is secreted by the _______.",
    options: ["thyroid gland", "parathyroid gland", "pituitary gland", "adrenal gland"],
    answer: 0,
  },
  {
    question: "Adrenaline is secreted by the _______.",
    options: ["adrenal glands", "thyroid gland", "pituitary gland", "pancreas"],
    answer: 0,
  },
  {
    question: "The function of thyroxine is to _______.",
    options: ["regulate metabolism", "control blood sugar", "stimulate muscle contraction", "control heart rate"],
    answer: 0,
  },
  {
    question: "The parathyroid glands regulate _______.",
    options: ["calcium levels in the blood", "blood sugar", "heart rate", "metabolism"],
    answer: 0,
  },
  {
    question: "The adrenal cortex secretes _______.",
    options: ["cortisol and aldosterone", "adrenaline", "insulin", "thyroxine"],
    answer: 0,
  },
  {
    question: "The adrenal medulla secretes _______.",
    options: ["adrenaline and noradrenaline", "cortisol", "thyroxine", "insulin"],
    answer: 0,
  },
  {
    question: "Negative feedback in hormonal regulation helps to _______.",
    options: ["maintain homeostasis", "increase hormone levels indefinitely", "stop all hormones", "cause disease"],
    answer: 0,
  },
  {
    question: "The fight-or-flight response is mainly controlled by _______.",
    options: ["adrenaline", "insulin", "thyroxine", "glucagon"],
    answer: 0,
  },
  {
    question: "The hypothalamus links the nervous and endocrine systems via the _______.",
    options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
    answer: 0,
  },
  {
    question: "Oxytocin is secreted by the _______.",
    options: ["posterior pituitary", "anterior pituitary", "thyroid gland", "adrenal gland"],
    answer: 0,
  },
  {
    question: "Antidiuretic hormone (ADH) acts on the _______.",
    options: ["kidneys", "heart", "liver", "lungs"],
    answer: 0,
  },
  {
    question: "The endocrine system controls the body using _______.",
    options: ["hormones", "nerve impulses", "muscles", "bones"],
    answer: 0,
  },
  {
    question: "Neurotransmitters are released at the _______.",
    options: ["synapse", "axon", "cell body", "dendrite"],
    answer: 0,
  },
  {
    question: "Acetylcholine is a neurotransmitter that _______.",
    options: ["stimulates muscles and neurons", "inhibits glands", "destroys hormones", "increases adrenaline"],
    answer: 0,
  },
  {
    question: "The myelin sheath is produced by _______ in the PNS.",
    options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
    answer: 0,
  },
  {
    question: "The central nervous system is protected by the _______.",
    options: ["skull and vertebral column", "heart", "kidneys", "lungs"],
    answer: 0,
  },
  {
    question: "Cranial nerves are part of the _______.",
    options: ["peripheral nervous system", "central nervous system", "brain", "spinal cord"],
    answer: 0,
  },
  {
    question: "Reflex actions are faster because they bypass the _______.",
    options: ["brain", "spinal cord", "muscles", "sensory receptors"],
    answer: 0,
  },
  {
    question: "Hormonal effects are generally _______ compared to nervous responses.",
    options: ["slower but longer-lasting", "faster and short-lived", "instantaneous", "non-specific"],
    answer: 0,
  },
  {
    question: "The pancreas regulates blood glucose by secreting _______.",
    options: ["insulin and glucagon", "adrenaline", "thyroxine", "cortisol"],
    answer: 0,
  },
  {
    question: "The posterior pituitary stores and releases hormones made by the _______.",
    options: ["hypothalamus", "pituitary", "thyroid", "adrenal"],
    answer: 0,
  },
  
  {
    question: "The sympathetic nervous system is responsible for _______.",
    options: ["fight-or-flight responses", "rest-and-digest responses", "hormone secretion", "digestion only"],
    answer: 0,
  },
  {
    question: "The parasympathetic nervous system is responsible for _______.",
    options: ["rest-and-digest activities", "fight-or-flight responses", "stress response", "adrenaline secretion"],
    answer: 0,
  },
  {
    question: "Reflex actions are _______.",
    options: ["automatic and involuntary", "voluntary", "slow responses", "long-lasting"],
    answer: 0,
  },
  {
    question: "The knee-jerk reflex is an example of a _______ reflex.",
    options: ["spinal", "cranial", "voluntary", "autonomic"],
    answer: 0,
  },
  {
    question: "Autonomic nervous system controls _______.",
    options: ["involuntary actions", "voluntary actions", "thought", "memory"],
    answer: 0,
  },
  {
    question: "Somatic nervous system controls _______.",
    options: ["voluntary actions", "involuntary actions", "hormone secretion", "digestion"],
    answer: 0,
  },
  {
    question: "Neurons that carry impulses from receptors to CNS are _______.",
    options: ["sensory neurons", "motor neurons", "interneurons", "reflex neurons"],
    answer: 0,
  },
  {
    question: "Neurons that carry impulses from CNS to effectors are _______.",
    options: ["motor neurons", "sensory neurons", "interneurons", "reflex neurons"],
    answer: 0,
  },
  {
    question: "The neurotransmitter involved in muscle contraction is _______.",
    options: ["acetylcholine", "dopamine", "adrenaline", "serotonin"],
    answer: 0,
  },
  {
    question: "The synaptic cleft is the space between _______.",
    options: ["two neurons", "axon and dendrite of the same neuron", "cell body and axon", "axon and muscle fiber"],
    answer: 0,
  },
  {
    question: "The limbic system is associated with _______.",
    options: ["emotions and memory", "movement coordination", "breathing", "digestion"],
    answer: 0,
  },
  {
    question: "The cerebrum is divided into _______ hemispheres.",
    options: ["two", "three", "four", "one"],
    answer: 0,
  },
  {
    question: "The right hemisphere of the cerebrum generally controls _______.",
    options: ["the left side of the body", "the right side of the body", "both sides equally", "hormone secretion"],
    answer: 0,
  },
  {
    question: "The medulla oblongata controls _______.",
    options: ["heart rate and breathing", "thought and reasoning", "voluntary movement", "memory"],
    answer: 0,
  },
  {
    question: "Hormones are transported in the body through _______.",
    options: ["blood", "nerves", "lymph", "muscles"],
    answer: 0,
  },
  {
    question: "Thyroxine deficiency leads to _______.",
    options: ["goiter or cretinism", "diabetes", "adrenal insufficiency", "high blood pressure"],
    answer: 0,
  },
  {
    question: "Insulin lowers blood glucose by _______.",
    options: ["stimulating glucose uptake by cells", "stimulating glycogen breakdown", "increasing blood sugar", "stimulating glucagon secretion"],
    answer: 0,
  },
  {
    question: "Glucagon raises blood glucose by _______.",
    options: ["stimulating glycogen breakdown", "stimulating insulin release", "lowering blood sugar", "stimulating thyroid hormones"],
    answer: 0,
  },
  {
    question: "Adrenaline increases _______ during stress.",
    options: ["heart rate and blood flow to muscles", "digestion", "thyroxine secretion", "blood clotting only"],
    answer: 0,
  },
  {
    question: "Cortisol is secreted by the _______.",
    options: ["adrenal cortex", "adrenal medulla", "pituitary gland", "thyroid gland"],
    answer: 0,
  },
  {
    question: "The target organs of hormones respond based on the presence of _______.",
    options: ["specific receptors", "size of hormone", "blood pressure", "nerve impulses"],
    answer: 0,
  },
  {
    question: "ADH acts on the _______ to control water reabsorption.",
    options: ["kidneys", "heart", "liver", "lungs"],
    answer: 0,
  },
  {
    question: "Oxytocin stimulates _______.",
    options: ["uterine contractions and milk ejection", "blood sugar increase", "heartbeat", "thyroxine secretion"],
    answer: 0,
  },
  {
    question: "The endocrine and nervous systems differ in that hormones act _______ compared to nerve impulses.",
    options: ["slower but longer-lasting", "faster and short-lived", "instantaneously", "never effective"],
    answer: 0,
  },
  {
    question: "Hypothalamus produces hormones that regulate the _______.",
    options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
    answer: 0,
  },
  {
    question: "The pituitary gland has anterior and posterior parts, which differ in _______.",
    options: ["hormone secretion and control", "size", "location", "nerve connections"],
    answer: 0,
  },
  {
    question: "Melatonin regulates _______.",
    options: ["sleep-wake cycles", "blood sugar", "heart rate", "growth"],
    answer: 0,
  },
  {
    question: "The thymus gland is important for _______.",
    options: ["immune system development", "digestion", "blood sugar regulation", "thyroxine secretion"],
    answer: 0,
  },
  {
    question: "The fight-or-flight response is triggered by the _______.",
    options: ["sympathetic nervous system", "parasympathetic nervous system", "pituitary gland", "thyroid gland"],
    answer: 0,
  },
  {
    question: "Negative feedback in hormone regulation prevents _______.",
    options: ["overproduction of hormones", "nerve impulses", "muscle contractions", "brain activity"],
    answer: 0,
  },
  {
    question: "The hormone that regulates calcium levels in blood is _______.",
    options: ["parathyroid hormone", "insulin", "adrenaline", "thyroxine"],
    answer: 0,
  },
  {
    question: "The adrenal medulla secretes hormones that prepare the body for _______.",
    options: ["emergency or stress situations", "sleep", "digestion", "growth"],
    answer: 0,
  },
  {
    question: "Endocrine glands are ductless because they release hormones directly into the _______.",
    options: ["bloodstream", "lymph", "nerves", "muscles"],
    answer: 0,
  },
  {
    question: "Exocrine glands secrete substances via _______.",
    options: ["ducts", "blood", "nerves", "lymph"],
    answer: 0,
  },
  {
    question: "Thyroid hormones regulate _______.",
    options: ["metabolic rate", "blood glucose", "heart rate", "immune function"],
    answer: 0,
  },
  {
    question: "Prolactin stimulates _______.",
    options: ["milk production", "thyroxine release", "glucagon release", "adrenaline release"],
    answer: 0,
  },
  {
    question: "The adrenal glands are located _______.",
    options: ["on top of the kidneys", "in the brain", "near the thyroid", "in the pancreas"],
    answer: 0,
  },
  {
    question: "The posterior pituitary releases hormones produced by the _______.",
    options: ["hypothalamus", "pituitary", "thyroid", "adrenal gland"],
    answer: 0,
  },
  {
    question: "Neurotransmitters are secreted by _______.",
    options: ["neurons", "glands", "muscles", "bones"],
    answer: 0,
  },
  {
    question: "Acetylcholine and norepinephrine are examples of _______.",
    options: ["neurotransmitters", "hormones", "enzymes", "vitamins"],
    answer: 0,
  },
  {
    question: "Synaptic transmission allows the nervous system to _______.",
    options: ["communicate between neurons", "secrete hormones", "contract muscles", "store nutrients"],
    answer: 0,
  },
  {
    question: "Reflex arcs usually involve _______ synapses.",
    options: ["one or more", "zero", "ten", "hundreds"],
    answer: 0,
  },
  {
    question: "The fight-or-flight hormone adrenaline is secreted by the _______.",
    options: ["adrenal medulla", "adrenal cortex", "pituitary", "thyroid"],
    answer: 0,
  },
  {
    question: "Norepinephrine primarily increases _______.",
    options: ["heart rate and alertness", "digestion", "growth", "sleep"],
    answer: 0,
  },
  {
    question: "The hypothalamus controls hormone secretion through _______.",
    options: ["pituitary gland", "thyroid gland", "adrenal gland", "pancreas"],
    answer: 0,
  },
  {
    question: "The myelin sheath ensures that nerve impulses _______.",
    options: ["travel faster along axons", "stop at synapses", "reach the brain slowly", "only move in one direction"],
    answer: 0,
  },
  {
    question: "Reflex actions help protect the body because they are _______.",
    options: ["rapid and automatic", "slow and voluntary", "controlled by hormones", "random movements"],
    answer: 0,
  },
  
  
  //reproduction 
  
  {
    question: "Reproduction is the biological process by which organisms _______.",
    options: ["produce offspring", "respire", "move", "excrete"],
    answer: 0,
  },
  {
    question: "Sexual reproduction involves _______.",
    options: ["fusion of gametes", "budding", "fragmentation", "binary fission"],
    answer: 0,
  },
  {
    question: "Asexual reproduction involves _______.",
    options: ["one parent", "two parents", "gamete fusion", "pollination"],
    answer: 0,
  },
  {
    question: "In humans, male gametes are called _______.",
    options: ["sperm", "ovum", "zygote", "embryo"],
    answer: 0,
  },
  {
    question: "Female gametes in humans are called _______.",
    options: ["ova", "sperm", "zygotes", "gametes"],
    answer: 0,
  },
  {
    question: "Fertilization is the process by which _______.",
    options: ["sperm and ovum fuse", "gametes are produced", "zygotes grow", "meiosis occurs"],
    answer: 0,
  },
  {
    question: "Internal fertilization occurs in _______.",
    options: ["humans", "frogs", "fish", "algae"],
    answer: 0,
  },
  {
    question: "External fertilization occurs in _______.",
    options: ["frogs and fish", "humans", "birds", "mammals"],
    answer: 0,
  },
  {
    question: "The male reproductive organ in humans is the _______.",
    options: ["testis", "ovary", "uterus", "vagina"],
    answer: 0,
  },
  {
    question: "The female reproductive organ in humans is the _______.",
    options: ["ovary", "testis", "penis", "scrotum"],
    answer: 0,
  },
  {
    question: "Spermatogenesis occurs in the _______.",
    options: ["testes", "ovaries", "uterus", "vas deferens"],
    answer: 0,
  },
  {
    question: "Oogenesis occurs in the _______.",
    options: ["ovaries", "testes", "uterus", "fallopian tube"],
    answer: 0,
  },
  {
    question: "The process of meiosis produces _______.",
    options: ["gametes with half the chromosome number", "somatic cells", "zygotes", "embryos"],
    answer: 0,
  },
  {
    question: "The zygote develops into an _______.",
    options: ["embryo", "ovum", "sperm", "gamete"],
    answer: 0,
  },
  {
    question: "The uterus is the site of _______.",
    options: ["fetal development", "sperm production", "fertilization only", "egg formation"],
    answer: 0,
  },
  {
    question: "The fallopian tube transports the _______ to the uterus.",
    options: ["ovum", "sperm", "zygote", "embryo"],
    answer: 0,
  },
  {
    question: "The scrotum helps in _______ of testes.",
    options: ["temperature regulation", "sperm transport", "hormone secretion", "fertilization"],
    answer: 0,
  },
  {
    question: "The penis functions in _______.",
    options: ["delivering sperm into the female reproductive tract", "egg production", "hormone secretion", "zygote formation"],
    answer: 0,
  },
  {
    question: "Fertilized egg implants in the _______.",
    options: ["uterus", "ovary", "vagina", "fallopian tube"],
    answer: 0,
  },
  {
    question: "Asexual reproduction is common in _______.",
    options: ["plants, bacteria, and some animals", "humans", "birds", "mammals only"],
    answer: 0,
  },
  {
    question: "Budding in Hydra is an example of _______.",
    options: ["asexual reproduction", "sexual reproduction", "fertilization", "pollination"],
    answer: 0,
  },
  {
    question: "Binary fission is a type of _______.",
    options: ["asexual reproduction in unicellular organisms", "sexual reproduction", "pollination", "spore formation"],
    answer: 0,
  },
  {
    question: "In plants, sexual reproduction involves the fusion of _______.",
    options: ["male and female gametes", "leaves and stems", "pollen and soil", "roots and stems"],
    answer: 0,
  },
  {
    question: "Pollination is the transfer of pollen from _______ to _______.",
    options: ["anther to stigma", "stigma to ovary", "ovary to anther", "stigma to anther"],
    answer: 0,
  },
  {
    question: "Fertilization in flowering plants occurs in the _______.",
    options: ["ovule", "stigma", "anther", "petal"],
    answer: 0,
  },
  {
    question: "Seeds are formed from the _______ after fertilization.",
    options: ["ovule", "anther", "stigma", "ovary wall"],
    answer: 0,
  },
  {
    question: "The embryo in seeds develops from the _______.",
    options: ["zygote", "gamete", "ovule wall", "pollen"],
    answer: 0,
  },
  {
    question: "Fruit develops from the _______ in flowering plants.",
    options: ["ovary", "ovule", "petal", "stamen"],
    answer: 0,
  },
  {
    question: "Viviparous animals give birth to _______.",
    options: ["live young", "eggs only", "spores", "buds"],
    answer: 0,
  },
  {
    question: "Oviparous animals lay _______.",
    options: ["eggs", "live young", "buds", "seeds"],
    answer: 0,
  },
  {
    question: "Ovoviviparous animals _______.",
    options: ["produce eggs that hatch within the body", "lay eggs externally", "give birth to live young directly", "produce spores"],
    answer: 0,
  },
  {
    question: "Testosterone is secreted by the _______.",
    options: ["testes", "ovaries", "pituitary gland", "adrenal gland"],
    answer: 0,
  },
  {
    question: "Estrogen is secreted by the _______.",
    options: ["ovaries", "testes", "adrenal gland", "pituitary gland"],
    answer: 0,
  },
  {
    question: "Progesterone prepares the uterus for _______.",
    options: ["implantation of the zygote", "sperm production", "egg formation", "fertilization"],
    answer: 0,
  },
  {
    question: "Menstruation occurs due to the breakdown of the _______.",
    options: ["endometrium", "ovum", "zygote", "oviduct"],
    answer: 0,
  },
  {
    question: "Fertilization in humans is usually _______.",
    options: ["internal", "external", "asexual", "pollination"],
    answer: 0,
  },
  {
    question: "In humans, the male gamete is produced continuously from puberty due to _______.",
    options: ["spermatogenesis", "oogenesis", "menstruation", "fertilization"],
    answer: 0,
  },
  {
    question: "Oogenesis produces a single functional ovum and _______ polar bodies.",
    options: ["three", "one", "two", "four"],
    answer: 0,
  },
  {
    question: "The fusion of male and female gametes forms a _______.",
    options: ["zygote", "gamete", "embryo", "ovum"],
    answer: 0,
  },
  {
    question: "The placenta functions in _______.",
    options: ["nutrient and gas exchange between mother and fetus", "sperm production", "egg production", "hormone secretion only"],
    answer: 0,
  },
  {
    question: "Amniotic fluid protects the fetus by _______.",
    options: ["cushioning and maintaining temperature", "providing food", "producing gametes", "hormone regulation"],
    answer: 0,
  },
  {
    question: "The umbilical cord connects the fetus to the _______.",
    options: ["placenta", "uterus wall", "ovary", "fallopian tube"],
    answer: 0,
  },
  {
    question: "In plants, self-pollination involves pollen from the anther landing on the _______ of the same flower.",
    options: ["stigma", "ovule", "petal", "sepals"],
    answer: 0,
  },
  {
    question: "Cross-pollination involves transfer of pollen between _______.",
    options: ["different flowers", "the same flower", "same plant only", "non-flowering plants"],
    answer: 0,
  },
  {
    question: "Vegetative reproduction in plants is _______.",
    options: ["asexual reproduction without seeds", "sexual reproduction", "fertilization", "pollination"],
    answer: 0,
  },
  {
    question: "Fragmentation in animals is a form of _______.",
    options: ["asexual reproduction", "sexual reproduction", "pollination", "fertilization"],
    answer: 0,
  },
  {
    question: "Parthenogenesis is reproduction without _______.",
    options: ["fertilization", "gametes", "zygotes", "embryos"],
    answer: 0,
  },
  {
    question: "Cloning produces offspring _______ to the parent.",
    options: ["genetically identical", "genetically different", "haploid only", "with mutations always"],
    answer: 0,
  },
  
  {
    question: "The male reproductive hormone responsible for secondary sexual characteristics is _______.",
    options: ["testosterone", "estrogen", "progesterone", "FSH"],
    answer: 0,
  },
  {
    question: "The female hormone that regulates the menstrual cycle is _______.",
    options: ["estrogen and progesterone", "testosterone", "LH only", "FSH only"],
    answer: 0,
  },
  {
    question: "Follicle-stimulating hormone (FSH) stimulates _______.",
    options: ["maturation of gametes", "ovulation", "uterine contraction", "testosterone production"],
    answer: 0,
  },
  {
    question: "Luteinizing hormone (LH) triggers _______.",
    options: ["ovulation", "gamete maturation", "spermatogenesis", "menstruation"],
    answer: 0,
  },
  {
    question: "The endometrium thickens under the influence of _______.",
    options: ["estrogen", "progesterone", "testosterone", "FSH"],
    answer: 0,
  },
  {
    question: "The fertilized ovum develops into a _______.",
    options: ["zygote", "gamete", "embryo", "blastocyst"],
    answer: 0,
  },
  {
    question: "The blastocyst implants in the _______ during pregnancy.",
    options: ["uterus", "ovary", "oviduct", "vagina"],
    answer: 0,
  },
  {
    question: "The primary site of fertilization in humans is the _______.",
    options: ["fallopian tube", "uterus", "ovary", "vagina"],
    answer: 0,
  },
  {
    question: "Gametes are haploid cells containing _______ chromosomes.",
    options: ["half the diploid number", "double the diploid number", "diploid number", "one-quarter the diploid number"],
    answer: 0,
  },
  {
    question: "Zygote is a _______ cell formed by fusion of gametes.",
    options: ["diploid", "haploid", "polyploid", "monoploid"],
    answer: 0,
  },
  {
    question: "During pregnancy, progesterone maintains the _______.",
    options: ["endometrium", "ovary", "fallopian tube", "vagina"],
    answer: 0,
  },
  {
    question: "The corpus luteum forms from the _______ after ovulation.",
    options: ["ovarian follicle", "uterus", "oviduct", "endometrium"],
    answer: 0,
  },
  {
    question: "Spermatogenesis produces _______ sperm from each spermatogonium.",
    options: ["four", "one", "two", "eight"],
    answer: 0,
  },
  {
    question: "Oogenesis produces _______ functional ovum from one oogonium.",
    options: ["one", "two", "three", "four"],
    answer: 0,
  },
  {
    question: "Fertilization restores the _______ chromosome number in the zygote.",
    options: ["diploid", "haploid", "triploid", "tetraploid"],
    answer: 0,
  },
  {
    question: "The placenta is formed from _______.",
    options: ["maternal and fetal tissues", "uterus only", "ovary only", "umbilical cord only"],
    answer: 0,
  },
  {
    question: "The umbilical cord contains _______ arteries and veins.",
    options: ["two arteries and one vein", "one artery and two veins", "two veins and no arteries", "one artery and one vein"],
    answer: 0,
  },
  {
    question: "The amniotic sac contains _______ fluid that protects the fetus.",
    options: ["amniotic", "cerebrospinal", "plasma", "lymph"],
    answer: 0,
  },
  {
    question: "The process by which an egg develops without fertilization is called _______.",
    options: ["parthenogenesis", "budding", "fragmentation", "pollination"],
    answer: 0,
  },
  {
    question: "Vegetative propagation in plants is an example of _______.",
    options: ["asexual reproduction", "sexual reproduction", "pollination", "fertilization"],
    answer: 0,
  },
  {
    question: "Cuttings, grafting, and layering are methods of _______ in plants.",
    options: ["vegetative propagation", "sexual reproduction", "spore formation", "seed dispersal"],
    answer: 0,
  },
  {
    question: "Binary fission in bacteria results in _______.",
    options: ["two identical daughter cells", "one gamete", "zygote formation", "four gametes"],
    answer: 0,
  },
  {
    question: "Budding in yeast produces _______.",
    options: ["a small identical offspring from the parent cell", "gametes", "zygote", "pollen"],
    answer: 0,
  },
  {
    question: "Fragmentation in starfish results in _______.",
    options: ["regeneration of a new individual from a part", "formation of gametes", "fertilization", "pollination"],
    answer: 0,
  },
  {
    question: "Sexual reproduction increases _______ in populations.",
    options: ["genetic variation", "mutation rate only", "asexual clones", "sterility"],
    answer: 0,
  },
  {
    question: "Asexual reproduction produces offspring _______ to the parent.",
    options: ["genetically identical", "genetically different", "haploid", "polyploid"],
    answer: 0,
  },
  {
    question: "Ovoviviparous animals produce eggs that _______ inside the body.",
    options: ["hatch before birth", "are laid externally", "are fertilized externally", "never hatch"],
    answer: 0,
  },
  {
    question: "Viviparous animals give birth to _______.",
    options: ["live young", "eggs", "buds", "spores"],
    answer: 0,
  },
  {
    question: "Oviparous animals reproduce by laying _______.",
    options: ["eggs", "live young", "buds", "seeds"],
    answer: 0,
  },
  {
    question: "Testosterone controls sperm production and _______.",
    options: ["secondary sexual characteristics", "menstruation", "ovulation", "placenta formation"],
    answer: 0,
  },
  {
    question: "Estrogen is responsible for development of _______.",
    options: ["female secondary sexual characteristics", "male characteristics", "gamete production only", "placenta formation"],
    answer: 0,
  },
  {
    question: "Progesterone prepares the uterus for _______.",
    options: ["implantation of the zygote", "sperm production", "menstruation", "pollination"],
    answer: 0,
  },
  {
    question: "The menstrual cycle lasts approximately _______ days in humans.",
    options: ["28", "21", "35", "14"],
    answer: 0,
  },
  {
    question: "Ovulation typically occurs on day _______ of the menstrual cycle.",
    options: ["14", "1", "28", "7"],
    answer: 0,
  },
  {
    question: "The release of an ovum from the ovary is called _______.",
    options: ["ovulation", "fertilization", "menstruation", "implantation"],
    answer: 0,
  },
  {
    question: "The corpus luteum secretes _______ to maintain pregnancy.",
    options: ["progesterone", "estrogen", "testosterone", "FSH"],
    answer: 0,
  },
  {
    question: "The first cell formed after fertilization is called a _______.",
    options: ["zygote", "gamete", "embryo", "blastocyst"],
    answer: 0,
  },
  {
    question: "The human embryo implants in the _______.",
    options: ["uterus", "oviduct", "ovary", "vagina"],
    answer: 0,
  },
  {
    question: "In flowering plants, cross-pollination promotes _______.",
    options: ["genetic variation", "identical clones", "asexual reproduction", "vegetative growth"],
    answer: 0,
  },
  {
    question: "Self-pollination reduces _______ in plants.",
    options: ["genetic variation", "fertility", "flowering", "seed formation"],
    answer: 0,
  },
  {
    question: "The transfer of pollen from anther to stigma is called _______.",
    options: ["pollination", "fertilization", "ovulation", "budding"],
    answer: 0,
  },
  {
    question: "Fertilization restores the _______ chromosome number in the zygote.",
    options: ["diploid", "haploid", "tetraploid", "triploid"],
    answer: 0,
  },
  {
    question: "Asexual reproduction is common in _______.",
    options: ["bacteria, fungi, and some plants", "humans only", "birds only", "mammals only"],
    answer: 0,
  },
  {
    question: "Vegetative propagation is a type of _______ reproduction.",
    options: ["asexual", "sexual", "gametic", "fertilization-based"],
    answer: 0,
  },
  {
    question: "Parthenogenesis occurs when offspring develop from _______ without fertilization.",
    options: ["egg cells", "sperm cells", "zygotes", "buds"],
    answer: 0,
  },
  {
    question: "Cloning produces offspring _______ to the parent.",
    options: ["genetically identical", "genetically different", "haploid", "polyploid"],
    answer: 0,
  },
  
  {
    question: "Viviparous animals give birth to _______.",
    options: ["live young", "eggs", "buds", "spores"],
    answer: 0,
  },
  {
    question: "Oviparous animals lay _______.",
    options: ["eggs", "live young", "buds", "spores"],
    answer: 0,
  },
  {
    question: "Ovoviviparous animals produce eggs that _______ inside the body.",
    options: ["hatch before birth", "are laid externally", "are fertilized externally", "never hatch"],
    answer: 0,
  },
  {
    question: "External fertilization occurs mostly in _______.",
    options: ["fishes and amphibians", "mammals", "birds", "reptiles"],
    answer: 0,
  },
  {
    question: "Internal fertilization occurs in _______.",
    options: ["mammals, birds, and reptiles", "fish and amphibians", "insects only", "amphibians only"],
    answer: 0,
  },
  {
    question: "The male reproductive organ in mammals is the _______.",
    options: ["testis", "ovary", "penis", "scrotum"],
    answer: 0,
  },
  {
    question: "The female reproductive organ in mammals is the _______.",
    options: ["ovary", "testis", "uterus", "vagina"],
    answer: 0,
  },
  {
    question: "Fertilization in birds is _______.",
    options: ["internal", "external", "asexual", "pollination"],
    answer: 0,
  },
  {
    question: "Birds lay eggs that are _______.",
    options: ["amniotic", "non-amniotic", "live young", "ovoviviparous"],
    answer: 0,
  },
  {
    question: "Fishes like salmon lay eggs in water and fertilization is _______.",
    options: ["external", "internal", "asexual", "vegetative"],
    answer: 0,
  },
  {
    question: "Amphibians like frogs undergo _______ fertilization.",
    options: ["external", "internal", "asexual", "pollination"],
    answer: 0,
  },
  {
    question: "Reptiles lay _______ eggs with leathery or hard shells.",
    options: ["amniotic", "non-amniotic", "live young", "ovoviviparous"],
    answer: 0,
  },
  {
    question: "Placenta in mammals functions to _______.",
    options: ["exchange nutrients and gases between mother and fetus", "produce gametes", "protect eggs externally", "fertilize sperm"],
    answer: 0,
  },
  {
    question: "Marsupials give birth to _______ young that develop in a pouch.",
    options: ["underdeveloped", "fully developed", "eggs", "buds"],
    answer: 0,
  },
  {
    question: "Monotremes like the platypus lay _______ eggs.",
    options: ["amniotic eggs", "live young", "buds", "asexual spores"],
    answer: 0,
  },
  {
    question: "In mammals, sperm is produced in the _______.",
    options: ["testes", "ovaries", "uterus", "vas deferens"],
    answer: 0,
  },
  {
    question: "In mammals, eggs are produced in the _______.",
    options: ["ovaries", "testes", "uterus", "fallopian tubes"],
    answer: 0,
  },
  {
    question: "Fertilization in amphibians is usually triggered by _______.",
    options: ["environmental water conditions", "internal mating", "hormones only", "pollination"],
    answer: 0,
  },
  {
    question: "Most reptiles and birds have _______ fertilization.",
    options: ["internal", "external", "asexual", "parthenogenetic"],
    answer: 0,
  },
  {
    question: "Fish like guppies can be _______ or _______ in reproduction.",
    options: ["oviparous, ovoviviparous", "viviparous, parthenogenetic", "oviparous, viviparous", "asexual, parthenogenetic"],
    answer: 0,
  },
  {
    question: "Mammals are mostly _______ (viviparous/oviparous).",
    options: ["viviparous", "oviparous", "ovoviviparous", "asexual"],
    answer: 0,
  },
  {
    question: "Bird eggs contain _______ to support embryo development.",
    options: ["yolk and amniotic fluid", "blood only", "air only", "placenta only"],
    answer: 0,
  },
  {
    question: "Fertilization in reptiles is usually _______.",
    options: ["internal", "external", "asexual", "parthenogenetic"],
    answer: 0,
  },
  {
    question: "Amphibians show _______ development, often with larval stages.",
    options: ["indirect", "direct", "asexual", "vegetative"],
    answer: 0,
  },
  {
    question: "Birds and reptiles have _______ eggs to prevent desiccation.",
    options: ["amniotic", "non-amniotic", "ovoviviparous", "live young"],
    answer: 0,
  },
  {
    question: "Viviparity allows the mother to _______.",
    options: ["protect and nourish the embryo internally", "lay eggs externally", "produce gametes", "undergo budding"],
    answer: 0,
  },
  {
    question: "Fertilization in most fish is _______ because sperm meets eggs in water.",
    options: ["external", "internal", "asexual", "vegetative"],
    answer: 0,
  },
  {
    question: "Ovoviviparous reptiles hatch eggs _______ in the body.",
    options: ["before laying", "after laying", "externally", "as buds"],
    answer: 0,
  },
  {
    question: "Amphibians generally require water for _______.",
    options: ["external fertilization", "internal fertilization", "oviparity", "placenta formation"],
    answer: 0,
  },
  {
    question: "Mammals with live birth include _______.",
    options: ["humans, dogs, cats", "birds, reptiles", "amphibians, fish", "sponges, hydra"],
    answer: 0,
  },
  {
    question: "Marsupials include animals like _______.",
    options: ["kangaroos and opossums", "humans and dogs", "frogs and toads", "snakes and lizards"],
    answer: 0,
  },
  {
    question: "Monotremes include animals like _______.",
    options: ["platypus and echidna", "humans and cows", "frogs and salamanders", "birds and reptiles"],
    answer: 0,
  },
  {
    question: "Spermatogenesis and oogenesis in mammals are examples of _______.",
    options: ["gametogenesis", "fertilization", "gestation", "pollination"],
    answer: 0,
  },
  {
    question: "Most amphibians exhibit _______ eggs that develop in water.",
    options: ["non-amniotic", "amniotic", "viviparous", "placental"],
    answer: 0,
  },
  {
    question: "Birds have a _______ period for egg incubation.",
    options: ["fixed", "variable depending on species", "none", "continuous internal gestation"],
    answer: 1,
  },
  {
    question: "Reptiles and birds share _______ features in reproduction.",
    options: ["amniotic eggs", "live birth only", "external fertilization", "parthenogenesis"],
    answer: 0,
  },
  {
    question: "Fishes may show parental care such as _______.",
    options: ["nest building and guarding eggs", "placental nourishment", "internal gestation", "amniotic incubation"],
    answer: 0,
  },
  {
    question: "In mammals, the embryo is nourished directly by _______.",
    options: ["placenta", "egg yolk", "water", "air"],
    answer: 0,
  },
  {
    question: "In reptiles, temperature can influence _______ of offspring.",
    options: ["sex determination", "egg size", "number of eggs", "gestation length"],
    answer: 0,
  },
  {
    question: "External fertilization requires _______ to ensure gametes meet.",
    options: ["water medium", "amniotic fluid", "internal gestation", "pouch development"],
    answer: 0,
  },
  {
    question: "Internal fertilization increases _______ of eggs compared to external.",
    options: ["survival rate", "egg size only", "number of eggs only", "genetic variation only"],
    answer: 0,
  },
  {
    question: "Bird reproduction is characterized by _______.",
    options: ["internal fertilization and amniotic eggs", "external fertilization and live birth", "asexual reproduction", "budding"],
    answer: 0,
  },
  {
    question: "Ovoviviparous fish produce eggs that _______ inside the female.",
    options: ["hatch before being released", "are fertilized externally", "never hatch", "become buds"],
    answer: 0,
  },
  {
    question: "Fertilization in amphibians is often synchronized with _______.",
    options: ["rainy season or water availability", "temperature alone", "gestation period", "moon phases"],
    answer: 0,
  },
  {
    question: "Reptiles do not require water for fertilization because it is _______.",
    options: ["internal", "external", "asexual", "vegetative"],
    answer: 0,
  },
  {
    question: "Mammals exhibit _______ parental care compared to most fish and amphibians.",
    options: ["high", "low", "none", "variable depending on egg number"],
    answer: 0,
  },
  {
    question: "Birds and mammals are both _______ in reproduction.",
    options: ["viviparous (mostly mammals) and oviparous (birds)", "oviparous", "external fertilization only", "asexual only"],
    answer: 0,
  },
  
  //nutrition 
  
  {
    question: "Nutrition can be defined as the process by which organisms _______.",
    options: ["obtain and utilize food", "move from place to place", "reproduce", "respire"],
    answer: 0,
  },
  {
    question: "Autotrophic nutrition is carried out by organisms that _______.",
    options: ["synthesize their own food", "feed on other organisms", "absorb soluble food", "parasitize hosts"],
    answer: 0,
  },
  {
    question: "Photosynthesis is an example of _______ nutrition.",
    options: ["autotrophic", "heterotrophic", "saprophytic", "parasitic"],
    answer: 0,
  },
  {
    question: "Heterotrophic organisms obtain their food from _______.",
    options: ["other organisms", "sunlight", "inorganic chemicals", "water only"],
    answer: 0,
  },
  {
    question: "Saprophytic nutrition involves obtaining food from _______.",
    options: ["dead organic matter", "living hosts", "sunlight", "inorganic salts"],
    answer: 0,
  },
  {
    question: "Parasitic nutrition involves obtaining food from _______.",
    options: ["living hosts", "dead matter", "sunlight", "soil minerals"],
    answer: 0,
  },
  {
    question: "Symbiotic nutrition involves a relationship where both organisms _______.",
    options: ["benefit", "harm each other", "ignore each other", "compete for food"],
    answer: 0,
  },
  {
    question: "Holozoic nutrition is characteristic of _______.",
    options: ["humans, dogs, and cats", "bacteria only", "plants only", "fungi only"],
    answer: 0,
  },
  {
    question: "In holozoic nutrition, food is first _______.",
    options: ["ingested", "absorbed", "assimilated", "excreted"],
    answer: 0,
  },
  {
    question: "Mechanical digestion begins in the _______.",
    options: ["mouth", "stomach", "small intestine", "oesophagus"],
    answer: 0,
  },
  {
    question: "Salivary glands secrete _______ to digest starch.",
    options: ["salivary amylase", "pepsin", "lipase", "trypsin"],
    answer: 0,
  },
  {
    question: "The stomach secretes _______ for protein digestion.",
    options: ["pepsin", "amylase", "lipase", "maltase"],
    answer: 0,
  },
  {
    question: "The small intestine is the main site for _______.",
    options: ["absorption of digested food", "mechanical digestion", "starch breakdown only", "chewing"],
    answer: 0,
  },
  {
    question: "Bile produced by the liver _______ fats.",
    options: ["emulsifies", "digests", "absorbs", "stores"],
    answer: 0,
  },
  {
    question: "Pancreatic juice contains enzymes such as _______ for digestion.",
    options: ["amylase, lipase, trypsin", "pepsin only", "salivary amylase only", "maltase only"],
    answer: 0,
  },
  {
    question: "Carbohydrates are broken down into _______ during digestion.",
    options: ["glucose", "amino acids", "fatty acids", "glycerol"],
    answer: 0,
  },
  {
    question: "Proteins are broken down into _______ during digestion.",
    options: ["amino acids", "glucose", "fatty acids", "vitamins"],
    answer: 0,
  },
  {
    question: "Lipids are broken down into _______ and glycerol.",
    options: ["fatty acids", "sugars", "amino acids", "starch"],
    answer: 0,
  },
  {
    question: "Vitamins are required in the diet in _______ amounts.",
    options: ["small", "large", "medium", "excessive"],
    answer: 0,
  },
  {
    question: "Iron deficiency in humans leads to _______.",
    options: ["anaemia", "scurvy", "rickets", "beriberi"],
    answer: 0,
  },
  {
    question: "Vitamin C deficiency causes _______.",
    options: ["scurvy", "rickets", "goitre", "anaemia"],
    answer: 0,
  },
  {
    question: "Vitamin D deficiency leads to _______ in children.",
    options: ["rickets", "scurvy", "beriberi", "kwashiorkor"],
    answer: 0,
  },
  {
    question: "Beriberi is caused by deficiency of vitamin _______.",
    options: ["B1 (thiamine)", "C", "D", "A"],
    answer: 0,
  },
  {
    question: "Kwashiorkor results from severe deficiency of _______.",
    options: ["protein", "carbohydrate", "vitamin C", "lipid"],
    answer: 0,
  },
  {
    question: "Goitre is caused by deficiency of _______.",
    options: ["iodine", "iron", "vitamin A", "vitamin D"],
    answer: 0,
  },
  {
    question: "Water is important in the body for _______.",
    options: ["transport, chemical reactions, and temperature regulation", "energy storage only", "digestion only", "defense only"],
    answer: 0,
  },
  {
    question: "Dietary fiber helps to _______.",
    options: ["regulate bowel movement", "store energy", "produce enzymes", "absorb vitamins"],
    answer: 0,
  },
  {
    question: "A balanced diet contains _______.",
    options: ["carbohydrates, proteins, lipids, vitamins, minerals, water, and fiber", "only carbohydrates", "only proteins", "only lipids"],
    answer: 0,
  },
  {
    question: "Amoeba obtains its food by _______.",
    options: ["phagocytosis", "absorption", "photosynthesis", "pollination"],
    answer: 0,
  },
  {
    question: "Paramecium uses _______ to sweep food into its mouth pore.",
    options: ["cilia", "flagella", "pseudopodia", "contractile vacuole"],
    answer: 0,
  },
  {
    question: "Hydra captures its prey using _______.",
    options: ["tentacles with cnidocytes", "cilia", "flagella", "pseudopodia"],
    answer: 0,
  },
  {
    question: "Grasshoppers have a _______ digestive system.",
    options: ["complete", "incomplete", "one-chambered", "no digestive system"],
    answer: 0,
  },
  {
    question: "Ruminants like cows have a _______ stomach to digest cellulose.",
    options: ["four-chambered", "one-chambered", "two-chambered", "three-chambered"],
    answer: 0,
  },
  {
    question: "Enzymes are biological catalysts that _______.",
    options: ["speed up chemical reactions", "slow digestion", "store food", "absorb nutrients"],
    answer: 0,
  },
  {
    question: "Amylase acts on _______ to produce maltose.",
    options: ["starch", "protein", "lipids", "cellulose"],
    answer: 0,
  },
  {
    question: "Pepsin acts on _______ to produce peptides.",
    options: ["protein", "starch", "lipids", "sugars"],
    answer: 0,
  },
  {
    question: "Lipase acts on _______ to produce fatty acids and glycerol.",
    options: ["fats", "proteins", "starch", "cellulose"],
    answer: 0,
  },
  {
    question: "Maltase acts on maltose to produce _______.",
    options: ["glucose", "amino acids", "fatty acids", "glycerol"],
    answer: 0,
  },
  {
    question: "Bile does not digest fats but _______ them.",
    options: ["emulsifies", "absorbs", "stores", "breaks down proteins"],
    answer: 0,
  },
  {
    question: "Deficiency of calcium in diet can lead to _______.",
    options: ["weak bones and rickets", "scurvy", "anaemia", "beriberi"],
    answer: 0,
  },
  {
    question: "Excess carbohydrate intake can lead to _______.",
    options: ["obesity", "kwashiorkor", "rickets", "scurvy"],
    answer: 0,
  },
  {
    question: "Proteins are essential for _______.",
    options: ["growth and repair", "energy storage only", "enzyme inhibition", "water transport"],
    answer: 0,
  },
  {
    question: "Lipids provide _______ more than carbohydrates or proteins.",
    options: ["energy per gram", "water", "vitamins", "minerals"],
    answer: 0,
  },
  {
    question: "Malnutrition refers to _______.",
    options: ["deficiency, excess or imbalance of nutrients", "overeating only", "lack of water only", "lack of exercise only"],
    answer: 0,
  },
  {
    question: "Holozoic nutrition involves _______ steps including ingestion, digestion, absorption, assimilation, and egestion.",
    options: ["five", "three", "two", "four"],
    answer: 0,
  },
  {
    question: "Autotrophic nutrition in plants occurs mainly in the _______.",
    options: ["leaves", "roots", "stem", "flowers"],
    answer: 0,
  },
  
  {
    question: "Chlorophyll in plants is important for _______.",
    options: ["photosynthesis", "respiration", "absorption of minerals", "transpiration"],
    answer: 0,
  },
  {
    question: "Chemosynthetic bacteria obtain energy from _______.",
    options: ["inorganic chemicals", "sunlight", "organic matter", "air"],
    answer: 0,
  },
  {
    question: "Heterotrophs that feed on dead matter are called _______.",
    options: ["saprophytes", "parasites", "predators", "producers"],
    answer: 0,
  },
  {
    question: "Organisms that live on living hosts and cause harm are called _______.",
    options: ["parasites", "saprophytes", "predators", "symbionts"],
    answer: 0,
  },
  {
    question: "The symbiotic relationship between fungi and algae in lichens is _______.",
    options: ["mutualistic", "parasitic", "commensal", "competitive"],
    answer: 0,
  },
  {
    question: "Carnivores are heterotrophs that eat mainly _______.",
    options: ["other animals", "plants", "dead matter", "microorganisms"],
    answer: 0,
  },
  {
    question: "Herbivores are heterotrophs that eat mainly _______.",
    options: ["plants", "animals", "microorganisms", "dead matter"],
    answer: 0,
  },
  {
    question: "Omnivores feed on both _______.",
    options: ["plants and animals", "plants only", "animals only", "microorganisms only"],
    answer: 0,
  },
  {
    question: "Enzymes in saliva start the digestion of _______.",
    options: ["starch", "proteins", "fats", "cellulose"],
    answer: 0,
  },
  {
    question: "The function of the large intestine is mainly to _______.",
    options: ["absorb water and form faeces", "digest proteins", "emulsify fats", "absorb vitamins only"],
    answer: 0,
  },
  {
    question: "The liver produces _______ which aids fat digestion.",
    options: ["bile", "amylase", "pepsin", "lipase"],
    answer: 0,
  },
  {
    question: "The pancreas secretes enzymes into the _______ for digestion.",
    options: ["small intestine", "stomach", "mouth", "large intestine"],
    answer: 0,
  },
  {
    question: "Vitamin A deficiency can lead to _______.",
    options: ["night blindness", "rickets", "anaemia", "scurvy"],
    answer: 0,
  },
  {
    question: "Vitamin K is important for _______.",
    options: ["blood clotting", "bone formation", "vision", "energy production"],
    answer: 0,
  },
  {
    question: "Water-soluble vitamins include _______.",
    options: ["B-complex and C", "A and D", "E and K", "B12 only"],
    answer: 0,
  },
  {
    question: "Fat-soluble vitamins include _______.",
    options: ["A, D, E, K", "B-complex, C", "C only", "B1 only"],
    answer: 0,
  },
  {
    question: "Cellulose in the diet helps _______.",
    options: ["regulate bowel movement", "digest protein", "store energy", "emulsify fats"],
    answer: 0,
  },
  {
    question: "Excess protein in the diet may be converted to _______.",
    options: ["fat", "carbohydrate", "amino acids", "starch"],
    answer: 0,
  },
  {
    question: "Malnutrition in children may result in _______.",
    options: ["stunted growth", "increased height", "improved immunity", "excess energy only"],
    answer: 0,
  },
  {
    question: "The energy content of foods is measured in _______.",
    options: ["kilojoules or kilocalories", "grams", "litres", "meters"],
    answer: 0,
  },
  {
    question: "Ruminants chew cud to _______.",
    options: ["aid cellulose digestion", "absorb proteins", "store fat", "produce enzymes"],
    answer: 0,
  },
  {
    question: "Amoeba uses _______ to engulf food particles.",
    options: ["pseudopodia", "cilia", "flagella", "tentacles"],
    answer: 0,
  },
  {
    question: "Paramecium traps food using _______.",
    options: ["cilia", "pseudopodia", "flagella", "tentacles"],
    answer: 0,
  },
  {
    question: "Hydra paralyzes its prey with _______.",
    options: ["cnidocytes", "cilia", "flagella", "pseudopodia"],
    answer: 0,
  },
  {
    question: "The human stomach produces acid and enzyme called _______.",
    options: ["hydrochloric acid and pepsin", "saliva and amylase", "bile and lipase", "maltase only"],
    answer: 0,
  },
  {
    question: "Bile salts help in _______ of fats.",
    options: ["emulsification", "absorption", "digestion of proteins", "breaking down starch"],
    answer: 0,
  },
  {
    question: "Excess intake of carbohydrates and fats can lead to _______.",
    options: ["obesity", "kwashiorkor", "rickets", "scurvy"],
    answer: 0,
  },
  {
    question: "Anaemia is caused by deficiency of _______.",
    options: ["iron", "vitamin C", "calcium", "vitamin D"],
    answer: 0,
  },
  {
    question: "A balanced diet prevents _______.",
    options: ["deficiency diseases", "external fertilization", "budding", "photosynthesis"],
    answer: 0,
  },
  {
    question: "Holozoic nutrition includes ingestion, digestion, absorption, assimilation, and _______.",
    options: ["egestion", "photosynthesis", "respiration", "budding"],
    answer: 0,
  },
  {
    question: "Proteins are necessary for _______ in the body.",
    options: ["growth and repair", "energy storage only", "digestion only", "water balance"],
    answer: 0,
  },
  {
    question: "Fats provide more energy per gram than carbohydrates because they contain more _______.",
    options: ["hydrogen atoms", "oxygen atoms", "nitrogen atoms", "sulfur atoms"],
    answer: 0,
  },
  {
    question: "Iron in the diet is important for the formation of _______.",
    options: ["haemoglobin", "enzymes", "vitamin D", "lipids"],
    answer: 0,
  },
  {
    question: "Iodine is necessary for the synthesis of _______.",
    options: ["thyroid hormones", "vitamin A", "haemoglobin", "enzymes"],
    answer: 0,
  },
  {
    question: "Vitamin D helps in the absorption of _______ from the intestine.",
    options: ["calcium", "iron", "protein", "vitamin C"],
    answer: 0,
  },
  {
    question: "Vitamins are required in the diet in _______ amounts.",
    options: ["trace or small", "large amounts", "excess only", "medium amounts"],
    answer: 0,
  },
  {
    question: "Excess salt in the diet may lead to _______.",
    options: ["high blood pressure", "rickets", "scurvy", "beriberi"],
    answer: 0,
  },
  {
    question: "Dietary fiber is important to prevent _______.",
    options: ["constipation", "vitamin deficiency", "protein deficiency", "scurvy"],
    answer: 0,
  },
  {
    question: "Vitamin C helps in the formation of _______.",
    options: ["collagen", "enzymes only", "fat", "starch"],
    answer: 0,
  },
  {
    question: "Kwashiorkor is mainly due to deficiency of _______.",
    options: ["protein", "carbohydrate", "fat", "vitamin C"],
    answer: 0,
  },
  {
    question: "Goitre can be prevented by adding _______ to the diet.",
    options: ["iodine", "iron", "calcium", "vitamin A"],
    answer: 0,
  },
  {
    question: "Rickets can be prevented by providing _______ in the diet.",
    options: ["vitamin D and calcium", "iron only", "vitamin C only", "protein only"],
    answer: 0,
  },
  {
    question: "Scurvy is prevented by consuming foods rich in _______.",
    options: ["vitamin C", "iron", "calcium", "vitamin D"],
    answer: 0,
  },
  {
    question: "Balanced nutrition helps to maintain _______ and prevent diseases.",
    options: ["health", "fertilization", "pollination", "photosynthesis"],
    answer: 0,
  },
  
  //transport system
  
  {
    question: "The main function of the circulatory system is to _______.",
    options: ["transport substances around the body", "digest food", "produce hormones", "store energy"],
    answer: 0,
  },
  {
    question: "Blood is a _______ tissue.",
    options: ["connective", "epithelial", "muscular", "nervous"],
    answer: 0,
  },
  {
    question: "The heart is made up of _______ tissue.",
    options: ["cardiac muscle", "skeletal muscle", "smooth muscle", "connective"],
    answer: 0,
  },
  {
    question: "Arteries carry blood _______ the heart.",
    options: ["away from", "towards", "only to lungs", "only to liver"],
    answer: 0,
  },
  {
    question: "Veins carry blood _______ the heart.",
    options: ["towards", "away from", "only to lungs", "only to liver"],
    answer: 0,
  },
  {
    question: "Capillaries are important because they _______.",
    options: ["allow exchange of substances with tissues", "store blood", "pump blood", "produce white blood cells"],
    answer: 0,
  },
  {
    question: "The human heart has _______ chambers.",
    options: ["four", "two", "three", "five"],
    answer: 0,
  },
  {
    question: "The left side of the heart pumps blood to the _______.",
    options: ["whole body", "lungs", "heart only", "kidneys"],
    answer: 0,
  },
  {
    question: "The right side of the heart pumps blood to the _______.",
    options: ["lungs", "whole body", "heart only", "brain only"],
    answer: 0,
  },
  {
    question: "Pulmonary circulation carries blood between the heart and _______.",
    options: ["lungs", "liver", "kidneys", "brain"],
    answer: 0,
  },
  {
    question: "Systemic circulation carries blood between the heart and _______.",
    options: ["the rest of the body", "lungs only", "heart only", "kidneys only"],
    answer: 0,
  },
  {
    question: "Blood is composed of plasma, red blood cells, white blood cells, and _______.",
    options: ["platelets", "enzymes", "hormones", "oxygen only"],
    answer: 0,
  },
  {
    question: "Red blood cells are responsible for transporting _______.",
    options: ["oxygen", "carbon dioxide only", "hormones only", "plasma"],
    answer: 0,
  },
  {
    question: "White blood cells function mainly in _______.",
    options: ["defense against disease", "transport of oxygen", "clotting", "transport of nutrients"],
    answer: 0,
  },
  {
    question: "Platelets are important for _______.",
    options: ["blood clotting", "oxygen transport", "hormone production", "immune response"],
    answer: 0,
  },
  {
    question: "Plasma mainly transports _______ and nutrients.",
    options: ["hormones, glucose, and wastes", "red blood cells only", "enzymes only", "oxygen only"],
    answer: 0,
  },
  {
    question: "Lymph is transported through _______.",
    options: ["lymphatic vessels", "veins", "arteries", "capillaries"],
    answer: 0,
  },
  {
    question: "The lymphatic system helps to _______.",
    options: ["return excess tissue fluid to the blood", "digest food", "absorb water", "produce oxygen"],
    answer: 0,
  },
  {
    question: "An open circulatory system is found in _______.",
    options: ["insects", "humans", "fish", "amphibians"],
    answer: 0,
  },
  {
    question: "A closed circulatory system is found in _______.",
    options: ["humans and other vertebrates", "insects", "sponges", "cnidarians"],
    answer: 0,
  },
  {
    question: "Xylem in plants transports _______.",
    options: ["water and minerals from roots to leaves", "food from leaves to roots", "hormones only", "oxygen only"],
    answer: 0,
  },
  {
    question: "Phloem in plants transports _______.",
    options: ["food from leaves to other parts", "water from roots to leaves", "minerals only", "oxygen only"],
    answer: 0,
  },
  {
    question: "Transpiration in plants mainly occurs through the _______.",
    options: ["stomata", "roots", "phloem", "xylem"],
    answer: 0,
  },
  {
    question: "Root pressure in plants is caused by _______.",
    options: ["osmotic pressure in root cells", "wind", "photosynthesis", "stomata opening"],
    answer: 0,
  },
  {
    question: "The movement of water in xylem is mainly due to _______.",
    options: ["transpiration pull, cohesion, and adhesion", "phloem transport", "osmosis only", "diffusion only"],
    answer: 0,
  },
  {
    question: "Factors increasing transpiration include _______.",
    options: ["high temperature and wind", "low light", "high humidity", "low temperature"],
    answer: 0,
  },
  {
    question: "Cohesion in water molecules helps to _______.",
    options: ["pull water up the xylem", "absorb minerals", "digest food", "transport sugar only"],
    answer: 0,
  },
  {
    question: "Adhesion in water molecules helps water to _______.",
    options: ["stick to xylem walls", "stick to phloem only", "absorb sunlight", "digest food"],
    answer: 0,
  },
  {
    question: "Phloem transport is called _______.",
    options: ["translocation", "transpiration", "photosynthesis", "respiration"],
    answer: 0,
  },
  {
    question: "Water is absorbed by plant roots mainly through _______.",
    options: ["osmosis", "diffusion", "transpiration", "active transport only"],
    answer: 0,
  },
  {
    question: "Minerals are absorbed by plants mainly through _______.",
    options: ["active transport", "osmosis", "diffusion", "transpiration pull"],
    answer: 0,
  },
  {
    question: "The heart of a fish has _______ chambers.",
    options: ["two", "four", "three", "one"],
    answer: 0,
  },
  {
    question: "The human heart valves prevent _______.",
    options: ["backflow of blood", "blood clotting", "oxygen transport", "phloem transport"],
    answer: 0,
  },
  {
    question: "The vena cava carries _______ blood to the heart.",
    options: ["deoxygenated", "oxygenated", "nutrient-rich", "sugary"],
    answer: 0,
  },
  {
    question: "The aorta carries _______ blood from the heart to the body.",
    options: ["oxygenated", "deoxygenated", "lymph", "mineral-rich water"],
    answer: 0,
  },
  {
    question: "Capillaries are one-cell thick to allow _______.",
    options: ["exchange of substances with tissues", "blood storage", "immune response", "transport of lymph"],
    answer: 0,
  },
  {
    question: "Transpiration pull is created due to _______.",
    options: ["evaporation of water from leaves", "phloem transport", "xylem blockage", "root pressure only"],
    answer: 0,
  },
  {
    question: "Double circulation in humans ensures _______.",
    options: ["oxygen-rich and oxygen-poor blood are separated", "all blood mixes", "low blood pressure", "high transpiration"],
    answer: 0,
  },
  {
    question: "Lymph contains mainly _______.",
    options: ["white blood cells and tissue fluid", "red blood cells", "oxygen only", "nutrients only"],
    answer: 0,
  },
  {
    question: "Translocation in phloem occurs from _______ to sink.",
    options: ["source", "leaf only", "root only", "stem only"],
    answer: 0,
  },
  {
    question: "Transpiration helps in _______ mineral transport in plants.",
    options: ["upward", "downward", "horizontal", "no effect"],
    answer: 0,
  },
  {
    question: "Xylem vessels are made of _______ cells.",
    options: ["dead, hollow cells", "living cells", "parenchyma only", "collenchyma only"],
    answer: 0,
  },
  {
    question: "Phloem vessels are made of _______ cells.",
    options: ["living sieve tube elements and companion cells", "dead hollow cells", "xylem only", "collenchyma only"],
    answer: 0,
  },
  {
    question: "Transport of water in xylem is unidirectional because of _______.",
    options: ["transpiration pull from leaves", "phloem pressure", "osmosis in roots only", "gravity"],
    answer: 0,
  },
  {
    question: "Transport of food in phloem can be _______.",
    options: ["bidirectional", "unidirectional", "horizontal only", "vertical only"],
    answer: 0,
  },
  {
    question: "The lymphatic system complements the circulatory system by _______.",
    options: ["returning excess tissue fluid to blood", "digesting proteins", "transporting oxygen", "producing hormones"],
    answer: 0,
  },
  
  {
    question: "In fish, blood flows in a single circuit because the heart has _______ chambers.",
    options: ["two", "four", "three", "one"],
    answer: 0,
  },
  {
    question: "Amphibians have a three-chambered heart to allow _______.",
    options: ["some separation of oxygenated and deoxygenated blood", "complete separation of blood", "single circulation", "no circulation"],
    answer: 0,
  },
  {
    question: "Birds and mammals have a four-chambered heart for _______.",
    options: ["complete separation of oxygenated and deoxygenated blood", "single circulation", "slow circulation", "no blood mixing"],
    answer: 0,
  },
  {
    question: "The pulmonary artery carries _______ blood from the heart to the lungs.",
    options: ["deoxygenated", "oxygenated", "nutrient-rich", "lymph"],
    answer: 0,
  },
  {
    question: "The pulmonary vein carries _______ blood from the lungs to the heart.",
    options: ["oxygenated", "deoxygenated", "nutrient-rich", "lymph"],
    answer: 0,
  },
  {
    question: "Blood pressure is highest in the _______.",
    options: ["arteries", "veins", "capillaries", "lymph vessels"],
    answer: 0,
  },
  {
    question: "Blood pressure is lowest in the _______.",
    options: ["veins", "arteries", "capillaries", "heart chambers"],
    answer: 0,
  },
  {
    question: "The coronary arteries supply blood to the _______.",
    options: ["heart muscle", "brain", "lungs", "kidneys"],
    answer: 0,
  },
  {
    question: "The sinoatrial node in the heart acts as a _______.",
    options: ["pacemaker", "valve", "blood vessel", "capillary"],
    answer: 0,
  },
  {
    question: "The lymphatic system absorbs _______ from the intestines.",
    options: ["fats", "proteins", "carbohydrates", "vitamins only"],
    answer: 0,
  },
  {
    question: "Oxygen is transported in the blood mainly by _______.",
    options: ["haemoglobin in red blood cells", "plasma", "white blood cells", "platelets"],
    answer: 0,
  },
  {
    question: "Carbon dioxide is transported in the blood mainly as _______.",
    options: ["bicarbonate ions", "oxygen", "plasma proteins", "platelets"],
    answer: 0,
  },
  {
    question: "In plants, the Casparian strip ensures that water and minerals pass through _______.",
    options: ["endodermal cells", "xylem vessels", "phloem sieve tubes", "stomata"],
    answer: 0,
  },
  {
    question: "Transpiration helps to cool plants by _______.",
    options: ["evaporation of water from leaves", "photosynthesis", "root absorption", "phloem transport"],
    answer: 0,
  },
  {
    question: "Root hairs increase _______ for water and mineral absorption.",
    options: ["surface area", "transpiration", "phloem cells", "stomata opening"],
    answer: 0,
  },
  {
    question: "Xylem vessels are strengthened by _______.",
    options: ["lignin", "cellulose only", "proteins", "suberin"],
    answer: 0,
  },
  {
    question: "Phloem sieve plates allow _______ between sieve tube elements.",
    options: ["movement of food substances", "water only", "minerals only", "hormones only"],
    answer: 0,
  },
  {
    question: "Translocation in phloem is driven by _______.",
    options: ["pressure differences between source and sink", "transpiration only", "osmosis only", "gravity only"],
    answer: 0,
  },
  {
    question: "Cohesion-tension theory explains _______ in plants.",
    options: ["upward movement of water in xylem", "translocation in phloem", "photosynthesis", "root absorption"],
    answer: 0,
  },
  {
    question: "Transpiration is affected by _______.",
    options: ["temperature, wind, humidity, and light", "soil type only", "leaf color only", "root length only"],
    answer: 0,
  },
  {
    question: "Capillary action helps water to _______ in narrow xylem vessels.",
    options: ["rise", "fall", "remain stationary", "flow sideways"],
    answer: 0,
  },
  {
    question: "In double circulation, blood passes through the heart _______ times in one complete cycle.",
    options: ["twice", "once", "three times", "four times"],
    answer: 0,
  },
  {
    question: "The left ventricle has thicker walls than the right ventricle to _______.",
    options: ["pump blood throughout the body", "pump blood to the lungs", "store blood", "receive oxygen"],
    answer: 0,
  },
  {
    question: "The main function of the phloem companion cells is to _______.",
    options: ["support sieve tube elements", "transport water", "store starch", "absorb minerals"],
    answer: 0,
  },
  {
    question: "The movement of water from soil into root hairs occurs mainly by _______.",
    options: ["osmosis", "active transport", "diffusion of gases", "transpiration pull"],
    answer: 0,
  },
  {
    question: "The trachea in mammals carries air to the _______.",
    options: ["lungs", "stomach", "heart", "intestines"],
    answer: 0,
  },
  {
    question: "Oxygen enters the blood in the lungs through _______.",
    options: ["diffusion across alveolar walls", "active pumping", "phloem transport", "transpiration"],
    answer: 0,
  },
  {
    question: "In plants, guttation is caused by _______.",
    options: ["root pressure", "transpiration", "photosynthesis", "phloem transport"],
    answer: 0,
  },
  {
    question: "The main driving force for transpiration pull is _______.",
    options: ["evaporation of water from leaf surfaces", "root pressure only", "phloem activity", "gravity only"],
    answer: 0,
  },
  {
    question: "Blood from the digestive tract is first carried to the liver via the _______.",
    options: ["hepatic portal vein", "vena cava", "aorta", "pulmonary vein"],
    answer: 0,
  },
  {
    question: "The hepatic portal vein allows the liver to _______.",
    options: ["detoxify and process absorbed nutrients", "produce red blood cells", "pump blood", "absorb water"],
    answer: 0,
  },
  {
    question: "The lymph nodes function to _______.",
    options: ["filter lymph and trap pathogens", "absorb water", "transport oxygen", "store fats"],
    answer: 0,
  },
  {
    question: "Oxygen is mainly transported by red blood cells because of the presence of _______.",
    options: ["haemoglobin", "plasma", "white blood cells", "platelets"],
    answer: 0,
  },
  {
    question: "Blood in veins moves partly due to _______.",
    options: ["skeletal muscle contraction", "heart alone", "osmosis", "transpiration"],
    answer: 0,
  },
  {
    question: "The heart valves prevent _______ of blood.",
    options: ["backflow", "oxygen transport", "lymph movement", "water transport"],
    answer: 0,
  },
  {
    question: "Capillary beds are important because they _______.",
    options: ["allow exchange of gases, nutrients, and wastes", "store blood", "produce hormones", "absorb minerals"],
    answer: 0,
  },
  {
    question: "Translocation in phloem is driven by a difference in _______ between source and sink.",
    options: ["pressure", "temperature", "light intensity", "humidity"],
    answer: 0,
  },
  {
    question: "Water potential gradient in plants drives the movement of water from _______ to leaves.",
    options: ["roots", "stems", "soil surface", "phloem"],
    answer: 0,
  },
  {
    question: "The main function of xylem parenchyma is to _______.",
    options: ["store food and assist in lateral transport", "transport water", "produce enzymes", "digest protein"],
    answer: 0,
  },
  {
    question: "The transpiration stream refers to the continuous movement of water from _______.",
    options: ["roots to leaves and out through stomata", "leaves to roots", "phloem to roots", "stem to roots only"],
    answer: 0,
  },
  {
    question: "In plants, adhesion and cohesion together help in _______.",
    options: ["water movement in xylem", "translocation of food", "absorption of nutrients", "phloem loading"],
    answer: 0,
  },
  {
    question: "Capillary action occurs due to _______.",
    options: ["adhesion and cohesion of water molecules", "osmosis only", "active transport", "root pressure only"],
    answer: 0,
  },
  {
    question: "Lymph eventually drains into the _______ system.",
    options: ["venous blood", "arterial blood", "phloem", "xylem"],
    answer: 0,
  },
  {
    question: "Blood returning from the body enters the heart through the _______.",
    options: ["vena cava", "pulmonary vein", "aorta", "coronary artery"],
    answer: 0,
  },
  {
    question: "Transpiration rate decreases with _______.",
    options: ["high humidity", "high temperature", "strong wind", "bright sunlight"],
    answer: 0,
  },
  {
    question: "The sieve tubes in phloem are supported by _______.",
    options: ["companion cells", "xylem vessels", "parenchyma only", "collenchyma only"],
    answer: 0,
  },
  
  //respiration 
  
  {
    question: "Aerobic respiration requires _______.",
    options: ["oxygen", "carbon dioxide", "water", "light"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration occurs in the _______ of cells.",
    options: ["cytoplasm", "mitochondria", "nucleus", "ribosome"],
    answer: 0,
  },
  {
    question: "The main site of aerobic respiration in eukaryotic cells is the _______.",
    options: ["mitochondria", "nucleus", "ribosome", "chloroplast"],
    answer: 0,
  },
  {
    question: "During aerobic respiration, glucose is broken down into _______.",
    options: ["carbon dioxide and water", "lactic acid only", "oxygen and water", "starch"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration in muscles produces _______.",
    options: ["lactic acid", "carbon dioxide", "oxygen", "water"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration in yeast produces _______.",
    options: ["ethanol and carbon dioxide", "lactic acid", "oxygen and water", "glucose"],
    answer: 0,
  },
  {
    question: "The equation for aerobic respiration is _______.",
    options: ["C6H12O6 + 6O2 → 6CO2 + 6H2O + energy", "C6H12O6 → 2C2H5OH + 2CO2", "C6H12O6 → 2C3H6O3", "CO2 + H2O → C6H12O6 + O2"],
    answer: 0,
  },
  {
    question: "The energy released during respiration is stored mainly in _______.",
    options: ["ATP", "glucose", "carbon dioxide", "oxygen"],
    answer: 0,
  },
  {
    question: "Gaseous exchange in humans occurs in the _______.",
    options: ["alveoli of lungs", "trachea", "bronchi", "bronchioles only"],
    answer: 0,
  },
  {
    question: "The diaphragm and intercostal muscles help in _______.",
    options: ["breathing", "digestion", "circulation", "excretion"],
    answer: 0,
  },
  {
    question: "During inhalation, the diaphragm _______.",
    options: ["contracts and moves downward", "relaxes", "contracts and moves upward", "does not move"],
    answer: 0,
  },
  {
    question: "During exhalation, the diaphragm _______.",
    options: ["relaxes and moves upward", "contracts", "does not move", "contracts and moves downward"],
    answer: 0,
  },
  {
    question: "Oxygen is transported in the blood mainly by _______.",
    options: ["haemoglobin", "plasma", "white blood cells", "platelets"],
    answer: 0,
  },
  {
    question: "Carbon dioxide is transported in the blood mainly as _______.",
    options: ["bicarbonate ions", "oxygen", "plasma", "platelets"],
    answer: 0,
  },
  {
    question: "The volume of air taken in during a normal breath is called _______.",
    options: ["tidal volume", "vital capacity", "residual volume", "total lung capacity"],
    answer: 0,
  },
  {
    question: "The maximum volume of air a person can exhale after a maximum inhalation is called _______.",
    options: ["vital capacity", "tidal volume", "residual volume", "total lung capacity"],
    answer: 0,
  },
  {
    question: "In fish, gaseous exchange occurs mainly through _______.",
    options: ["gills", "lungs", "skin", "tracheae"],
    answer: 0,
  },
  {
    question: "Insects breathe through a system of tubes called _______.",
    options: ["tracheae", "lungs", "gills", "alveoli"],
    answer: 0,
  },
  {
    question: "During respiration, energy released is used for _______.",
    options: ["growth, movement, and maintenance of body functions", "photosynthesis", "transpiration only", "digestion only"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration releases _______ energy than aerobic respiration.",
    options: ["less", "more", "the same", "none"],
    answer: 0,
  },
  {
    question: "Cellular respiration occurs in both plants and animals because both need _______.",
    options: ["energy for metabolic activities", "oxygen for photosynthesis", "light energy", "carbon dioxide"],
    answer: 0,
  },
  {
    question: "The release of carbon dioxide from the lungs is called _______.",
    options: ["exhalation", "inhalation", "diffusion", "osmosis"],
    answer: 0,
  },
  {
    question: "The chemical energy from glucose is first transferred to _______ molecules.",
    options: ["ATP", "CO2", "H2O", "NADPH"],
    answer: 0,
  },
  {
    question: "Aerobic respiration produces more ATP per glucose molecule than anaerobic respiration because it _______.",
    options: ["fully oxidizes glucose", "does not require oxygen", "produces lactic acid", "produces ethanol"],
    answer: 0,
  },
  {
    question: "During exercise, muscles may switch to _______ respiration if oxygen supply is insufficient.",
    options: ["anaerobic", "aerobic", "photosynthetic", "fermentation only in yeast"],
    answer: 0,
  },
  {
    question: "In plants, oxygen for respiration is mainly obtained from _______.",
    options: ["air spaces in leaves and roots", "chloroplasts", "phloem", "xylem only"],
    answer: 0,
  },
  {
    question: "Gaseous exchange in plants occurs mainly through _______.",
    options: ["stomata, lenticels, and root hairs", "xylem only", "phloem only", "chloroplasts only"],
    answer: 0,
  },
  {
    question: "CO2 produced during respiration is used in _______.",
    options: ["photosynthesis in plants", "digestion", "transport", "nitrogen fixation"],
    answer: 0,
  },
  {
    question: "The enzyme that catalyzes the breakdown of glucose in glycolysis is _______.",
    options: ["hexokinase", "amylase", "lipase", "pepsin"],
    answer: 0,
  },
  {
    question: "In anaerobic respiration in yeast, glucose is converted to _______.",
    options: ["ethanol and carbon dioxide", "lactic acid", "ATP only", "oxygen"],
    answer: 0,
  },
  {
    question: "Respiration in unicellular organisms like Amoeba occurs mainly through _______.",
    options: ["diffusion", "tracheae", "alveoli", "gills"],
    answer: 0,
  },
  {
    question: "Breathing rate increases during exercise to _______.",
    options: ["meet higher oxygen demand", "reduce CO2 production only", "increase lactic acid only", "slow metabolism"],
    answer: 0,
  },
  {
    question: "Residual volume of air in the lungs prevents _______.",
    options: ["lung collapse", "oxygen transport", "carbon dioxide transport", "diffusion"],
    answer: 0,
  },
  {
    question: "In humans, the trachea divides into two _______ leading to the lungs.",
    options: ["bronchi", "bronchioles", "alveoli", "capillaries"],
    answer: 0,
  },
  {
    question: "Alveoli are adapted for gaseous exchange because they are _______.",
    options: ["thin-walled and highly vascularized", "thick-walled", "lined with cuticle", "impermeable"],
    answer: 0,
  },
  {
    question: "During respiration, the concentration gradient drives _______.",
    options: ["diffusion of oxygen into blood and carbon dioxide out", "active transport of CO2", "osmosis of oxygen", "phloem transport"],
    answer: 0,
  },
  {
    question: "In plants, oxygen produced by photosynthesis can be used for _______.",
    options: ["cellular respiration", "transpiration", "transport only", "root pressure"],
    answer: 0,
  },
  {
    question: "The gas exchange surface in fish gills is supported by _______.",
    options: ["lamellae", "alveoli", "tracheae", "stomata"],
    answer: 0,
  },
  {
    question: "Counter-current flow in fish gills helps to _______.",
    options: ["maximize oxygen absorption", "minimize oxygen absorption", "transport CO2 only", "pump blood"],
    answer: 0,
  },
  {
    question: "Respiratory pigments like haemoglobin increase _______.",
    options: ["oxygen-carrying capacity of blood", "CO2 production", "ATP production directly", "water transport"],
    answer: 0,
  },
  {
    question: "Myoglobin stores oxygen in _______.",
    options: ["muscles", "lungs", "red blood cells", "plant leaves"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration in humans can lead to muscle fatigue due to accumulation of _______.",
    options: ["lactic acid", "ethanol", "oxygen", "ATP"],
    answer: 0,
  },
  {
    question: "Respiration provides energy needed for _______ in plants and animals.",
    options: ["growth, movement, and metabolic processes", "photosynthesis only", "transpiration only", "absorption only"],
    answer: 0,
  },
  {
    question: "Breathing involves both inhalation and exhalation to maintain _______.",
    options: ["gas concentration gradients in the alveoli", "phloem transport", "root pressure", "transpiration only"],
    answer: 0,
  },
  {
    question: "Gaseous exchange in insects occurs via _______ and not blood.",
    options: ["tracheae", "gills", "lungs", "alveoli"],
    answer: 0,
  },
  {
    question: "Respiration rate in plants increases in the dark due to _______.",
    options: ["lack of photosynthesis", "stomatal opening", "phloem transport", "xylem activity"],
    answer: 0,
  },
  {
    question: "Oxygen diffuses into cells because of a _______ concentration gradient.",
    options: ["high outside, low inside", "low outside, high inside", "equal concentration", "active pumping"],
    answer: 0,
  },
  {
    question: "CO2 produced by respiration in plants is released mainly through _______.",
    options: ["stomata", "xylem", "phloem", "cuticle"],
    answer: 0,
  },
  {
    question: "ATP produced during respiration is immediately used for _______.",
    options: ["cellular activities", "storage only", "transport in phloem", "root pressure"],
    answer: 0,
  },
  
  {
    question: "During vigorous exercise, the body produces more CO2 due to _______.",
    options: ["increased aerobic respiration", "anaerobic respiration only", "photosynthesis", "decreased respiration"],
    answer: 0,
  },
  {
    question: "In humans, the gas exchange surface is moist to _______.",
    options: ["allow gases to dissolve and diffuse", "prevent water loss", "absorb nutrients", "store oxygen"],
    answer: 0,
  },
  {
    question: "During heavy exercise, muscles switch to anaerobic respiration to _______.",
    options: ["meet high energy demand quickly", "produce more oxygen", "store glucose", "absorb water"],
    answer: 0,
  },
  {
    question: "Lactic acid produced in muscles is transported to the liver for _______.",
    options: ["conversion to glucose", "breakdown to CO2 only", "storage in muscles", "excretion via urine"],
    answer: 0,
  },
  {
    question: "Gaseous exchange in plants occurs mainly via stomata and _______.",
    options: ["lenticels and root hairs", "xylem", "phloem", "cuticle only"],
    answer: 0,
  },
  {
    question: "Respiration is essential for maintaining _______ in cells.",
    options: ["ATP supply", "photosynthesis", "transpiration", "root pressure"],
    answer: 0,
  },
  {
    question: "The enzyme involved in glycolysis is _______.",
    options: ["hexokinase", "lipase", "amylase", "protease"],
    answer: 0,
  },
  {
    question: "During aerobic respiration, the majority of ATP is produced in the _______.",
    options: ["mitochondria", "cytoplasm", "nucleus", "chloroplasts"],
    answer: 0,
  },
  {
    question: "CO2 produced during aerobic respiration diffuses out of cells because of _______.",
    options: ["a concentration gradient", "active transport", "osmosis", "phloem transport"],
    answer: 0,
  },
  {
    question: "Respiratory rate in humans is controlled by the _______.",
    options: ["medulla oblongata", "cerebrum", "heart", "lungs"],
    answer: 0,
  },
  {
    question: "The energy released in respiration is measured in _______.",
    options: ["joules or calories", "liters", "grams", "watts"],
    answer: 0,
  },
  {
    question: "During anaerobic respiration, only a small amount of ATP is released because _______.",
    options: ["glucose is partially broken down", "oxygen is abundant", "glucose is fully oxidized", "more CO2 is produced"],
    answer: 0,
  },
  {
    question: "Oxygen is essential for aerobic respiration because it _______.",
    options: ["accepts electrons at the end of the electron transport chain", "produces glucose", "converts lactic acid", "stores energy directly"],
    answer: 0,
  },
  {
    question: "The majority of carbon dioxide in the blood is transported as _______.",
    options: ["bicarbonate ions", "dissolved CO2", "carbaminohaemoglobin", "oxygen bound to haemoglobin"],
    answer: 0,
  },
  {
    question: "In insects, oxygen reaches body cells directly through _______.",
    options: ["tracheal system", "blood circulation", "lungs", "gills"],
    answer: 0,
  },
  {
    question: "Counter-current flow in fish gills ensures _______.",
    options: ["maximum oxygen absorption from water", "minimal oxygen absorption", "CO2 transport only", "blood flow to heart"],
    answer: 0,
  },
  {
    question: "Respiration rate in plants increases in the dark because _______.",
    options: ["photosynthesis stops but energy is still needed", "stomata close", "phloem transport stops", "xylem stops working"],
    answer: 0,
  },
  {
    question: "In plants, mitochondria are found in _______.",
    options: ["all metabolically active cells", "only leaf cells", "only root cells", "xylem vessels"],
    answer: 0,
  },
  {
    question: "The main product of anaerobic respiration in human muscles is _______.",
    options: ["lactic acid", "ethanol", "ATP only", "carbon dioxide only"],
    answer: 0,
  },
  {
    question: "Ethanol produced during yeast fermentation is a result of _______.",
    options: ["anaerobic respiration", "aerobic respiration", "photosynthesis", "transpiration"],
    answer: 0,
  },
  {
    question: "Aerobic respiration produces a total of approximately _______ ATP molecules per glucose.",
    options: ["36-38", "2", "4", "50"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration in humans produces only _______ ATP molecules per glucose.",
    options: ["2", "36", "38", "50"],
    answer: 0,
  },
  {
    question: "The process of breaking down glucose without oxygen is called _______.",
    options: ["anaerobic respiration", "aerobic respiration", "photosynthesis", "fermentation only in plants"],
    answer: 0,
  },
  {
    question: "The main reason alveoli have thin walls is to _______.",
    options: ["facilitate rapid gas exchange", "support the lungs", "store oxygen", "produce CO2"],
    answer: 0,
  },
  {
    question: "In humans, the tidal volume averages about _______ liters per breath.",
    options: ["0.5", "1", "2", "3"],
    answer: 0,
  },
  {
    question: "Vital capacity is important because it indicates _______.",
    options: ["the maximum volume of air a person can exhale after full inhalation", "tidal volume only", "residual volume only", "oxygen content only"],
    answer: 0,
  },
  {
    question: "Residual volume remains in lungs to _______.",
    options: ["prevent lung collapse", "increase oxygen uptake", "store CO2", "enhance ATP production"],
    answer: 0,
  },
  {
    question: "During inspiration, the pressure inside the lungs _______.",
    options: ["decreases below atmospheric pressure", "increases above atmospheric pressure", "remains equal", "increases slightly only"],
    answer: 0,
  },
  {
    question: "During expiration, the pressure inside the lungs _______.",
    options: ["increases above atmospheric pressure", "decreases below atmospheric pressure", "remains equal", "drops to zero"],
    answer: 0,
  },
  {
    question: "Respiratory pigments in blood enhance _______.",
    options: ["oxygen-carrying capacity", "CO2 production", "ATP production directly", "root absorption"],
    answer: 0,
  },
  {
    question: "Myoglobin stores oxygen in muscles to _______.",
    options: ["supply oxygen during intense activity", "produce CO2", "store ATP", "digest glucose"],
    answer: 0,
  },
  {
    question: "In anaerobic respiration in muscles, lactic acid accumulation leads to _______.",
    options: ["muscle fatigue", "increased ATP", "oxygen production", "carbon dioxide loss"],
    answer: 0,
  },
  {
    question: "Aerobic respiration efficiency is higher than anaerobic because _______.",
    options: ["glucose is completely oxidized", "less oxygen is needed", "CO2 is not produced", "ATP is stored in glucose"],
    answer: 0,
  },
  {
    question: "The release of energy during respiration is used for _______.",
    options: ["metabolic activities, growth, and movement", "photosynthesis", "phloem transport", "root pressure"],
    answer: 0,
  },
  {
    question: "The respiratory surface in fish is adapted to maximize _______.",
    options: ["oxygen absorption from water", "CO2 storage", "ATP synthesis", "digestion"],
    answer: 0,
  },
  {
    question: "Plants respire continuously because _______.",
    options: ["cells require energy at all times", "photosynthesis only occurs at night", "transpiration occurs only in daytime", "xylem transports water constantly"],
    answer: 0,
  },
  {
    question: "Gaseous exchange in insects occurs through small openings called _______.",
    options: ["spiracles", "stomata", "alveoli", "lenticels"],
    answer: 0,
  },
  {
    question: "Counter-current exchange in fish ensures _______.",
    options: ["maximum diffusion of oxygen into blood", "minimized CO2 absorption", "blood flow to heart only", "movement of water into xylem"],
    answer: 0,
  },
  {
    question: "Respiration rate in plants increases with _______.",
    options: ["temperature and oxygen availability", "humidity only", "light intensity only", "soil type only"],
    answer: 0,
  },
  {
    question: "Carbon dioxide produced during respiration in humans is transported mainly in _______.",
    options: ["plasma as bicarbonate ions", "red blood cells only", "white blood cells", "platelets"],
    answer: 0,
  },
  {
    question: "The exchange of gases in the lungs occurs mainly by _______.",
    options: ["diffusion", "active transport", "osmosis", "phloem transport"],
    answer: 0,
  },
  {
    question: "ATP produced in mitochondria is immediately used for _______.",
    options: ["cellular activities", "oxygen storage", "CO2 transport", "starch synthesis"],
    answer: 0,
  },
  {
    question: "Anaerobic respiration in yeast is also known as _______.",
    options: ["fermentation", "glycolysis", "oxidative phosphorylation", "electron transport chain"],
    answer: 0,
  },
  {
    question: "Energy released from respiration is measured in _______.",
    options: ["joules or calories", "liters", "watts", "grams"],
    answer: 0,
  },
  {
    question: "The primary purpose of respiration is to _______.",
    options: ["release energy from food", "absorb water", "transport minerals", "produce glucose"],
    answer: 0,
  },
  
  //excretion 
  
  
  {
    question: "The main excretory organ in humans is the _______.",
    options: ["kidney", "liver", "lungs", "skin"],
    answer: 0,
  },
  {
    question: "The functional unit of the kidney is called the _______.",
    options: ["nephron", "glomerulus", "Bowman's capsule", "ureter"],
    answer: 0,
  },
  {
    question: "Filtration of blood occurs in the _______.",
    options: ["glomerulus", "loop of Henle", "collecting duct", "proximal tubule"],
    answer: 0,
  },
  {
    question: "Reabsorption of useful substances occurs mainly in the _______.",
    options: ["proximal convoluted tubule", "glomerulus", "Bowman's capsule", "urethra"],
    answer: 0,
  },
  {
    question: "Urea is produced in the body through _______.",
    options: ["deamination of amino acids", "digestion of carbohydrates", "photosynthesis", "respiration"],
    answer: 0,
  },
  {
    question: "The Bowman's capsule surrounds the _______.",
    options: ["glomerulus", "loop of Henle", "collecting duct", "ureter"],
    answer: 0,
  },
  {
    question: "The ureter connects the kidney to the _______.",
    options: ["urinary bladder", "urethra", "liver", "nephron"],
    answer: 0,
  },
  {
    question: "The main nitrogenous waste in mammals is _______.",
    options: ["urea", "ammonia", "uric acid", "carbon dioxide"],
    answer: 0,
  },
  {
    question: "In birds and reptiles, nitrogenous waste is excreted mainly as _______.",
    options: ["uric acid", "urea", "ammonia", "carbon dioxide"],
    answer: 0,
  },
  {
    question: "Ammonotelic animals excrete nitrogenous waste mainly as _______.",
    options: ["ammonia", "urea", "uric acid", "creatinine"],
    answer: 0,
  },
  {
    question: "The loop of Henle in the nephron is responsible for _______.",
    options: ["water reabsorption", "filtration", "urea production", "secretion of enzymes"],
    answer: 0,
  },
  {
    question: "Excess water and salts are excreted mainly by the _______.",
    options: ["kidney", "skin", "lungs", "liver"],
    answer: 0,
  },
  {
    question: "Sweat glands excrete _______.",
    options: ["water, salts, and some urea", "oxygen", "glucose", "carbon dioxide"],
    answer: 0,
  },
  {
    question: "The liver helps in excretion by converting ammonia to _______.",
    options: ["urea", "uric acid", "carbon dioxide", "water"],
    answer: 0,
  },
  {
    question: "The urinary bladder stores _______ temporarily.",
    options: ["urine", "bile", "blood", "lymph"],
    answer: 0,
  },
  {
    question: "The outer layer of the kidney is called the _______.",
    options: ["cortex", "medulla", "pelvis", "nephron"],
    answer: 0,
  },
  {
    question: "The inner region of the kidney is called the _______.",
    options: ["medulla", "cortex", "Bowman's capsule", "ureter"],
    answer: 0,
  },
  {
    question: "The process by which water and solutes move from blood into the nephron is called _______.",
    options: ["filtration", "reabsorption", "secretion", "diffusion"],
    answer: 0,
  },
  {
    question: "Reabsorption in the nephron is mainly through _______.",
    options: ["selective diffusion and active transport", "osmosis only", "phagocytosis", "endocytosis"],
    answer: 0,
  },
  {
    question: "Secretion in the nephron helps to _______.",
    options: ["remove additional wastes and maintain pH", "reabsorb water", "store glucose", "produce hormones"],
    answer: 0,
  },
  {
    question: "The renal artery carries _______ to the kidney.",
    options: ["blood containing wastes", "oxygen only", "urea only", "lymph"],
    answer: 0,
  },
  {
    question: "The renal vein carries _______ away from the kidney.",
    options: ["filtered blood", "urea", "urine", "oxygen"],
    answer: 0,
  },
  {
    question: "Kidneys regulate the water and salt balance through the process of _______.",
    options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
    answer: 0,
  },
  {
    question: "The functional difference between nephron and ureter is that nephron _______.",
    options: ["filters blood", "stores urine", "transports urine", "produces hormones"],
    answer: 0,
  },
  {
    question: "Plants excrete waste mainly through _______.",
    options: ["stomata, lenticels, and bark", "roots only", "phloem only", "xylem only"],
    answer: 0,
  },
  {
    question: "Plants store waste products in _______ to prevent toxicity.",
    options: ["vacuoles", "chloroplasts", "nucleus", "cell wall"],
    answer: 0,
  },
  {
    question: "Resins and tannins in plants are examples of _______.",
    options: ["excretory products", "enzymes", "hormones", "nutrients"],
    answer: 0,
  },
  {
    question: "Excess oxygen produced in plants is released mainly through _______.",
    options: ["stomata", "roots", "xylem", "phloem"],
    answer: 0,
  },
  {
    question: "Gaseous wastes in plants, such as CO2, are mainly produced during _______.",
    options: ["respiration", "photosynthesis", "transpiration", "translocation"],
    answer: 0,
  },
  {
    question: "Nitrogenous waste is excreted by the liver in the form of _______.",
    options: ["urea", "ammonia", "uric acid", "creatinine"],
    answer: 0,
  },
  {
    question: "Kidney stones form due to _______.",
    options: ["accumulation of salts and minerals", "excess water intake", "low urea production", "high protein diet only"],
    answer: 0,
  },
  {
    question: "The nephron's collecting duct carries urine to the _______.",
    options: ["renal pelvis", "ureter", "bladder", "glomerulus"],
    answer: 0,
  },
  {
    question: "The skin excretes water, salts, and some nitrogenous waste through _______.",
    options: ["sweat glands", "sebaceous glands", "hair follicles", "nails"],
    answer: 0,
  },
  {
    question: "Uricotelic animals excrete nitrogen mainly as _______.",
    options: ["uric acid", "urea", "ammonia", "carbon dioxide"],
    answer: 0,
  },
  {
    question: "Ammonotelic animals are usually _______.",
    options: ["aquatic", "desert-dwelling", "birds", "reptiles"],
    answer: 0,
  },
  {
    question: "The renal capsule surrounds the _______ of the kidney.",
    options: ["entire kidney", "nephron only", "glomerulus only", "medulla only"],
    answer: 0,
  },
  {
    question: "The main function of kidney nephrons is to maintain _______ balance.",
    options: ["water and salt", "oxygen only", "carbon dioxide only", "glucose only"],
    answer: 0,
  },
  {
    question: "Kidneys help to maintain blood pH by excreting _______.",
    options: ["hydrogen ions", "oxygen", "carbon dioxide only", "water only"],
    answer: 0,
  },
  {
    question: "The urine of mammals is usually _______ due to the presence of urea.",
    options: ["slightly acidic", "alkaline", "neutral", "basic"],
    answer: 0,
  },
  {
    question: "Plants excrete excess salts mainly through _______.",
    options: ["salt glands or specialized cells", "roots only", "xylem only", "stomata only"],
    answer: 0,
  },
  {
    question: "Excretion in protozoa occurs through the _______.",
    options: ["contractile vacuole", "plasma membrane only", "nucleus", "cilia"],
    answer: 0,
  },
  {
    question: "Excretory wastes in humans include urea, water, salts, and _______.",
    options: ["carbon dioxide", "glucose", "oxygen", "enzymes"],
    answer: 0,
  },
  {
    question: "The formation of urine involves filtration, reabsorption, and _______.",
    options: ["secretion", "diffusion", "osmosis", "photosynthesis"],
    answer: 0,
  },
  {
    question: "Plants remove metabolic wastes to prevent _______.",
    options: ["toxicity", "growth", "photosynthesis only", "respiration only"],
    answer: 0,
  },
  {
    question: "The renal medulla contains _______ of the nephron.",
    options: ["loops of Henle and collecting ducts", "Bowman's capsule only", "glomerulus only", "proximal tubule only"],
    answer: 0,
  },
  {
    question: "Excretion is important because it removes _______ from the body.",
    options: ["metabolic wastes", "oxygen", "glucose", "starch"],
    answer: 0,
  },
  {
    question: "The liver converts toxic ammonia into _______ which is less toxic.",
    options: ["urea", "carbon dioxide", "uric acid", "water"],
    answer: 0,
  },
  {
    question: "Lenticels in plants help in excreting _______.",
    options: ["gases and resins", "water only", "starch", "glucose"],
    answer: 0,
  },
  {
    question: "The renal pelvis collects urine from _______.",
    options: ["collecting ducts", "nephrons only", "glomerulus only", "Bowman's capsule only"],
    answer: 0,
  },
  {
    question: "Excretory organs maintain homeostasis by regulating water, salts, and _______.",
    options: ["pH of blood", "glucose", "oxygen", "starch"],
    answer: 0,
  },
  
  {
    question: "The kidney regulates blood pressure by controlling _______.",
    options: ["water and salt content", "oxygen content", "carbon dioxide only", "glucose levels"],
    answer: 0,
  },
  {
    question: "The nephron’s distal convoluted tubule is mainly involved in _______.",
    options: ["secretion and selective reabsorption", "filtration only", "urea production only", "water storage only"],
    answer: 0,
  },
  {
    question: "Bowman’s capsule and glomerulus together form the _______.",
    options: ["renal corpuscle", "loop of Henle", "collecting duct", "renal pelvis"],
    answer: 0,
  },
  {
    question: "Excretion of uric acid helps birds and reptiles conserve _______.",
    options: ["water", "oxygen", "glucose", "minerals"],
    answer: 0,
  },
  {
    question: "Humans are ureotelic because they excrete nitrogen mainly as _______.",
    options: ["urea", "ammonia", "uric acid", "creatinine"],
    answer: 0,
  },
  {
    question: "Excretory products in plants include oxygen, resins, tannins, and _______.",
    options: ["waste salts", "urea", "carbon dioxide", "proteins"],
    answer: 0,
  },
  {
    question: "The kidney receives blood from the _______.",
    options: ["renal artery", "renal vein", "aorta", "vena cava"],
    answer: 0,
  },
  {
    question: "The renal vein carries _______ away from the kidney.",
    options: ["filtered blood", "urine", "urea", "oxygenated blood only"],
    answer: 0,
  },
  {
    question: "The juxtaglomerular apparatus helps regulate _______.",
    options: ["blood pressure", "oxygen supply", "glucose level", "respiration rate"],
    answer: 0,
  },
  {
    question: "The main nitrogenous waste of amphibians is _______.",
    options: ["urea", "ammonia", "uric acid", "creatinine"],
    answer: 0,
  },
  {
    question: "Water reabsorption in the nephron occurs mainly in the _______.",
    options: ["loop of Henle", "Bowman's capsule", "glomerulus", "distal convoluted tubule"],
    answer: 0,
  },
  {
    question: "Sweating helps in excretion and also in _______.",
    options: ["thermoregulation", "glucose storage", "photosynthesis", "respiration only"],
    answer: 0,
  },
  {
    question: "The excretory function of the liver includes _______.",
    options: ["detoxifying ammonia into urea", "excreting water only", "storing glucose", "producing oxygen"],
    answer: 0,
  },
  {
    question: "Excretion differs from egestion because excretion removes _______.",
    options: ["metabolic wastes", "undigested food", "water only", "minerals only"],
    answer: 0,
  },
  {
    question: "Excretory organs help maintain homeostasis by controlling water, salts, and _______.",
    options: ["pH", "glucose", "oxygen", "carbon dioxide only"],
    answer: 0,
  },
  {
    question: "The renal capsule protects the kidney from _______.",
    options: ["physical damage", "oxygen loss", "glucose loss", "CO2 accumulation"],
    answer: 0,
  },
  {
    question: "Excretory wastes from the liver are transported to the kidney via the _______.",
    options: ["blood", "ureter", "urinary bladder", "renal pelvis"],
    answer: 0,
  },
  {
    question: "Plants remove metabolic wastes to prevent _______.",
    options: ["toxicity", "respiration only", "photosynthesis only", "growth only"],
    answer: 0,
  },
  {
    question: "Contractile vacuoles in protozoa help remove _______.",
    options: ["excess water", "CO2", "oxygen", "glucose"],
    answer: 0,
  },
  {
    question: "Ureotelic animals excrete nitrogen mainly as _______.",
    options: ["urea", "ammonia", "uric acid", "creatinine"],
    answer: 0,
  },
  {
    question: "Ammonotelic animals are usually _______.",
    options: ["aquatic", "birds", "reptiles", "mammals"],
    answer: 0,
  },
  {
    question: "Uricotelic animals are adapted to conserve _______.",
    options: ["water", "glucose", "oxygen", "CO2"],
    answer: 0,
  },
  {
    question: "Nephrons help in excretion and also in _______.",
    options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
    answer: 0,
  },
  {
    question: "The distal convoluted tubule helps maintain _______ balance.",
    options: ["water and ions", "CO2 only", "glucose only", "oxygen only"],
    answer: 0,
  },
  {
    question: "Plants excrete toxic compounds in vacuoles to _______.",
    options: ["prevent cell damage", "store glucose", "increase photosynthesis", "transport water"],
    answer: 0,
  },
  {
    question: "Liver excretes bile which contains _______.",
    options: ["waste products like bilirubin", "urea", "glucose", "oxygen"],
    answer: 0,
  },
  {
    question: "Liver detoxifies harmful substances like _______.",
    options: ["alcohol and drugs", "CO2 only", "O2 only", "glucose only"],
    answer: 0,
  },
  {
    question: "Excretion of carbon dioxide occurs mainly via _______.",
    options: ["lungs", "kidney", "skin", "liver"],
    answer: 0,
  },
  {
    question: "Renal artery enters the kidney at the _______.",
    options: ["hilum", "cortex", "medulla", "nephron"],
    answer: 0,
  },
  {
    question: "Ureters transport urine from the kidney to the _______.",
    options: ["urinary bladder", "urethra", "renal pelvis", "nephrons"],
    answer: 0,
  },
  {
    question: "The excretory products of the skin include water, salts, and _______.",
    options: ["urea", "CO2", "glucose", "oxygen"],
    answer: 0,
  },
  {
    question: "Lenticels in plants allow excretion of _______.",
    options: ["gases and resins", "urea only", "starch only", "sugars only"],
    answer: 0,
  },
  {
    question: "Excretion is vital for removing _______ from metabolic activities.",
    options: ["waste products", "glucose", "oxygen", "starch"],
    answer: 0,
  },
  {
    question: "The renal medulla contains _______ of nephrons.",
    options: ["loops of Henle and collecting ducts", "glomeruli only", "Bowman's capsules only", "proximal tubules only"],
    answer: 0,
  },
  {
    question: "The renal cortex contains mainly _______.",
    options: ["glomeruli and convoluted tubules", "loops of Henle only", "collecting ducts only", "renal pelvis only"],
    answer: 0,
  },
  {
    question: "Plants excrete waste products like tannins and resins to prevent _______.",
    options: ["toxicity", "respiration only", "growth only", "photosynthesis only"],
    answer: 0,
  },
  {
    question: "Excretory organs help maintain blood composition by regulating water, salts, and _______.",
    options: ["pH", "glucose", "CO2 only", "oxygen only"],
    answer: 0,
  },
  {
    question: "The liver converts ammonia into _______ to reduce toxicity.",
    options: ["urea", "uric acid", "CO2", "water"],
    answer: 0,
  },
  {
    question: "Excretory wastes in humans include urea, water, salts, and _______.",
    options: ["CO2", "glucose", "oxygen", "enzymes"],
    answer: 0,
  },
  {
    question: "Excretion of uric acid is an adaptation to _______.",
    options: ["conserve water", "produce more energy", "store glucose", "increase respiration"],
    answer: 0,
  },
  {
    question: "Excretion of carbon dioxide from cells occurs by _______.",
    options: ["diffusion", "active transport", "osmosis", "endocytosis"],
    answer: 0,
  },
  {
    question: "Water balance in the body is maintained by _______ and kidney function.",
    options: ["excretion", "photosynthesis", "respiration", "transpiration"],
    answer: 0,
  },
  {
    question: "Excretion helps prevent accumulation of toxic substances like _______.",
    options: ["ammonia, urea, and uric acid", "oxygen", "glucose", "starch"],
    answer: 0,
  },
  {
    question: "The urine of mammals is usually _______ due to dissolved urea.",
    options: ["slightly acidic", "alkaline", "neutral", "basic"],
    answer: 0,
  },
  {
    question: "Renal pelvis collects urine from _______.",
    options: ["collecting ducts", "nephrons only", "glomerulus only", "Bowman's capsule only"],
    answer: 0,
  },
  {
    question: "The nephron helps in both excretion and _______.",
    options: ["osmoregulation", "photosynthesis", "respiration", "transpiration"],
    answer: 0,
  },
  {
    question: "Sweat helps remove wastes and also _______.",
    options: ["regulates body temperature", "stores glucose", "produces ATP", "absorbs oxygen"],
    answer: 0,
  },
  
  
  //growth and development 
  
  {
    question: "Growth in living organisms can best be defined as _______.",
    options: [
      "an increase in size and number of cells",
      "a temporary change in shape",
      "a reversible change in mass",
      "a decrease in dry weight"
    ],
    answer: 0,
  },
  {
    question: "Which of the following statements best describes development?",
    options: [
      "Increase in body size only",
      "Increase in complexity and specialization of cells",
      "Temporary expansion of tissues",
      "Formation of spores in plants"
    ],
    answer: 1,
  },
  {
    question: "The main difference between growth and development is that development involves _______.",
    options: [
      "an increase in cell size",
      "changes in form and function",
      "cell elongation only",
      "cell division alone"
    ],
    answer: 1,
  },
  {
    question: "Which of these factors does NOT affect growth?",
    options: [
      "Light",
      "Temperature",
      "Sound",
      "Nutrients"
    ],
    answer: 2,
  },
  {
    question: "The region of active cell division in a plant is called the _______.",
    options: [
      "epidermis",
      "phloem",
      "meristem",
      "xylem"
    ],
    answer: 2,
  },
  {
    question: "Which of the following is a characteristic of growth in living organisms?",
    options: [
      "Reversibility",
      "Irreversibility",
      "Periodic occurrence",
      "Random occurrence"
    ],
    answer: 1,
  },
  {
    question: "In plants, elongation of cells mainly occurs in the _______.",
    options: [
      "apical meristem",
      "lateral meristem",
      "root cap",
      "epidermal layer"
    ],
    answer: 0,
  },
  {
    question: "Which of the following represents a phase in growth?",
    options: [
      "Lag phase, log phase, stationary phase",
      "Beginning, middle, and end",
      "Active and inactive",
      "Primary and secondary"
    ],
    answer: 0,
  },
  {
    question: "A sigmoid growth curve is also known as a _______ curve.",
    options: [
      "U-shaped",
      "S-shaped",
      "V-shaped",
      "C-shaped"
    ],
    answer: 1,
  },
  {
    question: "The increase in dry mass of an organism is a measure of _______.",
    options: [
      "temporary growth",
      "turgidity",
      "true growth",
      "water absorption"
    ],
    answer: 2,
  },
  {
    question: "The type of growth where cells divide rapidly and continuously is called _______.",
    options: [
      "secondary growth",
      "primary growth",
      "cellular growth",
      "static growth"
    ],
    answer: 1,
  },
  {
    question: "Which plant hormone is responsible for cell elongation?",
    options: [
      "Auxin",
      "Gibberellin",
      "Cytokinin",
      "Abscisic acid"
    ],
    answer: 0,
  },
  {
    question: "The hormone that promotes seed germination is _______.",
    options: [
      "Abscisic acid",
      "Auxin",
      "Gibberellin",
      "Cytokinin"
    ],
    answer: 2,
  },
  {
    question: "Secondary growth in plants results in an increase in _______.",
    options: [
      "length",
      "width or girth",
      "root hairs",
      "leaf number"
    ],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a plant growth hormone?",
    options: [
      "Auxin",
      "Insulin",
      "Cytokinin",
      "Gibberellin"
    ],
    answer: 1,
  },
  {
    question: "Which of the following conditions is NOT necessary for seed germination?",
    options: [
      "Water",
      "Oxygen",
      "Light",
      "Temperature"
    ],
    answer: 2,
  },
  {
    question: "Which of the following stages of growth curve represents the most rapid growth?",
    options: [
      "Lag phase",
      "Log phase",
      "Stationary phase",
      "Decline phase"
    ],
    answer: 1,
  },
  {
    question: "Cell division in growth occurs in the _______.",
    options: [
      "region of elongation",
      "region of differentiation",
      "region of cell division",
      "root cap"
    ],
    answer: 2,
  },
  {
    question: "In plants, growth can be measured by the increase in _______.",
    options: [
      "cell color",
      "root length",
      "turgidity",
      "seed number"
    ],
    answer: 1,
  },
  {
    question: "Epigeal germination is characterized by _______.",
    options: [
      "cotyledons remaining underground",
      "cotyledons coming above the soil",
      "absence of cotyledons",
      "seed coat remaining intact"
    ],
    answer: 1,
  },
  {
    question: "The main function of gibberellins in plants is to _______.",
    options: [
      "promote dormancy",
      "inhibit cell division",
      "promote stem elongation",
      "cause leaf fall"
    ],
    answer: 2,
  },
  {
    question: "Which of these plant hormones promotes the ripening of fruits?",
    options: [
      "Auxin",
      "Ethylene",
      "Cytokinin",
      "Gibberellin"
    ],
    answer: 1,
  },
  {
    question: "The irreversible increase in the dry mass of an organism is called _______.",
    options: [
      "maturation",
      "development",
      "growth",
      "movement"
    ],
    answer: 2,
  },
  {
    question: "Which of these organisms exhibits discontinuous growth?",
    options: [
      "Human",
      "Fish",
      "Crab",
      "Cow"
    ],
    answer: 2,
  },
  {
    question: "The process by which an organism changes from a juvenile to an adult form is called _______.",
    options: [
      "fertilization",
      "metamorphosis",
      "growth",
      "regeneration"
    ],
    answer: 1,
  },
  {
    question: "Insect growth is controlled by which of the following hormones?",
    options: [
      "Ecdysone and juvenile hormone",
      "Insulin and thyroxine",
      "Auxin and cytokinin",
      "Adrenaline and glucagon"
    ],
    answer: 0,
  },
  {
    question: "Which of the following animals undergo incomplete metamorphosis?",
    options: [
      "Butterfly",
      "Housefly",
      "Grasshopper",
      "Mosquito"
    ],
    answer: 2,
  },
  {
    question: "Complete metamorphosis in insects involves _______.",
    options: [
      "egg, larva, adult",
      "egg, larva, pupa, adult",
      "egg, nymph, adult",
      "egg, pupa, adult"
    ],
    answer: 1,
  },
  {
    question: "The hormone responsible for growth in animals is _______.",
    options: [
      "Insulin",
      "Thyroxine",
      "Growth hormone",
      "Adrenaline"
    ],
    answer: 2,
  },
  {
    question: "The part of a plant embryo that develops into the shoot is the _______.",
    options: [
      "radicle",
      "plumule",
      "cotyledon",
      "endosperm"
    ],
    answer: 1,
  },
  {
    question: "The cotyledons in dicot seeds mainly function as _______.",
    options: [
      "storage organs",
      "absorptive organs",
      "photosynthetic organs",
      "protective organs"
    ],
    answer: 0,
  },
  {
    question: "A growth curve that levels off after rapid growth indicates that _______.",
    options: [
      "growth continues indefinitely",
      "growth has stopped due to limiting factors",
      "growth rate increases steadily",
      "growth never began"
    ],
    answer: 1,
  },
  {
    question: "In hypogeal germination, the cotyledons _______.",
    options: [
      "remain below the soil",
      "come above the soil",
      "turn green",
      "are shed immediately"
    ],
    answer: 0,
  },
  {
    question: "Which of these statements about animal growth is correct?",
    options: [
      "It is indefinite",
      "It stops after maturity",
      "It continues at a constant rate",
      "It decreases throughout life"
    ],
    answer: 1,
  },
  {
    question: "Differentiation in animals involves _______.",
    options: [
      "cells becoming specialized for specific functions",
      "increase in cell size only",
      "reduction in body size",
      "temporary change in shape"
    ],
    answer: 0,
  },
  {
    question: "A tadpole developing into a frog is an example of _______.",
    options: [
      "growth only",
      "differentiation only",
      "development and metamorphosis",
      "fertilization"
    ],
    answer: 2,
  },
  {
    question: "In humans, growth hormone is secreted by the _______.",
    options: [
      "thyroid gland",
      "adrenal gland",
      "pituitary gland",
      "pancreas"
    ],
    answer: 2,
  },
  {
    question: "Deficiency of growth hormone in children results in _______.",
    options: [
      "gigantism",
      "dwarfism",
      "cretinism",
      "obesity"
    ],
    answer: 1,
  },
  {
    question: "The part of the seed that develops into the root is the _______.",
    options: [
      "radicle",
      "plumule",
      "endosperm",
      "cotyledon"
    ],
    answer: 0,
  },
  {
    question: "The period of slow growth at the beginning of a growth curve is called the _______.",
    options: [
      "log phase",
      "stationary phase",
      "lag phase",
      "decline phase"
    ],
    answer: 2,
  },
  {
    question: "The process of seed germination ends when _______.",
    options: [
      "the radicle appears",
      "the plumule appears above the soil",
      "photosynthesis begins",
      "the seed coat breaks"
    ],
    answer: 2,
  },
  {
    question: "Which of the following hormones inhibits growth in plants?",
    options: [
      "Cytokinin",
      "Gibberellin",
      "Abscisic acid",
      "Auxin"
    ],
    answer: 2,
  },
  {
    question: "Which structure protects the root tip during growth?",
    options: [
      "Root hair",
      "Root cap",
      "Meristem",
      "Cortex"
    ],
    answer: 1,
  },
  {
    question: "Growth that occurs due to increase in girth of a plant is brought about by the _______.",
    options: [
      "apical meristem",
      "intercalary meristem",
      "lateral meristem",
      "root cap"
    ],
    answer: 2,
  },
  {
    question: "The hormone responsible for leaf fall in plants is _______.",
    options: [
      "Auxin",
      "Ethylene",
      "Gibberellin",
      "Abscisic acid"
    ],
    answer: 3,
  },
  {
    question: "Which of these represents the correct sequence in complete metamorphosis of a butterfly?",
    options: [
      "Egg → Larva → Adult",
      "Egg → Nymph → Adult",
      "Egg → Larva → Pupa → Adult",
      "Egg → Pupa → Adult"
    ],
    answer: 2,
  },
  {
    question: "Which of the following organisms shows both growth and regeneration when cut?",
    options: [
      "Hydra",
      "Human",
      "Grasshopper",
      "Lizard"
    ],
    answer: 0,
  },
  {
    question: "In plants, growth is said to be _______.",
    options: [
      "limited and reversible",
      "unlimited and irreversible",
      "temporary and continuous",
      "reversible and measurable"
    ],
    answer: 1,
  },
  {
    question: "The outer covering of a seed that protects the embryo is called the _______.",
    options: [
      "endosperm",
      "seed coat",
      "plumule",
      "radicle"
    ],
    answer: 1,
  },
  
  {
    question: "Which of these is a correct feature of growth in plants?",
    options: ["Localized and indefinite", "General and limited", "Localized and limited", "General and reversible"],
    answer: 0,
  },
  {
    question: "Growth in animals stops after maturity because _______.",
    options: ["food becomes insufficient", "cells stop dividing", "growth hormone decreases", "oxygen supply reduces"],
    answer: 2,
  },
  {
    question: "The growth of a leaf from bud to full size is an example of _______.",
    options: ["cell division only", "cell elongation and differentiation", "cell death", "dormancy"],
    answer: 1,
  },
  {
    question: "The dry mass of a seedling increases because of _______.",
    options: ["respiration", "photosynthesis", "imbibition", "osmosis"],
    answer: 1,
  },
  {
    question: "An organism that shows indeterminate growth is _______.",
    options: ["Human", "Frog", "Fish", "Mango tree"],
    answer: 3,
  },
  {
    question: "In a typical growth curve, the point where growth rate is highest is the _______.",
    options: ["lag phase", "log phase", "stationary phase", "decline phase"],
    answer: 1,
  },
  {
    question: "Growth in multicellular organisms is brought about by _______.",
    options: ["cell elongation only", "cell division and differentiation", "fusion of cells", "osmosis only"],
    answer: 1,
  },
  {
    question: "Which of these plant hormones delays leaf senescence?",
    options: ["Cytokinin", "Ethylene", "Auxin", "Abscisic acid"],
    answer: 0,
  },
  {
    question: "Which of the following is NOT a characteristic of growth?",
    options: ["Irreversibility", "Cell enlargement", "Cell death", "Differentiation"],
    answer: 2,
  },
  {
    question: "A mature seed that fails to germinate under suitable conditions is said to be _______.",
    options: ["alive", "dead", "dormant", "dry"],
    answer: 2,
  },
  {
    question: "The part of the embryo that develops into the root system is the _______.",
    options: ["plumule", "radicle", "cotyledon", "endosperm"],
    answer: 1,
  },
  {
    question: "In monocot seeds like maize, the cotyledon is called the _______.",
    options: ["scutellum", "aleurone layer", "endosperm", "coleoptile"],
    answer: 0,
  },
  {
    question: "The type of germination that occurs in maize seed is _______.",
    options: ["epigeal", "hypogeal", "viviparous", "asexual"],
    answer: 1,
  },
  {
    question: "A balanced growth curve levels off because _______.",
    options: ["light increases", "food and space become limited", "water decreases", "cell division stops completely"],
    answer: 1,
  },
  {
    question: "Which of these shows determinate growth?",
    options: ["Human", "Mango tree", "Palm tree", "Fish"],
    answer: 0,
  },
  {
    question: "Metamorphosis is controlled by hormones secreted from the _______.",
    options: ["pituitary gland", "thyroid gland", "adrenal gland", "gonads"],
    answer: 1,
  },
  {
    question: "Which of these hormones promotes root formation?",
    options: ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
    answer: 0,
  },
  {
    question: "Which plant hormone promotes the formation of fruits without fertilization?",
    options: ["Abscisic acid", "Cytokinin", "Auxin", "Ethylene"],
    answer: 2,
  },
  {
    question: "A measurement of increase in dry weight indicates _______.",
    options: ["reversible growth", "true growth", "false growth", "temporary turgidity"],
    answer: 1,
  },
  {
    question: "In a growth curve, the stationary phase represents _______.",
    options: ["rapid growth", "no growth", "slow growth", "death of cells"],
    answer: 1,
  },
  {
    question: "Seed germination starts with _______.",
    options: ["imbibition of water", "photosynthesis", "cell elongation", "division of plumule"],
    answer: 0,
  },
  {
    question: "A bean seed exhibits _______ germination.",
    options: ["hypogeal", "epigeal", "viviparous", "asexual"],
    answer: 1,
  },
  {
    question: "Which of these correctly defines dormancy?",
    options: ["Growth without light", "Temporary suspension of growth", "Death of embryo", "Drying of seed"],
    answer: 1,
  },
  {
    question: "The first visible sign of germination in a seed is _______.",
    options: ["plumule emergence", "radicle emergence", "cotyledon swelling", "seed coat splitting"],
    answer: 1,
  },
  {
    question: "The hormone responsible for breaking seed dormancy is _______.",
    options: ["Auxin", "Gibberellin", "Abscisic acid", "Ethylene"],
    answer: 1,
  },
  {
    question: "The hormone that inhibits seed germination is _______.",
    options: ["Abscisic acid", "Cytokinin", "Auxin", "Gibberellin"],
    answer: 0,
  },
  {
    question: "An increase in cell number during growth results from _______.",
    options: ["cell elongation", "cell division", "cell fusion", "cell respiration"],
    answer: 1,
  },
  {
    question: "Which phase of growth is associated with most active mitosis?",
    options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"],
    answer: 1,
  },
  {
    question: "Which of these plant hormones promotes cell division?",
    options: ["Auxin", "Cytokinin", "Gibberellin", "Abscisic acid"],
    answer: 1,
  },
  {
    question: "Which structure is responsible for protecting the root tip during growth?",
    options: ["Root cap", "Root hair", "Cortex", "Meristem"],
    answer: 0,
  },
  {
    question: "Which of these conditions is most important for seed germination?",
    options: ["Light", "Water", "Carbon dioxide", "Fertilizer"],
    answer: 1,
  },
  {
    question: "The conversion of an immature insect into adult form is called _______.",
    options: ["metamorphosis", "fertilization", "differentiation", "regeneration"],
    answer: 0,
  },
  {
    question: "In which of these organisms does growth occur throughout life?",
    options: ["Man", "Dog", "Fish", "Butterfly"],
    answer: 2,
  },
  {
    question: "The major difference between complete and incomplete metamorphosis is the presence of _______.",
    options: ["pupa stage", "larva stage", "nymph stage", "egg stage"],
    answer: 0,
  },
  {
    question: "Which of the following statements is true about development?",
    options: ["It is reversible", "It involves differentiation", "It occurs without growth", "It reduces cell number"],
    answer: 1,
  },
  {
    question: "The growth pattern of insects is _______.",
    options: ["continuous", "discontinuous", "exponential", "uniform"],
    answer: 1,
  },
  {
    question: "Which of these animals undergoes complete metamorphosis?",
    options: ["Grasshopper", "Cockroach", "Butterfly", "Dragonfly"],
    answer: 2,
  },
  {
    question: "Growth in a unicellular organism occurs by _______.",
    options: ["cell division", "cell elongation", "fusion", "differentiation"],
    answer: 0,
  },
  {
    question: "The living part of a seed that develops into a new plant is called the _______.",
    options: ["endosperm", "embryo", "cotyledon", "seed coat"],
    answer: 1,
  },
  {
    question: "Which of these statements is correct about auxins?",
    options: ["They inhibit root formation", "They promote cell elongation", "They stop seed germination", "They promote leaf fall"],
    answer: 1,
  },
  {
    question: "The hormone that promotes apical dominance in plants is _______.",
    options: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    answer: 0,
  },
  {
    question: "A lizard regenerating its tail is an example of _______.",
    options: ["growth", "regeneration", "metamorphosis", "reproduction"],
    answer: 1,
  },
  {
    question: "The part of the embryo that develops into the shoot is the _______.",
    options: ["plumule", "radicle", "cotyledon", "endosperm"],
    answer: 0,
  },
  {
    question: "The graph showing rate of growth against time is called a _______.",
    options: ["bar chart", "growth curve", "histogram", "bell curve"],
    answer: 1,
  },
  {
    question: "The dry mass of a plant can be determined by _______.",
    options: ["weighing after drying", "weighing fresh", "soaking in water", "boiling"],
    answer: 0,
  },
  {
    question: "Auxins are produced mainly in the _______.",
    options: ["root tip and shoot tip", "leaf", "stem", "flower"],
    answer: 0,
  },
  {
    question: "The enzyme responsible for digesting stored food during germination is _______.",
    options: ["amylase", "pepsin", "lipase", "renin"],
    answer: 0,
  },
  {
    question: "Which of these hormones regulates fruit abscission?",
    options: ["Cytokinin", "Auxin", "Abscisic acid", "Gibberellin"],
    answer: 2,
  },
  {
    question: "The dry weight of a growing seedling at the stationary phase will be _______.",
    options: ["increasing rapidly", "constant", "decreasing", "zero"],
    answer: 1,
  },
  {
    question: "Growth occurs in animals mainly by _______.",
    options: ["cell division throughout the body", "cell division in certain tissues", "cell division at the tip only", "fusion of tissues"],
    answer: 1,
  },
  {
    question: "The organ responsible for producing growth hormone in man is the _______.",
    options: ["pituitary gland", "thyroid gland", "pancreas", "liver"],
    answer: 0,
  },
  {
    question: "Which factor below is not essential for growth?",
    options: ["Water", "Mineral salts", "Sound", "Light"],
    answer: 2,
  },
  
  
  
  
    ],
    
    //literature in english question
    Literature: [
     {
    question: "A poem that mourns the death of a person is called a _______.",
    options: ["Sonnet", "Elegy", "Ode", "Ballad"],
    answer: 1,
  },
  {
    question: "The repetition of vowel sounds in a poem is called _______.",
    options: ["Alliteration", "Assonance", "Consonance", "Rhyme"],
    answer: 1,
  },
  {
    question: "A poem without a regular rhyme scheme or rhythm is called _______.",
    options: ["Blank verse", "Free verse", "Sonnet", "Ballad"],
    answer: 1,
  },
  {
    question: "The persona in a poem refers to _______.",
    options: ["The poet", "The speaker in the poem", "The audience", "The editor"],
    answer: 1,
  },
  {
    question: "A fourteen-line poem is known as a _______.",
    options: ["Ballad", "Ode", "Sonnet", "Elegy"],
    answer: 2,
  },
  {
    question: "The pattern of rhymes in a poem is called its _______.",
    options: ["Tone", "Mood", "Rhyme scheme", "Structure"],
    answer: 2,
  },
  {
    question: "A poem that tells a story is called a _______.",
    options: ["Ode", "Ballad", "Elegy", "Sonnet"],
    answer: 1,
  },
  {
    question: "‘The Proud King’ is a poem about _______.",
    options: ["Pride and repentance", "Love and loss", "War and victory", "Nature and peace"],
    answer: 0,
  },
  {
    question: "In ‘Do Not Go Gentle into That Good Night’, the poet appeals for _______.",
    options: ["Calm acceptance of death", "Rebellion against death", "Peace and silence", "Loneliness"],
    answer: 1,
  },
  {
    question: "The use of descriptive language that appeals to the senses is called _______.",
    options: ["Imagery", "Personification", "Metaphor", "Symbolism"],
    answer: 0,
  },
  {
    question: "‘The Piano and Drums’ by Gabriel Okara contrasts _______.",
    options: ["War and peace", "Tradition and modernity", "Love and hate", "Youth and age"],
    answer: 1,
  },
  {
    question: "In ‘Vanity’ by Birago Diop, the poet blames Africans’ suffering on _______.",
    options: ["Foreigners", "Their neglect of ancestors", "Lack of education", "The environment"],
    answer: 1,
  },
  {
    question: "‘The Pulley’ by George Herbert presents the theme of _______.",
    options: ["Wealth", "Man’s relationship with God", "Love", "Nature"],
    answer: 1,
  },
  {
    question: "The line ‘The world is too much with us’ expresses _______.",
    options: ["Peace with nature", "Human disconnection from nature", "Religious devotion", "Love of the world"],
    answer: 1,
  },
  {
    question: "A poem that uses animals or objects to teach moral lessons is called a _______.",
    options: ["Myth", "Allegory", "Fable", "Sonnet"],
    answer: 2,
  },
  {
    question: "‘The Ambush’ by Gbemisola Adeoti criticizes _______.",
    options: ["The government and leadership", "Love and betrayal", "Modernity", "Family values"],
    answer: 0,
  },
  {
    question: "In ‘Birches’ by Robert Frost, the swinging birches symbolize _______.",
    options: ["Childhood freedom and escape", "Hard work", "Nature’s beauty", "Hope"],
    answer: 0,
  },
  {
    question: "‘The Dining Table’ by Gbanabom Hallowell reflects _______.",
    options: ["The horror of war", "Family reunion", "A political campaign", "A peaceful feast"],
    answer: 0,
  },
  {
    question: "The use of one thing to represent another in poetry is called _______.",
    options: ["Symbolism", "Allusion", "Hyperbole", "Metonymy"],
    answer: 0,
  },
  {
    question: "‘Caged Bird’ by Maya Angelou symbolizes _______.",
    options: ["Freedom of choice", "Oppression and freedom", "War and peace", "Love and hate"],
    answer: 1,
  },
  {
    question: "In ‘Telephone Conversation’ by Wole Soyinka, the central theme is _______.",
    options: ["Racism and prejudice", "Love", "Loneliness", "Modernization"],
    answer: 0,
  },
  {
    question: "The line ‘Because I could not stop for Death’ personifies _______.",
    options: ["Time", "Love", "Death", "Nature"],
    answer: 2,
  },
  {
    question: "‘The Journey of the Magi’ by T.S. Eliot explores _______.",
    options: ["Birth of Christ", "Death", "Conversion and spiritual change", "Adventure"],
    answer: 2,
  },
  {
    question: "In ‘Crossing the Bar’, the poet uses the sea as a metaphor for _______.",
    options: ["Life", "Death", "Adventure", "Freedom"],
    answer: 1,
  },
  {
    question: "‘The School Boy’ by William Blake criticizes _______.",
    options: ["Child labor", "Formal education system", "Nature", "Family life"],
    answer: 1,
  },
  {
    question: "A poem that celebrates heroes or heroic deeds is called an _______.",
    options: ["Elegy", "Epic", "Ode", "Ballad"],
    answer: 1,
  },
  {
    question: "The repetition of consonant sounds within a line of poetry is called _______.",
    options: ["Assonance", "Alliteration", "Consonance", "Rhyme"],
    answer: 2,
  },
  {
    question: "In ‘The Panic of Growing Older’ by Lenrie Peters, the poet reflects on _______.",
    options: ["The joy of youth", "The futility of ambition", "Childhood memories", "Family duties"],
    answer: 1,
  },
  {
    question: "‘The Pulley’ suggests that man’s restlessness will lead him to _______.",
    options: ["Despair", "Success", "God", "War"],
    answer: 2,
  },
  {
    question: "In ‘Do Not Go Gentle into That Good Night’, the ‘good night’ represents _______.",
    options: ["Old age", "Peace", "Death", "Love"],
    answer: 2,
  },
  {
    question: "‘The Poplar Field’ laments _______.",
    options: ["Loss of nature", "Love unfulfilled", "Family betrayal", "Political failure"],
    answer: 0,
  },
  {
    question: "‘The Piano and Drums’ contrasts the influence of _______.",
    options: ["Love and hatred", "Tradition and modernity", "Wealth and poverty", "Religion and politics"],
    answer: 1,
  },
  {
    question: "In poetry, enjambment occurs when _______.",
    options: ["A line continues to the next without pause", "Lines rhyme perfectly", "A poem changes tone", "Stanzas are repeated"],
    answer: 0,
  },
  {
    question: "‘Vanity’ ends with a call for Africans to _______.",
    options: ["Seek forgiveness and unity", "Blame colonial masters", "Return to nature", "Reject religion"],
    answer: 0,
  },
  {
    question: "The tone of ‘Caged Bird’ is mostly _______.",
    options: ["Joyful", "Bitter and defiant", "Mocking", "Nostalgic"],
    answer: 1,
  },
  {
    question: "‘The Ambush’ portrays the nation as _______.",
    options: ["A sleeping giant", "A predator devouring its people", "A prosperous land", "A loving mother"],
    answer: 1,
  },
  {
    question: "In ‘Piano and Drums’, the piano represents _______.",
    options: ["Modern civilization", "Rural tradition", "Poverty", "Conflict"],
    answer: 0,
  },
  {
    question: "A regular pattern of stressed and unstressed syllables in poetry is called _______.",
    options: ["Rhyme", "Meter", "Theme", "Tone"],
    answer: 1,
  },
  {
    question: "‘The Pulley’ reveals God’s intention to keep man _______.",
    options: ["Restless for divine connection", "Satisfied and proud", "Joyful and lazy", "Wealthy and content"],
    answer: 0,
  },
  {
    question: "‘Vanity’ is written by _______.",
    options: ["Lenrie Peters", "Birago Diop", "Gabriel Okara", "Wole Soyinka"],
    answer: 1,
  },
  {
    question: "‘Crossing the Bar’ by Tennyson uses the sea journey to symbolize _______.",
    options: ["Life and death", "War", "Hope", "Loneliness"],
    answer: 0,
  },
  {
    question: "‘The Panic of Growing Older’ depicts the poet’s fear of _______.",
    options: ["Aging without achievement", "Losing family", "War", "Sickness"],
    answer: 0,
  },
  {
    question: "‘The Dining Table’ symbolizes _______.",
    options: ["Peace", "War and suffering", "Unity", "Feasting"],
    answer: 1,
  },
  {
    question: "‘Birches’ suggests that childhood offers _______.",
    options: ["Escape from life’s burdens", "Pain", "Wealth", "Maturity"],
    answer: 0,
  },
  {
    question: "‘Vanity’ conveys the importance of _______.",
    options: ["Cultural remembrance", "Love", "Hard work", "Power"],
    answer: 0,
  },
  {
    question: "‘The Ambush’ was written by _______.",
    options: ["Birago Diop", "Gbemisola Adeoti", "Gabriel Okara", "Lenrie Peters"],
    answer: 1,
  },
  {
    question: "‘The Proud King’ warns against _______.",
    options: ["Pride and arrogance", "Cowardice", "Weakness", "Kindness"],
    answer: 0,
  },
  {
    question: "‘Caged Bird’ uses the metaphor of a bird to represent _______.",
    options: ["Freedom and captivity", "War and peace", "Power and greed", "Faith and hope"],
    answer: 0,
  },
  {
    question: "‘The Dining Table’ reveals the poet’s feeling of _______.",
    options: ["Fear and helplessness", "Joy", "Satisfaction", "Love"],
    answer: 0,
  },
  {
    question: "‘The Pulley’ suggests that man’s only rest is found in _______.",
    options: ["Wealth", "God", "Work", "Love"],
    answer: 1,
  },
  {
    question: "In ‘The Panic of Growing Older’, the poet’s tone is _______.",
    options: ["Reflective and regretful", "Joyful", "Excited", "Sarcastic"],
    answer: 0,
  },
  {
    question: "‘The Poplar Field’ laments how _______.",
    options: ["Nature is destroyed by man", "Love fades quickly", "Power corrupts", "Time heals all wounds"],
    answer: 0,
  },
  {
    question: "In a play, the dialogue between characters helps to _______.",
    options: ["Set the scene", "Develop the plot and reveal character", "Describe the setting", "Explain stage directions"],
    answer: 1,
  },
  {
    question: "The written form of a play is called a _______.",
    options: ["Novel", "Script", "Act", "Scene"],
    answer: 1,
  },
  {
    question: "The part of a play where conflict is introduced is known as the _______.",
    options: ["Exposition", "Rising action", "Resolution", "Denouement"],
    answer: 1,
  },
  {
    question: "The peak or turning point of a play is called the _______.",
    options: ["Climax", "Prologue", "Epilogue", "Resolution"],
    answer: 0,
  },
  {
    question: "The end of a play where conflicts are resolved is the _______.",
    options: ["Rising action", "Climax", "Falling action", "Resolution"],
    answer: 3,
  },
  {
    question: "Stage directions in a play are written to guide the _______.",
    options: ["Readers", "Actors and directors", "Audience", "Playwright"],
    answer: 1,
  },
  {
    question: "A play that ends unhappily is called a _______.",
    options: ["Comedy", "Tragedy", "Melodrama", "Satire"],
    answer: 1,
  },
  {
    question: "A humorous play with a happy ending is known as a _______.",
    options: ["Tragedy", "Comedy", "Satire", "Farce"],
    answer: 1,
  },
  {
    question: "A play that ridicules human folly or vice is a _______.",
    options: ["Satire", "Tragedy", "Romance", "Epic"],
    answer: 0,
  },
  {
    question: "In Shakespearean drama, the tragic hero’s downfall is often due to _______.",
    options: ["Fate", "Tragic flaw", "Evil forces", "Magic"],
    answer: 1,
  },
  {
    question: "Who is the tragic hero in ‘Macbeth’? ",
    options: ["Banquo", "Macduff", "Macbeth", "Duncan"],
    answer: 2,
  },
  {
    question: "In ‘Othello’, the main theme is _______.",
    options: ["Jealousy and betrayal", "Love and loyalty", "War and victory", "Faith and forgiveness"],
    answer: 0,
  },
  {
    question: "‘The Lion and the Jewel’ is written by _______.",
    options: ["Chinua Achebe", "Wole Soyinka", "Ngugi wa Thiong’o", "John Kani"],
    answer: 1,
  },
  {
    question: "The central conflict in ‘The Lion and the Jewel’ is between _______.",
    options: ["Baroka and Sidi", "Lakunle and Sadiku", "Sidi and Lakunle", "Baroka and Sadiku"],
    answer: 0,
  },
  {
    question: "‘Othello’ was written by _______.",
    options: ["William Shakespeare", "Wole Soyinka", "Sophocles", "Chinua Achebe"],
    answer: 0,
  },
  {
    question: "‘Oedipus Rex’ was written by _______.",
    options: ["Aristophanes", "Sophocles", "Shakespeare", "Molière"],
    answer: 1,
  },
  {
    question: "The major theme of ‘Oedipus Rex’ is _______.",
    options: ["Love", "Fate vs free will", "War", "Friendship"],
    answer: 1,
  },
  {
    question: "In drama, a soliloquy is a speech _______.",
    options: ["By one character alone on stage", "Between two lovers", "Between two opposing characters", "To the audience directly"],
    answer: 0,
  },
  {
    question: "An aside is a speech _______.",
    options: ["Addressed to another actor", "Heard only by the audience", "Said to the director", "Spoken in chorus"],
    answer: 1,
  },
  {
    question: "‘She Stoops to Conquer’ was written by _______.",
    options: ["Oliver Goldsmith", "William Shakespeare", "George Bernard Shaw", "John Osborne"],
    answer: 0,
  },
  {
    question: "The main purpose of a comic relief in a tragedy is to _______.",
    options: ["Lighten tension", "End the play", "Introduce new conflict", "Mock the hero"],
    answer: 0,
  },
  {
    question: "In ‘The Lion and the Jewel’, Lakunle represents _______.",
    options: ["Tradition", "Modernity and Western influence", "Old customs", "Religion"],
    answer: 1,
  },
  {
    question: "Baroka’s character in ‘The Lion and the Jewel’ represents _______.",
    options: ["Youth and inexperience", "Tradition and cunning", "Ignorance", "Modern education"],
    answer: 1,
  },
  {
    question: "The setting of ‘The Lion and the Jewel’ is _______.",
    options: ["Ilorin", "Lagos", "Ilujinle", "Ibadan"],
    answer: 2,
  },
  {
    question: "In ‘Othello’, Iago’s main motive is _______.",
    options: ["Revenge", "Love", "Fear", "Loyalty"],
    answer: 0,
  },
  {
    question: "In ‘Oedipus Rex’, the king unknowingly kills _______.",
    options: ["Creon", "Laius", "Jocasta", "Tiresias"],
    answer: 1,
  },
  {
    question: "‘Death and the King’s Horseman’ was written by _______.",
    options: ["Ngugi wa Thiong’o", "Chinua Achebe", "Wole Soyinka", "Athol Fugard"],
    answer: 2,
  },
  {
    question: "The theme of ‘Death and the King’s Horseman’ revolves around _______.",
    options: ["Conflict between tradition and colonial influence", "Romantic love", "Political leadership", "War"],
    answer: 0,
  },
  {
    question: "In ‘Death and the King’s Horseman’, Elesin is expected to _______.",
    options: ["Escape to England", "Die to accompany the king", "Marry the princess", "Fight the British"],
    answer: 1,
  },
  {
    question: "In drama, conflict drives the _______.",
    options: ["Setting", "Plot", "Theme", "Mood"],
    answer: 1,
  },
  {
    question: "A play divided into acts and scenes is a feature of _______.",
    options: ["Prose", "Drama", "Poetry", "Narrative"],
    answer: 1,
  },
  {
    question: "‘The gods are not to blame’ is an adaptation of _______.",
    options: ["Othello", "Oedipus Rex", "Julius Caesar", "Hamlet"],
    answer: 1,
  },
  {
    question: "Who wrote ‘The gods are not to blame’? ",
    options: ["Wole Soyinka", "Ola Rotimi", "J.P. Clark", "Ngugi wa Thiong’o"],
    answer: 1,
  },
  {
    question: "The theme of ‘The gods are not to blame’ is _______.",
    options: ["Love and hatred", "Fate and destiny", "War and peace", "Education"],
    answer: 1,
  },
  {
    question: "In ‘Julius Caesar’, Brutus joins the conspirators because he _______.",
    options: ["Hates Caesar", "Loves power", "Believes Caesar is ambitious", "Is bribed"],
    answer: 2,
  },
  {
    question: "Who said, ‘Et tu, Brute?’",
    options: ["Caesar", "Brutus", "Cassius", "Antony"],
    answer: 0,
  },
  {
    question: "In ‘Julius Caesar’, Mark Antony’s speech begins with _______.",
    options: ["‘Friends, Romans, countrymen, lend me your ears’", "‘Beware the Ides of March’", "‘Et tu, Brute?’", "‘O pardon me, thou bleeding piece of earth’"],
    answer: 0,
  },
  {
    question: "‘She Stoops to Conquer’ explores the theme of _________.",
    options: ["Love and class differences", "War and peace", "Religion", "Betrayal"],
    answer: 0,
  },
  {
    question: "In ‘She Stoops to Conquer’, Tony Lumpkin causes confusion by _________.",
    options: ["Misdirecting guests", "Stealing money", "Pretending to be rich", "Starting a fight"],
    answer: 0,
  },
  {
    question: "The protagonist of a play is _________.",
    options: ["The villain", "The main character", "The narrator", "The comic character"],
    answer: 1,
  },
  {
    question: "The antagonist in a play is _________.",
    options: ["The helper", "The hero", "The opposing character", "The narrator"],
    answer: 2,
  },
  {
    question: "In ‘Oedipus Rex’, the truth is revealed by the _________.",
    options: ["Oracle and messenger", "Chorus", "Priests", "Guards"],
    answer: 0,
  },
  {
    question: "In ‘Othello’, Desdemona dies by ________.",
    options: ["Poison", "Drowning", "Strangulation", "Stabbing"],
    answer: 2,
  },
  {
    question: "The language used by characters in a play is called ________.",
    options: ["Prose", "Dialogue", "Soliloquy", "Monologue"],
    answer: 1,
  },
  {
    question: "The final part of a play where loose ends are tied up is called the ________.",
    options: ["Prologue", "Denouement", "Rising action", "Conflict"],
    answer: 1,
  },
  {
    question: "‘Julius Caesar’ was written by ________.",
    options: ["William Shakespeare", "Ben Jonson", "Christopher Marlowe", "Sophocles"],
    answer: 0,
  },
  {
    question: "The chorus in classical drama serves to ________.",
    options: ["Sing only", "Comment on the action and express public opinion", "Act as villains", "Tell jokes"],
    answer: 1,
  },
  {
    question: "‘Death and the King’s Horseman’ is set in _________.",
    options: ["Ibadan", "Oyo", "Lagos", "Benin"],
    answer: 1,
  },
  {
    question: "A scene in drama refers to _________.",
    options: ["A part of an act", "A short story", "A monologue", "A poem"],
    answer: 0,
  },
  {
    question: "The main function of a prologue is to _________.",
    options: ["Summarize the end", "Introduce the story and characters", "Present the conflict", "Provide a climax"],
    answer: 1,
  },
    {
      question: "In 'Lonely Days', Yaremi symbolizes _________.",
      options: ["Patience and resilience", "Weakness", "Greed", "Indifference"],
      answer: 0,
    },
    {
      question: "The central theme of 'Faceless' is _________.",
      options: ["Abuse of street children", "Religious intolerance", "Education", "Political freedom"],
      answer: 0,
    },
    {
      question: "In literature, 'foreshadowing' refers to _________.",
      options: ["A hint of future events", "A reflection of past events", "Direct narration", "Dream sequence"],
      answer: 0,
    },
    {
      question: "The act of giving human qualities to non-human objects is called _________.",
      options: ["Hyperbole", "Personification", "Simile", "Allusion"],
      answer: 1,
    },
    {
      question: "‘Faceless’ portrays which of the following social issues most strongly?",
      options: ["Street hawking and exploitation", "Political corruption", "Education", "Religious conflict"],
      answer: 0,
    },
    {
      question: "The use of vivid language to create pictures in the reader’s mind is known as _________.",
      options: ["Imagery", "Irony", "Symbolism", "Tone"],
      answer: 0,
    },
    {
      question: "‘Harvest of Corruption’ exposes corruption in _______.",
      options: ["The civil service", "The police force", "The judiciary and political system", "Education"],
      answer: 2,
    },
    {
      question: "The tone of 'The Life Changer' is mostly _______.",
      options: ["Cautionary and reflective", "Humorous", "Sad", "Aggressive"],
      answer: 0,
    },
    {
      question: "In 'Othello', Desdemona’s character is best described as _______.",
      options: ["Cunning", "Faithful and innocent", "Arrogant", "Rebellious"],
      answer: 1,
    },
    {
      question: "A story that ridicules human vices in order to correct them is called _______.",
      options: ["Parable", "Satire", "Elegy", "Comedy"],
      answer: 1,
    },
    {
      question: "‘The Lion and the Jewel’ explores the clash between _______.",
      options: ["Tradition and modernity", "Love and hate", "Religion and science", "Politics and economy"],
      answer: 0,
    },
    {
      question: "The protagonist in 'The Life Changer' is _______.",
      options: ["Ummi", "Tomi", "Salma", "Lekan"],
      answer: 0,
    },
    {
      question: "‘The Life Changer’ is narrated in the _______.",
      options: ["First person", "Second person", "Third person", "Omniscient"],
      answer: 0,
    },
    {
      question: "A poem that praises an individual or event is called an _______.",
      options: ["Ode", "Elegy", "Sonnet", "Ballad"],
      answer: 0,
    },
    {
      question: "The phrase ‘He met his waterloo’ is an example of _______.",
      options: ["Allusion", "Irony", "Pun", "Metaphor"],
      answer: 0,
    },
    {
      question: "‘He is a lion in battle’ is a _______.",
      options: ["Metaphor", "Simile", "Personification", "Euphemism"],
      answer: 0,
    },
    {
      question: "In 'Faceless', Fofo’s main goal is to _______.",
      options: ["Find her sister", "Start a business", "Travel abroad", "Expose corruption"],
      answer: 0,
    },
    {
      question: "In poetry, the repetition of vowel sounds is called _______.",
      options: ["Assonance", "Alliteration", "Consonance", "Onomatopoeia"],
      answer: 0,
    },
    {
      question: "‘The Lion and the Jewel’ is written by _______.",
      options: ["Wole Soyinka", "Chinua Achebe", "Ama Ata Aidoo", "Ngugi wa Thiong’o"],
      answer: 0,
    },
    {
      question: "A long speech by one character in a play is a _______.",
      options: ["Soliloquy", "Monologue", "Aside", "Dialogue"],
      answer: 1,
    },
    {
      question: "In 'Harvest of Corruption', Aloho’s death was caused by _______.",
      options: ["Abortion complications", "Poisoning", "Gunshot", "Suicide"],
      answer: 0,
    },
    {
      question: "The rhythm of a poem refers to its _______.",
      options: ["Beat and flow", "Meaning", "Form", "Imagery"],
      answer: 0,
    },
    {
      question: "A sonnet consists of _______ lines.",
      options: ["10", "12", "14", "16"],
      answer: 2,
    },
    {
      question: "In ‘Othello’, the handkerchief symbolizes _______.",
      options: ["Love and fidelity", "Betrayal", "Fear", "Jealousy"],
      answer: 0,
    },
    {
      question: "‘He is the pillar of the house’ is an example of _______.",
      options: ["Metaphor", "Simile", "Irony", "Pun"],
      answer: 0,
    },
    {
      question: "In 'Lonely Days', Yaremi’s rejection by the villagers reflects _______.",
      options: ["Gender discrimination", "Poverty", "Modernization", "Colonialism"],
      answer: 0,
    },
    {
      question: "‘Faceless’ addresses the importance of _______.",
      options: ["Media in exposing social ills", "Politics", "Agriculture", "Education reforms"],
      answer: 0,
    },
    {
      question: "The line ‘The child is father of the man’ is an example of _______.",
      options: ["Paradox", "Irony", "Metaphor", "Allusion"],
      answer: 0,
    },
    {
      question: "‘I came, I saw, I conquered’ demonstrates _______.",
      options: ["Repetition", "Parallelism", "Contrast", "Irony"],
      answer: 1,
    },
    {
      question: "‘The Life Changer’ is set mainly in a _______.",
      options: ["University town", "Village", "City", "Market"],
      answer: 0,
    },
    {
      question: "The central idea of a literary work is called its _______.",
      options: ["Theme", "Tone", "Mood", "Plot"],
      answer: 0,
    },
    {
      question: "The atmosphere of sadness in a literary work describes its _______.",
      options: ["Tone", "Mood", "Theme", "Style"],
      answer: 1,
    },
    {
      question: "In literature, ‘style’ refers to _______.",
      options: ["The author’s choice of language and technique", "Plot development", "Narrative tone", "Rhythm"],
      answer: 0,
    },
    {
      question: "‘He is slow and steady like a tortoise’ is a _______.",
      options: ["Simile", "Metaphor", "Personification", "Alliteration"],
      answer: 0,
    },
    {
      question: "A direct comparison without using ‘like’ or ‘as’ is a _______.",
      options: ["Metaphor", "Simile", "Symbol", "Allusion"],
      answer: 0,
    },
    {
      question: "‘Faceless’ ends with _______.",
      options: ["Hope and awareness", "Tragedy", "Hopelessness", "Revenge"],
      answer: 0,
    },
    {
      question: "In poetry, enjambment means _______.",
      options: ["Continuation of a sentence to the next line", "Repetition of sounds", "Rhyming words", "End rhyme"],
      answer: 0,
    },
    {
      question: "‘The Lion and the Jewel’ portrays Baroka as _______.",
      options: ["A cunning traditionalist", "A weak old man", "A modern leader", "A foolish chief"],
      answer: 0,
    },
    {
      question: "‘Othello’ is primarily a play about _______.",
      options: ["Jealousy and betrayal", "Love and loyalty", "Revenge", "Friendship"],
      answer: 0,
    },
    {
      question: "A humorous imitation of another work is called a _______.",
      options: ["Satire", "Parody", "Farce", "Comedy"],
      answer: 1,
    },
    {
      question: "‘Harvest of Corruption’ ends with _______.",
      options: ["Justice and punishment", "Victory for corruption", "Aloho’s resurrection", "Chief’s escape"],
      answer: 0,
    },
    {
      question: "‘He spoke in parables’ indicates _______.",
      options: ["Indirect communication", "Lies", "Simplicity", "Truth"],
      answer: 0,
    },
    {
      question: "‘The flame of love burnt brightly’ shows _______.",
      options: ["Personification", "Metaphor", "Simile", "Hyperbole"],
      answer: 1,
    },
    {
      question: "‘The Life Changer’ begins with a discussion about _______.",
      options: ["JAMB admission", "Examination malpractice", "Friendship", "Politics"],
      answer: 0,
    },
    {
      question: "A work written to be performed by actors is called a _______.",
      options: ["Prose", "Drama", "Poem", "Epic"],
      answer: 1,
    },
    {
      question: "The part of a story where the problem is solved is the _______.",
      options: ["Resolution", "Climax", "Conflict", "Prologue"],
      answer: 0,
    },
    {
      question: "‘The gods are not to blame’ explores the theme of _______.",
      options: ["Fate versus free will", "War", "Corruption", "Education"],
      answer: 0,
    },
    {
      question: "In literature, the 'plot' refers to _______.",
      options: ["The sequence of events", "The theme", "The language", "The tone"],
      answer: 0,
    },
    {
      question: "‘The drums of war echoed through the land’ appeals to the sense of _______.",
      options: ["Hearing", "Sight", "Smell", "Taste"],
      answer: 0,
    },
    {
      question: "In ‘Faceless’, Kabria represents _______.",
      options: ["A caring mother and reformer", "A corrupt politician", "A lazy journalist", "A street hawker"],
      answer: 0,
    },
  {
    question: "Who wrote ---- “The Lion and the Jewel”?",
    options: ["Chinua Achebe", "Wole Soyinka", "John Osborne", "August Wilson"],
    answer: 1
  },
  {
    question: "Which of these is a prose text recommended for JAMB/WAEC?",
    options: ["Wuthering Heights", "A Doll’s House", "Othello", "The Importance of Being Earnest"],
    answer: 0
  },
  {
    question: "In literature, the term ‘theme’ refers to:",
    options: ["The time when the story is set", "The main idea or underlying meaning", "The colour of the cover", "The number of chapters"],
    answer: 1
  },
  {
    question: "Which of these works is by Buchi Emecheta?",
    options: ["Second Class Citizen", "Invisible Man", "The Lion and the Jewel", "Fences"],
    answer: 0
  },
  {
    question: "In a play, the character who opposes the protagonist is called the:",
    options: ["Protagonist", "Foil", "Antagonist", "Narrator"],
    answer: 2
  },
  {
    question: "What is a ‘foil’ in literature?",
    options: ["A gold piece in a story", "A conductor’s baton", "A character who contrasts with another to highlight qualities", "The title of a poem"],
    answer: 2
  },
  {
    question: "Which drama is a Shakespearean text recommended by WAEC for objective/contextual questions?",
    options: ["Hamlet", "A Midsummer Night’s Dream", "King Lear", "Macbeth"],
    answer: 1
  },
  {
    question: "Which of these poetry titles is included in the WAEC/NECO list for 2021-25?",
    options: ["Caged Bird", "The Waste Land", "Paradise Lost", "Don Juan"],
    answer: 0
  },
  {
    question: "Which novel features the character Heathcliff?",
    options: ["Wuthering Heights", "Second Class Citizen", "Invisible Man", "Look Back in Anger"],
    answer: 0
  },
  {
    question: "What is ‘narrator’ in a work of prose?",
    options: ["A character who tells the story", "A minor character", "The title only", "An absent voice"],
    answer: 0
  },
  {
    question: "Which of these is a non-African drama text recommended for WAEC?",
    options: ["Let Me Die Alone", "The Lion and the Jewel", "Look Back in Anger", "Unexpected Joy at Dawn"],
    answer: 2
  },
  {
    question: "In poetry, a ‘stanza’ refers to:",
    options: ["A single word", "A group of lines forming a unit", "The title of the poem", "The rhyming scheme"],
    answer: 1
  },
  {
    question: "Which of these poets wrote “Not my Business”?",
    options: ["Gabriel Okara", "Niyi Osundare", "Dylan Thomas", "Maya Angelou"],
    answer: 1
  },
  {
    question: "Which text is by John K. Kargbo?",
    options: ["Let Me Die Alone", "Second Class Citizen", "Fences", "Wuthering Heights"],
    answer: 0
  },
  {
    question: "What literary device is used when human traits are given to non-human things?",
    options: ["Simile", "Metaphor", "Personification", "Alliteration"],
    answer: 2
  },
  {
    question: "Which of the following is a non-African prose recommended text?",
    options: ["Invisible Man", "Second Class Citizen", "Let Me Die Alone", "The Lion and the Jewel"],
    answer: 0
  },
  {
    question: "Which drama by Wole Soyinka is in the WAEC/NECO list?",
    options: ["Death and the King’s Horseman", "The Lion and the Jewel", "A Man for All Seasons", "Othello"],
    answer: 1
  },
  {
    question: "What is the function of ‘setting’ in a literary text?",
    options: ["To show the author’s name", "To provide the time and place of action", "To list characters", "To give the chapter count"],
    answer: 1
  },
  {
    question: "A ‘soliloquy’ is:",
    options: ["A song in a play", "A character speaking alone to the audience", "A type of poem", "A dramatic dance"],
    answer: 1
  },
  {
    question: "Which of these poems appears on the WAEC recommended list for 2021-25?",
    options: ["The Good-Morrow", "The Waste Land", "Do Not Go Gentle into that Good Night", "Ode to Autumn"],
    answer: 2
  },
  {
    question: "What is the climax in a story?",
    options: ["The introduction", "The turning point of greatest tension", "The conclusion", "A list of characters"],
    answer: 1
  },
  {
    question: "Which device involves repetition of initial consonant sounds?",
    options: ["Metaphor", "Onomatopoeia", "Alliteration", "Irony"],
    answer: 2
  },
  {
    question: "Which is a non-African drama text approved for WAEC/NECO?",
    options: ["Fences", "Unexpected Joy at Dawn", "Black Woman", "Raider of the Treasure Trove"],
    answer: 0
  },
  {
   question: "Which of these themes is common in ‘Second Class Citizen’?",
    options: ["Racism and gender", "Space travel", "Medieval war", "Animal rights"],
    answer: 0
  },
  {
    question: "Which literary form is ‘plot’ associated with?",
    options: ["Poetry only", "Drama only", "Any narrative (prose or drama)", "Music lyrics"],
    answer: 2
  },
  {
    question: "Which of these is an African poetry selection from the recommended list?",
    options: ["Piano and Drums", "The Pulley", "Still I Rise", "The Good-Morrow"],
    answer: 0
  },
  {
    question: "In drama, the term ‘act’ refers to:",
    options: ["A scene change in a play", "A type of poem", "A novel chapter", "A short story"],
    answer: 0
  },
  {
    question: "Which of these is by John Donne?",
    options: ["Caged Bird", "The Good-Morrow", "Binsey Poplars", "Bat"],
    answer: 1
  },
  {
    question: "What is ‘irony’ in literature?",
    options: ["Something expected happens exactly as expected", "A contrast between expectation and reality", "A method of cooking", "A list of chapters"],
    answer: 1
  },
  {
    question: "Which of these prose texts addresses African immigrant experience in Britain?",
    options: ["Unexpected Joy at Dawn", "Wuthering Heights", "Look Back in Anger", "Fences"],
    answer: 0
  },
  {
    question: "Which poem by Maya Angelou is recommended in the non-African poetry list?",
    options: ["Still I Rise", "The Pulley", "Bat", "The Good-Morrow"],
    answer: 0
  },
  {
    question: "What is the narrator’s perspective called when the story is told by ‘I’?",
    options: ["Third person", "First person", "Omniscient", "Second person"],
    answer: 1
  },
  {
    question: "Which of these theatre works is by August Wilson?",
    options: ["Fences", "The Lion and the Jewel", "Let Me Die Alone", "Look Back in Anger"],
    answer: 0
  },
  {
    question: "Which of these features a tragic hero in a Shakespearean setting?",
    options: ["Othello", "A Midsummer Night’s Dream", "Look Back in Anger", "Fences"],
    answer: 0
  },
  {
    question: "Which literary term describes the perception of events by a character?",
    options: ["Setting", "Point of view", "Theme", "Motif"],
    answer: 1
  },
  {
    question: "Which of these African prose texts is included in the WAEC/NECO list for 2021-25?",
    options: ["Unexpected Joy at Dawn", "Native Son", "A Man for All Seasons", "A Midsummer Night’s Dream"],
    answer: 0
  },
  {
    question: "‘Wuthering Heights’ is set in:",
    options: ["Greece", "English moors", "Nigeria", "USA"],
    answer: 1
  },
  {
    question: "Which of these poems was written by Dylan Thomas?",
    options: ["Do Not Go Gentle into that Good Night", "Caged Bird", "The Good-Morrow", "Bat"],
    answer: 0
  },
  {
    question: "Which of these is a drama text recommended for JAMB 2025-26?",
    options: ["Othello", "The Lion and the Jewel", "Harvest of Corruption", "Invisible Man"],
    answer: 2
  },
  {
    question: "What is a ‘symbol’ in literature?",
    options: ["A method of printing", "An object or action that suggests more than its literal meaning", "A typo", "An author’s signature"],
    answer: 1
  },
  {
    question: "Which of these prose authors is non-African?",
    options: ["Buchi Emecheta", "Alex Agyei-Agyiri", "Emily Brontë", "John K. Kargbo"],
    answer: 2
  },
  {
    question: "In poetry, ‘meter’ refers to:",
    options: ["The time signature in music", "The rhythmic pattern of lines", "The number of words in a line", "The number of syllables only"],
    answer: 1
  },
  {
    question: "Which is the main conflict type in literature when the character struggles with society?",
    options: ["Man vs Self", "Man vs Nature", "Man vs Society", "Man vs Machine"],
    answer: 2
  },
  {
    question: "Which of these works is a non-African poetry selection for WAEC?",
    options: ["The Good-Morrow", "The Leader and the Led", "Raider of the Treasure Trove", "Black Woman"],
    answer: 0
  },
  {
    question: "What happens in the resolution of a narrative?",
    options: ["Conflict introduced", "Climax happens", "Loose ends tied up and conclusion reached", "More new characters introduced"],
    answer: 2
  },
  {
    question: "Which of these works features American racial and identity issues?",
    options: ["Invisible Man", "Second Class Citizen", "Wuthering Heights", "The Lion and the Jewel"],
    answer: 0
  },
  {
    question: "Which type of literary work is ‘Fences’?",
    options: ["Novel", "Poem", "Drama/Play", "Short story"],
    answer: 2
  },
  {
    question: "Which of the following is a theme in “The Lion and the Jewel”?",
    options: ["Tradition vs Modernity", "Space exploration", "Underwater adventure", "Medieval knights"],
    answer: 0
  },
    {
      question: "A play that ends on a happy note is known as a _______.",
      options: ["Tragedy", "Comedy", "Satire", "Farce"],
      answer: 1,
    },
    {
      question: "The main character in a literary work is called the _______.",
      options: ["Protagonist", "Antagonist", "Narrator", "Chorus"],
      answer: 0,
    },
    {
      question: "The struggle between two opposing forces in a story is called _______.",
      options: ["Climax", "Conflict", "Exposition", "Resolution"],
      answer: 1,
    },
    {
      question: "A reference to an event or character in another work of art is called _______.",
      options: ["Allusion", "Irony", "Metaphor", "Simile"],
      answer: 0,
    },
    {
      question: "In poetry, the repetition of consonant sounds at the beginning of words is called _______.",
      options: ["Assonance", "Alliteration", "Rhyme", "Rhythm"],
      answer: 1,
    },
    {
      question: "In drama, the turning point of the story is called the _______.",
      options: ["Climax", "Prologue", "Epilogue", "Antagonist"],
      answer: 0,
    },
    {
      question: "‘The sun smiled at me’ is an example of _______.",
      options: ["Simile", "Metaphor", "Personification", "Irony"],
      answer: 2,
    },
    {
      question: "The theme of a literary work refers to its _______.",
      options: ["Plot", "Message", "Characters", "Setting"],
      answer: 1,
    },
    {
      question: "A figure of speech that involves comparison using 'like' or 'as' is called _______.",
      options: ["Metaphor", "Simile", "Irony", "Euphemism"],
      answer: 1,
    },
    {
      question: "The term 'point of view' in prose refers to _______.",
      options: ["The author's opinion", "The narrator's perspective", "The story’s title", "The reader’s view"],
      answer: 1,
    },
    {
      question: "The use of words to express the opposite of their literal meaning is called _______.",
      options: ["Metaphor", "Irony", "Euphemism", "Oxymoron"],
      answer: 1,
    },
    {
      question: "A short story that teaches a moral lesson is called a _______.",
      options: ["Myth", "Legend", "Fable", "Sonnet"],
      answer: 2,
    },
    {
      question: "In 'Harvest of Corruption' by Frank Ogodo Ogbeche, Aloho’s death symbolizes _______.",
      options: ["Injustice", "The consequence of corruption", "Love", "Greed"],
      answer: 1,
    },
    {
      question: "The setting of 'Lonely Days' by Bayo Adebowale is _______.",
      options: ["Kufi village", "Ibadan city", "Nsukka town", "Ilorin"],
      answer: 0,
    },
    {
      question: "In 'The Lion and the Jewel', the play ends with _______.",
      options: ["Sidi marrying Lakunle", "Baroka marrying Sidi", "Baroka’s defeat", "Sidi leaving the village"],
      answer: 1,
    },
    {
      question: "In ‘Second Class Citizen’ by Buchi Emecheta, Adah’s major struggle is _______.",
      options: ["Racism and gender discrimination", "Financial stability", "Loss of family", "Education"],
      answer: 0,
    },
    {
      question: "‘And miles to go before I sleep’ is an example of _______.",
      options: ["Repetition", "Irony", "Personification", "Hyperbole"],
      answer: 0,
    },
    {
      question: "In literature, 'tone' refers to _______.",
      options: ["The mood of the story", "The writer’s attitude toward the subject", "The plot", "The point of view"],
      answer: 1,
    },
    {
      question: "‘He fought like a lion’ is an example of _______.",
      options: ["Simile", "Metaphor", "Irony", "Pun"],
      answer: 0,
    },
    {
      question: "The major theme of ‘The Life Changer’ by Khadija Abubakar Jalli is _______.",
      options: ["University life and moral transformation", "Corruption in government", "Marriage and love", "Cultural conflict"],
      answer: 0,
    },
    {
      question: "A fourteen-line poem with a fixed rhyme scheme is called a _______.",
      options: ["Ballad", "Ode", "Sonnet", "Elegy"],
      answer: 2,
    },
    {
      question: "‘The caged bird sings of freedom’ exemplifies which literary device?",
      options: ["Irony", "Symbolism", "Metaphor", "Imagery"],
      answer: 1,
    },
    {
      question: "The word 'tragedy' originated from the works of _______.",
      options: ["Romans", "Greeks", "Egyptians", "British"],
      answer: 1,
    },
    {
      question: "The line ‘Fair is foul and foul is fair’ is an example of _______.",
      options: ["Oxymoron", "Paradox", "Metaphor", "Pun"],
      answer: 1,
    },
    {
      question: "In 'Othello', who is the antagonist?",
      options: ["Othello", "Desdemona", "Iago", "Cassio"],
      answer: 2,
    },
    {
      question: "‘The drum of death beats slowly’ appeals to which sense?",
      options: ["Sight", "Sound", "Touch", "Smell"],
      answer: 1,
    },
    {
      question: "A narrative poem that tells a story is known as a _______.",
      options: ["Sonnet", "Ballad", "Ode", "Elegy"],
      answer: 1,
    },
    {
      question: "The use of exaggerated statements for effect is called _______.",
      options: ["Personification", "Hyperbole", "Paradox", "Irony"],
      answer: 1,
    },
    {
      question: "In 'Faceless' by Amma Darko, the main theme is _______.",
      options: ["Street life and social neglect", "Politics", "Education", "War"],
      answer: 0,
    },
    {
      question: "A play that criticizes human folly through humor is called _______.",
      options: ["Tragedy", "Comedy", "Satire", "Farce"],
      answer: 2,
    },
    {
      question: "‘He is the black sheep of the family’ is an example of _______.",
      options: ["Idiom", "Simile", "Metaphor", "Euphemism"],
      answer: 2,
    },
    {
      question: "The writer’s choice of words is referred to as _______.",
      options: ["Tone", "Mood", "Diction", "Theme"],
      answer: 2,
    },
    {
      question: "‘The sun set on our happiness’ symbolizes _______.",
      options: ["Evening", "Loss or sorrow", "Joy", "Freedom"],
      answer: 1,
    },
    {
      question: "A figure of speech that places two opposite ideas together is _______.",
      options: ["Hyperbole", "Oxymoron", "Paradox", "Pun"],
      answer: 1,
    },
    {
      question: "‘She sells seashells by the seashore’ is an example of _______.",
      options: ["Assonance", "Alliteration", "Onomatopoeia", "Rhyme"],
      answer: 1,
    },
    {
      question: "In literature, a flashback is used to _______.",
      options: ["Describe future events", "Reveal past events", "Add suspense", "Change setting"],
      answer: 1,
    },
    {
      question: "The statement ‘the classroom was a zoo’ is a _______.",
      options: ["Simile", "Metaphor", "Hyperbole", "Irony"],
      answer: 1,
    },
    {
      question: "A poem that expresses sorrow for the dead is a(n) _______.",
      options: ["Sonnet", "Ode", "Elegy", "Ballad"],
      answer: 2,
    },
    {
      question: "In ‘The Lion and the Jewel’, Lakunle represents _______.",
      options: ["Tradition", "Modernity", "Foolishness", "Love"],
      answer: 1,
    },
    {
      question: "‘Faceless’ by Amma Darko is set in which country?",
      options: ["Ghana", "Nigeria", "Kenya", "South Africa"],
      answer: 0,
    },
    {
      question: "‘The Life Changer’ begins with a conversation between _______.",
      options: ["Mother and daughter", "Two students", "Lecturer and student", "Two friends"],
      answer: 0,
    },
    {
      question: "A short speech by a character heard only by the audience is called _______.",
      options: ["Dialogue", "Aside", "Monologue", "Soliloquy"],
      answer: 1,
    },
    {
      question: "‘He is as brave as a lion’ is a _______.",
      options: ["Simile", "Metaphor", "Irony", "Allusion"],
      answer: 0,
    },
    {
      question: "In literature, ‘mood’ refers to _______.",
      options: ["The emotional atmosphere of a work", "The writer’s opinion", "The theme", "The tone"],
      answer: 0,
    },
    {
      question: "A poem without rhyme is called _______.",
      options: ["Blank verse", "Free verse", "Sonnet", "Ballad"],
      answer: 1,
    },
    {
      question: "‘The thunder roared angrily’ is an example of _______.",
      options: ["Hyperbole", "Personification", "Irony", "Metaphor"],
      answer: 1,
    },
    {
      question: "In ‘Harvest of Corruption’, Chief Haladu Ade-Amaka represents _______.",
      options: ["Integrity", "Corruption and greed", "Justice", "Peace"],
      answer: 1,
    },
    {
      question: "The use of language that appeals to the senses is known as _______.",
      options: ["Imagery", "Tone", "Mood", "Irony"],
      answer: 0,
    },
    {
      question: "In 'Othello', Desdemona dies because _______.",
      options: ["She betrayed Othello", "Othello was deceived by Iago", "Cassio killed her", "She fled Venice"],
      answer: 1,
    },
    {
      question: "The main purpose of literature is to _______.",
      options: ["Entertain and educate", "Inform", "Instruct", "Debate"],
      answer: 0,
    },
    
    ],
    
    //Government questions here
    Government: [
      {
    question: "Government can best be defined as?",
    options: ["The study of politics", "The machinery and process through which rules are made and enforced", "The art of ruling", "The system of voting"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a function of government?",
    options: ["Maintenance of law and order", "Provision of social amenities", "Promotion of anarchy", "Defense of the country"],
    answer: 2
  },
  {
    question: "The three arms of government are?",
    options: ["Executive, Legislative, and Judiciary", "President, Ministers, and Governors", "Parliament, Army, and Police", "Federal, State, and Local"],
    answer: 0
  },
  {
    question: "Which arm of government interprets the law?",
    options: ["Legislative", "Executive", "Judiciary", "Civil service"],
    answer: 2
  },
  {
    question: "The main function of the legislature is to?",
    options: ["Enforce laws", "Interpret laws", "Make laws", "Execute laws"],
    answer: 2
  },
  {
    question: "A government in which one person rules is known as?",
    options: ["Oligarchy", "Monarchy", "Aristocracy", "Democracy"],
    answer: 1
  },
  {
    question: "Democracy is based on the principle of?",
    options: ["Rule of law", "Military force", "Anarchy", "Secrecy"],
    answer: 0
  },
  {
    question: "Which of these is a feature of dictatorship?",
    options: ["Free press", "Checks and balances", "One-man rule", "Rule of law"],
    answer: 2
  },
  {
    question: "The rule of law implies that?",
    options: ["The rich are above the law", "Law is supreme and everyone is equal before it", "Judges make laws", "Police enforce rules without law"],
    answer: 1
  },
  {
    question: "Which of the following is a characteristic of a federal system?",
    options: ["Centralized government", "Division of powers", "Absence of constitution", "Unitary legislature"],
    answer: 1
  },
  {
    question: "Who was the first Prime Minister of Nigeria?",
    options: ["Nnamdi Azikiwe", "Abubakar Tafawa Balewa", "Obafemi Awolowo", "Ahmadu Bello"],
    answer: 1
  },
  {
    question: "The head of government in a parliamentary system is?",
    options: ["President", "Prime Minister", "Governor-General", "Speaker"],
    answer: 1
  },
  {
    question: "Which of the following countries practices a federal system?",
    options: ["France", "Ghana", "Nigeria", "Togo"],
    answer: 2
  },
  {
    question: "The Nigerian Independence Constitution was enacted in?",
    options: ["1951", "1954", "1960", "1963"],
    answer: 2
  },
  {
    question: "Who presides over the Nigerian Senate?",
    options: ["The Speaker", "The Chief Justice", "The Senate President", "The Vice President"],
    answer: 2
  },
  {
    question: "The 1979 Nigerian Constitution introduced what system of government?",
    options: ["Confederal", "Unitary", "Parliamentary", "Presidential"],
    answer: 3
  },
  {
    question: "A constitution can be defined as?",
    options: ["Rules and regulations of an organization", "A body of laws defining the powers of government", "Manifesto of a political party", "Collection of parliamentary acts"],
    answer: 1
  },
  {
    question: "The process of voting in Nigeria is supervised by?",
    options: ["The Senate", "INEC", "National Assembly", "Judiciary"],
    answer: 1
  },
  {
    question: "Public opinion is important because?",
    options: ["It allows citizens to influence government decisions", "It replaces elections", "It makes people obey laws", "It determines salaries of officials"],
    answer: 0
  },
  {
    question: "Which of the following is a pressure group in Nigeria?",
    options: ["NLC", "INEC", "NASS", "FRSC"],
    answer: 0
  },
  {
    question: "Franchise means?",
    options: ["Right to vote", "Right to education", "Right to free speech", "Right to property"],
    answer: 0
  },
  {
    question: "The right to vote and be voted for is known as?",
    options: ["Civil right", "Political right", "Social right", "Economic right"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a type of constitution?",
    options: ["Rigid", "Flexible", "Unitary", "Written"],
    answer: 2
  },
  {
    question: "The judiciary helps to prevent abuse of power through?",
    options: ["Rule of law", "Martial law", "Emergency rule", "Presidential order"],
    answer: 0
  },
  {
    question: "Which of these organs of government implements laws?",
    options: ["Executive", "Legislature", "Judiciary", "Electoral Commission"],
    answer: 0
  },
  {
    question: "A constitution that can be amended easily is called?",
    options: ["Rigid", "Flexible", "Unwritten", "Federal"],
    answer: 1
  },
  {
    question: "The head of the local government is called?",
    options: ["Chairman", "Governor", "Mayor", "Secretary"],
    answer: 0
  },
  {
    question: "In a democracy, sovereignty belongs to?",
    options: ["The President", "The People", "The Army", "The Court"],
    answer: 1
  },
  {
    question: "Which of these best describes separation of powers?",
    options: ["Powers are shared among arms of government", "All powers belong to one arm", "Each state is independent", "Military runs the government"],
    answer: 0
  },
  {
    question: "Which document contains the basic principles of government?",
    options: ["Constitution", "Manifesto", "Gazette", "Decree"],
    answer: 0
  },
  {
    question: "Military government is usually characterized by?",
    options: ["Democratic elections", "Decrees", "Constitutional amendment", "Rule of law"],
    answer: 1
  },
  {
    question: "Which of these is a feature of a unitary government?",
    options: ["Division of powers", "Single central authority", "Autonomy of regions", "Dual citizenship"],
    answer: 1
  },
  {
    question: "The process of bringing government closer to the people is called?",
    options: ["Decentralization", "Centralization", "Privatization", "Nationalization"],
    answer: 0
  },
  {
    question: "Who is regarded as the father of modern democracy?",
    options: ["Aristotle", "Abraham Lincoln", "Plato", "Locke"],
    answer: 1
  },
  {
    question: "Which of these is NOT a type of citizenship?",
    options: ["By birth", "By registration", "By employment", "By naturalization"],
    answer: 2
  },
  {
    question: "The Nigerian civil service operates under which principle?",
    options: ["Merit system", "Patronage", "Nepotism", "Favoritism"],
    answer: 0
  },
  {
    question: "Who is the head of the Nigerian civil service?",
    options: ["Secretary to the Government", "Head of Service", "Chief Judge", "Permanent Secretary"],
    answer: 1
  },
  {
    question: "Delegated legislation means?",
    options: ["Laws made by courts", "Laws made by the legislature", "Laws made by subordinate bodies under authority", "Laws made by international organizations"],
    answer: 2
  },
  {
    question: "The first military coup in Nigeria occurred in?",
    options: ["1960", "1963", "1966", "1979"],
    answer: 2
  },
  {
    question: "The pre-colonial Hausa/Fulani system was based on?",
    options: ["Emirate system", "Democracy", "Confederalism", "Feudalism"],
    answer: 0
  },
  {
    question: "Indirect rule in Nigeria was introduced by?",
    options: ["Lord Lugard", "Obafemi Awolowo", "Tafawa Balewa", "Nnamdi Azikiwe"],
    answer: 0
  },
  {
    question: "One of the disadvantages of indirect rule was that?",
    options: ["It encouraged local participation", "It ignored traditional authority", "It was cheap to operate", "It respected culture"],
    answer: 1
  },
  {
    question: "Political parties aim primarily to?",
    options: ["Educate citizens", "Gain political power", "Support NGOs", "Organize sports"],
    answer: 1
  },
  {
    question: "The symbol of national unity in Nigeria is the?",
    options: ["Supreme Court", "National Assembly", "President", "Police Force"],
    answer: 2
  },
  {
    question: "The organ responsible for conducting elections in Nigeria is?",
    options: ["INEC", "NASS", "Judiciary", "Army"],
    answer: 0
  },
  {
    question: "The Nigerian flag was designed by?",
    options: ["Taiwo Akinkunmi", "Herbert Macaulay", "Obafemi Awolowo", "Ahmadu Bello"],
    answer: 0
  },
  {
    question: "The national anthem promotes the spirit of?",
    options: ["Unity and patriotism", "Division and competition", "Ethnic loyalty", "Political ambition"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a political party in Nigeria’s Second Republic?",
    options: ["NPN", "UPN", "SDP", "NPP"],
    answer: 2
  },
  {
    question: "A state is different from a nation because?",
    options: ["A state must have sovereignty", "A nation is always larger", "A state has no defined territory", "A nation always has a constitution"],
    answer: 0
  },
  {
    question: "The judiciary acts as a check on the legislature through?",
    options: ["Judicial review", "Executive order", "Impeachment", "Budget control"],
    answer: 0
  },
  {
    question: "In a democracy, the principle of majority rule implies?",
    options: ["Minorities have no rights", "The majority decides but minority rights are respected", "Only elites decide", "All decisions are unanimous"],
    answer: 1
  },
  {
    question: "The concept of sovereignty means that a state has?",
    options: ["The power to make and enforce laws within its territory", "Limited power under international law", "No control over citizens", "Authority given by other states"],
    answer: 0
  },
  {
    question: "Which of the following best describes a confederation?",
    options: ["A union of sovereign states with a weak central government", "A single government with centralized power", "A military alliance", "A government led by monarchs"],
    answer: 0
  },
  {
    question: "Which of these was Nigeria’s first political party?",
    options: ["NCNC", "NNDP", "NPC", "AG"],
    answer: 1
  },
  {
    question: "The main objective of the NCNC was to?",
    options: ["Fight for Nigeria’s independence", "Promote trade", "Support colonial rule", "Unify the North only"],
    answer: 0
  },
  {
    question: "The 1946 Richards Constitution was criticized mainly because?",
    options: ["It lacked Nigerian participation", "It created regions", "It introduced federalism", "It gave too much power to Nigerians"],
    answer: 0
  },
  {
    question: "The Lyttleton Constitution of 1954 introduced?",
    options: ["Parliamentary government", "True federalism", "Unitary system", "Presidential system"],
    answer: 1
  },
  {
    question: "Nigeria became a republic in?",
    options: ["1960", "1963", "1966", "1979"],
    answer: 1
  },
  {
    question: "The executive arm of government is responsible for?",
    options: ["Making laws", "Interpreting laws", "Implementing laws", "Repealing laws"],
    answer: 2
  },
  {
    question: "Checks and balances are designed to?",
    options: ["Ensure accountability among branches of government", "Encourage military rule", "Weaken the judiciary", "Empower the legislature only"],
    answer: 0
  },
  {
    question: "Which of the following systems of government encourages equal representation of states?",
    options: ["Unitary", "Confederal", "Federal", "Monarchical"],
    answer: 2
  },
  {
    question: "The first military head of state in Nigeria was?",
    options: ["Yakubu Gowon", "Aguiyi Ironsi", "Olusegun Obasanjo", "Murtala Mohammed"],
    answer: 1
  },
  {
    question: "Which of these leaders introduced the Structural Adjustment Programme (SAP)?",
    options: ["Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida", "Olusegun Obasanjo"],
    answer: 2
  },
  {
    question: "The 1999 Constitution of Nigeria provides for?",
    options: ["Unitary system", "Confederal system", "Presidential system", "Parliamentary system"],
    answer: 2
  },
  {
    question: "The federal character principle aims to?",
    options: ["Ensure fairness and equal representation of all regions", "Favor one region", "Encourage foreign influence", "Reduce state autonomy"],
    answer: 0
  },
  {
    question: "Who is the commander-in-chief of the armed forces in Nigeria?",
    options: ["The Chief of Army Staff", "The President", "The Defence Minister", "The Senate President"],
    answer: 1
  },
  {
    question: "A bill becomes law when it is?",
    options: ["Passed by the legislature only", "Approved by the executive after legislative passage", "Approved by judiciary", "Discussed in parliament"],
    answer: 1
  },
  {
    question: "Public corporations are established to?",
    options: ["Make profit only", "Provide essential services", "Weaken private firms", "Control prices"],
    answer: 1
  },
  {
    question: "Which of these is a feature of the civil service?",
    options: ["Political neutrality", "Active partisanship", "Elected leadership", "Temporary service"],
    answer: 0
  },
  {
    question: "Which of the following is a merit of federalism?",
    options: ["Duplication of functions", "Local participation in government", "Concentration of power", "Regional conflict"],
    answer: 1
  },
  {
    question: "The idea of the separation of powers was popularized by?",
    options: ["John Locke", "Baron de Montesquieu", "Plato", "Aristotle"],
    answer: 1
  },
  {
    question: "Which of the following documents guarantees citizens’ rights?",
    options: ["The Constitution", "Government gazette", "Electoral Act", "Official bulletin"],
    answer: 0
  },
  {
    question: "Pressure groups influence government through?",
    options: ["Lobbying and strikes", "Winning elections", "Passing bills", "Military action"],
    answer: 0
  },
  {
    question: "The electoral body in Nigeria is?",
    options: ["EFCC", "INEC", "NASS", "NLC"],
    answer: 1
  },
  {
    question: "The head of state in a parliamentary system is?",
    options: ["President", "Prime Minister", "Governor-General", "Chief Judge"],
    answer: 0
  },
  {
    question: "One advantage of democracy is that it?",
    options: ["Encourages public participation", "Ignores public opinion", "Promotes dictatorship", "Suppresses minorities"],
    answer: 0
  },
  {
    question: "Which of the following best describes a totalitarian government?",
    options: ["Freedom of speech is guaranteed", "The ruler controls all aspects of life", "Rule of law is supreme", "Power is decentralized"],
    answer: 1
  },
  {
    question: "Delegated legislation is also known as?",
    options: ["Statutory instruments", "Acts of Parliament", "Judicial laws", "Private bills"],
    answer: 0
  },
  {
    question: "In Nigeria, the judiciary is headed by?",
    options: ["Attorney General", "Chief Justice of Nigeria", "Solicitor-General", "President"],
    answer: 1
  },
  {
    question: "Civil liberty refers to?",
    options: ["Rights guaranteed by the constitution", "Duties to the state", "Obedience to leaders", "Freedom of government"],
    answer: 0
  },
  {
    question: "Which of the following is NOT an agent of political socialization?",
    options: ["Family", "School", "Army", "Media"],
    answer: 2
  },
  {
    question: "Universal adult suffrage means that?",
    options: ["Only men vote", "All qualified adults have the right to vote", "Only the rich can vote", "Voting is optional for women"],
    answer: 1
  },
  {
    question: "A by-election is conducted when?",
    options: ["There is a general election", "A seat becomes vacant between elections", "A government dissolves", "A party is formed"],
    answer: 1
  },
  {
    question: "A one-party state is characterized by?",
    options: ["Multiple political parties", "Competition among parties", "Only one legal political party", "No political participation"],
    answer: 2
  },
  {
    question: "In the Nigerian 1979 Constitution, the term limit for a president is?",
    options: ["Five years", "Four years", "Six years", "Unlimited"],
    answer: 1
  },
  {
    question: "Judicial independence is achieved when judges are?",
    options: ["Appointed by the public", "Free from political control", "Elected by parliament", "Appointed by soldiers"],
    answer: 1
  },
  {
    question: "The African Union replaced which organization?",
    options: ["ECOWAS", "OAU", "SADC", "UNESCO"],
    answer: 1
  },
  {
    question: "Nigeria became a member of the United Nations in?",
    options: ["1960", "1963", "1958", "1970"],
    answer: 0
  },
  {
    question: "Which of these is a regional organization in Africa?",
    options: ["ECOWAS", "NATO", "EU", "ASEAN"],
    answer: 0
  },
  {
    question: "Diplomacy refers to?",
    options: ["Peaceful management of international relations", "Use of force in politics", "National elections", "Military training"],
    answer: 0
  },
  {
    question: "The Cold War was a conflict between?",
    options: ["USA and USSR", "Britain and France", "China and Japan", "Nigeria and Ghana"],
    answer: 0
  },
  {
    question: "The Commonwealth is made up of countries that?",
    options: ["Speak French", "Were colonized by Britain", "Are in Europe", "Are in Asia"],
    answer: 1
  },
  {
    question: "Who appoints ministers in Nigeria?",
    options: ["Chief Justice", "President", "Senate President", "Governor"],
    answer: 1
  },
  {
    question: "Local government revenue sources include?",
    options: ["Grants and taxes", "Foreign loans only", "Petroleum export", "Tariff collection"],
    answer: 0
  },
  {
    question: "Who chairs the National Council of State in Nigeria?",
    options: ["The President", "The Vice President", "The Chief Justice", "The Senate President"],
    answer: 0
  },
  {
    question: "A referendum is used to?",
    options: ["Make constitutional decisions by citizens", "Select ministers", "Elect local chairmen", "Confirm presidential nominees"],
    answer: 0
  },
  {
    question: "A coup d’état means?",
    options: ["Legal change of government", "Forceful seizure of power by the military", "Election victory", "Peaceful protest"],
    answer: 1
  },
  {
    question: "The judiciary upholds the rule of law by?",
    options: ["Enforcing court decisions", "Ignoring the legislature", "Dissolving parliament", "Issuing decrees"],
    answer: 0
  },
  {
    question: "A constitution that is not written down in a single document is called?",
    options: ["Written", "Flexible", "Unwritten", "Rigid"],
    answer: 2
  },
  {
    question: "The head of the Commonwealth of Nations is?",
    options: ["King/Queen of Britain", "UN Secretary-General", "President of the USA", "Prime Minister of Britain"],
    answer: 0
  },
  {
    question: "Which of these principles guides Nigeria’s foreign policy?",
    options: ["Non-alignment", "Colonialism", "Apartheid", "Isolationism"],
    answer: 0
  }
  
    ], 
    
    //CRS questions here
    Crs: [
      
    ],
    
    
    Agriculture: [
      
    ],
      //Economics questions here
    Economics: [ 
      { 
        question: "The following are problems in economics except",
        options: ["what to produce", "for whom to produce for", "where to produce", "how to produce"],
        answer: 2,
    }, 
    {
    question: "Which of these is not a type of tax?",
    options: ["direct tax", "proportional tax", "fixed", "indirect"],
    answer: 2,
  }, 
  {
    question: "Which of the following is not a type of bar chart?",
    options: ["component bar chart", "multiple bar chat", "simple bar chart", "colourful bar chart"],
    answer: 3,
  }
    ],
    
    
    //Civic education questions here
    
    Civic_Education: [
      
    ],
    
    //data processing questions here
    Data_Processing: [
      
    ]
  };


  // CBT subject array
const subjects = [
  "Mathematics", "English", "Physics", "Chemistry", "Biology", "Economics", "Literature", "Crs", "Government", "Civic_Education", "Data_Processing", "Agriculture"
]
