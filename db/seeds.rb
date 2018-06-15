# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Picture.destroy_all
User.create([{first_name: "Demo", last_name: "User", email: "DemoUser@demo.user", password: "password"}])



# pictures_data is an array with index coresponding to their projects
pictures_data = [
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030546/Project1/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030394/Project1/raasrendering-12085bcc-135e-477d-a70b-0d15d9935f7d-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030392/Project1/raasrendering-302a88cc-69cd-4d7a-bac4-26c68808ebe0-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030391/Project1/raasrendering-80ab85a5-c2cb-45ed-ba6e-44560019123f-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/faculty-building2-rvt-2017-jan-25-01-30-29pm-000-3d-view-11-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/faculty-building2-rvt-2017-jan-25-09-25-35am-000-3d-view-39-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/faculty-building2-rvt-2017-jan-24-01-45-40pm-000-3d-view-8-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/5-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030406/Project2/4-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030417/Project3/cover.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030420/Project3/32123-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030418/Project3/faculty-building3-rvt-2017-oct-27-02-01-38pm-000-3d-view-3-jpeg-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030417/Project3/faculty-building3-rvt-2017-oct-27-03-01-26pm-000-3d-view-15-jpeg-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030417/Project3/faculty-building3-rvt-2017-oct-27-01-58-59pm-000-3d-view-40-jpeg-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/brashlessdcmotor-5-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/raasrendering-e1da5883-f4d4-45cc-81e4-94e84e2a17ad-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/raasrendering-677372c0-12bd-42d6-8b8e-4556be3569ec-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/brashlessdcmotor-7-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/raasrendering-6705e70f-6aba-4085-b951-a1bed68aec3e-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030427/Project4/brashlessdcmotor-6-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030592/Project5/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030592/Project5/raasrendering-f3b358e0-61c6-40fc-8742-a6dba60f0d55-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030592/Project5/raasrendering-fb1f0b49-372c-407e-89b7-e4f13fdd596d-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030592/Project5/raasrendering-82a2ec9c-2157-4574-a39d-940208b7a309-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030592/Project5/raasrendering-74861d81-5805-4b25-a62d-6c0dbd3a5212-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030602/Project6/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030602/Project6/title.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030613/Project7/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030613/Project7/raasrendering-c6c2ef9e-d48f-44df-b58f-c1103397c7ec-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030612/Project7/raasrendering-b7f48514-1906-4c92-93c0-dfebb7d7ff85-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030612/Project7/raasrendering-2ff2fbb8-8639-400e-8c1d-32ae676a3ada-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030611/Project7/raasrendering-1aea40f5-6ce5-4413-9a49-312e4be480c1-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030611/Project7/raasrendering-6bd9749d-8a12-4198-88f6-09d2f5c76005-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030621/Project8/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030621/Project8/project1-rvt-2016-dec-24-09-09-32am-000-3r1-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030620/Project8/15740987-1719504531712441-7808410433623113972-n-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030620/Project8/project1-rvt-2016-dec-24-08-55-48am-000-1275-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030620/Project8/ef-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030620/Project8/15749474-1852094131703237-2010105698-n-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030620/Project8/15780906-1719504668379094-2879403549942173478-n-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/image018-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/image004-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/image001-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/image003-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030631/Project9/image005-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030641/Project10/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030645/Project10/raasrendering-d11d11cf-a3ef-4fc5-a97f-452bef144f83-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030643/Project10/raasrendering-85b7649e-1721-425b-8d86-bf1796524d83-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030641/Project10/raasrendering-a427a981-5675-4a9f-bc8b-bf6ca3019380-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030641/Project10/raasrendering-6d55309d-cc81-4c5f-8eea-b140eb377b59-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030651/Project11/title.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030657/Project11/untitled-76-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030651/Project11/final-engine-34-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030651/Project11/final-engine-22-3500-3500.jpg",
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030651/Project11/final-engine-30-3500-3500.jpg"
  ],
  [
    "http://res.cloudinary.com/secondcommand/image/upload/v1529030670/Project12/title.jpg"
  ]

]






