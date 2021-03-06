require 'rails_helper'

feature 'Manage tasks', js: true do

let(:artist) { create :artist }

#checked scenario 'add a new song, browser is loading, so think test works :)'
  scenario 'add a new song' do
    visit artist_path(artist.id)
    fill_in 'new-song-name', with: 'St. Matthew Passion'
    click_button('Add song ajax')

    sleep(1)

    expect(page).to have_content('St. Matthew Passion')
  end

#checked scenario 'delete an old song, browser is loading, so think test works.
#But need to create the Delete song feature:)
  scenario 'delete an old song' do
      visit artist_path(artist.id)
      fill_in 'new-song-name', with: 'St. Matthew Passion'
      click_button('Add song ajax')

      sleep(1)

      click_link('[Delete song via Ajax]')
      expect(page).not_to have_content('St. Matthew Passion')
    end

#Didn't test this. Need to add a 'delete all songs button first'
  scenario 'delete all songs of artist' do
      visit artist_path(artist.id)
      fill_in 'new-song-name', with: 'St. Matthew Passion'
      click_button('Add song ajax')
      fill_in 'new-song-name', with: 'Ave Maria'
      click_button('Add song ajax')

      sleep(1)

      click_link('[Delete all songs of this artist via Ajax]')
      expect(page).not_to have_content('St. Matthew Passion', 'Ave Maria')
      end

end
