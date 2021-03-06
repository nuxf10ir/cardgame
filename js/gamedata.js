var gameData = {
    questionsData: {
        1: {
            text: "Вы вступили в должность 1 декабря, чтобы понять, как обстоят дела в компании и выполнить задачу руководителя, Вы:",
            variants: [
                {
                    text: "Запросили весь комплект управленческих отчетов за три квартала",
                    answerId: 1
                },
                {
                    text: "Дали распоряжение составить промежуточную отчетность за 11 месяцев",
                    answerId: 2
                }
            ]
        },
        2: {
            text: "Отчет за 11 месяцев собрали 25 декабря. Всем сотрудникам финансовой службы приходилось чуть ли не ночевать на работе. Вы поняли &mdash; основная проблема комплект управленческой отчетности компании «Альфа» это 23 отчета и в каждом 30 показателей. Вы решили:",
            variants: [
                {
                    text: "Нанять дополнительных сотрудников, чтобы быстрей собрать годовую отчетность",
                    answerId: 1
                },
                {
                    text: "Отказались от 18 отчетов, оставшиеся 5 решили оставить без изменений",
                    answerId: 2
                },
                {
                    text: "Пересмотрели весь комплект отчетов, в итоге сократили и количество отчетов и количество показателей в них",
                    answerId: 3
                }
            ]
        },
        3: {
            text: "Вы выяснили, что сотрудники финансовой службы консолидируют данные от всех подразделений и филиалов вручную. По вашим расчетам сотрудники на это тратят от 7 до 9 дней. Чтобы собрать данные за 2 дня, Вы:",
            variants: [
                {
                    text: "обратились к разработчикам. Они доработали ERP систему и теперь программа консолидирует данные автоматически",
                    type: "wrong",
                    answerId: 1
                },
                {
                    text: "заменили сотрудников, которые собирали данные вручную, на уверенных пользователей Excel",
                    type: "wrong",
                    answerId: 2
                },
                {
                    text: "нашли подчиненного, который хорошо разбирается в Excel, и поручили ему с помощью Power Query построить базу данных и автоматизировать консилидацию отчетов.",
                    type: "right",
                    answerId: 3
                }
            ]
        },
        4: {
            text: "В январе компания «Альфа» проводит сверку с дебиторами и инвентаризацию. Чтобы освободить время в дни, когда собираете отчетность, Вы решили перенести эти задачи на",
            variants: [
                {
                    text: "декабрь",
                    answerId: 1
                },
                {
                    text: "февраль",
                    answerId: 2
                }
            ]
        },
        5: {
            text: "Вам пора определиться с точностью цифр в отчетах.",
            variants: [
                {
                    text: "Данные в годовом отчете должны быть точными &mdash; собираем все цифры",
                    type: "wrong",
                    answerId: 1
                },
                {
                    text: "Допущения в годовых отчетах приемлемы",
                    type: "right",
                    answerId: 2
                }
            ]
        },
        6: {
            text: "В первый рабочий день января из всех сотрудников, которые задействованы в подготовке годовой отчетности, к работе приступают 20–30 процентов. Остальные ждут, пока коллеги выполнят свою часть задачи. Чтобы сэкономить время, ваш заместитель советует определить, кто отвечает за первые этапы подготовки отчетности и предложить им выйти на работу в последние выходные декабря или в начале января во время праздников.",
            variants: [
                {
                    text: "Идея заманчивая, но это вариант растерять сотрудников. Они не захотят работать больше 40 часов. Вы решили отклонить предложение заместителя.",
                    type: "wrong",
                    answerId: 1
                },
                {
                    text: "Идея хорошая &mdash; попробуем. Чтобы замотивировать сотрудников стоит заплатить им премию или предложить дополнительные выходные.",
                    type: "right",
                    answerId: 2
                }
            ]
        },
        7: {
            text: "Часть расходов компании «Альфа» это фиксированные затраты. Например, услуги связи, аренда помещений и т.д. В январе вы выяснили, что пришли не все счета на постоянные расходы. Чтобы ускорить составление отчетности, Вы решили:",
            variants: [
                {
                    text: "учесть в расходах только те счета, которые пришли",
                    type: "wrong",
                    answerId: 1
                },
                {
                    text: "начислить расходы заранее",
                    type: "right",
                    answerId: 2
                }
            ]
        },
        8: {
            text: "18 января. Отчеты почти готовы, не хватает данных по части незначительных трат. По вашим прогнозам они составляю приблизительно 1 процент от всех расходов компании. Отклонение в отчетности до 5 процентов руководство считает незначительным. Вы решили :",
            variants: [
                {
                    text: "пренебречь этими расходами и не учитывать их",
                    type: "right",
                    answerId: 1
                },
                {
                    text: "дождаться последних данных, вдруг затраты окажутся больше 1 процента",
                    type: "wrong",
                    answerId: 2
                }
            ]
        }
    },
    answersData: {
        1: {
            1: {
                text: "Вы выяснили, что компания «Альфа» не то чтобы мега прибыльна, но и не убыточная, есть ряд проблем. Что вы еще узнали о компании, так это то, что комплект управленческих отчетов за три квартала финансовая служба собрала только в первой декаде декабря. Четкого ответа на вопрос, &mdash; «В чем заминка? Почему так долго?», вы не получили, а значит с этими же проблемами вы столкнетесь в январе и сможете собрать годовой отчет только к 1 марта (((( Вы пропускаете год!",
                type: "wrong",
                buttonText: "Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "В первой декаде декабря вы узнали, какие данные финансовая служба получает с опозданием, и у вас еще есть время, чтобы принять меры и оперативно получить показатели декабря.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 2
            }
        },
        2: {
            1: {
                text: "Две недели отдел кадров искал подходящих людей. Пока они входили в курс дела прошло еще три недели. Годовую отчетность с новыми людьми вы конечно собрали раньше чем обычно &mdash; 20 февраля, но все равно не уложились в сроки.",
                type: "wrong",
                buttonText: "Вы можете лучше! Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "Годовую отчетность вы собрали вовремя &mdash; к 20 января! Но совет директоров остался недоволен &mdash; информации слишком мало.",
                type: "wrong",
                buttonText: "Вы можете лучше! Попробовать еще раз",
                nextQuestion: 1
            },
            3: {
                text: "Это решение позволило Вам сократить сроки подготовки отчетности, но этого пока не достаточно. Чтобы успеть к 20 января, Вам необходимо принять еще несколько верных управленческих решений.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 3
            }
        },
        3: {
            1: {
                text: "Разработчики доработали ERP систему и теперь программа консолидирует данные автоматически. Но на это ушло чуть больше месяца и собрать отчетность к 20 января вам не удалось!",
                type: "wrong",
                buttonText: "Вы уже ближе к своей цели! Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "Найти новых сотрудников в канун новогодних праздников вам не удалось ((((( Отчетность к 20 января вы не собрали!",
                type: "wrong",
                buttonText: "Вы уже ближе к своей цели! Попробовать еще раз",
                nextQuestion: 1
            },
            3: {
                text: "Это решение позволило Вам сократить сроки подготовки отчетности, Вы на верном пути.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 4
            }
        },
        4: {
            1: {
                text: "Круто! Вам удалось сократить срок подготовки отчетов еще на 5 дней.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 5
            },
            2: {
                text: "Вам удалось сократить срок подготовки отчетов еще на 5 дней, но часть цифр в нем не корректны &mdash; руководство не довольно, но не все так плохо!",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 5
            }
        },
        5: {
            1: {
                text: "Точность &mdash; вежливость королей, но собирать все цифры финансовая служба будет до конца I квартала, и сформировать отчетность к 20 января Вы не успеете!",
                type: "wrong",
                buttonText: "Вы можете лучше! Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "Классный результат! Поговорите с руководством и уточните, насколько точные данные они ждут. Устроит ли их отклонение показателей в годовой отчетности в пределах 2&ndash;3 процентов?",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 6
            }
        },
        6: {
            1: {
                text: "Наверное, надо было согласиться. Если сроки горят &mdash; все средства хороши, стоит потратить дополнительные деньги и решить задачу в срок.",
                type: "wrong",
                buttonText: "Вы можете лучше! Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "Правильный ход. Вы сэкономили еще 5 дней. В экстренные ситуациях так делают многие компании.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 7
            }
        },
        7: {
            1: {
                text: "Вы занизили расходы компании, предварительная прибыль компании отличалась от итогового показателя на 12 процентов.",
                type: "wrong",
                buttonText: "Вы можете лучше! Попробовать еще раз",
                nextQuestion: 1
            },
            2: {
                text: "Супер! Вы практически составили годовые отчеты. Остался еще один вопрос, от решения которого тоже зависят сроки.",
                type: "right",
                buttonText: "Идем дальше",
                nextQuestion: 8
            }
        },
        8: {

            1: {
                text: "Круто! Вы составили отчет вовремя, и он устроил совет директоров. Грандиозные решения! Вам по плечу любые задачи!",
                type: "right",
                buttonText: "Пройти заново",
                nextQuestion: 1
            },
            2: {
                text: "К сожалению, пока Вы ждали все данные, наступило 21 января. Но опоздание в один день не так критично! Поздравляем! Вы молодец! Невероятный проект!",
                type: "right",
                buttonText: "Пройти заново",
                nextQuestion: 1
            }
        }
    }
};