const cl=console.log;

// 1
// let student1 = {
//     id: 101,
//     name: "Rahul",
//     age: 22,
//     course: "Angular",
//     isActive: true
// }
// let student1:{
//     id:number;
//     name:string;
//     age:number;
//     course:string;
//     isActive:boolean;
// }
//  var student1:{
//     id: number;
//     name: string;
//     age: number;
//     course: string;
//     isActive: boolean;
// } = {
//     id: 101,
//     name: "Rahul",
//     age: 22,
//     course: "Angular",
//     isActive: true
// };

// cl(student1);

// 2
let employee1:employee1 = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: "IT", // possible values: "IT", "HR", "Finance", "Marketing"
    isPermanent: true
};
type employee1 ={
    empId:number;
    name:string;
    salary:number;
    department:"IT"|"HR"|"Finance"|"Marketing";
    isPermanent:boolean;
};
cl(employee1)

// 3
let book1 : book1= {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};

type book1={
    id:number;
    title:string;
    author:string;
    price:number;
    isAvailable:boolean;
}
cl(book1)
// 4
let mobile1 :mobile1 = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: "Black", // possible values: "Black", "White", "Blue", "Silver"
    storage: 256
};

type mobile1={
    brand:string;
    model:string;
    price:number;
    color:"Black"|"White"|"Blue"|"Silver";
    storage:number;
}
// 5

let customer1:customer1 = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
type customer1={
    id:number;
    name:string;
    email:string;
    city:string;
    isVerified:boolean;
}
cl(customer1)

// 6
let laptop1:laptop1 = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};
type laptop1={
    brand:string;
    ram:number;
    storage:number;
    price:number;
    inStock:boolean;
}
cl(laptop1)

// 7
let movie1:movie1 = {
    title: "Dangal",
    rating: 8.5,
    language: "Hindi", // possible values: "Hindi", "English", "Marathi", "Tamil"
    releaseYear: 2016,
    isReleased: true
};
type movie1={
    title:string;
    rating:number;
    language:"Hindi"|"English"|"Marathi"|"Tamil";
    releaseYear:number;
    isReleased:boolean;
}
cl(movie1)
// 8
let account1:account1 = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: "Savings", // possible values: "Savings", "Current", "Salary"
    isActive: true
};

type account1={
    accountNumber:number;
    holderName:string;
    balance:number;
    accountType:"Savings"|"Current"|"Salary";
    isActive:boolean;
}
cl(account1)

// 9
let course1:course1 = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};

type course1 = {
    courseName:string;
    duration:number;
    fees:number;
    technologies:("MongoDB"|"Express"|"Angular"|"Node.js")[];
}
cl(course1)

// 10

let vehicle1:vehicle1 = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: "Petrol", // possible values: "Petrol", "Diesel", "Electric", "CNG", "Hybrid"
    isAvailable: true
};

type vehicle1={
    brand:string;
    model:string;
    price:number;
    fuelType:"Petrol"|"Diesel"|"Electric"|"CNG"|"Hybrid";
    isAvailable:boolean;
}
cl(vehicle1)

// 11
let teacher1 : teacher1 = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};

type teacher1={
    id:number;
    name:string;
    subject:string;
    experience:number;
    skills:("JavaScript"|"TypeScript"|"Angular")[];
}
cl(teacher1)

//12
let order1 = {
    orderId: 1001,
    amount: 2500,
    status: "Pending", // possible values: "Pending", "Confirmed", "Delivered", "Cancelled"
    paymentMode: "UPI" // possible values: "Cash", "UPI", "Card", "NetBanking"
};
type order1={
    orderId:number;
    amount:number;
    status:"Pending"|"Confirmed"|"Delivered"|"Cancelled";
    paymentMode:"UPI"|"Cash"|"Card"|"NetBanking";
}
cl(order1)

// 13

