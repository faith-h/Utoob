9.times do
  comment_num = rand(1..3)
  video = Video.create(
    title = Faker::Book.title
    duration = Faker::Number.decimal(l_digits: 2) 
    genre = Faker::Book.genre 
    desc = Faker::Food.description 
    trailer = Faker::Placeholdit.image
  )
  comment_num.times do
    Comment.create(
      body = Faker::GreekPhilosophers.quote
  )
    end
  end