FactoryGirl.define do
  factory :artist do
    name        { Faker::Name.name}
    image       Rack::Test::UploadedFile.new(File.open(File.join(Rails.root,
                '/spec/fixtures/myfile.jpg')))
  end
end
