import { User, Course, Enrollment, Progress } from "./definition";


export const users: User[] = [
{
id: "1",
email: "admin@musicacademy.com",
password: "admin123",
name: "Admin",
role: "admin",
createdAt: new Date("2025-01-01T08:00:00Z")
},
{
id: "2",
email: "teacher1@musicacademy.com",
password: "teacher123",
name: "Professeur John",
role: "teacher",
createdAt: new Date("2025-01-10T08:00:00Z")
},
{
id: "3",
email: "teacher2@musicacademy.com",
password: "teacher123",
name: "Professeur Sarah",
role: "teacher",
createdAt: new Date("2025-01-15T08:00:00Z")
},
{
id: "4",
email: "student1@musicacademy.com",
password: "student123",
name: "Élève Alice",
role: "student",
createdAt: new Date("2025-02-01T08:00:00Z")
},
{
id: "5",
email: "student2@musicacademy.com",
password: "student123",
name: "Élève Bob",
role: "student",
createdAt: new Date("2025-02-02T08:00:00Z")
}
];

export const courses: Course[] = [
{
id: "1",
title: "Guitar 101",
description: "Cours d'introduction à la guitare pour débutants.",
instrument: "Guitar",
teacherId: "2",
level: "Beginner",
schedule: "Lundi 10h-12h",
capacity: 10
},
{
id: "2",
title: "Piano Avancé",
description: "Cours de piano pour niveaux intermédiaires et avancés.",
instrument: "Piano",
teacherId: "3",
level: "Intermediate",
schedule: "Mercredi 14h-16h",
capacity: 8
},
{
id: "3",
title: "Batterie pour Tous",
description: "Apprenez à jouer de la batterie, pour tous les niveaux.",
instrument: "Drums",
teacherId: "2",
level: "All Levels",
schedule: "Vendredi 16h-18h",
capacity: 12
}
];

export const enrollments: Enrollment[] = [
{
id: "1",
studentId: "4",
courseId: "1",
enrollmentDate: new Date("2025-02-01T08:30:00Z"),
status: "active"
},
{
id: "2",
studentId: "5",
courseId: "1",
enrollmentDate: new Date("2025-02-02T09:00:00Z"),
status: "active"
},
{
id: "3",
studentId: "4",
courseId: "2",
enrollmentDate: new Date("2025-02-01T08:45:00Z"),
status: "pending"
}
];

export const progresses: Progress[] = [
{
id: "1",
studentId: "4",
courseId: "1",
date: new Date("2025-02-01T12:00:00Z"),
evaluation: "Satisfactory",
comments: "Alice shows good understanding of basic chords."
},
{
id: "2",
studentId: "5",
courseId: "1",
date: new Date("2025-02-02T12:00:00Z"),
evaluation: "Needs Improvement",
comments: "Bob needs more practice on strumming technique."
},
{
id: "3",
studentId: "4",
courseId: "2",
date: new Date("2025-02-01T16:00:00Z"),
evaluation: "Good",
comments: "Alice is progressing well with scales."
}
];