# Project.create([{}])

# project key is the first name of the user
# author ID is needed next
user_data = {
  Sholom: {
  first_name: "Sholom",
  last_name: "Langsam",
  email: "fake1@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Osama: {
  first_name: "Osama",
  last_name: "Ali",
  email: "fake2@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Imo: {
  first_name: "Imo",
  last_name: "G",
  email: "fake3@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Alekesej: {
  first_name: "Alekesej",
  last_name: "Gerlinski",
  email: "fake4@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Krzysztof: {
  first_name: "Krzysztof",
  last_name: "Wodzinski",
  email: "fake5@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Jomana: {
  first_name: "Jomana",
  last_name: "Barakat",
  email: "fake6@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  John: {
  first_name: "John",
  last_name: "Smith",
  email: "fake7@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Patel: {
  first_name: "Patel",
  last_name: "Vaibhav",
  email: "fake8@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
  Nathaniel: {
  first_name: "Nathaniel",
  last_name: "Cunha",
  email: "fake9@fake.com",
  password: "wowwhatahardpasswordtoguess"
  },
}

project_data = [
  {Sholom: {
    title: "15,000 SQ. FT. MANSION- interior foyer",
    description: "This is the foyer design for the 15,000 S.F. mansion that's in my portfolio. It's designed in a more traditional style, but not completely traditional I left out all the heavy trim-work that would usually be the norm for a house of this magnitude. Also notice the coloring leans a bit more to the transitional style.",
  }},
  {Osama: {
    title: "Faculty Building, interior",
    description: "Olin art building"
  }},
  {Osama: {
  title: "Faculty Building, exterior",
  description: "Olin art building"
  }},
  {Imo: {
  title: "Brushless DC Motor",
  description: "2017/7/13 3DModel upload"
  }},
  {Alekesej: {
  title: "Prosthetic Limb",
  description: "Prosthetic limb model"
  }},
  {Sholom: {
  title: "SUMMER HOME 1 FLOOR",
  description: "Concept summer home"
  }},
  {Krzysztof: {
  title: "Hewland LD200-5",
  description: "Most popular gearbox for single-seater car, formula Ford"
  }},
  {Jomana: {
  title: "MULTI-DISCIPLINARY AND EDUCATIONAL HOSPITAL",
  description: "HASHEMITE UNIVERSITY DESIGN-5 FOURTH-YEAR ARCHITECTURE"
  }},
  {John: {
  title: "GRUMMAN F4F/FM-2 WILDCAT",
  description: "Nice to meet you. I will post what I created. Please understand that I will be explained in machine translation because I am not good at English. This model is what I wanted to make using 3D printer and CNC. Because emphasis is placed on ease of making, there are places different from the real one."
  }},
  {Sholom: {
  title: "25' x 100' Synagogue Interior/ Exterior- Design",
  description: "This is phase one for a proposed Synagogue in Brooklyn, the size of phase one's main sanctuary is 23' X 73'. In phase two we'll take down the wall without windows (facing the ark) and add an additional 25', Which will give the main sanctuary a beautiful 48' X 73'."
  }},
  {Patel: {
  title: "Custom build V12 Engine",
  description: "Finally uploaded v12 engine's full assembly with parts. total 913 parts. all parts are separately make and assemble them. render in keyshot7 pro"
  }},
  {Nathaniel: {
  title: "Lego A-Wing PTC CREO model",
  description: "Created to maintain my CAD skills. Each lego piece was modeled and assembled in CREO"
  }},
]





user_data.values.each do |user_datum|
  User.create(user_datum)
end

project_data.each_with_index do |project_datum, index|
  name = project_datum.keys[0]

  user_id = User.find_by_first_name(project_datum.keys[0].to_s).id

  creation_data = project_datum.values[0]

  new_project = Project.create(
    { user_id: user_id }.merge(project_datum.values[0])
  )


  pictures_data[index].each do |picture_url|
    Picture.create({
      img_url: picture_url,
      project_id: new_project.id
    })
  end

end