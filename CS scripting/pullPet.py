'''
This script only accesses publicly available information.  

The following items are temporarily accessed: 
Owner -> looks for an owner name.  if name exists, it marks the pet as active.  if no owner name, then the pet is marked as inactive

The following items are stored in the outputted csv file:
Pet ID -> this script only stores pet IDs that belong to owners
Adopted Date 
Rarity
Pet Image -> checks if the pet image matches an existing pet image or not.  If it does, assumes it doesn't have any items and stores the pet.  if it does have images, do not include the pet in the dataset.

At no point does this script store any personal information about a user or their pet (as in names/items said pet is wearing).  The only link it accesses it the pet page itself.


'''

# functions -----------------------------------------------------------------------

#force wait for page to load (slow down to not be rude)
#waits for pet details to load and exits if timeout error
def loadPage(URL):   
    browser.get(URL) 
    try: 
        #spine = where all the pet deets are
        loadPetCheck = WebDriverWait(browser, 10).until(EC.visibility_of_element_located((By.CLASS_NAME, "spine")))
    except TimeoutError as t:
        try: 
            isActiveLoadCheck = WebDriverWait(browser, 10).until(EC.presence_of_all_elements_located((By.XPATH, "//p[contains(text(), 'Sorry, that pet could not be found.')]")))
        except:
            print("Took to long to load page...sorgey.  Abort mission!", t)
            browser.quit()
            quit()      

#TODO: fancy this up??? this looks,, sloppy :')
    if isActiveLoadCheck:
        print("There's no pet here!  Skipping...")
        return "skip"
    if isActiveLoadCheck:
        print("Found a pet!  Gathering info...")
        return "pass"
    
    # #check if pet exist first         
    # try:
    #     #spine = where all the pet deets are
    #     elem = WebDriverWait(browser, 20).until(EC.visibility_of_element_located((By.CLASS_NAME, "spine")))
    # except TimeoutError:
    #     if browser.find_element("xpath", "//td[contains(text(), 'Sorry, that pet could not be found. Maybe you can adopt a new pet instead :).')]"):
    #         print("There's no pet here!  Skipping...")
    #         return "skip"
    #     else:
    #         print("Took to long to load page...sorgey.  Abort mission!")
    #         browser.quit()
    #         quit()
    # return "pass"
    

# run this after page load - fetches the elements to record on the page and stores it
def fetchData():
    recordedID = browser.find_element("xpath", "//td[contains(text(), 'Pet ID')]/following-sibling::td").text
    #dont store!!!  looks to see if there's an owner listed.  if no owner, its offsite and shouldn't count
    if browser.find_element("xpath", "//td[contains(text(), 'Owner')]/following-sibling::td").text != "":
        isActiveStatus = "True"
    else:
        isActiveStatus = "False"
    adoptDate = browser.find_element("xpath", "//td[contains(text(), 'Adopted')]/following-sibling::td").text
    rarity = browser.find_element(By.CLASS_NAME, "rarity-bar").get_attribute("alt")
    petData = [recordedID, isActiveStatus, adoptDate, rarity]
    output.append(petData)




#print("Input Range of pets to search (currently starts at 1):")
#petRange = input()

#for getting it running
import os
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options

#for using it
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:158.0) Gecko/20100101 Firefox/158.0'

firefox_driver = os.path.join(os.getcwd(), 'driver', 'geckodriver.exe')
firefox_options = Options()
firefox_options.add_argument("--headless=new") #new way of adding headless mode (prevents visible window load)

#needs to know where firefox is so it can actually open it lmao
firefox_options.binary_location = r'C:\Program Files\Mozilla Firefox\firefox.exe'

firefox_service = Service(firefox_driver)
firefox_options.set_preference('general.useragent.override', user_agent)


#launch browser
browser = webdriver.Firefox(service=firefox_service, options=firefox_options)


#getting user input for flexibility
# while True:
#     try:
#         range = int(input("Enter the range of pets you wish to search: "))
#         break
#     except ValueError:
#         print("You didn't enter a number!")

# while True:
#     try:
#         startID = int(input("Enter the starting pet ID: "))
#         break
#     except ValueError:
#         print("You didn't enter a number!")


url = "https://www.chickensmoothie.com/viewpet.php?id=3" # debug
#petID = "529230959" #test using my own #debug
output = [["petID", "isActive?", "adopted", "rarity"]]

# url = "https://www.chickensmoothie.com/viewpet.php?id=" + str(startID)

# current = 0
# while current < range:
#     loadPage(url)
#     print("Page loaded!  Gathering info...")
#     fetchData()
#     current += 1


if loadPage(url) == "skip":
    print("womp womp")
else:
    fetchData()


browser.quit() #got everything?  then quit!

print(output)

quit()

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