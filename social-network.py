class User:
    # Define the fields and methods for your object here.
    def _init_(self,name):
        self.user_name = name
        self.user_id = []
        self.connections = []

    def user_id(self, number):
        self.user_id = number

    def connections(self, friends):
        self.connections = friends
        self.friends.append(friends)

    def getfriends (self):
        return

class Network:
    # Define the fields and methods for your object here.
    def users(self,list):
        list = ["sam.r", "anwenburns", "ashley.p", "joejoe", "cait.len"]

def main():
    # Define the program flow for your user interface here.
    


# Runs your program.
if __name__ == '__main__':
    main():
