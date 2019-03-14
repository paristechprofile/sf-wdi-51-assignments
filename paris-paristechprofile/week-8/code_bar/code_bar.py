class Member:
    def __init__(self, full_name):
        self.full_name = full_name
    
    def introduce(self):
        print(f'Hi, my name it {self.full_name}')

class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason

class Instructor(Member):
    def __init__(self, full_name, bio):
        Member.__init__(self, full_name)
        self.bio = bio
        self.skills = []
    
    def add_skill(self, new_skill):
        self.skills.append(new_skill)

class Workshops:
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.students = []
        self.instructors = []

    def add_participant(self, participant):
        if isinstance(participant, Instructor):
            self.instructors.append(participant)
        elif isinstance(participant, Student):
            self.students.append(participant)
    
    def print_details(self, details):
        print(f'Workshop - {self.date} - {self.subject}')
        print('')
        print('Students')
        for i in range(len(self.students)):
            print(f'{i + 1}. {self.students[i].full_name} - {self.students[i].bio}')
        print('')
        print('Instructors')
        for i in range(len(self.instructors)):
            print(f'{i + 1}. {instructor.full_name} - {','.join(self.instructors[i].skills}')

ga_workshop = Workshops("03/12/2019", "Intro to Python")

paris = Student("Paris Taylor", "I am a new programmer looking to learn python")
taylor = Student("I am Taylor Paris", "I'm amazed by programming. It's time I learn")
brock = Instructor("Brock", "I'm finally catching onto the Pokemon craze.")
brock.add_skill("Catching pokemon")
brock.add_skill("JavaScript")
Isha = Instructor("Isha", "I am both brilliant and empathetic ")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details(workshop)