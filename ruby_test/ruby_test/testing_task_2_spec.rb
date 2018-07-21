require('minitest/autorun')
require('minitest/rg')

require_relative('testing_task_2.rb')
require_relative('card.rb')


class TestAlbum < MiniTest::Test

  def setup()

    #instances of Card created
    @card1 = Card.new("diamonds", 1)
    @card2 = Card.new("diamonds", 10)
    @cardGame1 = CardGame.new()

  end

  def test_check_for_ace_true()
    #result = CardGame.check_for_ace(@card1) #if using .self on the method in the CardGame class
    result = @cardGame1.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_check_for_ace_false()
    #result = CardGame.check_for_ace(@card1) #if using .self on the method in the CardGame class
    result = @cardGame1.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_highest_card()
    #result = CardGame.check_for_ace(@card1) #if using .self on the method in the CardGame class
    #result = @cardGame1.highest_card(@card1, @card2)
    result = @cardGame1.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_highest_card__equal
    result = @cardGame1.highest_card(@card1, @card1)
    assert_equal("equal", result)
  end

  def test_cards_total
    cards = [@card1, @card2]
    result = @cardGame1.cards_total(cards)
    assert_equal("You have a total of 11", result)
  end

end