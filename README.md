# Osiris-backend

Frontend code for Osiris, a React-Redux single page web application (git repo for backend here https://github.com/Shilcof/osiris-backend) where users can sign up and log in to create listings for items that they want to be rehomed, which are stored in a database handled in the backend by Ruby on Rails.

The app features an implementation of infinite scroll to dynamically load in listings as the user views the listings page.

## Installation

Osiris was developed using Reactt-Redux and Ruby on Rails.

To run Osiris on your machine, you must first download the files from this repository and the backend. On the backend you must change into the main directory in your terminal.

Then you must use bundler to install the required gems.

```bash
bundle install
```

To set up the database for the application and seed it with dummy data, you must run:

```bash
rails db:migrate && rails db:seed
```

To prepare the frontend, you must then enter the frontend's main folder and run:

```bash
npm i
```

## Usage

To run the application on your computer you can host it with:

```bash
rails s
```

and then in the front end directory, run:

```bash
npm start
```

You will then be prompted to host the server on another port to not conflict with the rails server.

To stop hosting the aplication, simply enter control + 'C' into the terminal where it is running.

## Contributing
Pull requests are welcome. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).