let user1:user1 = {
    username: "rahul123",
    email: "rahul@example.com",
    role: "BUYER", // possible values: "ADMIN", "SUPER_ADMIN", "BUYER"
    isVerified: true
};
type user1={
    username:string;
    email:string;
    role:"BUYER"|"ADMIN"|"SUPER_ADMIN";
    isVerified:boolean;
}
cl(user1)

// 14
let product1 : product1= {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: "Black", // possible values: "Black", "White", "Blue"
    quantity: 10,
    category: "Electronics" // possible values: "Electronics", "Fashion", "Sports", "Beauty"
};
type product1={
    id:number;
    name:string;
    price:number;
    color:"Black"|"White"|"Blue";
    quantity:number;
    category:"Electronics"|"Fshion"|"Sports"|"Beauty";
}
cl(product1)

// 15

let attendance1:attendance1 = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: "Present", // possible values: "Present", "Absent", "Leave"
    workingHours: 8
};
type attendance1={
    employeeName:string;
    date:string;
    status:"Present"|"Absent"|"Leave";
    workingHours:number;
}
cl(attendance1)

// 16

let shoppingUser1:shoppingUser1 = {
    id: 101,
    name: "Aakash",
    role: "BUYER", // possible values: "ADMIN", "BUYER", "SELLER"
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    }
};
type shoppingUser1={
    id:number;
    name:string;
    role:"BUYER"|"ADMIN"|"SELLER";
    address:{
        city:string;
        state:string;
        pincode:number;
    }
}
cl(shoppingUser1)

// 17

let inventory1:inventory1 = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: "LOW_STOCK", // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
};
type inventory1={
    productId:number;
    name:string;
    price:number;
    stock:number;
    status:"LOW_STOCK"|"IN_STOCK"|"OUT_OF_STOCK";
}
cl(inventory1)

// 18

let employeeProfile1:employeeProfile1 = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};
type employeeProfile1={
    id:number;
    name:string;
    email:string;
    phone:string;
    skills:("Angular"|"RxJS"|"TypeScript")[];
    experience:number;
}
cl(employeeProfile1)

// 19

let cartItem1:cartItem1 = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};
type cartItem1={
    productId:number;
    productName:string;
    price:number;
    quantity:number;
    discount:number;
}
cl(cartItem1)

// 20

let payment1 : payment1 = {
    transactionId: "TXN1001",
    amount: 5000,
    mode: "UPI", // possible values: "CASH", "UPI", "CARD", "NET_BANKING"
    status: "SUCCESS", // possible values: "SUCCESS", "FAILED", "PENDING"
    date: "2026-10-20"
};
type payment1={
    transactionId:string;
    amount:number;
    mode:"UPI"|"CASH"|"CARD"|"NET_BANKING";
    status:"SUCCESS"|"FAILED"|"PENDING";
    date:string;
}
cl(payment1)

// 21

let patient1 : patient1 = {
    patientId: 301,
    name: "Suresh",
    age: 45,
    status: "UNDER_TREATMENT", // possible values: "ADMITTED", "DISCHARGED", "UNDER_TREATMENT"
    doctor: {
        name: "Dr. Mehta",
        specialization: "Cardiology"
    }
};
type patient1={
    patientId:number;
    name:string;
    age:number;
    status:"UNDER_TREARMENT"|"ADMITTED"|"DISCHARGED"|"UNDER_TREATMENT";
    doctor:{
        name:string;
        specialization:string;
    }
}
cl(patient1)

// 22

let libraryBook1:libraryBook1 = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: "AVAILABLE", // possible values: "AVAILABLE", "ISSUED", "LOST"
    tags: ["Programming", "Software Design"]
};
type libraryBook1={
    id:number;
    title:string;
    author:string;
    status:"AVAILABLE"|"ISSUED"|"LOST";
    tags:("Programming"|"Software Design")[];
}
cl(libraryBook1)

// 23

