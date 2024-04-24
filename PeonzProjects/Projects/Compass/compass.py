# 23 -  68 NW .
# 68 - 113 West .
# 113 - 158 SW .
# 158 - 203 South .
# 203 - 248 SE . 
# 248 - 293 East .
# 293 - 338 NE .
# Others    North .

def on_forever():
    if input.compass_heading() >= 23 and input.compass_heading() < 68:
        basic.show_arrow(ArrowNames.NORTH_WEST)
    elif input.compass_heading() < 113:
        basic.show_arrow(ArrowNames.WEST)
    elif input.compass_heading() < 158:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    elif input.compass_heading() < 203:
        basic.show_arrow(ArrowNames.SOUTH)
    elif input.compass_heading() < 248:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif input.compass_heading() < 293:
        basic.show_arrow(ArrowNames.EAST)
    elif input.compass_heading() < 338:
        basic.show_arrow(ArrowNames.NORTH_EAST)
    else:
        basic.show_arrow(ArrowNames.NORTH)
basic.forever(on_forever)

# Should shown the images of every arrow.
