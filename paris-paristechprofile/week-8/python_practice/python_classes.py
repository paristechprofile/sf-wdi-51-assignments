class Dog():
    totalDogs = 0
    def __init__ (self,n='',a=0):
        self.name = n
        self.age = a
        Dog.totalDogs+=1 

    def bark_hello(self):
        print(f'woof! I am called {self.name} and I am {self.age} years old')

gracie = Dog('gracie')
gracie.bark_hello()

lassie = Dog('lassie',1)
lassie.bark_hello()