let foodOrder1:foodOrder1 = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: "PREPARING", // possible values: "PLACED", "PREPARING", "READY", "DELIVERED"
};
type foodOrder1={
    orderId:number;
    customerName:string;
    items:("Pizza"|"Burger"|"Juice")[];
    totalAmount:number;
    status:"PLACED"|"PREPARING"|"READY"|"DELIVERED";
}
cl(foodOrder1)

// 24

let department1:department1 = {
    departmentId: 10,
    name: "Development",
    manager: {
        name: "Amit",
        email: "amit@example.com"
    },
    employees: [
        { id: 1, name: "Raj", salary: 40000 },
        { id: 2, name: "Simran", salary: 45000 }
    ]
};
type department1={
    departmentId:number;
    name:string;
    manager:{
        name:string;
        email:string;
    },
    employees:{
        id:number;
        name:string;
        salary:number;
    }[];
}
cl(department1)

// 25

let travelBooking1 = {
    bookingId: "TR101",
    passengerName: "Manoj",
    source: "Pune",
    destination: "Mumbai",
    travelDate: "2026-11-10",
    status: "BOOKED", // possible values: "BOOKED", "CANCELLED", "COMPLETED"
};
type travelBooking1={
    bookingId:string;
    passengerName:string;
    source:string;
    destination:string;
    status:"BOOKED"|"CANCELLED"|"COMLETED"
}
cl(travelBooking1)

// 26

let studentResult1:studentResult1 = {
    studentId: 101,
    name: "Pooja",
    marks: [
        { subject: "JavaScript", score: 85 },
        { subject: "TypeScript", score: 90 },
        { subject: "Angular", score: 78 }
    ],
    percentage: 84.33,
    result: "PASS" // possible values: "PASS", "FAIL", "ATKT"
};
type studentResult1={
    studentId:number;
    name:string;
    marks:{
        subject:string;
        score:number;
    }[];
    percentage:number;
    result :"PASS"|"FAIL"|"ATKT";
}
cl(studentResult1)

// 27

let property1:property = {
    propertyId: 201,
    type: "Flat", // possible values: "Flat", "House", "Plot"
    price: 4500000,
    area: 1000,
    location: {
        city: "Pune",
        locality: "Wakad"
    },
    status: "Available" // possible values: "Available", "Sold", "Rented"
};
type property={
    propertyId:number;
    type:"Flat"|"House"|"Plot";
    price:number;
    area:number;
    location:{
        city:string;
        locality:string;
    }
    status:"Available"|"Sold"|"Rented";
}
cl(property1)

// 28

let socialPost1:socialPost1 = {
    postId: 100,
    author: "Ravi",
    content: "Learning TypeScript",
    likes: 25,
    comments: ["Great", "Keep learning"],
    visibility: "PUBLIC" // possible values: "PUBLIC", "PRIVATE", "FRIENDS"
};
type socialPost1={
    postId:number;
    author:string;
    content:string;
    likes:number;
    comments:("Great"|"Keep learning")[];
    visibility:"PUBLIC"|"PRIVATE"|"FRIENDS";
}
cl(socialPost1)

// 29

let insurance1:insurance1 = {
    policyNumber: "POL1001",
    holderName: "Mahesh",
    type: "HEALTH", // possible values: "LIFE", "HEALTH", "VEHICLE"
    premium: 12000,
    coverage: 500000,
    nominee: "Sunita"
};
type insurance1={
    policyNumber:string;
    holderName:string;
    type:"LIFE"|"HEALTH"|"VEHICLE";
    premium:number;
    coverage:number;
    nominee:string;
}
cl(insurance1)

// 30

let enrollment1 : enrollment= {
    enrollmentId: 5001,
    student: {
        id: 101,
        name: "Rahul"
    },
    course: {
        id: 201,
        name: "Angular",
        fees: 15000
    },
    status: "ENROLLED", // possible values: "ENROLLED", "COMPLETED", "DROPPED"
};
type enrollment={
    enrollmentId:number;
    student:{
        id:number;
        name:string;
    },
    course:{
        id:number;
        name:string;
        fees:number;
    }
    status:"ENROLLED"|"COMPLETED"|"DROPPED"
}
cl(enrollment1)

