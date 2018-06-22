### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

#no snake case for function name
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

#def spelt wrong "dif"
  dif highest_card(card1 card2)#there should be a "," between the parameters 
  if card1.value > card2.value
    return card.name #should return "card1"
  else
    card2 #should return "card2"
  end
end
end#extra end added

def self.cards_total(cards)
  total  #total should be set to 0 to start
  for card in cards
    total += card.value#should be an end  before the return
    return "You have a total of" + total
  end
end


```
