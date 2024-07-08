from flask import Flask
from models import db
from views import views

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///attendance.db'
db.init_app(app)

app.register_blueprint(views)
app.static_folder = '../frontend'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