// 31

let vehicleService1:vehicleService = {
    serviceId: 301,
    vehicleNumber: "MH12AB1234",
    serviceType: "GENERAL", // possible values: "GENERAL", "REPAIR", "OIL_CHANGE"
    cost: 5000,
    partsUsed: [
        { name: "Oil Filter", price: 500 },
        { name: "Engine Oil", price: 1500 }
    ]
};
type vehicleService={
    serviceId:number;
    vehicleNumber:string;
    serviceType:"GENERAL"|"REPAIR"|"OIL_CHANGE";
    cost:number;
    partsUsed:{
        name:string;
        price:number;
    }[];
}
cl(vehicleService1)

// 32

let onlineExam1:onlineExam = {
    examId: 901,
    studentName: "Kavita",
    durationMinutes: 60,
    status: "NOT_STARTED", // possible values: "NOT_STARTED", "IN_PROGRESS", "SUBMITTED"
    questions: [
        {
            question: "What is TypeScript?",
            options: ["Language", "Database", "Browser"],
            marks: 2
        }
    ]
};
type onlineExam={
    examId:number;
    studentName:string;
    durationMinutes:number;
    status:"NOT_STARTED"|"IN_PROGRESS"|"SUBMITTED";
    questions:{
        question:string;
        options:string[];
        marks:number;
    }[];
}
cl(onlineExam1)

// 33

let project1:project = {
    projectId: 1001,
    projectName: "HRMS",
    status: "ACTIVE", // possible values: "PLANNED", "ACTIVE", "COMPLETED"
    teamMembers: [
        { name: "Amit", role: "Developer" },
        { name: "Priya", role: "Tester" }
    ],
    technologies: ["Angular", "Node.js", "MongoDB"]
};
type project={
    projectId:number;
    projectName:string;
    status:"PLANNED"|"ACTIVE"|"COMPLETED";
    teamMembers:{
        name:string;
        role:string;
    }[];
    technologies:string[];
}
cl(project1)

// 34

let subscription1:subscription = {
    userId: 101,
    plan: "PREMIUM", // possible values: "FREE", "BASIC", "PREMIUM"
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    autoRenew: true
};
type subscription={
    userId:number;
    plan:"FREE"|"BASIC"|"PREMIUM";
    startDate:string;
    endDate:string;
    autoRenew:boolean;
}
cl(subscription1)
// // 35

