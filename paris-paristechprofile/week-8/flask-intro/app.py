# Import Flask class from flask library. (Note the upper/lowercase convention.)
from flask import Flask,  render_template

# Initialize an instance of the Flask class.
# This starts the website!
app = Flask(__name__)

# The default URL ends in / ("my-website.com/").
# Could be instead "my-website.com/about" or anything - more on this later.
@app.route('/')

# Function that returns the page: Display "Hello, World!"
def index():
    return render_template('index.html', greeting='Hello, World!')

@app.route('/sayhi/<username>')
def hello(username):
    return "Hello {}".format(username)
# Run the app when the program starts!
if __name__ == '__main__':
    app.run(debug=True)