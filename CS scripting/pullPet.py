'''
This script only accesses publicly available information.  

The following items are temporarily stored: 
Owner -> specifically looking for a link/if the owner <td> tag exists.  Used to check if a pet is active or not.

The following items are stored in the outputted csv file:
Pet ID -> this script only stores pet IDs that belong to owners
Adopted Date 
Rarity
Pet Image -> checks if the pet image matches an existing pet image or not.  If it does, assumes it doesn't have any items and stores the pet.  if it does have images, do not include the pet in the dataset.

At no point does this script store any personal information about a user or their pet (as in names/items said pet is wearing).  The only link it accesses it the pet page itself.


'''

print("Input Range of pets to search (currently starts at 1):")
petRange = input()

#for getting it running
import os
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options

#for using it
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By

user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:158.0) Gecko/20100101 Firefox/158.0'

firefox_driver = os.path.join(os.getcwd(), 'driver', 'geckodriver.exe')
firefox_options = Options()
#needs to know where firefox is so it can actually open it lmao
firefox_options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'

firefox_service = Service(firefox_driver)
firefox_options.set_preference('general.useragent.override', user_agent)

#launch browser
browser = webdriver.Firefox(service=firefox_service, options=firefox_options)
browser.get('https://www.chickensmoothie.com/viewpet.php?id=529230959')

output = [
    ["petID", "isActive?", "adopted", "rarity"]
]


petID = "1"

while petID != petRange:
    try:
        petOwner = browser.find_element(By.NAME, "ff")
    except NoSuchElementException:
        print("Pet not active!  Skipping...")

    petID += 1


'''
load page
has owner?
    if has owner
        store pet image (later step)
        store pet ID
        store adopted date
        store rarity
    else
        continue
clear all storage
petID++
'''