let warehouse1:warehouse = {
    warehouseId: 1,
    name: "Pune Warehouse",
    location: "Pune",
    products: [
        { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
        { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
    ]
};
type warehouse={
    warehouseId:number;
    name:string;
    location:string;
    products:{
        productId:number;
        name:string;
        quantity:number;
        reorderLevel:number;
    }[]
}
cl(warehouse1)

// 36
let ecomOrder1 = {
    orderId: "ORD1001",
    customer: {
        id: 101,
        name: "Rahul",
        email: "rahul@example.com"
    },
    items: [
        { productId: 1, name: "Laptop", price: 60000, quantity: 1 },
        { productId: 2, name: "Mouse", price: 1000, quantity: 2 }
    ],
    shippingAddress: {
        street: "MG Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    },
    orderStatus: "CONFIRMED", // possible values: "PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "RETURNED"
    paymentStatus: "PAID", // possible values: "PENDING", "PAID", "REFUNDED"
    couponCode: "SAVE10"
};
type EcomOrder={
    orderId:string;
    customer:{
        id:number;
        name:string;
        email:string;
    };
    items:{
        productId:number;
        name:string;
        price:number;
        quantity:number;
    }[];
    shippingAddress:{
        street:string;
        city:string;
        state:string;
        pincode:number;
    };
    oorderStatus:"PLACED"|"CONFIRMED"|"SHIPPED"|"DELIVERED"|"RETURNED";
    paymentStatus:"PENDING"|"PAID"|"REFUNDED";
    couponCode:string;
};
cl(ecomOrder1)

// 37

let instituteStudent1 = {
    studentId: 101,
    personalInfo: {
        fullName: "Aakash Patil",
        email: "aakash@example.com",
        phone: "9876543210",
        address: {
            city: "Udgir",
            state: "Maharashtra"
        }
    },
    batch: {
        batchId: 10,
        batchName: "Angular Evening Batch",
        startDate: "2026-11-15"
    },
    courses: ["JavaScript", "TypeScript", "Angular"],
    status: "ACTIVE" // possible values: "ACTIVE", "INACTIVE", "PLACED"
};
type instituteStudent={
    studentId:number;
    personalInfo:{
        fullName:string;
        email:string;
        phone:string;
        address:{
            city:string;
            state:string;
        }
    }
    batch:{
        batchId:number;
        batchName:string;
        startDate:string;
    },
    courses:string[];
    status:"ACTIVE"|"INACTIVE"|"PLACED;"
}
cl(instituteStudent1)

// 38

let machineTest1 : machineTest= {
    testId: 501,
    testName: "TypeScript Objects",
    student: {
        id: 101,
        name: "Rahul"
    },
    facultyName: "Amit",
    status: "COMPLETED_AND_EXPLAINED", // possible values: "NOT_ATTENDED", "ATTENDED", "NOT_COMPLETED", "COMPLETED_NOT_EXPLAINED", "COMPLETED_AND_EXPLAINED"
    performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
    score: 85,
    totalMarks: 100,
    feedback: "Good understanding of interfaces",
    technologies: ["TypeScript", "JavaScript"]
};

type machineTest={
    testId:number;
    testName:string;
    student:{
        id:number;
        name:string;
    }
    facultyName:string;
    status:"NOT_ATTENDED"|"ATTENDED"|"NOT_COMPLETED"|"COMPLETED_NOT_EXPLAINED"|"COMPLETED_AND_EXPLAINED";
    performance:"VERT_POOR"|"POOR"|"GOOD"|"VERY_GOOD"|"EXCELLENT";
    score:number;
    totalMarks:number;
    feedback:string;
    technologies:string[];
}
cl(machineTest1)

// 39

let payroll1:payroll = {
    employee: {
        id: 201,
        name: "Priya",
        department: "Development",
        joiningDate: "2024-06-01"
    },
    salary: {
        basic: 40000,
        hra: 10000,
        allowances: 5000,
        deductions: 3000,
        bonus: 2000
    },
    month: "October 2026",
    status: "GENERATED" // possible values: "GENERATED", "PAID", "ON_HOLD"
};

type payroll={
    employee:{
        id:number;
        name:string;
        department:string;
        joiningDate:string;
    }
    salary:{
        basic:number;
        hra:number;
        allowances:number;
        deductions:number;
        bonus:number;
    }
    month:string;
    status:"GENERATED"|"PAID"|"ON_HOLD";   
}
cl(payroll1)

// 40

let loanApplication1:loanApplication = {
    applicationId: "LN1001",
    applicant: {
        name: "Mahesh",
        age: 35,
        monthlyIncome: 80000,
        employmentType: "SALARIED" // possible values: "SALARIED", "SELF_EMPLOYED"
    },
    loan: {
        type: "HOME", // possible values: "HOME", "PERSONAL", "EDUCATION"
        requestedAmount: 2500000,
        tenureYears: 20,
        interestRate: 8.5
    },
    documents: [
        { documentName: "PAN Card", uploaded: true },
        { documentName: "Salary Slip", uploaded: true },
        { documentName: "Bank Statement", uploaded: false }
    ],
    status: "UNDER_REVIEW" // possible values: "APPLIED", "UNDER_REVIEW", "APPROVED", "REJECTED"
};
type loanApplication={
    applicationId:string;
    applicant:{
        name:string;
        age:number;
        monthlyIncome:number;
        employmentType:"SALARIED"|"SELF_EMPLOYED";
    },
    loan:{
        type:"HOME"|"PERSONAL"|"EDUCATION";
        requestedAmount:number;
        tenureYears:number;
        interestRate:number;
    },
    documents:{
        documentName:string;
        uploaded:boolean;
    }[]
    status:"APPLIED"|"UNDER_REVIEW"|"APPROVED"|"REJECTED";
}
cl(loanApplication1)

// 41

let apiResponse1:apiResponse = {
    success: true,
    message: "Users fetched successfully",
    data: {
        users: [
            {
                id: 1,
                name: "Ravi",
                role: "ADMIN", // possible values: "ADMIN", "USER", "MANAGER"
                permissions: ["READ", "WRITE", "DELETE"]
            },
            {
                id: 2,
                name: "Amit",
                role: "USER",
                permissions: ["READ"]
            }
        ],
        pagination: {
            currentPage: 1,
            pageSize: 10,
            totalRecords: 2,
            totalPages: 1
        }
    },
    error: null
};
type Role = "ADMIN"|"USER"|"MANAGER";
type Permissions = ("READ"|"WRITE"|"DELETE")[];
type apiResponse={
    success:boolean;
    message:string;
    data:{
        users:{
            id:number;
            name:string;
            role:"ADMIN"|"USER"|"MANAGER";
            permissions:Permissions;
        }[]
        pagination:{
            currentPage:number;
            pageSize:number;
            totalRecords:number;
            totalPages:number;
        }
    }
    error:string | null;
}
cl(apiResponse1)

// 42

let projectTask1 : ProjectTask= {
    projectId: 101,
    projectName: "HRMS",
    tasks: [
        {
            taskId: 1,
            title: "Create Login API",
            assignedTo: { id: 10, name: "Amit" },
            priority: "HIGH", // possible values: "LOW", "MEDIUM", "HIGH", "CRITICAL"
            status: "IN_PROGRESS", // possible values: "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"
            dueDate: "2026-11-01"
        },
        {
            taskId: 2,
            title: "Create Login UI",
            assignedTo: { id: 11, name: "Priya" },
            priority: "MEDIUM",
            status: "TODO",
            dueDate: "2026-11-05",
            dependencies: [1]
        }
    ]
};

type Priority= "LOW"|"MEDIUM"|"HIGH"|"CRITICAL";
type TaskStatus = "TODO"|"IN_PROGRESS"|"IN_REVIEW"|"DONE";
type AssignedTo={
    id:number;
    name:string;
}
type Task={
    taskId:number;
    title:string;
    assignedTo:AssignedTo;
    priority:Priority;
    status:TaskStatus;
    dueDate:string;
    dependencies?:number[];
}
type ProjectTask={
    projectId:number;
    projectName:string;
    tasks:Task[];
}
cl(projectTask1)

// 43

let hotelBooking1:hotelBooking= {
    bookingId: "HB1001",
    guest: {
        name: "Neha",
        email: "neha@example.com",
        phone: "9876543210"
    },
    hotel: {
        name: "City Hotel",
        location: "Mumbai",
        roomNumber: 205,
        amenities: ["WiFi", "AC", "Breakfast"]
    },
    stay: {
        checkIn: "2026-11-01",
        checkOut: "2026-11-04",
        guests: 2
    },
    totalAmount: 15000,
    status: "RESERVED" // possible values: "RESERVED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"
};

type hotelBooking={
    bookingId:string;
    guest:{
        name:string;
        email:string;
        phone:string;
    }
    hotel:{
        name:string;
        location:string;
        roomNumber:number;
        amenities:string[];
    }
    stay:{
        checkIn:string;
        checkOut:string;
        guests:number;
    }
    totalAmount:number;
    status:"RESERVED"|"CHECKED_IN"|"CHECKED_OUT"|"CANCELLED";   
}
cl(hotelBooking1)

// 44

let advancedCart1 : advancedCart= {
    cartId: "CART101",
    customerId: 201,
    items: [
        {
            productId: 1,
            name: "T-Shirt",
            unitPrice: 799,
            quantity: 2,
            options: {
                color: "Black",
                size: "L"
            }
        },
        {
            productId: 2,
            name: "Cap",
            unitPrice: 399,
            quantity: 1
        }
    ],
    discount: {
        type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
        value: 10,
        couponCode: "SAVE10"
    },
    shippingFee: 50,
    currency: "INR" // possible values: "INR", "USD"
};

type advancedCart={
    cartId:string;
    customerId:number;
    items:{
        productId:number;
        name:string,
        unitPrice:number,
        quantity:number,
        options?: {
             color:string,
             size:string;
            }
        }[];
        discount:{
            type:"PERCENTAGE"|"FIXED";
            value:number;
            couponCode:string;
        }
        shippingFee:number;
        currency:"INR"|"USD";
    };  
     cl(advancedCart1)    

// 45

let authSession1:authSession = {
    user: {
        id: 1,
        username: "admin01",
        email: "admin@example.com",
        role: "SUPER_ADMIN" // possible values: "ADMIN", "SUPER_ADMIN", "USER"
    },
    authentication: {
        provider: "LOCAL", // possible values: "LOCAL", "GOOGLE", "GITHUB"
        accessToken: "sample-access-token",
        expiresIn: 3600,
        twoFactorEnabled: true
    },
    devices: [
        {
            deviceId: "DEV001",
            deviceName: "Windows Laptop",
            lastLogin: "2026-10-22",
            trusted: true
        }
    ],
    lastPasswordChange: "2026-09-01"
};
type authSession={
     user: {
        id: number;
        username:string;
        email: string;
        role: "ADMIN"|"SUPER_ADMIN"|"USER";
    },
    authentication: {
        provider: "LOCAL"|"GLOBAL"|"GOOGLE"|"GITHUB"; 
        accessToken:string;
        expiresIn:number;
        twoFactorEnabled:boolean;
    }
    devices:{
        deviceId:string;
        deviceName:string;
        lastLogin:string;
        trusted:boolean;
    }[]
    lastPasswordChange:string;
}
cl(authSession1)

// 46

// let insuranceClaim1 = {
//     claimId: "CL1001",
//     policyNumber: "POL1001",
//     claimant: {
//         name: "Rohit",
//         relationship: "SELF" // possible values: "SELF", "SPOUSE", "CHILD", "PARENT"
//     },
//     claimAmount: 100000,
//     approvedAmount: 80000,
//     incident: {
//         date: "2026-10-01",
//         description: "Hospital admission",
//         location: "Pune"
//     },
//     documents: [
//         { name: "Medical Bills", verified: true },
//         { name: "Discharge Summary", verified: false }
//     ],
//     status: "DOCUMENTS_REQUIRED" // possible values: "SUBMITTED", "DOCUMENTS_REQUIRED", "APPROVED", "REJECTED", "SETTLED"
// };

// 47
// let transaction1 = {
//     transactionId: "TX5001",
//     type: "TRANSFER", // possible values: "CREDIT", "DEBIT", "TRANSFER"
//     amount: {
//         value: 10000,
//         currency: "INR" // possible values: "INR", "USD", "EUR", "GBP"
//     },
//     sender: {
//         accountId: "ACC101",
//         name: "Amit"
//     },
//     receiver: {
//         accountId: "ACC202",
//         name: "Rahul"
//     },
//     timestamp: "2026-10-23T10:30:00",
//     metadata: {
//         source: "Internet Banking",
//         referenceId: "REF1001"
//     }
// };

// 48
// let hrmsEmployee1 = {
//     employeeId: "EMP1001",
//     personalDetails: {
//         firstName: "Amit",
//         lastName: "Sharma",
//         dateOfBirth: "1995-05-15",
//         contact: {
//             email: "amit@example.com",
//             phone: "9876543210"
//         },
//         address: {
//             current: "Pune, Maharashtra",
//             permanent: "Udgir, Maharashtra"
//         }
    // },
    // employmentDetails: {
    //     department: "IT",
    //     designation: "Software Developer",
    //     joiningDate: "2025-01-10",
    //     status: "ACTIVE", // possible values: "PROBATION", "ACTIVE", "NOTICE_PERIOD", "RESIGNED"
    //     previousExperience: 2
    // },
    // compensation: {
    //     annualCTC: 600000,
    //     monthlyGross: 50000,
    //     salaryComponents: [
    //         { name: "Basic", amount: 25000 },
    //         { name: "HRA", amount: 15000 },
    //         { name: "Allowance", amount: 10000 }
    //     ]
    // },
    // documents: [
    //     {
    //         documentType: "PAN",
    //         fileName: "pan.pdf",
    //         uploadedAt: "2025-01-10",
    //         verified: true
    //     },
//         {
//             documentType: "Degree Certificate",
//             fileName: "degree.pdf",
//             uploadedAt: "2025-01-10",
//             verified: false
//         }
//     ]
// };

// 49
// let batchReport1 = {
//     batch: {
//         batchId: 10,
//         batchName: "Angular Evening",
//         faculty: "Amit",
//         students: [
//             { studentId: 1, name: "Rahul", email: "rahul@example.com" },
//             { studentId: 2, name: "Priya", email: "priya@example.com" }
//         ]
//     },
//     test: {
//         testId: 501,
//         title: "TypeScript Interfaces",
//         date: "2026-10-20",
//         totalMarks: 100,
//         technologies: ["TypeScript", "JavaScript"]
//     },
//     results: [
//         {
//             studentId: 1,
//             attendance: "ATTENDED", // possible values: "ATTENDED", "ABSENT"
//             score: 85,
//             performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
//             codeCompleted: true,
//             explainedToFaculty: true,
//             feedback: "Good problem-solving"
//         },
//         {
//             studentId: 2,
//             attendance: "ABSENT",
//             codeCompleted: false,
//             explainedToFaculty: false
//         }
//     ],
//     summary: {
//         totalStudents: 2,
//         attended: 1,
//         absent: 1,
//         averageScore: 85
//     }
// };

// 50
// let completeProduct1 = {
//     id: "PRD1001",
//     name: "Smart Watch",
//     description: "Fitness tracking smart watch",
//     category: {
//         id: 10,
//         name: "Electronics",
//         parentCategory: "Wearables"
//     },
//     pricing: {
//         basePrice: 5000,
//         sellingPrice: 3999,
//         taxPercentage: 18,
//         currency: "INR", // possible values: "INR", "USD"
//         discount: {
//             type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
//             value: 20,
//             validUntil: "2026-12-31"
//         }
//     },
    // inventory: {
    //     sku: "WATCH-BLK-001",
    //     stock: 25,
    //     warehouseId: 101,
    //     status: "IN_STOCK" // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
    // },
    // specifications: [
    //     { name: "BatteryLife", value: "7 days" },
    //     { name: "WaterResistant", value: true },
    //     { name: "DisplaySize", value: 1.8 }
    // ],
    // variants: [
    //     {
    //         variantId: "VAR001",
    //         color: "Black", // possible values: "Black", "Blue", "White"
    //         priceAdjustment: 0,
    //         available: true
    //     },
    //     {
    //         variantId: "VAR002",
    //         color: "Blue",
    //         priceAdjustment: 200,
    //         available: true
    //     }
//     ],
//     shipping: {
//         methods: ["STANDARD", "EXPRESS"], // possible values: "STANDARD", "EXPRESS", "SAME_DAY"
//         returnable: true,
//         returnDays: 7
//     },
//     reviews: [
//         {
//             userId: 201,
//             rating: 5,
//             comment: "Excellent product",
//             date: "2026-10-20"
//         },
//         {
//             userId: 202,
//             rating: 4,
//             date: "2026-10-21"
//         }
//     ],
//     lifecycle: "ACTIVE" // possible values: "DRAFT", "ACTIVE", "DISCONTINUED"
// };